import { Link } from "@/components/Link";

export const title = "Assinatura e reembolso · Broto";

export const description = "Preços das assinaturas do Broto, renovação automática, como cancelar e como pedir reembolso.";

export function Body() {
  return (
    <>
      <h1>Assinatura e reembolso</h1>
      <p className="updated">Vigente desde 20 de agosto de 2026</p>

      <p className="intro">Como funciona a cobrança do Broto, como cancelar e como pedir dinheiro de volta.</p>

      <h2>O que é gratuito</h2>
      <ul>
        <li><strong>3 para começar</strong> — a do mês mais 2 de boas-vindas, que são uma vez só e ficam guardadas até você usar — e <strong>1 por mês</strong> depois, renovada no dia 1º.</li>
        <li>Nos 3 primeiros dias depois do cadastro, tudo o que a assinatura completa tem é gratuito: análise, Brotinho e lembrete de todos os cuidados.</li>
        <li>Depois disso, cadastrar plantas, registrar a rega e receber o lembrete dela continua gratuito e sem limite de quantidade.</li>
      </ul>

      <h2>Análise avulsa</h2>
      <p>Terminado o teste, dá para comprar análise avulsa por <strong>R$ 1,90 cada</strong>, sem assinar nada. Elas não expiram e não há limite de quantas você pode comprar.</p>

      <h2>Assinaturas</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Plano</th><th>Preço</th><th>Cobrança</th></tr></thead>
          <tbody>
            <tr><td>Completo mensal</td><td>R$ 12,90</td><td>Renova todo mês</td></tr>
            <tr><td>Completo anual</td><td>R$ 119,90</td><td>Renova todo ano</td></tr>
          </tbody>
        </table>
      </div>
      <p>A assinatura completa dá até <strong>40 análises por mês</strong> e <strong>150 mensagens por mês</strong> com o Brotinho, sem gastar os créditos avulsos. Continua valendo o limite de <strong>30 mensagens por dia</strong> descrito nos <Link href="/termos">Termos de Uso</Link>.</p>
      <p>A assinatura é <strong>renovada automaticamente</strong> pela App Store ou pelo Google Play até que você cancele. A cobrança acontece na conta da loja, e nós não temos acesso aos dados do seu cartão.</p>

      <h2>Como cancelar</h2>
      <div className="callout warn">
        <p className="title">Cancelar não é a mesma coisa que reembolsar</p>
        <p>Cancelar impede as próximas cobranças. O período já pago continua valendo até o fim, e o valor dele não volta automaticamente — para isso é preciso pedir reembolso à loja.</p>
      </div>
      <ul>
        <li><strong>iPhone e iPad:</strong> Ajustes → seu nome → Assinaturas → Broto → Cancelar assinatura.</li>
        <li><strong>Android:</strong> Google Play → foto do perfil → Pagamentos e assinaturas → Assinaturas → Broto → Cancelar.</li>
      </ul>
      <p>Cancele pelo menos 24 horas antes da data de renovação, senão o próximo ciclo já terá sido cobrado.</p>

      <h2>Direito de arrependimento</h2>
      <div className="callout">
        <p className="title">7 dias, garantidos por lei</p>
        <p>O artigo 49 do Código de Defesa do Consumidor garante a você o direito de desistir da compra em até <strong>7 dias corridos</strong> a partir da contratação, com devolução integral do valor pago. Isso vale para as assinaturas do Broto contratadas no Brasil, independentemente da política das lojas.</p>
        <p>Se a loja recusar seu pedido dentro desse prazo, escreva para <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a> com o comprovante da compra que nós intermediamos junto a ela.</p>
      </div>

      <h2>Como pedir reembolso</h2>
      <p>Os pagamentos são processados pelas lojas, então o reembolso também passa por elas. Nós não temos acesso técnico para devolver o valor diretamente.</p>
      <ul>
        <li><strong>Apple:</strong> acesse <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>, entre com seu Apple ID, escolha a compra e solicite o reembolso.</li>
        <li><strong>Google Play:</strong> compras nas últimas 48 horas podem ser devolvidas direto na Play Store. Passado esse prazo, o pedido chega até nós e respondemos em até 3 dias úteis.</li>
      </ul>

      <h2>Excluir a conta não cancela a assinatura</h2>
      <div className="callout danger">
        <p>A assinatura pertence à sua conta da App Store ou do Google Play, não à sua conta do Broto. <strong>Cancele a assinatura na loja antes de excluir sua conta</strong> — caso contrário a cobrança continua mesmo sem o app. Veja <Link href="/exclusao">Excluir conta e dados</Link>.</p>
      </div>

      <h2>Mudança de preço</h2>
      <p>Se os valores mudarem, avisamos com antecedência dentro do app e por e-mail. O novo preço só passa a valer na renovação seguinte, e você pode cancelar antes disso.</p>
    </>
  );
}
