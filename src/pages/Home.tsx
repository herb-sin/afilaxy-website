import Carousel from '../components/Carousel'
import TestimonialCarousel from '../components/TestimonialCarousel'

const testimonialImages = [
  { src: '/assets/photos/depoimentos/01-isagerada.png', alt: 'Isagerada no Twitter: "Eu tô muito emocionada, sério!"' },
  { src: '/assets/photos/depoimentos/02-sara-silva.png', alt: 'Sara Silva no Twitter: "Amei kkkjkkk não vou morrer mais"' },
  { src: '/assets/photos/depoimentos/03-panda-contemporaneo.png', alt: 'PANDA Contemporâneo no Twitter: "que projeto lindo! estão de parabéns pela iniciativa!"' },
  { src: '/assets/photos/depoimentos/04-aquele-cara.png', alt: 'aquele cara no Twitter: "Carai maluco olha que top!! Vou me cadastrar"' },
  { src: '/assets/photos/depoimentos/05-ganza.png', alt: 'Ganza no Twitter: "Crlll mn, nem sabia disso, vou logo começar a usar esse app."' },
  { src: '/assets/photos/depoimentos/06-a-filha-preferida.png', alt: 'A filha preferida no Twitter: "Compartilhando essa iniciativa maravilhosa, amigos ajudem a amiguinha aqui..."' },
  { src: '/assets/photos/depoimentos/07-karina.png', alt: 'KARINA no Twitter: "muito legal essa ação!! Obrigada"' },
  { src: '/assets/photos/depoimentos/08-silvia-logullo.png', alt: 'Silvia Logullo no Twitter: "HaHaHaHaHaHa!!!! Bom saber!"' },
  { src: '/assets/photos/depoimentos/09-eduarda-roussenq.png', alt: 'eduarda roussenq no Twitter: "uaaaau! Essa iniciativa é incrível!!!!! Já até me cadastrei!"' },
  { src: '/assets/photos/depoimentos/10-she-wolf.png', alt: 'she wolf no Twitter: "CARALHO ISSO EH GENIAL, UM APP PARA PESSOAS QUE TEM ASMA SE AJUDAREM NA HORA DA EMERGENCIA"' },
  { src: '/assets/photos/depoimentos/11-radarbarone.png', alt: 'RadarBarone no Twitter: "Interessantíssimo! Parabéns pela iniciativa..."' },
]

const interviews = [
  { src: '/assets/entrevista.jpeg', href: 'https://www.youtube.com/watch?v=dzgaivAfjXY', program: 'Papeando com Carlão', alt: 'Entrevista Herbert Jung Sin — Papeando com Carlão' },
  { src: '/assets/sempreSaude.jpeg', href: 'https://www.youtube.com/watch?v=HCzczHsIiS8&t=105s', program: 'Sempre Saúde', alt: 'Entrevista Herbert Jung Sin — Sempre Saúde' },
]

const journeyImages = [
  { src: '/assets/photos/Demoday Inovativa.jpeg', alt: 'Demoday Inovativa' },
  { src: '/assets/photos/GSK.jpeg', alt: 'GSK' },
  { src: '/assets/photos/Hackathon CBPMESP.jpeg', alt: 'Hackathon CBPMESP' },
  { src: '/assets/photos/I Forum Asma Grave.jpeg', alt: 'I Forum Asma Grave' },
  { src: '/assets/photos/I Fórum Gaúcho Inspire Sonhos.jpeg', alt: 'I Fórum Gaúcho Inspire Sonhos' },
  { src: '/assets/photos/Stand CPBR14.jpeg', alt: 'Stand CPBR14' },
  { src: '/assets/photos/Pasted image.png', alt: 'Afilaxy' },
  { src: '/assets/photos/PythonBR.jpeg', alt: 'PythonBR' },
]

const emergencySteps = [
  { icon: '👥', title: 'Você tem Asma', desc: 'Compartilhamos a experiência. Sabemos o que é não ter apoio em um momento difícil.' },
  { icon: '🤝', title: 'Você pede ajuda', desc: 'Ative a rede de apoio e conecte-se a alguém próximo que possa ajudar a localizar um inalador.' },
  { icon: '❤️', title: 'Você pode ajudar', desc: 'Esteja disponível para apoiar alguém da comunidade em um momento de necessidade.' },
]

