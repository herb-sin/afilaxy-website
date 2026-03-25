import { useState } from 'react'
import { Link } from 'react-router-dom'
import { saveLead } from '../firebase'

const features = [
  'Apoio à comunidade Afilaxy',
  'Perfil completo no app (foto, bio, especialidades, link para agendamento)',
  'Badge "Verificado pelo CFM" via consulta CRM',
  'Analytics de visualizações do perfil',
  '2 artigos educativos/mês (identificados como conteúdo patrocinado)',
  'Contato direto via WhatsApp',
]

export default function Profissionais() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [crm, setCrm] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!name || !email || !crm) {
      alert('Por favor, preencha todos os campos.')
      return
    }
    setLoading(true)
    try {
      await saveLead({ name, email, crm, phone, plan: 'Afilaxy M.D.', type: 'medico' })
      setSuccess(true)
    } catch {
      alert('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="mb-4 text-4xl font-bold text-secondary">Portal para Profissionais de Saúde</h1>
          <p className="text-lg text-muted">
            Ganhe visibilidade orgânica e conecte-se com pacientes que precisam de você.
            Apoie uma iniciativa que democratiza o acesso à saúde respiratória no Brasil.
          </p>
          <p className="mt-4 text-sm text-muted">
            Representa uma clínica? <Link to="/clinicas" className="font-semibold text-primary hover:underline">Veja os planos para PJ →</Link>
          </p>
        </div>
      </section>

      {/* Transparência */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-sm text-muted">
            🏥 O ranking de profissionais no app é sempre por <strong className="text-secondary">proximidade geográfica + especialidade</strong> — nunca por assinatura.
            Respeitamos as normas do CFM e garantimos liberdade de escolha ao paciente.
          </p>
        </div>
      </section>

      {/* Formulário + Plano */}
      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2">
          {/* Formulário */}
          <div className="rounded-card bg-white p-8 shadow-md">
            {success ? (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <div className="mb-4 text-5xl">✅</div>
                  <h2 className="mb-2 text-xl font-bold text-secondary">Interesse registrado!</h2>
                  <p className="text-muted">Entraremos em contato em breve pelo email informado.</p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="mb-6 text-xl font-bold text-secondary">Seus Dados</h2>
                <input type="text" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="email" placeholder="Email profissional" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="text" placeholder="CRM" value={crm} onChange={(e) => setCrm(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <Link to="/profissionais/crm" className="text-sm text-primary hover:underline">
                  Verificar CRM no CFM →
                </Link>
              </>
            )}
          </div>

          {/* Plano único */}
          <div className="rounded-card border-2 border-primary bg-white p-8 shadow-lg text-center">
            <span className="mb-4 inline-block rounded-pill bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Plano Único</span>
            <h3 className="mb-1 text-2xl font-bold text-secondary">Afilaxy M.D.</h3>
            <div className="mb-2">
              <span className="align-top text-lg text-muted">R$</span>
              <span className="text-5xl font-bold text-secondary">200</span>
              <span className="text-lg text-muted">/mês</span>
            </div>
            <p className="mb-6 text-sm text-muted">Cancele quando quiser</p>
            <ul className="mb-8 space-y-3 text-left text-sm text-muted">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={handleSubmit} disabled={loading || success}
              className="w-full rounded-pill bg-primary py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60">
              {loading ? 'Enviando...' : success ? 'Interesse Registrado ✓' : 'Tenho Interesse'}
            </button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold text-secondary">Por que Assinar?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '👥', title: 'Visibilidade Orgânica', desc: 'Apareça para pacientes por proximidade e especialidade — sem ranking pago' },
              { icon: '📝', title: 'Conteúdo Educativo', desc: 'Publique artigos sobre saúde respiratória e fortaleça sua autoridade' },
              { icon: '❤️', title: 'Impacto Social', desc: 'Apoie uma iniciativa que democratiza o acesso à saúde no Brasil' },
              { icon: '📊', title: 'Analytics', desc: 'Acompanhe visualizações e contatos gerados pelo seu perfil' },
            ].map((b, i) => (
              <div key={i} className="rounded-card bg-white p-6 text-center shadow-md">
                <div className="mb-3 text-4xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-secondary">{b.title}</h3>
                <p className="text-sm text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
