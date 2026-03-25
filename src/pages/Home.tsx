import { Link } from 'react-router-dom'
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

const stats = [
  { value: '20M', label: 'brasileiros com asma', source: 'GINA 2023' },
  { value: '80%', label: 'não seguem tratamento preventivo', source: '' },
  { value: '2ª', label: 'doença respiratória crônica mais comum no mundo', source: '' },
  { value: 'SUS', label: 'medicação gratuita disponível — falta adesão', source: '' },
]

const steps = [
  { icon: '👥', title: 'Você tem Asma', desc: 'Compartilhamos a mesma dor; entendemos o que é viver com asma e o que significa não ter bombinha por perto.' },
  { icon: '🤝', title: 'Você Compartilha sua Bombinha', desc: 'Quando alguém tem crise sem broncodilatador, você pode estar por perto e ajudar a salvar uma vida.' },
  { icon: '❤️', title: 'Receba Ajuda em Emergências', desc: 'Em uma crise de asma, alguém pode estar por perto com a bombinha pra te ajudar!' },
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
              Aplicativo para Crises de Asma: <span className="text-primary">Rede de Apoio</span>
            </h1>
            <p className="mb-8 text-lg text-muted">
              Pessoas com asma ajudando pessoas com asma: encontre a pessoa mais próxima com uma bombinha em emergências.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.afilaxy.app&hl=pt_BR" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
                📱 Baixar App
              </a>
              <Link to="/profissionais"
                className="inline-flex items-center gap-2 rounded-pill border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
                🩺 Sou Profissional de Saúde
              </Link>
            </div>
          </div>
          <div>
            <img src="/assets/hero_image.png" alt="Aplicativo Afilaxy" className="w-full rounded-card shadow-xl transition hover:scale-[1.02]" />
          </div>
        </div>
      </section>

      {/* Impacto em números */}
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold">Impacto em Números</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-primary-light">{s.value}</p>
                <p className="mt-2 text-white/80">{s.label}</p>
                {s.source && <p className="mt-1 text-xs text-white/50">{s.source}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary">Como Funciona</h2>
            <p className="mt-2 text-muted">Cuidado mútuo</p>
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

      {/* Para Profissionais — teaser */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary">Para Profissionais de Saúde</h2>
          <p className="mb-10 text-lg text-muted">
            Ganhe visibilidade orgânica, publique conteúdo educativo e apoie uma iniciativa que democratiza o acesso à saúde respiratória no Brasil.
          </p>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-card bg-white p-6 shadow-md">
              <div className="mb-3 text-3xl">🩺</div>
              <h3 className="text-lg font-bold text-secondary">Médicos (PF)</h3>
              <p className="mt-1 text-sm text-muted">Plano único — R$ 200/mês</p>
              <p className="mt-2 text-xs text-muted">Apoio à comunidade, perfil completo, badge CFM, artigos educativos</p>
            </div>
            <div className="rounded-card bg-white p-6 shadow-md">
              <div className="mb-3 text-3xl">🏥</div>
              <h3 className="text-lg font-bold text-secondary">Clínicas (PJ)</h3>
              <p className="mt-1 text-sm text-muted">A partir de R$ 639/mês</p>
              <p className="mt-2 text-xs text-muted">Banner regional, conteúdo patrocinado, analytics</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/profissionais" className="inline-flex items-center gap-2 rounded-pill bg-primary px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-dark">
              Sou Médico →
            </Link>
            <Link to="/clinicas" className="inline-flex items-center gap-2 rounded-pill border-2 border-primary px-8 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
              Sou Clínica →
            </Link>
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
      <section id="jornada" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold text-secondary">Nossa Jornada</h2>
          <Carousel images={journeyImages} />
          <div className="mt-10 flex justify-center">
            <img src="/assets/photos/InovAtiva.png" alt="InovAtiva Brasil" className="h-48 rounded-card object-contain shadow-md md:h-60" />
          </div>
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
