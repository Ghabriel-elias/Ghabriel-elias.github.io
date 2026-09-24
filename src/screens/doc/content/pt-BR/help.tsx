import { Link } from "@/components/Link";

export const title = "Ajuda · Broto";

export const description = "Dúvidas frequentes sobre análises, créditos, lembretes de cuidado e conta no Broto.";

export function Body() {
  return (
    <>
      <h1>Ajuda</h1>

      <p className="intro">As dúvidas que mais aparecem. Se a sua não estiver aqui, escreva para <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>.</p>

      <h2>Como funciona a análise</h2>
      <p>Você fotografa a planta e pronto — o app não pergunta nada antes. A foto vai para um modelo de visão que devolve a espécie, os cuidados dela, e, quando há algo errado, uma lista ranqueada de causas prováveis com um teste que você faz em casa para descobrir qual é.</p>

      <h3>Por que não vem uma causa só?</h3>
      <p>Porque a mesma folha amarela significa coisas opostas dependendo do contexto: regada ontem e amarelando é excesso de água; duas semanas sem água e amarelando é o contrário. Em vez de encher você de perguntas antes, o app mostra as causas em ordem de probabilidade e explica como separar uma da outra.</p>

      <h3>O que é o “Como confirmar”?</h3>
      <p>O teste que desempata. Por exemplo: enfie o dedo três centímetros na terra — se sair úmido, é excesso de água, não é fungo. Às vezes ele pede para virar uma folha e olhar embaixo, que é onde moram cochonilha e ácaro.</p>

      <h3>Ele não reconheceu a espécie</h3>
      <p>Um close da folha doente às vezes não mostra o suficiente para identificar a planta. Nesses casos preferimos dizer que não sabemos a chutar errado. Fotografe a planta inteira e tente de novo.</p>

      <h3>A foto ficou ruim, perdi uma análise?</h3>
      <p>Não. Quando a gente não consegue ler a sua foto, o crédito volta para você automaticamente e avisamos na tela.</p>

      <h2>Análises e créditos</h2>

      <h3>Quantas análises eu tenho?</h3>
      <p>Você começa com <strong>3</strong>: a do mês mais <strong>2 de boas-vindas</strong>. As de boas-vindas são <strong>uma vez só</strong> — não voltam no mês seguinte, mas também não vencem: ficam guardadas até você usar. Depois delas é <strong>1 por mês</strong>, renovada no dia 1º. Acabando, você pode comprar análises avulsas ou assinar. A assinatura dá até <strong>40 análises por mês</strong> e <strong>150 mensagens por mês</strong> com o Brotinho, com limite de 30 mensagens por dia.</p>

      <h2>Brotinho</h2>

      <h3>O que ele responde?</h3>
      <p>Dúvidas de cuidado de planta. Ele enxerga os dados das plantas que você cadastrou, então dá para perguntar sobre uma delas direto. O que ele não faz: dosagem de defensivo e dizer se alguma planta é comestível.</p>

      <h3>Acabaram minhas mensagens</h3>
      <p>São <strong>150 por mês</strong>, com limite de 30 por dia, e renovam no dia 1º. O Brotinho vem no plano completo e também pode ser assinado sozinho.</p>

      <h2>Lembretes de cuidado</h2>

      <h3>O aviso chegou atrasado</h3>
      <p>No Android, a economia de bateria pode atrasar notificações em alguns minutos — é uma limitação do sistema. Para reduzir isso, libere o Broto na configuração de otimização de bateria do aparelho.</p>

      <h3>Não recebo nenhum lembrete</h3>
      <p>Confira se a permissão de notificação está ativa nas configurações do aparelho e se o lembrete está ligado tanto no geral quanto naquela planta específica, em <strong>Perfil → Notificações</strong>.</p>

      <h3>O horário está errado</h3>
      <p>O lembrete usa o fuso horário salvo no seu perfil. Se você mudou de país, atualize em <strong>Perfil → Editar perfil</strong>.</p>

      <h2>Conta e dados</h2>

      <h3>Como excluo minha conta?</h3>
      <p>Em <strong>Perfil → Excluir minha conta</strong>. O passo a passo completo, e o que acontece com cada dado, está em <Link href="/exclusao">Excluir conta e dados</Link>.</p>

      <h3>Troquei de celular, perco minhas plantas?</h3>
      <p>Não. Tudo fica salvo na sua conta. Entre com o mesmo login no aparelho novo e suas plantas estarão lá.</p>

      <h3>Esqueci minha senha</h3>
      <p>Na tela de entrar com e-mail, toque em “Esqueci minha senha”. O link de redefinição chega no seu e-mail.</p>

      <h2>Falar com a gente</h2>
      <p>Escreva para <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>. Respondemos em até 3 dias úteis. Se for um problema técnico, mande junto a versão do app e o modelo do aparelho — o botão “Ajuda e contato” dentro do app já preenche isso para você.</p>
    </>
  );
}
