import { Link } from 'react-router-dom'

const socials = [
  { href: 'https://www.instagram.com/aflxy/', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://www.x.com/afilaxy', icon: 'fab fa-twitter', label: 'X' },
  { href: 'https://www.linkedin.com/company/afilaxy/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/Afilaxy', icon: 'fab fa-facebook', label: 'Facebook' },
  { href: 'https://wa.me/5511970657225', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
  { href: 'https://github.com/herb-sin/afilaxy', icon: 'fab fa-github', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-white pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src="/assets/afilaxy_master_2025logo.svg" alt="Afilaxy" className="mb-4 h-20" />
          <p className="max-w-xs text-sm text-muted">
            Pessoas com asma ajudando pessoas com asma. Uma rede solidária para emergências respiratórias.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 font-semibold text-secondary">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted transition hover:text-primary">Início</Link></li>
            <li><Link to="/profissionais" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-muted transition hover:text-primary">Profissionais</Link></li>
            <li><Link to="/profissionais/crm" className="text-muted transition hover:text-primary">Consulta CRM</Link></li>
            <li><Link to="/privacidade" className="text-muted transition hover:text-primary">Privacidade</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 font-semibold text-secondary">Redes Sociais</h4>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-secondary transition hover:bg-primary hover:text-white">
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Afilaxy. Todos os direitos reservados.
      </div>
    </footer>
  )
}
