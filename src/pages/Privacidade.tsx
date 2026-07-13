import { Link } from 'react-router-dom'

export default function Privacidade() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-secondary">Política de Privacidade</h1>
        <p className="mt-2 text-muted">AFILAXY — Última atualização: julho de 2026</p>
      </section>

      <section className="py-16">
        <article className="prose prose-slate mx-auto max-w-3xl px-5">

          <h2 className="mt-8 text-2xl font-bold text-secondary">1. Quem Somos</h2>
          <p>
            A AFILAXY, serviço prestado por Herbert Jung Sin, inscrito no CPF/MF sob o nº 360.537.008-00,
            residente em São Paulo – SP, é a controladora dos dados pessoais tratados no âmbito desta
            Política, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
          </p>
          <p>
            Esta Política aplica-se a todos os serviços da AFILAXY: aplicativo móvel Android,
            aplicativo móvel iOS e Portal de Profissionais de Saúde (web).
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">2. Quais Dados Coletamos e Para Quê</h2>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.1 Dados de Cadastro</h3>
          <p>Dados pessoais comuns coletados no cadastro e uso da plataforma:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Nome completo</strong> — identificação da conta e personalização</li>
            <li><strong>Endereço de e-mail</strong> — acesso à conta e comunicações</li>
            <li><strong>Foto de perfil</strong> — exibição para Helpers durante emergência (opcional)</li>
            <li><strong>Telefone</strong> — contato e funcionalidades de segurança (opcional)</li>
          </ul>
          <p className="text-sm text-muted">Autenticação disponível por e-mail e senha, Google Sign-In ou Apple Sign-In.</p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.2 Perfil Médico Autodeclarado</h3>
          <p>
            O Usuário pode, facultativamente, preencher seu Perfil Médico com as seguintes
            informações, utilizadas como fatores de ponderação no Índice de Bem-Estar e Risco:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Tipo sanguíneo</li>
            <li>Alergias conhecidas</li>
            <li>Medicações em uso</li>
            <li>Condições médicas</li>
          </ul>
          <div className="rounded-md bg-amber-50 p-4 text-sm text-amber-800 not-prose my-4">
            <strong>Atenção:</strong> estes dados constituem dados pessoais sensíveis nos termos do
            art. 5º, II da LGPD. Seu tratamento é realizado exclusivamente com base no consentimento
            expresso do Usuário (art. 11, I da LGPD), prestado no momento do preenchimento. O
            consentimento pode ser revogado a qualquer tempo mediante exclusão do Perfil Médico nas
            configurações da conta.
          </div>
          <p>
            Todas as informações são autodeclaradas pelo próprio Usuário. A AFILAXY não verifica,
            valida nem atesta clinicamente nenhuma informação do Perfil Médico.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.3 Contato de Emergência</h3>
          <p>
            Nome, telefone e tipo de relacionamento do contato de emergência, informados
            voluntariamente pelo Usuário. Utilizados exclusivamente para fins de segurança na
            funcionalidade de apoio P2P.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.4 Check-ins de Bem-Estar</h3>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Respostas binárias de bem-estar</strong> — bem-estar subjetivo autodeclarado, para acompanhamento e cálculo do Índice</li>
            <li><strong>AQI, temperatura e umidade</strong> — dados ambientais para contextualização do check-in</li>
            <li><strong>Data, hora e período</strong> — matinal ou noturno, para registro histórico</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.5 Índice de Bem-Estar e Risco</h3>
          <p>
            Dado derivado calculado a partir dos check-ins, do Perfil Médico autodeclarado, dos
            dados ambientais, do histórico de pedidos de ajuda e de fatores sazonais. Os snapshots
            diários são armazenados individualmente por Usuário para permitir acompanhamento histórico.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.6 Geolocalização</h3>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>
              <strong>Localização precisa (GPS)</strong> — coletada apenas durante pedido P2P ativo;
              compartilhada somente com o Helper que aceitou o pedido; não retida após encerramento
              da sessão
            </li>
            <li>
              <strong>Localização aproximada (cidade/região)</strong> — utilizada para consulta de
              AQI e clima junto a WAQI e OpenMeteo, sem identificação individual; não armazenada
            </li>
          </ul>
          <p>A AFILAXY não realiza rastreamento contínuo da localização do Usuário fora dos contextos acima.</p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.7 Histórico de Pedidos de Ajuda</h3>
          <p>
            Contadores agregados de pedidos de ajuda realizados pelo Usuário (total e por período),
            utilizados como fator no cálculo do Índice de Bem-Estar e Risco.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">2.8 Dados de Navegação e Técnicos</h3>
          <p>
            Endereço IP, versão do sistema operacional, modelo do dispositivo, token FCM (para
            notificações push), logs de acesso e sessão. Utilizados para segurança, diagnóstico
            técnico e melhoria dos serviços.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">3. Base Legal para o Tratamento</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Dados de cadastro e navegação</strong> — execução de contrato (art. 7º, V) e legítimo interesse (art. 7º, IX)</li>
            <li><strong>Perfil Médico autodeclarado</strong> — consentimento expresso do titular (art. 11, I)</li>
            <li><strong>Check-ins de bem-estar</strong> — execução de contrato (art. 7º, V)</li>
            <li><strong>Geolocalização em emergências</strong> — consentimento (art. 7º, I) e proteção da vida (art. 7º, VIII)</li>
            <li><strong>Dados anonimizados para pesquisa</strong> — pesquisa com garantia de anonimização (art. 7º, IV)</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">4. Compartilhamento de Dados</h2>
          <p>
            A AFILAXY <strong>não comercializa</strong> dados pessoais de seus Usuários.
            O compartilhamento ocorre exclusivamente nas seguintes situações:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Helper voluntário</strong> — durante emergência P2P ativa, o nome e a localização aproximada do solicitante são exibidos ao Helper que aceitou o pedido, pelo tempo de duração da sessão</li>
            <li><strong>Profissional de Saúde vinculado</strong> — dados de bem-estar são compartilhados com o Profissional cadastrado no Portal, mediante consentimento expresso e revogável do Usuário</li>
            <li><strong>Processadores de dados</strong> — serviços de infraestrutura que tratam dados em nome da AFILAXY sob obrigações contratuais de confidencialidade (detalhados na seção 5)</li>
            <li><strong>Autoridades competentes</strong> — em cumprimento de ordem judicial ou determinação legal</li>
            <li><strong>Pesquisa e saúde pública</strong> — dados anonimizados e agregados, sem possibilidade de identificação individual</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">5. Processadores Terceiros</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>
              <strong>Firebase / Google LLC</strong> — autenticação, banco de dados em nuvem e
              notificações push (FCM). Recebe dados de conta, check-ins, perfil e tokens de sessão.
            </li>
            <li>
              <strong>WAQI (World Air Quality Index)</strong> — dados de qualidade do ar (AQI).
              Recebe localização aproximada por cidade/região.
            </li>
            <li>
              <strong>OpenMeteo</strong> — dados meteorológicos. Recebe localização aproximada por
              cidade/região.
            </li>
          </ul>
          <p>Nenhum dos processadores recebe dados do Perfil Médico autodeclarado ou dados de localização precisa do Usuário.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">6. Segurança das Informações</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Criptografia de dados em trânsito (TLS/HTTPS) e em repouso (infraestrutura Firebase/GCP)</li>
            <li>Senhas armazenadas com hash criptográfico não reversível</li>
            <li>Controle de acesso por perfil de usuário com regras de segurança no banco de dados</li>
            <li>Acesso ao Perfil Médico restrito ao próprio Usuário e, mediante consentimento, ao Profissional de Saúde vinculado</li>
            <li>Chat de emergência acessível exclusivamente pelo solicitante e pelo Helper da sessão</li>
            <li>Monitoramento de acessos e logs de auditoria</li>
          </ul>
          <p>
            O Usuário é responsável por manter suas credenciais confidenciais e por notificar
            imediatamente a AFILAXY em caso de suspeita de uso não autorizado pelo canal{' '}
            <strong>afilaxy@gmail.com</strong>.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">7. Retenção de Dados</h2>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Dados de cadastro e perfil</strong> — vigência da conta + 5 anos após encerramento</li>
            <li><strong>Perfil Médico autodeclarado</strong> — até revogação do consentimento ou encerramento da conta</li>
            <li><strong>Check-ins e Índice de Bem-Estar</strong> — pelo período de vigência da conta</li>
            <li><strong>Geolocalização em tempo real</strong> — não retida após encerramento da sessão</li>
            <li><strong>Dados de navegação e logs</strong> — até 6 meses</li>
            <li><strong>Dados anonimizados para pesquisa</strong> — indefinidamente (não permitem identificação)</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">8. Dados Biométricos (HealthKit e Health Connect)</h2>
          <p>
            A versão atual da plataforma <strong>não coleta</strong> dados biométricos clínicos.
            As integrações com HealthKit (iOS) e Health Connect (Android) — que permitiriam leitura
            de frequência cardíaca, SpO₂, dados de sono e taxa respiratória — estão{' '}
            <strong>desabilitadas</strong>. Ambas as plataformas retornam{' '}
            <code>isAvailable() = false</code>.
          </p>
          <p>
            Essas integrações poderão ser reativadas futuramente, mediante regularização da pessoa
            jurídica, obtenção de aprovação nas respectivas plataformas e comunicação prévia aos
            Usuários com atualização desta Política.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">9. Menores de Idade</h2>
          <p>
            A AFILAXY não coleta intencionalmente dados de crianças menores de 13 (treze) anos.
            Usuários entre 13 e 17 anos somente podem utilizar a plataforma mediante consentimento
            expresso de responsável legal, que passa a ser solidariamente responsável pelos dados
            fornecidos. Se tomarmos conhecimento de coleta inadvertida de dados de menor de 13 anos
            sem consentimento do responsável, procederemos à exclusão imediata.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">10. Notificações Push</h2>
          <p>
            A AFILAXY envia notificações push para lembretes de check-in, alertas de bem-estar e
            risco, notificações de emergência (pedidos de ajuda próximos) e comunicações do serviço.
            O Usuário pode desativar as notificações nas configurações do seu dispositivo a qualquer
            momento, sem prejuízo ao uso das demais funcionalidades.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">11. Seus Direitos como Titular (LGPD — art. 18)</h2>
          <p>Você tem os seguintes direitos sobre seus dados pessoais, exercíveis mediante solicitação ao canal de atendimento indicado na seção 12:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados que mantemos sobre você</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente</li>
            <li>Portabilidade dos dados a outro fornecedor</li>
            <li>Eliminação dos dados tratados com base em consentimento (incluindo o Perfil Médico)</li>
            <li>Informação sobre compartilhamento com terceiros</li>
            <li>Revogação do consentimento a qualquer tempo, sem prejuízo à licitude do tratamento anterior</li>
          </ul>
          <p>Responderemos às solicitações em até 15 (quinze) dias úteis.</p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">12. Encarregado (DPO) e Canais de Atendimento</h2>
          <p><strong>Encarregado pelo Tratamento de Dados (DPO):</strong> Herbert Jung Sin</p>
          <p>
            Para exercer seus direitos, solicitar informações ou registrar reclamações:{' '}
            <strong>afilaxy@gmail.com</strong>
          </p>
          <p>
            <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{' '}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              gov.br/anpd
            </a>{' '}
            — para reclamações não resolvidas diretamente com a AFILAXY.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">13. Alterações nesta Política</h2>
          <p>
            A AFILAXY se reserva o direito de atualizar esta Política periodicamente. Alterações
            relevantes serão comunicadas com antecedência mínima de 15 (quinze) dias por notificação
            no aplicativo ou por e-mail. O uso continuado da plataforma após a data de vigência das
            alterações constitui concordância com a nova versão.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">14. Legislação Aplicável</h2>
          <p>
            Esta Política é regida pela legislação brasileira, em especial pela Lei nº 13.709/2018
            (LGPD) e pelo Código de Defesa do Consumidor (Lei nº 8.078/1990). Controvérsias serão
            dirimidas no foro da Comarca de São Paulo – SP.
          </p>

          <hr className="my-8" />
          <p className="text-sm italic text-muted">
            Para mais informações, consulte os{' '}
            <Link to="/termos" className="text-primary hover:underline">Termos de Uso</Link>.
          </p>
        </article>
      </section>
    </div>
  )
}
