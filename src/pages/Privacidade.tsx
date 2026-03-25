export default function Privacidade() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-secondary">Política de Privacidade e Proteção de Dados</h1>
        <p className="mt-2 text-muted">AFILAXY — Atualizada em 2025</p>
      </section>

      <section className="py-16">
        <article className="prose prose-slate mx-auto max-w-3xl px-5">
          <p>Este aplicativo segue a Lei Geral de Proteção de Dados Pessoais (LGPD), garantindo segurança, privacidade e transparência aos usuários.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Quais dados coletamos</h2>
          <p>No cadastro e uso do aplicativo, coletamos:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Localização (GPS)</li>
            <li>E-mail</li>
            <li>Dados técnicos do dispositivo (para autenticação e segurança)</li>
            <li>Dados de uso e interação com o aplicativo</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Como usamos os dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Para identificar usuários em situações de emergência e conectar quem precisa de ajuda com quem pode ajudar</li>
            <li>Para garantir segurança, personalizar a experiência, autenticar e proteger o acesso à conta</li>
            <li>Para enviar notificações emergenciais e comunicações relevantes</li>
            <li>Para criar estatísticas e relatórios de impacto social (dados anonimizados)</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Compartilhamento de dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Os dados só são compartilhados com outros usuários mediante consentimento explícito e para fins de emergência</li>
            <li>Não divulgamos informações que permitam identificar o usuário, exceto nos seguintes casos:
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>Cumprimento de ordem judicial ou regulatória</li>
                <li>Cumprimento de legislação vigente</li>
                <li>Reclamações de violação de direitos de terceiros</li>
              </ul>
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Proteção dos dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Seus dados são armazenados em servidores seguros e protegidos por criptografia e autenticação</li>
            <li>O acesso é restrito à equipe responsável e exigimos senha segura para uso do app</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Direitos do titular</h2>
          <p>Você pode exercer seus direitos previstos na LGPD, como:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Solicitar acesso, correção ou exclusão dos seus dados pessoais</li>
            <li>Revogar consentimento</li>
            <li>Solicitar anonimização ou portabilidade dos dados</li>
          </ul>
          <p>Envie sua solicitação para: <strong>afilaxy@gmail.com</strong></p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Dados sensíveis</h2>
          <p>Dados de saúde e diagnóstico médico só são tratados mediante consentimento explícito, para finalidades específicas e com medidas de segurança reforçadas.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Retenção e eliminação</h2>
          <p>Seus dados são mantidos enquanto você utilizar o app e poderão ser preservados por obrigação legal em situações de investigação ou ordem de autoridade.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Incidentes de segurança</h2>
          <p>Qualquer incidente será comunicado por e-mail e notificação no aplicativo, conforme previsto na LGPD.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Encarregado pelo Tratamento de Dados (DPO)</h2>
          <p><strong>DPO:</strong> Herbert Jung Sin</p>
          <p><strong>E-mail:</strong> afilaxy@gmail.com</p>

          <hr className="my-8" />
          <p className="text-sm italic text-muted">Para mais informações, consulte os Termos de Uso do aplicativo.</p>
        </article>
      </section>
    </div>
  )
}
