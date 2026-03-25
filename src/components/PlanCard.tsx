interface Props {
  name: string
  highlight: string
  price: number
  totalMonths: number
  features: string[]
  popular?: boolean
  loading: boolean
  success: boolean
  onSubscribe: () => void
}

export default function PlanCard({ name, highlight, price, totalMonths, features, popular, loading, success, onSubscribe }: Props) {
  const total = price * totalMonths

  return (
    <div className={`relative rounded-card border-2 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl ${popular ? 'border-primary shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-pill bg-primary px-5 py-1 text-sm font-semibold text-white">
          Mais Popular
        </span>
      )}
      <h3 className="mb-1 text-2xl font-bold text-secondary">{name}</h3>
      <p className="mb-4 text-sm text-muted">{highlight}</p>
      <div className="mb-1">
        <span className="align-top text-lg text-muted">R$</span>
        <span className="text-5xl font-bold text-secondary">{price}</span>
        <span className="text-lg text-muted">/mês</span>
      </div>
      <p className="mb-6 text-sm text-muted">Total: R$ {total} por {totalMonths} meses</p>
      <ul className="mb-8 space-y-3 text-left text-sm text-muted">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">✓</span>{f}
          </li>
        ))}
      </ul>
      <button onClick={onSubscribe} disabled={loading || success}
        className={`w-full rounded-pill py-3 font-semibold transition hover:-translate-y-0.5 disabled:opacity-60 ${popular ? 'bg-primary text-white shadow-md hover:bg-primary-dark' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
        {loading ? 'Enviando...' : success ? 'Interesse Registrado ✓' : 'Tenho Interesse'}
      </button>
    </div>
  )
}
