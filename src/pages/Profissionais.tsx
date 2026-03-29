import { useState } from 'react'
import { Link } from 'react-router-dom'
import { saveLead } from '../firebase'

const stats = [
  { value: '20M', label: 'brasileiros com asma', source: 'GINA 2023' },
  { value: '80%', label: 'não seguem tratamento preventivo', source: '' },
  { value: '2ª', label: 'doença respiratória crônica mais comum no mundo', source: '' },
  { value: 'SUS', label: 'medicação gratuita disponível — falta adesão', source: '' },
]

const values = [
  { icon: '📍', title: 'Alcance fora do consultório', desc: 'Apareça para pacientes fora do ambiente clínico.' },
  { icon: '📝', title: 'Autoridade de conteúdo', desc: 'Publique artigos educativos dentro do app e posicione-se como referência em saúde respiratória.' },
  { icon: '✅', title: 'Credibilidade verificada', desc: 'Badge de verificação via CRM/CFM — diferencia você de informações não confiáveis.' },
  { icon: '❤️', title: 'Impacto social', desc: 'Associe sua marca a uma iniciativa que evangeliza o acesso à saúde respiratória no SUS.' },
]

type PlanType = 'pneumologista' | 'alergologista' | 'fisioterapeuta' | 'clinica'

interface FormState {
  name: string
  email: string
  phone: string
  crm: string
  cnpj: string
  loading: boolean
  success: boolean
}

const initialForm: FormState = { name: '', email: '', phone: '', crm: '', cnpj: '', loading: false, success: false }

const plans = [
  {
    id: 'pneumologista' as PlanType,
    icon: '🫁',
    title: 'Pneumologista',
    subtitle: 'Pessoa Física',
    price: 'R$ 200/mês',
    features: [
      'Perfil completo no app (foto, bio, link de agendamento)',
      'Badge "Verificado pelo CFM"',
      '2 artigos educativos/mês',
      'Analytics de visualizações do perfil',
      'Contato direto via WhatsApp',
    ],
    crmLabel: 'CRM',
  },
  {
    id: 'alergologista' as PlanType,
    icon: '🌸',
    title: 'Alergologista',
    subtitle: 'Pessoa Física',
    price: 'R$ 200/mês',
    features: [
      'Perfil completo no app (foto, bio, link de agendamento)',
      'Badge "Verificado pelo CFM"',
      '2 artigos educativos/mês',
      'Analytics de visualizações do perfil',
      'Contato direto via WhatsApp',
    ],
    crmLabel: 'CRM',
  },
  {
    id: 'fisioterapeuta' as PlanType,
    icon: '🤲',
    title: 'Fisioterapeuta',
    subtitle: 'Pessoa Física',
    price: 'R$ 200/mês',
    features: [
      'Perfil completo no app (foto, bio, link de agendamento)',
      'Badge "Verificado pelo CREFITO"',
      '2 artigos educativos/mês',
      'Analytics de visualizações do perfil',
      'Contato direto via WhatsApp',
    ],
    crmLabel: 'CREFITO',
  },
  {
    id: 'clinica' as PlanType,
    icon: '🏥',
    title: 'Clínica',
    subtitle: 'Pessoa Jurídica',
    price: 'A partir de R$ 639/mês',
    features: [
      'Banner regional no app',
      'Perfil institucional completo',
      'Conteúdo patrocinado',
      'Analytics avançado',
      'Suporte prioritário',
    ],
    crmLabel: null,
  },
]

function PlanForm({ plan }: { plan: typeof plans[0] }) {
  const [form, setForm] = useState<FormState>(initialForm)

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email) { alert('Preencha nome e email.'); return }
    setForm(f => ({ ...f, loading: true }))
    try {
      await saveLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        crm: form.crm,
        cnpj: form.cnpj,
        plan: plan.title,
        type: plan.id === 'clinica' ? 'clinica' : 'medico',
        segment: plan.id,
      })
      setForm(f => ({ ...f, success: true }))
    } catch {
      alert('Erro ao enviar. Tente novamente.')
    } finally {
      setForm(f => ({ ...f, loading: false }))
    }
  }

  if (form.success) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 text-5xl">✅</div>
        <h3 className="mb-2 text-lg font-bold text-secondary">Interesse registrado!</h3>
        <p className="text-sm text-muted">Entraremos em contato em breve.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-3">
      <input type="text" placeholder="Nome completo" value={form.name} onChange={set('name')}
        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none" />
      <input type="email" placeholder="Email profissional" value={form.email} onChange={set('email')}
        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none" />
      <input type="tel" placeholder="Telefone" value={form.phone} onChange={set('phone')}
        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none" />
      {plan.crmLabel && (
        <>
          <input type="text" placeholder={plan.crmLabel} value={form.crm} onChange={set('crm')}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none" />
          {(plan.id === 'pneumologista' || plan.id === 'alergologista') && (
            <Link to="/profissionais/crm" className="block text-xs text-primary hover:underline">
              Verificar CRM no CFM →
            </Link>
          )}
        </>
      )}
      {plan.id === 'clinica' && (
        <input type="text" placeholder="CNPJ" value={form.cnpj} onChange={set('cnpj')}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none" />
      )}
      <button onClick={handleSubmit} disabled={form.loading}
        className="w-full rounded-pill bg-primary py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60">
        {form.loading ? 'Enviando...' : 'Tenho Interesse'}
      </button>
    </div>
  )
}

export default function Profissionais() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="mb-4 inline-block rounded-pill bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Para Profissionais de Saúde</span>
          <h1 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Alcance pacientes com Asma <span className="text-primary">fora do ambiente clínico</span>
          </h1>
          <p className="text-lg text-muted">
            Apóie a ajuda entre pacientes em momentos críticos. Se faça presente com orientação e seja visível para a comunidade
          </p>
        </div>
      </section>

      {/* Valores entregues */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-12 text-center text-3xl font-bold text-secondary">O que o Afilaxy entrega para você</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="rounded-card bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">{v.icon}</div>
                <h3 className="mb-2 font-bold text-secondary">{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto em Números */}
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

      {/* Planos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-4 text-center text-3xl font-bold text-secondary">Escolha seu perfil</h2>
          <p className="mb-12 text-center text-muted">Cancele quando quiser. Sem fidelidade.</p>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div key={plan.id} className="rounded-card border-2 border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2 text-4xl">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-secondary">{plan.title}</h3>
                <p className="mb-1 text-sm text-muted">{plan.subtitle}</p>
                <p className="mb-4 text-lg font-semibold text-primary">{plan.price}</p>
                <ul className="mb-2 space-y-2 text-sm text-muted">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <PlanForm plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="border-t bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-sm text-muted">
            🏥 O ranking de profissionais no app é sempre por <strong className="text-secondary">proximidade geográfica + especialidade</strong> — nunca por assinatura.
            Respeitamos as normas do CFM e garantimos liberdade de escolha ao paciente.
          </p>
        </div>
      </section>

    </div>
  )
}
