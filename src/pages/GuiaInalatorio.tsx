// Indicação do "Guia Prático de Dispositivos Inalatórios" (LEDAR/UFAL Arapiraca), autorizada
// pela coordenação do LEDAR por e-mail em 14/11/2026 nestas condições:
//  - só link para a página oficial (DOI), sem hospedar cópia (licença CC BY-NC-ND 4.0);
//  - crédito de AUTORIA, nunca apresentar autores, LEDAR ou UFAL como parceiros/apoiadores;
//  - material educativo complementar, reforçando a orientação do médico;
//  - acesso sempre gratuito, sem vínculo com conteúdo ou plano pago.
// Mesmo texto do app (InhalerGuideScreen.kt / InhalerGuideView.swift no repositório afilaxy-kmm).

const GUIDE_URL = 'https://doi.org/10.46898/rfb.musghvgdt331'

const authors = [
  'Ana Dora Alécio Virtuoso Costa',
  'Emylle Victória Cavalcante Costa',
  'Lívia Soares Bezerra',
  'Jorge Samuel de Oliveira Júnior',
  'Katiane de Lima Pinheiro',
  'Ryan Lucas Barbosa Oliveira',
  'Thaysa Karlla Albuquerque Jatobá',
  'Thalyta de Souza Rodrigues Holanda',
  'Laércia Karla Diega Paiva Ferreira',
]

export default function GuiaInalatorio() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Material educativo</p>
        <h1 className="mx-auto mt-2 max-w-3xl px-5 text-4xl font-bold text-secondary">
          Guia Prático de Dispositivos Inalatórios
        </h1>
        <p className="mx-auto mt-3 max-w-2xl px-5 italic text-muted">
          Principais dispositivos utilizados no Brasil no manejo das doenças pulmonares
        </p>
      </section>

      <section className="py-16">
        <article className="mx-auto max-w-3xl space-y-6 px-5">
          <p className="text-lg text-secondary">
            Passo a passo ilustrado da técnica correta de uso dos principais dispositivos
            inalatórios disponíveis no Brasil, com cuidados de higienização e conservação e
            técnicas de lavagem nasal.
          </p>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
            <strong>Material educativo complementar.</strong> Ele não substitui a orientação do
            seu médico: siga sempre a prescrição, as doses e as instruções que você recebeu.
          </div>

          <div>
            <a
              href={GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-pill bg-primary px-8 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Abrir o guia na página oficial ↗
            </a>
            <p className="mt-2 text-sm text-muted">Abre a página da obra na RFB Editora.</p>
          </div>

          <hr />

          <div className="space-y-3 text-muted">
            <h2 className="text-xl font-bold text-secondary">Autoria</h2>
            <p>{authors.slice(0, -1).join(', ')} e {authors[authors.length - 1]}.</p>
            <p>
              Laboratório de Epidemiologia de Doenças Alérgicas e Respiratórias (LEDAR),
              Universidade Federal de Alagoas (UFAL), Campus Arapiraca.
            </p>
            <p className="text-sm">
              Belém: RFB Editora, 2026. ISBN 978-65-5337-373-0. DOI{' '}
              <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                10.46898/rfb.musghvgdt331
              </a>
              .
            </p>
            <p className="text-sm">
              Distribuído gratuitamente pelos autores sob a licença{' '}
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Creative Commons CC BY-NC-ND 4.0
              </a>
              . O Afilaxy apenas indica o guia, com autorização da autoria; os autores, o LEDAR e
              a UFAL não têm vínculo com o Afilaxy.
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}
