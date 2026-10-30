import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'afilaxy-cookie-notice-dismissed'

export default function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // localStorage indisponível (modo privado etc.) — mostra o aviso mesmo assim
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // segue sem salvar — o aviso só volta a aparecer na próxima visita
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1000] border-t bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          Usamos cookies para entender como você usa o site e melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
          <Link to="/privacidade" className="font-semibold text-primary hover:underline">
            Política de Privacidade
          </Link>.
        </p>
        <button onClick={dismiss}
          className="shrink-0 rounded-pill bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark">
          Entendi
        </button>
      </div>
    </div>
  )
}
