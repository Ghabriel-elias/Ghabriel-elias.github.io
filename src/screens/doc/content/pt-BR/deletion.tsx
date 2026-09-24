import { Link } from "@/components/Link";

export const title = "Excluir conta e dados · Broto";

export const description = "Como pedir a exclusão da sua conta do Broto e de todos os dados ligados a ela, com ou sem o app instalado.";

export function Body() {
  return (
    <>
      <h1>Excluir conta e dados</h1>
      <p className="updated">Vigente desde 22 de agosto de 2026</p>

      <p className="intro">Esta página explica como pedir a exclusão da sua conta do Broto e de todos os dados ligados a ela, com ou sem o app instalado.</p>

      <h2>Pelo app</h2>
      <p>É o caminho mais rápido, e a exclusão é imediata:</p>
      <ul>
        <li>Abra o Broto e vá em <strong>Perfil</strong>.</li>
        <li>Toque em <strong>Excluir minha conta</strong>.</li>
        <li>Confirme digitando <strong>EXCLUIR</strong>.</li>
      </ul>

      <h2>Sem o app instalado</h2>
      <p>Se você já desinstalou, escreva para <a href="mailto:falecombroto@gmail.com?subject=Exclus%C3%A3o%20de%20conta">falecombroto@gmail.com</a> com o assunto <strong>Exclusão de conta</strong>, enviando do mesmo e-mail cadastrado no app. Confirmamos o pedido em até 3 dias úteis.</p>

      <h2>O que é apagado</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Dado</th><th>O que acontece</th><th>Prazo</th></tr></thead>
          <tbody>
            <tr><td>Conta e login</td><td>Excluída</td><td>Imediato</td></tr>
            <tr><td>Plantas cadastradas</td><td>Excluídas</td><td>Imediato</td></tr>
            <tr><td>Fotos enviadas</td><td>Excluídas do armazenamento</td><td>Até 30 dias</td></tr>
            <tr><td>Histórico de análises</td><td>Excluído</td><td>Até 30 dias</td></tr>
            <tr><td>Conversas com o Brotinho</td><td>Excluídas</td><td>Imediato</td></tr>
            <tr><td>Lembretes de cuidado</td><td>Cancelados</td><td>Imediato</td></tr>
            <tr><td>Registros de acesso</td><td>Mantidos isoladamente por obrigação legal</td><td>6 meses</td></tr>
          </tbody>
        </table>
      </div>
      <p>Os registros de acesso são preservados pelo prazo do art. 15 do Marco Civil da Internet. Eles não identificam suas plantas nem suas fotos, e não são usados para nenhuma outra finalidade.</p>

      <div className="callout danger">
        <p className="title">Cancele a assinatura antes</p>
        <p>Excluir a conta <strong>não</strong> cancela uma assinatura ativa: ela pertence à sua conta da App Store ou do Google Play. Cancele lá primeiro, seguindo o passo a passo em <Link href="/reembolso">Assinatura e reembolso</Link>, senão a cobrança continua.</p>
      </div>

      <div className="callout warn">
        <p className="title">Não tem volta</p>
        <p>Não guardamos backup para restaurar contas excluídas. Se quiser manter o histórico das suas plantas, anote antes de confirmar.</p>
      </div>
    </>
  );
}