const techSources = [
  { icon: '🌤️', title: 'Dados Ambientais', desc: 'Temperatura, umidade, índice UV e vento via OpenMeteo.' },
  { icon: '💨', title: 'Qualidade do Ar', desc: 'AQI e PM2.5 por geolocalização via WAQI.' },
  { icon: '📋', title: 'Check-ins de Bem-Estar', desc: 'Respostas diárias a três perguntas objetivas sobre como você está se sentindo, nos períodos matinal e noturno.' },
  { icon: '🌿', title: 'Sazonalidade Brasileira', desc: 'Temporadas de pólen e períodos de clima seco típicos do Brasil.' },
]

const faqs = [
  {
    q: 'O Afilaxy faz diagnóstico médico?',
    a: 'Não. O Afilaxy é uma ferramenta de apoio comunitário e monitoramento de bem-estar. O Índice de Bem-Estar e Risco é calculado por um algoritmo heurístico — não realiza diagnósticos, não prescreve medicamentos e não substitui a consulta com um profissional de saúde habilitado. Em situações de risco à vida, acione imediatamente o SAMU (192) ou o Corpo de Bombeiros (193).',
  },
  {
    q: 'Como o Afilaxy protege meus dados pessoais?',
    a: 'Todos os dados pessoais são tratados com rigor, em conformidade com a Lei Geral de Proteção de Dados (LGPD). Consulte nossa Política de Privacidade para mais detalhes.',
    link: { href: '/privacidade', label: 'Ver Política de Privacidade' },
  },
  {
    q: 'Quais são os Termos de Uso da plataforma?',
    a: 'Os Termos Gerais e Condições de Uso regulam o relacionamento entre a AFILAXY e os Usuários, cobrindo cadastro, Perfil Médico, Índice de Bem-Estar, emergência P2P, direitos do titular (LGPD) e limitações de responsabilidade.',
    link: { href: '/termos', label: 'Ler Termos de Uso' },
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-12 pt-24 md:bg-secondary md:pb-20 md:pt-40">

        {/* Painel branco com curva — apenas desktop */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="hero-panel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#f0fdfa" />
              </linearGradient>
            </defs>
            <path d="M0,0 L54,0 Q70,50 54,100 L0,100 Z" fill="url(#hero-panel)" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[1fr_1.5fr] md:gap-10">

          {/* Texto */}
          <div className="relative z-10">
            <img src="/assets/afilaxy_master_2025logo.svg" alt="Afilaxy" className="mb-4 h-20 md:h-28" />
            <span className="mb-3 inline-block rounded-pill bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Versão Beta</span>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-secondary md:text-5xl">
              A rede social de <span className="text-primary">quem tem Asma</span>
            </h1>
            <p className="mb-8 text-base text-muted md:text-lg">
              Busque apoio quando precisar e acompanhe seu bem-estar diário com base em dados ambientais e check-ins personalizados.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.afilaxy.app&hl=pt_BR" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
                📱 Baixar para Android
              </a>
              <a href="https://testflight.apple.com/join/WHuhbecE" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-pill border-2 border-primary px-6 py-3 font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-white">
                🍎 Testar no iOS (TestFlight)
              </a>
            </div>
          </div>

          {/* Imagem — Entrevistas */}
          <div className="relative z-10">
            <div className="absolute -inset-6 rounded-3xl bg-amber-400/20 blur-3xl" />
            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
              {interviews.map((v, i) => (
                <a key={i} href={v.href} target="_blank" rel="noopener noreferrer" aria-label={`Assistir ${v.alt} no YouTube`} className="group block">
                  <div className="aspect-[1339/800] overflow-hidden rounded-card shadow-xl">
                    <img src={v.src} alt={v.alt} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03] cursor-pointer" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary">Como Funciona</h2>
            <p className="mt-2 text-muted">Rede de Apoio</p>
          </div>

          {/* Bloco: Rede de Emergência */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {emergencySteps.map((s, i) => (
              <div key={i} className="rounded-card bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">{s.icon}</div>
                <h4 className="mb-2 text-xl font-bold text-secondary">{s.title}</h4>
                <p className="text-muted">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Aviso regulatório inline */}
          <div className="mt-10 rounded-card border border-yellow-200 bg-yellow-50 p-5 text-center text-sm text-yellow-800">
            <p>
              ⚠️ <strong>Aviso importante:</strong> o Afilaxy é uma ferramenta de apoio comunitário e não substitui a orientação médica. O Índice de Bem-Estar e Risco é uma pontuação informativa para orientar o dia a dia — não um diagnóstico.
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologia */}
      <section id="tecnologia" className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Análise Contextual em Tempo Real</h2>
            <p className="mt-2 text-white/70">Múltiplas fontes de dados integradas para o seu contexto</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techSources.map((t, i) => (
              <div key={i} className="rounded-card bg-white/10 p-6 text-center backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/20">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl">{t.icon}</div>
                <h4 className="mb-2 font-bold text-white">{t.title}</h4>
                <p className="text-sm text-white/70">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-card bg-white/10 p-8 text-center backdrop-blur-sm">
            <p className="text-white/90 leading-relaxed max-w-3xl mx-auto">
              Esses dados alimentam nosso <strong className="text-white">algoritmo heurístico</strong>, que calcula o Índice de Bem-Estar e Risco em tempo real — uma pontuação informativa para orientar o seu dia a dia.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Estamos em fase de coleta de dados rotulados para treinar nosso futuro modelo de Machine Learning supervisionado.
            </p>
            <img src="/assets/photos/ENIAC 2026.jpeg" alt="Herbert Jung Sin e Martony Demes da Silva apresentando o pôster da pesquisa no BRACIS/ENIAC 2026"
              className="mx-auto mt-6 w-full max-w-md rounded-card shadow-lg" loading="lazy" />
            <p className="mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Em outubro de 2026, apresentamos os primeiros resultados desse modelo no <strong className="text-white">BRACIS/ENIAC 2026</strong>, em parceria com a UFPI: testamos 4 algoritmos de Machine Learning, e o melhor deles identificou risco de crise com 91,3% de precisão (AUC), usando justamente dados que o Afilaxy já coleta hoje, como os acionamentos do botão de emergência. É uma prova de conceito sobre dados sintéticos — o próximo passo é validar o modelo com dados reais dos usuários.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="/assets/ENIAC 2026 - Artigo.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/25">
                📄 Ler o artigo (PDF)
              </a>
              <a href="/assets/ENIAC 2026 - Poster.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/25">
                🖼️ Ver o pôster (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section id="jornada" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold text-secondary">Nossa Jornada</h2>
          <Carousel images={journeyImages} />
        </div>
      </section>

      {/* FAQ Regulatório */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-secondary">Perguntas Frequentes</h2>
            <p className="mt-2 text-muted">Transparência sobre o que o Afilaxy é — e o que não é</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-card border border-gray-100 bg-white p-6 shadow-sm">
                <h4 className="mb-3 font-bold text-secondary">{faq.q}</h4>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                {faq.link && (
                  <a href={faq.link.href} className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
                    {faq.link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary">Quem Já Conheceu</h2>
            <p className="mt-2 text-muted">Pessoas que descobriram o Afilaxy</p>
          </div>
          <TestimonialCarousel images={testimonialImages} />
        </div>
      </section>

      {/* Download + Redes Sociais unificados */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-[2rem] bg-secondary bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold text-white">Baixe o App e Faça Parte</h2>
            <p className="mb-8 text-white/80">Baixe o Afilaxy e faça parte da rede onde pessoas com asma cuidam umas das outras.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.afilaxy.app&hl=pt_BR" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-primary px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
                📱 Baixar na Google Play
              </a>
              <a href="https://testflight.apple.com/join/WHuhbecE" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10">
                🍎 Testar no iOS (TestFlight)
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">Versão Beta — disponível para Android e iOS (TestFlight).</p>

            <div className="mt-8 flex justify-center">
              <img src="/assets/photos/InovAtiva.jpg" alt="InovAtiva Brasil" className="h-64 rounded-card object-contain md:h-80" loading="lazy" />
            </div>

            {/* Redes sociais */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                { href: 'https://www.instagram.com/aflxy/', icon: 'fab fa-instagram' },
                { href: 'https://www.threads.com/@aflxy', icon: 'fab fa-threads' },
                { href: 'https://www.x.com/afilaxy', icon: 'fab fa-twitter' },
                { href: 'https://www.linkedin.com/company/afilaxy/', icon: 'fab fa-linkedin' },
                { href: 'https://www.facebook.com/Afilaxy', icon: 'fab fa-facebook' },
                { href: 'https://wa.me/5511970657225', icon: 'fab fa-whatsapp' },
                { href: 'https://www.youtube.com/@afilaxy', icon: 'fab fa-youtube' },
                { href: 'https://github.com/herb-sin/afilaxy-kmm', icon: 'fab fa-github' },
              ].map((s) => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:-translate-y-1 hover:bg-primary hover:shadow-lg">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
