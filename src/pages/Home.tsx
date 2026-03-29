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

const steps = [
  { icon: '👥', title: 'Você tem Asma', desc: 'Compartilhamos a dor; sabemos o que é ter uma crise sem bombinha' },
  { icon: '🤝', title: 'Você pede ajuda', desc: 'Alguém pode estar por perto e te emprestar a bombinha; é possível usá-la sem encostar na boca!' },
  { icon: '❤️', title: 'Você pode salvar uma vida', desc: 'Empreste sua bombinha a alguém que esteja em uma crise emergencial' },
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
              Facilitamos o acesso a <span className="text-primary">bombinha de Asma</span> em casos Emergenciais
            </h1>
            <p className="mb-8 text-lg text-muted">
              Encontre a pessoa mais próxima com uma 'bombinha' em emergências.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.afilaxy.app&hl=pt_BR" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
                📱 Baixar para Android
              </a>
              <button disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-pill border-2 border-primary/75 px-6 py-3 font-semibold text-primary/75">
                🍎 Baixar para iOS (em breve disponível)
              </button>
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
            <p className="mt-2 text-muted">Comunidade como rede de cuidado</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="rounded-card bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">{s.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-secondary">{s.title}</h3>
                <p className="text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Nossos Valores</h2>
            <p className="mt-2 text-white/70">O que nos une como comunidade</p>
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
      <section id="jornada" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold text-secondary">Nossa Jornada</h2>
          <Carousel images={journeyImages} />
        </div>
      </section>

      {/* Download + Redes Sociais unificados */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-[2rem] bg-secondary bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold text-white">Baixe o App e Faça Parte</h2>
            <p className="mb-8 text-white/80">Baixe o Afilaxy e faça parte da rede onde pessoas com asma cuidam umas das outras.</p>
            <a href="https://play.google.com/store/apps/details?id=com.afilaxy.app&hl=pt_BR" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill bg-primary px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
              📱 Baixar na Google Play
            </a>
            <p className="mt-4 text-sm text-white/60">Versão Beta — Versão de testes em funcionamento básico.</p>

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
