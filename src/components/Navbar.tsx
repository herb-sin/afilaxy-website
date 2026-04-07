import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/#como-funciona', label: 'Como Funciona' },
  { to: '/#valores', label: 'Nossos Valores' },
  { to: '/#jornada', label: 'Jornada' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const handleNav = (to: string) => {
    setOpen(false)
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (pathname !== '/') {
        window.location.href = to
        return
      }
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo_master.svg" alt="Afilaxy" className="h-16" />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              {l.to.startsWith('/#') ? (
                <button onClick={() => handleNav(l.to)} className="font-medium text-secondary transition hover:text-primary">
                  {l.label}
                </button>
              ) : (
                <Link to={l.to} className="font-medium text-secondary transition hover:text-primary">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          {/* Botão direto */}
          <li>
            <Link to="/profissionais"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark">
              Profissionais
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-2xl text-secondary md:hidden" aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white px-5 pb-6 pt-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                {l.to.startsWith('/#') ? (
                  <button onClick={() => handleNav(l.to)} className="w-full text-left font-medium text-secondary">
                    {l.label}
                  </button>
                ) : (
                  <Link to={l.to} onClick={() => setOpen(false)} className="font-medium text-secondary">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="border-t pt-4">
              <Link to="/profissionais" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="inline-block rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md">
                Profissionais
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
