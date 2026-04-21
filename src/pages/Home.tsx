import Carousel from '../components/Carousel'

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
  { icon: '👥', title: 'Você tem Asma', desc: 'Compartilhamos a dor; sabemos o que é ter uma crise sem bombinha' },
  { icon: '🤝', title: 'Você pede ajuda', desc: 'Alguém pode estar por perto e te emprestar a bombinha; é possível usá-la sem encostar na boca!' },
  { icon: '❤️', title: 'Você pode salvar uma vida', desc: 'Empreste sua bombinha a alguém que esteja em uma crise emergencial' },
]

const riskSteps = [
  { icon: '🌡️', title: 'Cruzamento de Dados', desc: 'O app cruza dados do clima local, qualidade do ar (AQI/PM2.5), umidade e sazonalidade com o seu histórico de crises.' },
  { icon: '📊', title: 'Previsão Personalizada', desc: 'Você recebe um alerta diário com o risco de crise: Baixa · Moderada · Alta · Muito Alta.' },
  { icon: '💡', title: 'Recomendações Práticas', desc: '"Evite atividades ao ar livre hoje" ou "Qualidade do ar ruim — mantenha seu broncodilatador de resgate próximo."' },
]

const techSources = [
  { icon: '🌤️', title: 'Dados Ambientais', desc: 'Temperatura, umidade, índice UV e vento via OpenMeteo.' },
  { icon: '💨', title: 'Qualidade do Ar', desc: 'AQI e PM2.5 por geolocalização via WAQI.' },
  { icon: '📋', title: 'Histórico Clínico', desc: 'Frequência e gravidade de crises registradas pelo próprio paciente.' },
  { icon: '🌿', title: 'Sazonalidade Brasileira', desc: 'Temporadas de pólen e períodos de clima seco típicos do Brasil.' },
]

const faqs = [
  {
    q: 'O Afilaxy faz diagnóstico médico?',
    a: 'Não. O Afilaxy é um sistema de suporte à decisão baseado em evidências epidemiológicas e ambientais. Não realiza diagnósticos, não prescreve medicamentos e não substitui a consulta com um profissional de saúde habilitado. Os alertas de risco são orientações preventivas para auxiliar pacientes a tomar decisões informadas sobre seu dia a dia.',
  },
  {
    q: 'Meus dados de saúde são protegidos?',
    a: 'Sim. Todos os dados pessoais e de saúde são tratados com rigor, em conformidade com a Lei Geral de Proteção de Dados (LGPD). Consulte nossa Política de Privacidade para mais detalhes.',
    link: { href: '/privacidade', label: 'Ver Política de Privacidade' },
  },
]

const values = [
  { icon: '🤝', title: 'Empatia', desc: 'Entendemos o que é uma crise de asma. Por isso, nos ajudamos.' },
  { icon: '🔄', title: 'Reciprocidade', desc: 'Somos uma comunidade de apoio mútuo e cuidado compartilhado.' },
  { icon: '💛', title: 'Solidariedade', desc: 'O cuidado é o pilar da civilidade.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 pb-20 pt-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <img src="/assets/afilaxy_master_2025logo.svg" alt="Afilaxy" className="mb-4 h-28" />
            <span className="mb-3 inline-block rounded-pill bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Versão Beta</span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-secondary md:text-5xl">
              Rede de apoio e <span className="text-primary">precisão de dados</span> contra a Asma
            </h1>
            <p className="mb-8 text-lg text-muted">
              Busque ajuda e conte com modelos de dados que preveem riscos antes dos sintomas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.afilaxy.app&hl=pt_BR" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
                📱 Baixar para Android
              </a>
              <a href="https://testflight.apple.com/join/WHuhbecE" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border-2 border-primary px-6 py-3 font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-white">
                🍎 Testar no iOS (TestFlight)
              </a>
            </div>
          </div>
          <div>
            <img src="/assets/hero_image.png" alt="Aplicativo Afilaxy" className="w-full rounded-card shadow-xl transition hover:scale-[1.02]" />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary">Como Funciona</h2>
            <p className="mt-2 text-muted">Rede de Apoio e Inteligência de Dados</p>
          </div>

          {/* Bloco: Rede de Emergência */}
          <h3 className="mb-8 text-center text-xl font-bold text-secondary">Rede de Apoio</h3>
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {emergencySteps.map((s, i) => (
              <div key={i} className="rounded-card bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">{s.icon}</div>
                <h4 className="mb-2 text-xl font-bold text-secondary">{s.title}</h4>
                <p className="text-muted">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bloco: Previsão de Risco */}
          <h3 className="mb-8 text-center text-xl font-bold text-secondary">Previsão de Risco</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {riskSteps.map((s, i) => (
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
              ⚠️ <strong>Aviso importante:</strong> o Afilaxy é um sistema de apoio à decisão e não substitui a orientação médica. Os alertas de risco são orientações preventivas para auxiliar pacientes a tomar decisões informadas sobre seu dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologia */}
      <section id="tecnologia" className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Análise Preditiva Baseada em Evidências</h2>
            <p className="mt-2 text-white/70">Múltiplas fontes de dados integradas em tempo real</p>
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
              Esses dados alimentam nosso <strong className="text-white">motor de regras clínicas baseado em evidências epidemiológicas</strong>, que calcula o score de risco de exacerbação asmática em tempo real.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Estamos em fase de coleta de dados rotulados para treinar nosso futuro modelo de Machine Learning supervisionado.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary">Nossos Valores</h2>
            <p className="mt-2 text-muted">O que nos une como comunidade</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="rounded-card bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">{v.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-secondary">{v.title}</h3>
                <p className="text-muted">{v.desc}</p>
              </div>
            ))}
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
              <img src="/assets/photos/InovAtiva.png" alt="InovAtiva Brasil" className="h-64 rounded-card object-contain md:h-80" />
            </div>

            {/* Redes sociais */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                { href: 'https://www.instagram.com/aflxy/', icon: 'fab fa-instagram' },
                { href: 'https://www.x.com/afilaxy', icon: 'fab fa-twitter' },
                { href: 'https://www.linkedin.com/company/afilaxy/', icon: 'fab fa-linkedin' },
                { href: 'https://www.facebook.com/Afilaxy', icon: 'fab fa-facebook' },
                { href: 'https://wa.me/5511970657225', icon: 'fab fa-whatsapp' },
                { href: 'https://github.com/herb-sin/afilaxy', icon: 'fab fa-github' },
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
