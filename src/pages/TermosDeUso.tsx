import { Link } from 'react-router-dom'

export default function TermosDeUso() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-secondary">Termos Gerais e Condições de Uso</h1>
        <p className="mt-2 text-muted">AFILAXY — Última atualização: julho de 2026</p>
      </section>

      <section className="py-16">
        <article className="prose prose-slate mx-auto max-w-3xl px-5">
          <p>
            Este instrumento contém os termos gerais e condições de uso da plataforma AFILAXY.
            O serviço é prestado por <strong>Herbert Jung Sin</strong>, inscrito no CPF/MF sob o
            nº 360.537.008-00, residente em São Paulo – SP, doravante denominado AFILAXY ou
            CONTRATADO. Do outro lado, a parte qualificada conforme o cadastro eletrônico
            realizado na plataforma, doravante denominada USUÁRIO.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Disposições Gerais e Definições</h2>
          <p>
            <strong>Cláusula 1ª.</strong> Os presentes Termos Gerais e Condições de Uso
            (doravante "Termos de Uso") regem o relacionamento entre a AFILAXY, titular da
            propriedade intelectual sobre a plataforma, conteúdos e demais ativos digitais
            relacionados, e os USUÁRIOS do serviço.
          </p>
          <p>
            <strong>Parágrafo único.</strong> Os presentes Termos são complementados pela{' '}
            <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>,
            devendo o USUÁRIO demonstrar concordância com ambos os documentos para ter acesso
            aos serviços da AFILAXY.
          </p>
          <p>
            <strong>Cláusula 2ª.</strong> As PARTES USUÁRIAS deverão ler atentamente os Termos
            de Uso e não poderão se escusar deles alegando ignorância sobre suas condições,
            inclusive quanto a eventuais modificações.
          </p>
          <p>
            <strong>Cláusula 3ª.</strong> Caso o USUÁRIO não concorde com quaisquer das
            condições aqui descritas, deverá cessar imediatamente o uso da plataforma, uma vez
            que sua utilização é automaticamente entendida como concordância com os presentes
            Termos de Uso.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-secondary">Definições (Cláusula 4ª)</h3>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>Plataforma</strong> — conjunto dos aplicativos móveis (Android e iOS) e do Portal de Profissionais de Saúde (web) da AFILAXY</li>
            <li><strong>Usuário</strong> — pessoa física cadastrada na plataforma, que pode atuar como Paciente, como Helper ou como ambos</li>
            <li><strong>Helper</strong> — Usuário que, voluntariamente, aceita pedidos de ajuda de outros Usuários em situação de emergência próxima</li>
            <li><strong>Profissional de Saúde</strong> — médico ou farmacêutico com registro ativo junto ao CRM ou CRF, cadastrado no Portal de Profissionais de Saúde da AFILAXY</li>
            <li><strong>Perfil Médico</strong> — conjunto de informações de saúde inseridas voluntariamente e exclusivamente pelo próprio Usuário (autodeclaração), sem verificação ou validação clínica pela AFILAXY</li>
            <li><strong>Check-in</strong> — registro diário de bem-estar subjetivo realizado pelo Usuário por meio de três perguntas binárias, disponível nos períodos matinal e noturno</li>
            <li><strong>Índice de Bem-Estar e Risco</strong> — pontuação de 0 a 100 calculada por algoritmo heurístico a partir dos check-ins recentes, do Perfil Médico autodeclarado, de dados ambientais e do histórico de pedidos de ajuda do Usuário. Não constitui diagnóstico médico.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Objeto</h2>
          <p>
            <strong>Cláusula 5ª.</strong> O objeto do presente contrato é a utilização da
            AFILAXY, plataforma de apoio comunitário e monitoramento de bem-estar para pessoas
            com asma, composta pelos seguintes serviços:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted">
            <li>
              <strong>Rede de Apoio P2P em Emergências</strong> — em situação de necessidade, o
              Usuário pode acionar Helpers voluntários próximos (raio de até 250 metros) por meio
              de geolocalização, iniciando comunicação em tempo real via chat integrado para
              localização de inalador de resgate
            </li>
            <li>
              <strong>Check-ins de Bem-Estar</strong> — notificações diárias (matinal às 07:30 e
              noturno às 21:00) convidam o Usuário a registrar seu bem-estar subjetivo por meio
              de três perguntas binárias, permitindo acompanhamento longitudinal
            </li>
            <li>
              <strong>Índice de Bem-Estar e Risco</strong> — pontuação informativa calculada a
              partir dos check-ins, do Perfil Médico autodeclarado, de dados de qualidade do ar
              (AQI), dados meteorológicos, histórico de pedidos de ajuda e fatores sazonais
            </li>
            <li>
              <strong>Portal de Profissionais de Saúde</strong> — interface B2B que permite ao
              Profissional de Saúde cadastrado acompanhar dados de bem-estar de Usuários
              vinculados, mediante assinatura de plano mensal
            </li>
            <li>
              <strong>Comunidade</strong> — feed de conteúdo para troca de informações e
              experiências entre Usuários
            </li>
          </ul>
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 not-prose my-4">
            <strong>Atenção:</strong> A AFILAXY é uma ferramenta de apoio comunitário e
            monitoramento de bem-estar pessoal. Não somos profissionais de saúde. Não prestamos
            serviços médicos. O Índice de Bem-Estar e Risco não constitui diagnóstico médico e
            não substitui avaliação profissional.{' '}
            <strong>Em situações de risco à vida, acione imediatamente o SAMU (192) ou o Corpo
            de Bombeiros (193).</strong>
          </div>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Dos Perfis de Usuário</h2>
          <p>
            <strong>Cláusula 6ª.</strong> A plataforma opera com dois perfis distintos:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>
              <strong>Usuário Padrão</strong> — pessoa física cadastrada no aplicativo móvel
              (Android ou iOS), que pode atuar como Paciente e/ou como Helper voluntário para
              outros Usuários em situação de emergência
            </li>
            <li>
              <strong>Profissional de Saúde</strong> — médico ou farmacêutico com registro ativo
              no CRM ou CRF, que acessa o Portal de Profissionais de Saúde mediante assinatura
              mensal. O acesso a dados de Usuários vinculados exige consentimento expresso destes.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Acesso e Cadastro</h2>
          <p>
            <strong>Cláusula 7ª.</strong> O cadastro na plataforma AFILAXY exige o fornecimento
            dos seguintes dados: nome completo, endereço de e-mail e senha, ou autenticação via
            Google Sign-In ou Apple Sign-In.
          </p>
          <p>
            <strong>Cláusula 8ª.</strong> Os dados de cadastro deverão ser preenchidos com
            informações completas, verdadeiras e atualizadas, sendo de exclusiva responsabilidade
            do Usuário a manutenção de sua veracidade.
          </p>
          <p>
            <strong>Cláusula 9ª.</strong> O cadastro é pessoal e intransferível. O Usuário é
            integralmente responsável por todas as atividades realizadas com o uso de suas
            credenciais e deve notificar imediatamente a AFILAXY em caso de uso não autorizado.
          </p>
          <p>
            <strong>Cláusula 10ª.</strong> A AFILAXY poderá, a qualquer momento, verificar as
            informações fornecidas e bloquear ou restringir o acesso em caso de suspeita de
            irregularidade, sem obrigação de divulgar suas políticas internas de avaliação.
          </p>
          <p>
            <strong>Cláusula 11ª.</strong> O acesso à plataforma está disponível nas seguintes
            formas: aplicativo móvel Android (Google Play Store); aplicativo móvel iOS (App
            Store e TestFlight para versão beta); e Portal de Profissionais de Saúde (navegador
            web).
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Perfil Médico Autodeclarado</h2>
          <p>
            <strong>Cláusula 12ª.</strong> Após o cadastro, o Usuário pode, facultativamente,
            preencher seu Perfil Médico, informando tipo sanguíneo, alergias conhecidas,
            medicações em uso e condições médicas.
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>§1º.</strong> O preenchimento do Perfil Médico é voluntário. Sua ausência não impede o uso das demais funcionalidades da plataforma.</li>
            <li><strong>§2º.</strong> As informações do Perfil Médico são exclusivamente autodeclaradas pelo Usuário e não são verificadas, validadas ou atestadas clinicamente pela AFILAXY. A responsabilidade pela veracidade e atualização dessas informações é exclusiva do Usuário.</li>
            <li><strong>§3º.</strong> As informações do Perfil Médico são utilizadas como fator de ponderação no cálculo do Índice de Bem-Estar e Risco e para personalização da experiência na plataforma. Não são utilizadas para diagnóstico ou prescrição médica.</li>
            <li><strong>§4º.</strong> Por se tratarem de dados pessoais sensíveis nos termos da LGPD (Lei nº 13.709/2018), as informações do Perfil Médico somente serão tratadas com base no consentimento expresso do Usuário, prestado no momento do preenchimento, podendo ser revogado a qualquer tempo.</li>
          </ul>
          <p>
            <strong>Cláusula 13ª.</strong> O Usuário pode registrar um contato de emergência
            (nome, telefone e relacionamento), utilizado exclusivamente para fins de segurança
            na funcionalidade de apoio P2P.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Índice de Bem-Estar e Risco</h2>
          <p>
            <strong>Cláusula 14ª.</strong> O Índice de Bem-Estar e Risco apresenta uma
            pontuação de 0 a 100, em quatro níveis, calculada a partir dos seguintes fatores:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Check-ins de bem-estar recentes</li>
            <li>Perfil Médico autodeclarado, quando preenchido</li>
            <li>Índice de qualidade do ar (AQI) e dados meteorológicos da região do Usuário</li>
            <li>Histórico de pedidos de ajuda</li>
            <li>Fatores sazonais</li>
          </ul>
          <p>
            <strong>Cláusula 15ª.</strong> O Índice de Bem-Estar e Risco <strong>não é</strong>{' '}
            diagnóstico médico, <strong>não substitui</strong> avaliação profissional e{' '}
            <strong>não deve ser utilizado</strong> como base exclusiva para decisões de saúde.
            A AFILAXY não se responsabiliza por interpretações ou decisões tomadas com base
            exclusiva nessa pontuação.
          </p>
          <p>
            <strong>Parágrafo único.</strong> O Índice não utiliza dados biométricos clínicos.
            As integrações com HealthKit (iOS) e Health Connect (Android) estão desabilitadas
            na versão atual da plataforma e poderão ser reativadas futuramente, mediante
            regularização e comunicação prévia aos Usuários.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Da Emergência P2P</h2>
          <p>
            <strong>Cláusula 16ª.</strong> A funcionalidade de apoio P2P permite ao Usuário
            acionar, em situação de necessidade, outros Usuários voluntários (Helpers) próximos
            para auxílio na localização de inalador de resgate.
          </p>
          <p>
            <strong>Cláusula 17ª.</strong> Os Helpers são voluntários que atuam por livre
            iniciativa, sem qualquer vínculo empregatício, de prestação de serviços ou de saúde
            com a AFILAXY. A AFILAXY não se responsabiliza pelas ações ou omissões dos Helpers
            durante os atendimentos.
          </p>
          <p>
            <strong>Cláusula 18ª.</strong> O acionamento da rede de apoio P2P para situações
            que não constituam necessidade real é expressamente vedado e sujeito às sanções
            previstas nestes Termos.
          </p>
          <p>
            <strong>Cláusula 19ª.</strong> A AFILAXY não é um serviço de emergência médica.
            Em situações de risco à vida, o Usuário deve acionar imediatamente o SAMU (192)
            ou o Corpo de Bombeiros (193).
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Das Notificações Push</h2>
          <p>
            <strong>Cláusula 20ª.</strong> A AFILAXY envia notificações push nas seguintes
            situações: lembretes de check-in (07:30 e 21:00); alertas relacionados ao Índice
            de Bem-Estar e Risco; notificações de pedidos de ajuda próximos (para Usuários no
            modo Helper); e comunicações da plataforma.
          </p>
          <p>
            <strong>Parágrafo único.</strong> O Usuário pode gerenciar ou desativar as
            notificações nas configurações do sistema operacional do seu dispositivo, sem
            prejuízo ao uso das demais funcionalidades.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Da Geolocalização</h2>
          <p>
            <strong>Cláusula 21ª.</strong> O acesso à localização precisa do dispositivo é
            utilizado exclusivamente durante pedidos de ajuda P2P ativos, para identificação
            de Helpers no raio de até 250 metros.
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li><strong>§1º.</strong> A localização do Usuário solicitante é compartilhada, durante a sessão ativa, apenas com o Helper que aceitou o pedido. Encerrada a sessão, os dados de localização em tempo real não são retidos.</li>
            <li><strong>§2º.</strong> Para o cálculo do Índice de Bem-Estar e Risco, utiliza-se localização aproximada por cidade e região para consulta de dados ambientais junto a serviços de terceiros (WAQI e OpenMeteo), sem transmissão da localização exata do Usuário.</li>
            <li><strong>§3º.</strong> A AFILAXY não realiza rastreamento contínuo da localização do Usuário fora dos contextos descritos nesta cláusula.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Dos Menores de Idade</h2>
          <p>
            <strong>Cláusula 22ª.</strong> A plataforma AFILAXY é destinada a maiores de 18
            (dezoito) anos. Reconhecendo que a asma afeta também crianças e adolescentes,
            Usuários entre 13 (treze) e 17 (dezessete) anos poderão utilizar a plataforma
            mediante consentimento expresso de responsável legal, que assumirá solidariamente
            as obrigações decorrentes destes Termos.
          </p>
          <p>
            <strong>Parágrafo único.</strong> É vedado o cadastro de menores de 13 (treze)
            anos. A AFILAXY não coleta intencionalmente dados de crianças abaixo dessa faixa
            etária.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Sigilo das Informações</h2>
          <p>
            <strong>Cláusula 23ª.</strong> A AFILAXY compromete-se a não divulgar dados
            pessoais de seus Usuários, salvo nas seguintes hipóteses: cumprimento de ordem
            judicial ou determinação de órgão regulatório competente; cumprimento de obrigação
            legal, incluindo a LGPD; compartilhamento com o Profissional de Saúde vinculado
            ao Usuário, mediante consentimento expresso e revogável deste; e resposta a
            reclamações de violação de direitos de terceiros.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Da Limitação de Responsabilidade</h2>
          <p>
            <strong>Cláusula 24ª.</strong> A AFILAXY não se responsabiliza por:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Ações ou omissões dos Helpers voluntários durante atendimentos P2P</li>
            <li>Decisões de saúde tomadas com base no Índice de Bem-Estar e Risco</li>
            <li>Precisão de dados ambientais fornecidos por serviços de terceiros</li>
            <li>Veracidade das informações inseridas pelo Usuário no Perfil Médico</li>
            <li>Falhas no dispositivo ou sistema operacional do Usuário</li>
            <li>Interrupções nos serviços de comunicação de terceiros que afetem o funcionamento da plataforma</li>
            <li>Conduta de Profissionais de Saúde cadastrados no Portal no exercício de suas atividades clínicas</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Uso de Dados Anonimizados</h2>
          <p>
            <strong>Cláusula 25ª.</strong> A AFILAXY poderá utilizar dados anonimizados e
            agregados para fins de pesquisa, geração de evidências de saúde pública e melhoria
            dos serviços, em conformidade com a LGPD. Nenhum dado que permita identificação
            individual será utilizado para essas finalidades sem consentimento específico.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Das Sanções</h2>
          <p>
            <strong>Cláusula 26ª.</strong> A utilização da plataforma em desacordo com estes
            Termos implicará na desativação da conta do Usuário, sem aviso prévio, podendo a
            AFILAXY recusar novo cadastramento. Os dados poderão ser preservados para uso das
            autoridades competentes conforme legislação vigente.
          </p>
          <p>
            <strong>Cláusula 27ª.</strong> São expressamente vedados ao Usuário:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Acionar a rede de apoio P2P em situações que não constituam necessidade real</li>
            <li>Inserir informações falsas no cadastro ou no Perfil Médico</li>
            <li>Tentar acessar dados de outros Usuários sem autorização</li>
            <li>Praticar engenharia reversa, descompilar ou modificar qualquer componente da plataforma</li>
            <li>Utilizar a plataforma para fins comerciais não autorizados</li>
          </ul>
          <p>
            <strong>Cláusula 28ª.</strong> O Usuário concorda em indenizar a AFILAXY, seus
            dirigentes, colaboradores e representantes por qualquer dano decorrente do uso
            indevido da plataforma.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Dos Direitos do Titular (LGPD)</h2>
          <p>
            <strong>Cláusula 29ª.</strong> Em conformidade com a Lei nº 13.709/2018, o
            Usuário tem os seguintes direitos em relação aos seus dados pessoais, exercíveis
            mediante solicitação ao canal indicado na{' '}
            <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente</li>
            <li>Portabilidade dos dados a outro fornecedor</li>
            <li>Eliminação dos dados tratados com base em consentimento (incluindo o Perfil Médico)</li>
            <li>Informação sobre compartilhamento com terceiros</li>
            <li>Revogação do consentimento a qualquer tempo, sem prejuízo à licitude do tratamento anterior</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Das Modificações</h2>
          <p>
            <strong>Cláusula 30ª.</strong> Os presentes Termos poderão ser modificados a
            qualquer tempo. Alterações relevantes serão comunicadas com antecedência mínima
            de 15 (quinze) dias por notificação no aplicativo ou por e-mail. O Usuário que
            discordar das alterações poderá solicitar o encerramento de sua conta pelo canal{' '}
            <strong>afilaxy@gmail.com</strong>.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Da Aceitação</h2>
          <p>
            <strong>Cláusula 31ª.</strong> Ao realizar o cadastro, o Usuário declara ter
            lido, compreendido e aceitado todas as condições estabelecidas nestes Termos de
            Uso e na{' '}
            <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Das Disposições Finais</h2>
          <p>
            <strong>Cláusula 32ª.</strong> As obrigações que, por sua natureza, devam
            persistir após o encerramento da conta subsistirão à rescisão, especialmente as
            relativas à propriedade intelectual, confidencialidade e indenização.
          </p>
          <p>
            <strong>Cláusula 33ª.</strong> O presente instrumento é de natureza estritamente
            civil, inexistindo qualquer vínculo empregatício entre o Usuário e a AFILAXY.
          </p>
          <p>
            <strong>Cláusula 34ª.</strong> As disposições deste contrato estão sujeitas às
            leis do ordenamento jurídico brasileiro.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-secondary">Do Foro de Eleição</h2>
          <p>
            <strong>Cláusula 35ª.</strong> As partes elegem o foro da Comarca de São Paulo –
            SP para dirimir eventuais controvérsias decorrentes da interpretação e cumprimento
            destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>

          <hr className="my-8" />
          <p className="text-sm italic text-muted">
            Consulte também nossa{' '}
            <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
          </p>
        </article>
      </section>
    </div>
  )
}
