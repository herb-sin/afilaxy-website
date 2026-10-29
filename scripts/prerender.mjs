// Gera HTML já renderizado para as páginas públicas do site, logo após o `vite build`.
//
// Por quê: a aplicação é uma SPA (React puro) — o dist/index.html original só tem
// um <div id="root"></div> vazio, o conteúdo só existe depois do JavaScript rodar.
// Isso faz ferramentas de SEO (e crawlers que não executam JS) verem a página como
// vazia, sem <h1> e com contagem de palavras zero.
//
// Como: sobe um servidor estático local servindo o próprio dist/ (com o mesmo
// fallback de SPA usado em produção pelo netlify.toml), abre cada rota pública num
// Chromium headless via Playwright, espera a página renderizar de verdade e grava o
// HTML final no lugar do HTML vazio. A aplicação continua se comportando como SPA
// para quem visita o site — isso só muda o que chega no primeiro HTML.
import { chromium } from 'playwright'
import { createServer } from 'node:http'
import { readFile, stat as fsStat, mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const PORT = 4173

const MIME = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.mjs': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.woff2': 'font/woff2',
}

// Mesmas rotas públicas listadas em public/sitemap.xml. /success fica de fora de
// propósito: só existe depois de um pagamento confirmado, não é página de conteúdo.
//
// Saída em arquivo .html "achatado" (ex.: profissionais.html), não em
// profissionais/index.html: o Netlify serve esse formato direto em /profissionais,
// sem redirecionamento. A pasta + index.html gera um 301 de /profissionais para
// /profissionais/, que não existe em nenhum link interno nem no sitemap.xml.
const ROUTES = [
  { path: '/', out: 'index.html' },
  { path: '/profissionais', out: 'profissionais.html' },
  { path: '/privacidade', out: 'privacidade.html' },
  { path: '/termos', out: 'termos.html' },
]

async function resolveFile(urlPath) {
  let filePath = path.join(distDir, urlPath)
  try {
    const s = await fsStat(filePath)
    if (s.isDirectory()) filePath = path.join(filePath, 'index.html')
  } catch {
    // não existe como arquivo — cai no fallback de SPA abaixo
  }
  if (!existsSync(filePath)) filePath = path.join(distDir, 'index.html')
  return filePath
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
      try {
        const filePath = await resolveFile(urlPath)
        const data = await readFile(filePath)
        const ext = path.extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(data)
      } catch {
        res.writeHead(404)
        res.end('Not found')
      }
    })
    server.listen(PORT, () => resolve(server))
  })
}

async function main() {
  if (!existsSync(distDir)) {
    console.error('[prerender] dist/ não encontrado — rode "vite build" antes deste script.')
    process.exit(1)
  }

  const server = await startServer()
  const browser = await chromium.launch()

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage()
      await page.goto(`http://localhost:${PORT}${route.path}`, { waitUntil: 'networkidle' })
      // Espera o conteúdo real aparecer antes de capturar o HTML.
      await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {})
      const html = await page.content()
      const outPath = path.join(distDir, route.out)
      await mkdir(path.dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf-8')
      console.log(`[prerender] ${route.path} -> dist/${route.out}`)
      await page.close()
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error('[prerender] erro:', err)
  process.exit(1)
})
