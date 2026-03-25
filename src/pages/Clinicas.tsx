import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlanCard from '../components/PlanCard'
import { saveLead } from '../firebase'

type Period = 'quarterly' | 'semiannual' | 'annual'

const tiers = [
  {
    name: 'Básico',
    highlight: 'Presença garantida',
    monthlyEquiv: { quarterly: 799, semiannual: 719, annual: 639 },
    features: [
      'Perfil da clínica no app',
      'Banner na região de atuação',
      'Link para agendamento',
      'Contato direto via WhatsApp',
      'Apoie a saúde pública',
    ],
  },
  {
    name: 'Pro',
    highlight: 'Mais popular entre clínicas',
    monthlyEquiv: { quarterly: 1199, semiannual: 1079, annual: 959 },
    features: [
      'Tudo do Básico',
      'Artigos patrocinados ilimitados',
      'Analytics avançado de visualizações',
      'Badge Pro ✨',
      'Prioridade no suporte',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    highlight: 'Máxima exposição regional',
    monthlyEquiv: { quarterly: 1999, semiannual: 1799, annual: 1599 },
    features: [
      'Tudo do Pro',
      'Banner premium na região',
      'Relatórios de impacto social',
      'Webinars exclusivos',
      'Suporte dedicado',
      'Múltiplos profissionais vinculados',
    ],
  },
]

const periodLabels: Record<Period, string> = { quarterly: 'Trimestral', semiannual: 'Semestral', annual: 'Anual' }
const periodMonths: Record<Period, number> = { quarterly: 3, semiannual: 6, annual: 12 }
const discountLabel: Record<Period, string | null> = { quarterly: null, semiannual: '10% off', annual: '20% off' }

export default function Clinicas() {
  const [period, setPeriod] = useState<Period>('quarterly')
  const [loading, setLoading] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [clinicName, setClinicName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [responsible, setResponsible] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubscribe = async (tier: typeof tiers[number]) => {
    if (!email || !clinicName || !cnpj || !responsible) {
      alert('Por favor, preencha todos os campos antes de continuar.')
      return
    }
    setLoading(tier.name)
    try {
      const planLabel = `${tier.name} (${periodLabels[period]} - R$ ${tier.monthlyEquiv[period]}/mês)`
      await saveLead({ name: `${clinicName} — ${responsible}`, email, phone, cnpj, plan: planLabel, type: 'clinica' })
      setSuccess(tier.name)
    } catch {
      alert('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(null)
    }
  }

  const formDone = success !== null

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="mb-4 text-4xl font-bold text-secondary">Planos para Clínicas</h1>
          <p className="text-lg text-muted">
            Anuncie sua clínica para pacientes com asma na sua região.
            Espaço publicitário transparente e dentro das normas.
          </p>
          <p className="mt-4 text-sm text-muted">
            É profissional autônomo? <Link to="/profissionais" className="font-semibold text-primary hover:underline">Veja o plano para médicos →</Link>
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-md px-5">
          <div className="rounded-card bg-white p-8 shadow-md">
            {formDone ? (
              <div className="text-center">
                <div className="mb-4 text-5xl">✅</div>
                <h2 className="mb-2 text-xl font-bold text-secondary">Interesse registrado!</h2>
                <p className="text-muted">Entraremos em contato em breve pelo email informado.</p>
              </div>
            ) : (
              <>
                <h2 className="mb-6 text-xl font-bold text-secondary">Dados da Clínica</h2>
                <input type="text" placeholder="Nome da clínica" value={clinicName} onChange={(e) => setClinicName(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="text" placeholder="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="text" placeholder="Responsável" value={responsible} onChange={(e) => setResponsible(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="email" placeholder="Email corporativo" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
                <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-8 text-center text-3xl font-bold text-secondary">Escolha seu Plano</h2>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {(['quarterly', 'semiannual', 'annual'] as Period[]).map((p) => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`flex items-center gap-2 rounded-pill px-6 py-2.5 text-sm font-medium transition ${period === p ? 'bg-primary text-white' : 'border-2 border-gray-200 text-muted hover:border-primary'}`}>
                {periodLabels[p]}
                {discountLabel[p] && (
                  <span className={`rounded-pill px-2 py-0.5 text-xs font-bold ${period === p ? 'bg-white/25 text-white' : 'bg-green-50 text-green-700'}`}>
                    {discountLabel[p]}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <PlanCard
                key={tier.name}
                name={tier.name}
                highlight={tier.highlight}
                price={tier.monthlyEquiv[period]}
                totalMonths={periodMonths[period]}
                features={[...tier.features]}
                popular={tier.popular}
                loading={loading === tier.name}
                success={success === tier.name}
                onSubscribe={() => handleSubscribe(tier)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold text-secondary">Por que Anunciar?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '📍', title: 'Alcance Regional', desc: 'Sua clínica visível para pacientes com asma na sua região' },
              { icon: '📝', title: 'Conteúdo Patrocinado', desc: 'Publique artigos educativos com a marca da clínica' },
              { icon: '📊', title: 'Relatórios', desc: 'Acompanhe impressões, cliques e contatos gerados' },
              { icon: '🏥', title: 'Múltiplos Profissionais', desc: 'Vincule toda a equipe médica em um único plano' },
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
