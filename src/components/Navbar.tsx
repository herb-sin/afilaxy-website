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
  const [dropdown, setDropdown] = useState(false)
  const { pathname } = useLocation()

  const handleNav = (to: string) => {
    setOpen(false)
    setDropdown(false)
    if (to.startsWith('/#')) {
      if (pathname !== '/') {
        window.location.href = to
        return
      }
      const el = document.getElementById(to.slice(2))
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
          {/* Dropdown */}
          <li className="relative">
            <button onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-1 rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark">
              Sou Profissional
              <span className="text-xs">{dropdown ? '▲' : '▼'}</span>
            </button>
            {dropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-white py-2 shadow-xl"
                onMouseLeave={() => setDropdown(false)}>
                <Link to="/profissionais" onClick={() => setDropdown(false)}
                  className="block px-4 py-2 text-sm font-medium text-secondary transition hover:bg-gray-50 hover:text-primary">
                  🩺 Médicos (PF)
                </Link>
                <Link to="/clinicas" onClick={() => setDropdown(false)}
                  className="block px-4 py-2 text-sm font-medium text-secondary transition hover:bg-gray-50 hover:text-primary">
                  🏥 Clínicas (PJ)
                </Link>
              </div>
            )}
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
              <p className="mb-2 text-xs font-semibold uppercase text-muted">Para Profissionais</p>
              <Link to="/profissionais" onClick={() => setOpen(false)} className="block py-1 font-medium text-secondary">
                🩺 Médicos (PF)
              </Link>
              <Link to="/clinicas" onClick={() => setOpen(false)} className="block py-1 font-medium text-secondary">
                🏥 Clínicas (PJ)
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
