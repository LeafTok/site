import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Trainer Gym AI | Pol&iacute;tica de Privacidade',
  description:
    'Pol\u00edtica de Privacidade do Trainer Gym AI. Saiba como tratamos seus dados, protegemos sua privacidade e como a IA \u00e9 usada para gerar seus planos de treino.',
  alternates: {
    canonical: 'https://leaftok.app/pt-br/trainer-gym-ai/privacy/',
    languages: {
      'en-US': 'https://leaftok.app/trainer-gym-ai/privacy/',
    },
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'In\u00edcio', url: '/' },
  { label: 'Trainer Gym AI Pol\u00edtica de Privacidade', url: '/pt-br/trainer-gym-ai/privacy/' },
];

export default function TrainerGymAIPrivacyPagePtBR() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Pol&iacute;tica de Privacidade
          </h1>
          <p className="text-xl text-text-secondary mb-4">
            Trainer Gym AI
          </p>
          <p className="text-sm text-text-secondary mb-8">
            <Link
              href="/trainer-gym-ai/privacy/"
              className="text-primary hover:underline"
            >
              Read in English
            </Link>
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-text-secondary text-lg">
              &Uacute;ltima atualiza&ccedil;&atilde;o: Mar&ccedil;o de 2026
            </p>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Introdu&ccedil;&atilde;o</h2>
              <p className="text-text-secondary">
                O Trainer Gym AI (&quot;n&oacute;s&quot;, &quot;nosso&quot; ou &quot;nos&quot;) est&aacute;
                comprometido em proteger sua privacidade. Esta Pol&iacute;tica de Privacidade explica como
                coletamos, usamos, compartilhamos e protegemos suas informa&ccedil;&otilde;es quando
                voc&ecirc; usa nosso aplicativo m&oacute;vel, incluindo o uso de intelig&ecirc;ncia
                artificial para gerar planos de treino personalizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Informa&ccedil;&otilde;es que Coletamos</h2>
              <p className="text-text-secondary mb-4">
                Para fornecer planos de treino personalizados, coletamos as seguintes informa&ccedil;&otilde;es
                durante o cadastro e uso do aplicativo:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Dados do Perfil:</strong> Nome, idade, g&ecirc;nero e n&iacute;vel de
                  experi&ecirc;ncia f&iacute;sica.
                </li>
                <li>
                  <strong>Dados de Sa&uacute;de:</strong> Altura, peso, percentual de gordura corporal
                  (se fornecido), les&otilde;es existentes e condi&ccedil;&otilde;es m&eacute;dicas
                  relevantes para exerc&iacute;cios.
                </li>
                <li>
                  <strong>Medidas Corporais:</strong> Medidas de peito, cintura, quadril, bra&ccedil;o
                  e perna (se fornecidas) para acompanhamento de progresso.
                </li>
                <li>
                  <strong>Objetivos de Fitness:</strong> Seus objetivos de treino como ganho muscular,
                  perda de gordura, resist&ecirc;ncia, flexibilidade ou condicionamento geral.
                </li>
                <li>
                  <strong>Prefer&ecirc;ncias de Treino:</strong> Equipamentos dispon&iacute;veis,
                  frequ&ecirc;ncia de treino, dura&ccedil;&atilde;o das sess&otilde;es e
                  prefer&ecirc;ncias de exerc&iacute;cios.
                </li>
                <li>
                  <strong>Registros de Treino:</strong> Exerc&iacute;cios realizados, s&eacute;ries,
                  repeti&ccedil;&otilde;es, pesos e dados de conclus&atilde;o de treinos.
                </li>
                <li>
                  <strong>An&aacute;lise de Uso:</strong> Estat&iacute;sticas an&ocirc;nimas de uso
                  para nos ajudar a melhorar a experi&ecirc;ncia do aplicativo. Nenhuma
                  informa&ccedil;&atilde;o pessoal identific&aacute;vel &eacute; inclu&iacute;da
                  nas an&aacute;lises.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">
                Como Usamos Intelig&ecirc;ncia Artificial
              </h2>
              <p className="text-text-secondary mb-4">
                O Trainer Gym AI usa a API da OpenAI para gerar planos de treino personalizados com
                base no seu perfil. Veja exatamente o que acontece:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Quais dados s&atilde;o enviados &agrave; OpenAI:</strong> Suas
                  informa&ccedil;&otilde;es de perfil (idade, g&ecirc;nero, n&iacute;vel de
                  condicionamento), dados de sa&uacute;de (altura, peso, les&otilde;es), medidas
                  corporais, objetivos de fitness e prefer&ecirc;ncias de treino s&atilde;o enviados
                  &agrave; API da OpenAI para gerar seu plano de treino personalizado.
                </li>
                <li>
                  <strong>Quando os dados s&atilde;o enviados:</strong> Os dados s&atilde;o enviados
                  &agrave; OpenAI apenas quando voc&ecirc; solicita explicitamente um novo plano de
                  treino ou atualiza&ccedil;&atilde;o de plano. Isso acontece ap&oacute;s voc&ecirc;
                  revisar e consentir com o compartilhamento de dados na tela de consentimento.
                </li>
                <li>
                  <strong>Como a OpenAI processa seus dados:</strong> A OpenAI processa seus dados
                  de acordo com sua{' '}
                  <a
                    href="https://openai.com/policies/api-data-usage-policies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Pol&iacute;tica de Uso de Dados da API
                  </a>
                  . Importante: dados enviados atrav&eacute;s da API <strong>n&atilde;o s&atilde;o
                  usados para treinar os modelos da OpenAI</strong>. Seus dados s&atilde;o retidos
                  pela OpenAI por at&eacute; 30 dias para monitoramento de abuso, ap&oacute;s o que
                  s&atilde;o exclu&iacute;dos.
                </li>
                <li>
                  <strong>Sem venda de dados:</strong> N&atilde;o vendemos seus dados pessoais para a
                  OpenAI ou qualquer outro terceiro. Os dados s&atilde;o compartilhados exclusivamente
                  para a finalidade de gerar seu plano de treino.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Consentimento e Controle</h2>
              <p className="text-text-secondary mb-4">
                Antes de qualquer dado ser enviado &agrave; OpenAI para gera&ccedil;&atilde;o de plano
                por IA:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  Voc&ecirc; ver&aacute; uma tela de consentimento explicando claramente quais dados
                  ser&atilde;o compartilhados e como ser&atilde;o usados.
                </li>
                <li>
                  A gera&ccedil;&atilde;o do plano por IA s&oacute; ocorre ap&oacute;s voc&ecirc;
                  tocar em &quot;Concordo e Continuar&quot; na tela de consentimento.
                </li>
                <li>
                  Voc&ecirc; pode usar o aplicativo sem planos gerados por IA recusando o
                  consentimento. Nesse caso, voc&ecirc; pode criar e gerenciar seus planos de treino
                  manualmente.
                </li>
                <li>
                  Voc&ecirc; pode retirar seu consentimento a qualquer momento nas
                  configura&ccedil;&otilde;es do aplicativo. Os planos existentes permanecer&atilde;o,
                  mas nenhuma nova solicita&ccedil;&atilde;o de IA ser&aacute; feita.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Como Usamos Suas Informa&ccedil;&otilde;es</h2>
              <p className="text-text-secondary mb-4">Usamos as informa&ccedil;&otilde;es coletadas para:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Gerar planos de treino personalizados com IA</li>
                <li>Acompanhar seu progresso e hist&oacute;rico de treinos</li>
                <li>Adaptar e atualizar planos de treino com base no seu progresso</li>
                <li>Enviar lembretes de treino nos hor&aacute;rios de sua prefer&ecirc;ncia</li>
                <li>Exibir gr&aacute;ficos de progresso e tend&ecirc;ncias de medidas corporais</li>
                <li>Melhorar e otimizar a experi&ecirc;ncia do aplicativo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Armazenamento e Seguran&ccedil;a de Dados</h2>
              <p className="text-text-secondary">
                Seus registros de treino, informa&ccedil;&otilde;es de sa&uacute;de e
                prefer&ecirc;ncias s&atilde;o armazenados localmente no seu dispositivo. Os dados
                do perfil usados para gera&ccedil;&atilde;o de plano por IA s&atilde;o transmitidos
                com seguran&ccedil;a usando criptografia padr&atilde;o da ind&uacute;stria
                (TLS/HTTPS). N&atilde;o mantemos um banco de dados central com seus dados de
                sa&uacute;de em nossos servidores. Implementamos medidas de seguran&ccedil;a
                t&eacute;cnicas e organizacionais apropriadas para proteger contra acesso
                n&atilde;o autorizado, altera&ccedil;&atilde;o ou destrui&ccedil;&atilde;o de
                seus dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Servi&ccedil;os de Terceiros</h2>
              <p className="text-text-secondary mb-4">
                Nosso aplicativo utiliza os seguintes servi&ccedil;os de terceiros:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>API da OpenAI:</strong> Para gerar planos de treino personalizados. Os
                  dados compartilhados s&atilde;o limitados a dados de perfil, sa&uacute;de e
                  medidas conforme descrito acima. Veja a{' '}
                  <a
                    href="https://openai.com/policies/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Pol&iacute;tica de Privacidade da OpenAI
                  </a>
                  .
                </li>
                <li>
                  <strong>An&aacute;lises:</strong> Usamos an&aacute;lises an&ocirc;nimas para
                  entender como os usu&aacute;rios interagem com nosso aplicativo. Nenhuma
                  informa&ccedil;&atilde;o pessoal identific&aacute;vel &eacute; compartilhada.
                </li>
                <li>
                  <strong>Lojas de Aplicativos:</strong> A Apple App Store e a Google Play Store
                  possuem suas pr&oacute;prias pol&iacute;ticas de privacidade que regem a
                  distribui&ccedil;&atilde;o de aplicativos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Seus Direitos</h2>
              <p className="text-text-secondary mb-4">Voc&ecirc; tem o direito de:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Acessar os dados que temos sobre voc&ecirc;</li>
                <li>Solicitar a exclus&atilde;o dos seus dados</li>
                <li>Retirar o consentimento para processamento de dados por IA a qualquer momento</li>
                <li>Desativar a coleta de an&aacute;lises</li>
                <li>Desativar notifica&ccedil;&otilde;es a qualquer momento</li>
                <li>Exportar seus dados de treino</li>
                <li>Excluir todos os dados locais do aplicativo desinstalando o app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Reten&ccedil;&atilde;o de Dados</h2>
              <p className="text-text-secondary">
                Seus dados locais do aplicativo s&atilde;o mantidos no seu dispositivo at&eacute;
                voc&ecirc; excluir o aplicativo ou limpar os dados do app. Os dados enviados &agrave;
                OpenAI atrav&eacute;s de sua API s&atilde;o retidos por at&eacute; 30 dias para
                monitoramento de abuso e uso indevido, sendo ent&atilde;o exclu&iacute;dos
                automaticamente. N&atilde;o mantemos c&oacute;pias dos dados enviados &agrave; OpenAI
                em nossos pr&oacute;prios servidores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Privacidade de Crian&ccedil;as</h2>
              <p className="text-text-secondary">
                Nosso aplicativo n&atilde;o &eacute; destinado a crian&ccedil;as menores de 13 anos.
                N&atilde;o coletamos intencionalmente informa&ccedil;&otilde;es pessoais de
                crian&ccedil;as menores de 13 anos. Se voc&ecirc; &eacute; pai, m&atilde;e ou
                respons&aacute;vel e acredita que seu filho nos forneceu informa&ccedil;&otilde;es
                pessoais, entre em contato conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Altera&ccedil;&otilde;es nesta Pol&iacute;tica</h2>
              <p className="text-text-secondary">
                Podemos atualizar esta Pol&iacute;tica de Privacidade periodicamente. Notificaremos
                voc&ecirc; sobre quaisquer altera&ccedil;&otilde;es publicando a nova Pol&iacute;tica
                de Privacidade nesta p&aacute;gina e atualizando a data de &quot;&Uacute;ltima
                atualiza&ccedil;&atilde;o&quot;. Para altera&ccedil;&otilde;es significativas,
                tamb&eacute;m notificaremos voc&ecirc; atrav&eacute;s do aplicativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Fale Conosco</h2>
              <p className="text-text-secondary">
                Se voc&ecirc; tiver d&uacute;vidas sobre esta Pol&iacute;tica de Privacidade ou
                sobre como seus dados s&atilde;o tratados, entre em contato conosco em{' '}
                <a
                  href="mailto:contact@leaftok.app"
                  className="text-primary hover:underline"
                >
                  contact@leaftok.app
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voltar ao In&iacute;cio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
