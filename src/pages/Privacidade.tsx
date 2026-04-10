export default function Privacidade() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-secondary">Política de Privacidade e Proteção de Dados</h1>
        <p className="mt-2 text-muted">AFILAXY — Atualizada em abril de 2026</p>
      </section>

      <section className="py-16">
        <article className="prose prose-slate mx-auto max-w-3xl px-5">
          <p>
            Este aplicativo e portal web seguem a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018),
            garantindo segurança, privacidade e transparência a todos os usuários.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Quais dados coletamos</h2>

          <h3 className="mt-4 text-lg font-semibold text-secondary">Usuários do aplicativo</h3>
          <p>No cadastro e uso do aplicativo, coletamos:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Localização (GPS)</strong> — para conexão em situações de emergência por proximidade</li>
            <li><strong>E-mail</strong> — para autenticação e comunicações</li>
            <li><strong>Dados técnicos do dispositivo</strong> — token de notificação push e sistema operacional (para segurança e autenticação)</li>
            <li><strong>Dados de saúde declarativos</strong> — histórico de asma e condições respiratórias informadas voluntariamente</li>
            <li><strong>Dados de uso e interação</strong> — frequência de uso, ações no app e histórico de emergências (anonimizados para relatórios)</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-secondary">Profissionais de saúde (portal web)</h3>
          <p>Para profissionais que se cadastram no portal, coletamos adicionalmente:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Nome completo e e-mail profissional</strong></li>
            <li><strong>Telefone de contato</strong></li>
            <li><strong>Número de registro profissional</strong> — CRM (CFM), CREFITO, CRP ou equivalente, conforme especialidade</li>
            <li><strong>CNPJ</strong> — exclusivamente para cadastros de clínicas (Pessoa Jurídica)</li>
            <li><strong>Especialidade e segmento de atuação</strong></li>
          </ul>
          <p>Esses dados são usados para verificar a habilitação do profissional junto ao respectivo conselho de classe e compor seu perfil verificado no app.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Como usamos os dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Para identificar usuários em emergências e conectar quem precisa de ajuda com quem pode ajudar, por proximidade geográfica e especialidade</li>
            <li>Para garantir segurança, personalizar a experiência, autenticar e proteger o acesso à conta</li>
            <li>Para enviar notificações emergenciais e comunicações relevantes</li>
            <li>Para criar estatísticas e relatórios de impacto social (dados sempre anonimizados)</li>
            <li>Para exibir perfis de profissionais verificados, com base em proximidade e especialidade — <strong>nunca por critério de assinatura ou pagamento</strong></li>
            <li>Para fornecer analytics de visualizações do perfil ao próprio profissional cadastrado</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Compartilhamento de dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Dados de usuários são compartilhados com outros usuários <strong>somente mediante consentimento explícito e para fins de emergência</strong></li>
            <li>Dados de profissionais (nome, especialidade, link de agendamento) são exibidos no diretório, conforme autorizado no cadastro</li>
            <li>
              Não divulgamos informações pessoais a terceiros, exceto nos seguintes casos:
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>Cumprimento de ordem judicial ou regulatória</li>
                <li>Cumprimento de legislação vigente</li>
                <li>Reclamações de violação de direitos de terceiros</li>
              </ul>
            </li>
            <li>A verificação de registro profissional pode envolver consulta automatizada às APIs dos conselhos de classe (CFM, CREFITO, CRP), sem retenção de dados além do necessário para a validação</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Proteção dos dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Todos os dados são armazenados em servidores seguros com criptografia em trânsito (TLS) e em repouso</li>
            <li>O acesso é restrito à equipe responsável; o app exige senha forte</li>
            <li>Tokens de sessão e credenciais são gerenciados via Firebase Authentication</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Direitos do titular</h2>
          <p>Você pode exercer seus direitos previstos na LGPD, como:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Solicitar acesso, correção ou exclusão dos seus dados pessoais</li>
            <li>Revogar consentimento a qualquer momento</li>
            <li>Solicitar anonimização ou portabilidade dos dados</li>
            <li>Solicitar a exclusão completa da conta e dados associados</li>
          </ul>
          <p>Envie sua solicitação para: <strong>afilaxy@gmail.com</strong></p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Dados sensíveis</h2>
          <p>
            Dados de saúde (histórico de asma, condições respiratórias e situações de emergência) são tratados como{' '}
            <strong>dados sensíveis</strong> nos termos do Art. 11 da LGPD. Seu tratamento ocorre:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Somente mediante consentimento explícito do usuário</li>
            <li>Com finalidade específica e proporcional</li>
            <li>Com medidas de segurança reforçadas</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Retenção e eliminação</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Dados de usuários são mantidos enquanto a conta estiver ativa</li>
            <li>Dados de leads de profissionais são mantidos pelo período necessário ao processo de cadastro e relacionamento</li>
            <li>Dados poderão ser preservados além desse prazo por obrigação legal em situações de investigação ou ordem de autoridade competente</li>
            <li>Ao solicitar exclusão da conta, os dados pessoais identificáveis são removidos em até 30 dias, salvo obrigação legal em contrário</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Incidentes de segurança</h2>
          <p>
            Qualquer incidente que afete dados pessoais será comunicado por e-mail e notificação no app, conforme o Art. 48 da LGPD,
            no prazo máximo de 72 horas após a descoberta.
          </p>

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

