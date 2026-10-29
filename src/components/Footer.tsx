import { Link } from 'react-router-dom'
import SocialIcon, { type SocialIconName } from './SocialIcon'

const socials: { href: string; icon: SocialIconName; label: string }[] = [
  { href: 'https://www.instagram.com/aflxy/', icon: 'instagram', label: 'Instagram' },
  { href: 'https://www.threads.com/@aflxy', icon: 'threads', label: 'Threads' },
  { href: 'https://www.x.com/afilaxy', icon: 'twitter', label: 'X' },
  { href: 'https://www.linkedin.com/company/afilaxy/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/Afilaxy', icon: 'facebook', label: 'Facebook' },
  { href: 'https://wa.me/5511970657225', icon: 'whatsapp', label: 'WhatsApp' },
  { href: 'https://www.youtube.com/@afilaxy', icon: 'youtube', label: 'YouTube' },
  { href: 'https://github.com/herb-sin/afilaxy-kmm', icon: 'github', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-white pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src="/assets/afilaxy_master_2025logo.svg" alt="Afilaxy" width={181} height={143} className="mb-4 h-20 w-[101px]" />
          <p className="max-w-xs text-sm text-muted">
            A rede feita por e para pessoas com asma.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-semibold text-secondary">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted transition hover:text-primary">Início</Link></li>
            <li><Link to="/profissionais" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-muted transition hover:text-primary">Profissionais</Link></li>
<li><Link to="/privacidade" className="text-muted transition hover:text-primary">Privacidade</Link></li>
            <li><Link to="/termos" className="text-muted transition hover:text-primary">Termos de Uso</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 font-semibold text-secondary">Redes Sociais</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-secondary transition hover:bg-primary hover:text-white">
                <SocialIcon name={s.icon} className="h-4 w-4" />
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
