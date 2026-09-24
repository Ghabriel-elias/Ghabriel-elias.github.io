import { Link } from "@/components/Link";

export const title = "Termos de Uso · Broto";

export const description = "As regras de uso do Broto e os limites do que a análise por foto pode dizer.";

export function Body() {
  return (
    <>
      <h1>Termos de Uso</h1>
      <p className="updated">Vigente desde 22 de agosto de 2026</p>

      <p className="intro">Ao criar uma conta no Broto você concorda com estes termos. Se não concordar com alguma parte, não use o app.</p>

      <h2>O que o Broto faz</h2>
      <p>O Broto é um aplicativo de apoio ao cuidado de plantas. Você fotografa uma planta e recebe uma sugestão de espécie, um diagnóstico diferencial e um plano de cuidado. O app também tem o <strong>Brotinho</strong>, um assistente que responde dúvidas sobre cuidado de planta por escrito.</p>

      <div className="callout warn">
        <p className="title">Sugestão automática, não laudo</p>
        <p>A identificação, o diagnóstico e as respostas do Brotinho são gerados por um modelo de inteligência artificial. <strong>Eles podem estar errados.</strong> São ponto de partida para você observar sua planta, não parecer técnico.</p>
        <p>O Broto <strong>não</strong> substitui agrônomo, botânico ou veterinário.</p>
      </div>

      <div className="callout danger">
        <p className="title">Nunca use o Broto para decidir se algo é comestível</p>
        <p>O app não informa comestibilidade e não deve ser usado para essa finalidade em nenhuma hipótese. Plantas comestíveis têm sósias tóxicas, e um erro aqui pode ser fatal.</p>
        <p>O alerta de toxicidade para animais é informativo e baseado na espécie sugerida. Diante de qualquer suspeita de ingestão pelo seu pet, procure um veterinário imediatamente — não consulte o app.</p>
      </div>

      <h2>Tratamento de pragas e doenças</h2>
      <p>Quando o app sugere tratamento, ele prioriza manejo cultural — podar a folha afetada, rever quando regar, melhorar a ventilação, isolar a planta. Quando menciona um produto, indica apenas a categoria. <strong>O Broto nunca informa dosagem de defensivo.</strong> Siga sempre o rótulo do fabricante.</p>

      <h2>Sua conta</h2>
      <ul>
        <li>Você precisa ter 13 anos ou mais para criar uma conta.</li>
        <li>Os dados que você informa devem ser verdadeiros.</li>
        <li>Você é responsável por manter sua senha em segurança.</li>
        <li>Uma conta pertence a uma pessoa; não a compartilhe.</li>
      </ul>

      <h2>Suas fotos</h2>
      <p>As fotos que você envia continuam sendo suas. Você nos concede apenas a licença necessária para armazená-las na sua conta, enviá-las ao modelo de visão e exibi-las de volta para você dentro do app. Não usamos suas fotos em material de divulgação nem as tornamos públicas.</p>

      <h2>O que não é permitido</h2>
      <ul>
        <li>Usar o app para fins ilícitos, incluindo identificar plantas de cultivo proibido.</li>
        <li>Tentar burlar os limites de análise ou o sistema de créditos.</li>
        <li>Fazer engenharia reversa, automatizar requisições ou sobrecarregar o serviço.</li>
        <li>Enviar imagens de terceiros sem autorização, ou conteúdo ofensivo e ilegal.</li>
      </ul>
      <p>Contas que descumprirem estas regras podem ser suspensas ou encerradas.</p>

      <h2>Assinatura</h2>
      <p>O Broto oferece três dias de teste com acesso completo a partir do cadastro, análises avulsas pagas e uma assinatura completa com até 40 análises e 150 mensagens do Brotinho por mês. As condições completas, incluindo preços, cancelamento e reembolso, estão em <Link href="/reembolso">Assinatura e reembolso</Link>.</p>

      <h3>Limite de uso justo</h3>
      <p>As <strong>40 análises por mês</strong> valem para as análises do seu plano. <strong>Análises avulsas compradas ficam fora desse limite</strong> — você pode usá-las mesmo com o mês cheio. Acima disso, cada conta pode fazer no máximo <strong>50 análises por dia</strong>, contando tudo, e enviar no máximo <strong>150 mensagens por mês</strong> ao Brotinho, com no máximo <strong>30 por dia</strong>. Nenhum plano do Broto é ilimitado. O contador zera à meia-noite no horário UTC (21h em Brasília). O teto diário existe para proteger o serviço contra uso automatizado e contas compartilhadas — em uso normal ninguém chega perto dele. Análises que falham não contam para o limite.</p>

      <h3>Quem vende a assinatura</h3>
      <p>As assinaturas são vendidas pela <strong>App Store</strong> ou pelo <strong>Google Play</strong>, conforme onde você baixou o app. São elas que cobram, emitem o comprovante e processam reembolsos. Estes Termos regulam o uso do Broto; a compra em si segue também as condições da loja em que foi feita.</p>

      <h2>Condições exigidas pela Apple</h2>
      <p>Se você usa o Broto em um aparelho Apple, valem também as condições abaixo, exigidas pela App Store:</p>
      <ul>
        <li>Este contrato é firmado entre você e 61.021.870 Ghabriel Elias Fonseca de Souza, <strong>não com a Apple</strong>. A Apple não é responsável pelo app nem pelo seu conteúdo.</li>
        <li>A licença de uso é pessoal, intransferível e limitada aos aparelhos Apple que você possui ou controla, conforme as Regras de Uso da App Store.</li>
        <li>O suporte e a manutenção do app são responsabilidade nossa. A Apple não tem qualquer obrigação de prestá-los.</li>
        <li>Se o app não atender a alguma garantia aplicável, você pode notificar a Apple, que reembolsará o valor pago. No limite da lei, essa é a única obrigação da Apple quanto a garantias.</li>
        <li>Somos responsáveis por reclamações suas ou de terceiros a respeito do app, incluindo responsabilidade civil, adequação a normas e alegações de violação de propriedade intelectual.</li>
        <li>Você declara não estar em país sob embargo do governo dos Estados Unidos nem em lista de partes proibidas.</li>
        <li>A Apple e suas subsidiárias são terceiras beneficiárias destes Termos e podem exigir o cumprimento deles diretamente de você.</li>
      </ul>

      <h2>Disponibilidade</h2>
      <p>Trabalhamos para manter o app no ar, mas não garantimos funcionamento ininterrupto. Podemos alterar, suspender ou descontinuar funcionalidades, avisando com antecedência razoável quando a mudança for relevante.</p>

      <h2>Limitação de responsabilidade</h2>
      <p>Nos limites permitidos pela legislação brasileira, não respondemos por danos decorrentes de decisões que você tome com base nas sugestões do app, incluindo perda ou morte de plantas. Nada aqui afasta os direitos que o Código de Defesa do Consumidor garante a você.</p>

      <h2>Lei aplicável</h2>
      <p>Estes termos são regidos pelas leis brasileiras. Fica eleito o foro do seu domicílio para resolver qualquer controvérsia, conforme o Código de Defesa do Consumidor.</p>
    </>
  );
}
