import { Link } from "@/components/Link";

export const title = "Eliminar cuenta y datos · Broto";

export const description = "Cómo solicitar la eliminación de tu cuenta de Broto y de todos los datos asociados, con o sin la app instalada.";

export function Body() {
  return (
    <>
      <h1>Eliminar cuenta y datos</h1>
      <p className="updated">Vigente desde el 22 de agosto de 2026</p>

      <p className="intro">Esta página explica cómo solicitar la eliminación de tu cuenta de Broto y de todo lo asociado a ella, con o sin la app instalada.</p>

      <h2>Desde la app</h2>
      <p>Es el camino más rápido, y la eliminación es inmediata:</p>
      <ul>
        <li>Abre Broto y ve a <strong>Perfil</strong>.</li>
        <li>Toca <strong>Eliminar mi cuenta</strong>.</li>
        <li>Confirma escribiendo <strong>EXCLUIR</strong>.</li>
      </ul>

      <h2>Sin la app instalada</h2>
      <p>Si ya la desinstalaste, escribe a <a href="mailto:falecombroto@gmail.com?subject=Eliminaci%C3%B3n%20de%20cuenta">falecombroto@gmail.com</a> con el asunto <strong>Eliminación de cuenta</strong>, desde el mismo correo registrado en la app. Confirmamos la solicitud en un máximo de 3 días hábiles.</p>

      <h2>Qué se borra</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Dato</th><th>Qué ocurre</th><th>Plazo</th></tr></thead>
          <tbody>
            <tr><td>Cuenta y acceso</td><td>Eliminada</td><td>Inmediato</td></tr>
            <tr><td>Plantas registradas</td><td>Eliminadas</td><td>Inmediato</td></tr>
            <tr><td>Fotos enviadas</td><td>Eliminadas del almacenamiento</td><td>Hasta 30 días</td></tr>
            <tr><td>Historial de análisis</td><td>Eliminado</td><td>Hasta 30 días</td></tr>
            <tr><td>Conversaciones con Brotinho</td><td>Eliminadas</td><td>Inmediato</td></tr>
            <tr><td>Recordatorios de riego</td><td>Cancelados</td><td>Inmediato</td></tr>
            <tr><td>Registros de acceso</td><td>Conservados de forma aislada por obligación legal</td><td>6 meses</td></tr>
          </tbody>
        </table>
      </div>
      <p>Los registros de acceso se conservan por el plazo del art. 15 del Marco Civil de Internet brasileño. No identifican tus plantas ni tus fotos, y no se usan para ninguna otra finalidad.</p>

      <div className="callout danger">
        <p className="title">Cancela antes la suscripción</p>
        <p>Eliminar la cuenta <strong>no</strong> cancela una suscripción activa: pertenece a tu cuenta de la App Store o de Google Play. Cancélala allí primero, siguiendo los pasos de <Link href="/es/reembolso">Suscripción y reembolsos</Link>, o el cobro continuará.</p>
      </div>

      <div className="callout warn">
        <p className="title">No tiene vuelta atrás</p>
        <p>No guardamos copias para restaurar cuentas eliminadas. Si quieres conservar el historial de tus plantas, anótalo antes de confirmar.</p>
      </div>
    </>
  );
}
