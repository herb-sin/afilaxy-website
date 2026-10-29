import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'

import ScrollToTop from './components/ScrollToTop'

// Cada página só é baixada quando sua rota é realmente visitada — a Home, por
// exemplo, deixa de carregar o Firebase (usado só em /profissionais) de graça.
const Home = lazy(() => import('./pages/Home'))
const Profissionais = lazy(() => import('./pages/Profissionais'))
const Success = lazy(() => import('./pages/Success'))
const Privacidade = lazy(() => import('./pages/Privacidade'))
const TermosDeUso = lazy(() => import('./pages/TermosDeUso'))

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
    </div>
  )
}

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profissionais" element={<Profissionais />} />
            <Route path="/success" element={<Success />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<TermosDeUso />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

// O HTML pode chegar pré-renderizado (scripts/prerender.mjs), com conteúdo
// de verdade dentro de #root — isso é só para crawlers e para o primeiro
// pintar da tela. createRoot substitui esse conteúdo pelo React de verdade
// na sequência, de propósito: tentar reaproveitar esse HTML com hydrateRoot
// causava erros de hidratação sempre que algo client-only (ex.: largura da
// tela) differia entre o momento da pré-renderização e o do visitante real.
ReactDOM.createRoot(document.getElementById('root')!).render(app)
