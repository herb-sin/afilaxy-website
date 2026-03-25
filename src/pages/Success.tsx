import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-24">
      <div className="mx-auto max-w-md px-5 text-center">
        <div className="mb-6 text-6xl">✅</div>
        <h1 className="mb-4 text-3xl font-bold text-secondary">Assinatura Confirmada!</h1>
        <p className="mb-8 text-muted">
          Obrigado por apoiar a Afilaxy. Seu perfil profissional será ativado em breve.
          Você receberá um email com os próximos passos.
        </p>
        <Link to="/" className="inline-flex rounded-pill bg-primary px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark">
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
