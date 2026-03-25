import { useState } from 'react'
import { validateCrm } from '../firebase'

interface CrmResult {
  name: string
  crm: string
  uf: string
  specialty: string
  situation: string
}

const ufs = ['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO']

export default function ConsultaCRM() {
  const [crm, setCrm] = useState('')
  const [uf, setUf] = useState('SP')
  const [result, setResult] = useState<CrmResult | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!crm.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await validateCrm({ crm: crm.trim(), uf })
      const data = res.data
      if (!data.found) {
        setError('Profissional não encontrado. Verifique o CRM e o estado.')
        return
      }
      setResult({
        name: data.name ?? '',
        crm: data.crm ?? crm,
        uf: data.uf ?? uf,
        specialty: data.specialty ?? '',
        situation: data.situation ?? '',
      })
    } catch {
      setError('Erro ao consultar. Tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h1 className="mb-4 text-4xl font-bold text-secondary">Consulta CRM</h1>
          <p className="text-lg text-muted">Verifique o registro de um profissional de saúde no Conselho Federal de Medicina.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-md px-5">
          <form onSubmit={handleSearch} className="rounded-card bg-white p-8 shadow-md">
            <div className="mb-4">
              <label htmlFor="crm" className="mb-1 block text-sm font-medium text-secondary">Número do CRM</label>
              <input id="crm" type="text" placeholder="Ex: 123456" value={crm} onChange={(e) => setCrm(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none" />
            </div>
            <div className="mb-6">
              <label htmlFor="uf" className="mb-1 block text-sm font-medium text-secondary">Estado (UF)</label>
              <select id="uf" value={uf} onChange={(e) => setUf(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition focus:border-primary focus:outline-none">
                {ufs.map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <button type="submit" disabled={loading}
              className="w-full rounded-pill bg-primary py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60">
              {loading ? 'Consultando...' : 'Consultar'}
            </button>
          </form>

          {error && (
            <div className="mt-6 rounded-card bg-red-50 p-6 text-center text-red-700">{error}</div>
          )}

          {result && (
            <div className="mt-6 rounded-card bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-bold text-secondary">Resultado</h3>
              <dl className="space-y-3 text-sm">
                {([
                  ['Nome', result.name],
                  ['CRM', result.crm],
                  ['UF', result.uf],
                  ['Especialidade', result.specialty],
                  ['Situação', result.situation],
                ] as const).map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-gray-100 pb-2">
                    <dt className="font-medium text-muted">{label}</dt>
                    <dd className="text-secondary">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
