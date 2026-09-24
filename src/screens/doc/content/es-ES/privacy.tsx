import { Link } from "@/components/Link";

export const title = "Política de Privacidad · Broto";

export const description = "Qué datos recoge Broto, por qué, con quién los comparte y cómo ejercer tus derechos.";

export function Body() {
  return (
    <>
      <h1>Política de Privacidad</h1>
      <p className="updated">Vigente desde el 22 de agosto de 2026</p>

      <p className="intro">Broto identifica especies de plantas y sugiere diagnósticos a partir de fotos. Para eso necesitamos tratar algunos datos tuyos. Esta política explica cuáles, por qué, con quién los compartimos y cómo puedes borrarlo todo cuando quieras.</p>

      <h2>Quién trata tus datos</h2>
      <p>El responsable del tratamiento es:</p>

      <div className="table-wrap">
        <table>
          <tbody>
            <tr><td>Razón social</td><td>61.021.870 Ghabriel Elias Fonseca de Souza</td></tr>
            <tr><td>CNPJ</td><td>61.021.870/0001-31</td></tr>
            <tr><td>Dirección</td><td>Rua Cerejo Cruz, 583, Centro, Boa Vista/RR, 69.301-060, Brasil</td></tr>
            <tr><td>Contacto</td><td><a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a></td></tr>
          </tbody>
        </table>
      </div>

      <p>Escribe a esa dirección para ejercer cualquiera de los derechos descritos en esta política.</p>

      <h2>Datos que recogemos</h2>

      <div className="table-wrap">
        <table>
          <thead><tr><th>Dato</th><th>Por qué lo recogemos</th><th>Base legal</th></tr></thead>
          <tbody>
            <tr><td>Nombre y correo</td><td>Crear y autenticar tu cuenta, y enviar correos de confirmación y recuperación de contraseña.</td><td>Ejecución del contrato</td></tr>
            <tr><td>Fotos de las plantas</td><td>Enviarlas al modelo de visión que identifica la especie y evalúa la salud de la hoja, y guardar el historial de la planta en tu cuenta.</td><td>Ejecución del contrato</td></tr>
            <tr><td>Datos de las plantas</td><td>Apodo, habitación, intervalo de riego, historial de cuidados y recordatorios.</td><td>Ejecución del contrato</td></tr>
            <tr><td>Conversaciones con Brotinho</td><td>Tus preguntas y las respuestas del asistente. Las enviamos al proveedor de IA junto con los datos de la planta sobre la que preguntaste.</td><td>Ejecución del contrato</td></tr>
            <tr><td>Búsquedas de especie</td><td>El término que escribes en la búsqueda se envía al proveedor de IA para encontrar la especie.</td><td>Ejecución del contrato</td></tr>
            <tr><td>Valoración del análisis</td><td>Cuando marcas un análisis como útil o no, guardamos la respuesta para mejorar el servicio.</td><td>Interés legítimo</td></tr>
            <tr><td>Datos del dispositivo</td><td>Sistema operativo, versión de la app, idioma y zona horaria — para entregar los recordatorios a la hora correcta y darte soporte.</td><td>Interés legítimo</td></tr>
            <tr><td>Estado de la suscripción</td><td>Saber si tu cuenta es gratuita o Pro y cuántos análisis quedan.</td><td>Ejecución del contrato</td></tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        <p className="title">Lo que no recogemos</p>
        <p>No pedimos tu ubicación precisa. No leemos tu agenda, tus contactos ni tu galería — solo la foto que eliges enviar. No vendemos tus datos a nadie.</p>
      </div>

      <h2>Con quién los compartimos</h2>
      <p>Compartimos solo lo necesario para que la app funcione, con proveedores que actúan como encargados del tratamiento:</p>
      <ul>
        <li><strong>Supabase</strong> — base de datos, autenticación y almacenamiento de las fotos.</li>
        <li><strong>Anthropic</strong> — proveedor de inteligencia artificial. Recibe la foto para identificar la especie y evaluar su salud, tus mensajes en Brotinho junto con los datos de la planta en cuestión, y el término que escribes en la búsqueda. Todo lo envía nuestro servidor, nunca tu dispositivo directamente.</li>
        <li><strong>RevenueCat</strong> — gestiona el estado de la suscripción.</li>
        <li><strong>PostHog</strong> — monitoreo de errores. Solo recibe el informe técnico de una falla de la app: el mensaje del error, la pantalla en la que ocurrió, el modelo del aparato y la versión del sistema. No recibe tu nombre, tu correo ni tus fotos, y no lo usamos para seguir lo que haces en la app.</li>
        <li><strong>Apple y Google</strong> — procesan el pago. Nosotros nunca recibimos ni almacenamos los datos de tu tarjeta.</li>
      </ul>

      <h2>Transferencia internacional</h2>
      <p>Algunos de estos proveedores tratan datos fuera de Brasil. La transferencia se apoya en las garantías previstas en el art. 33 de la ley brasileña de protección de datos y en los contratos firmados con cada uno.</p>

      <h2>Cuánto tiempo los guardamos</h2>
      <p>Tus datos se guardan mientras exista tu cuenta. Al eliminarla desde la app, retiramos plantas, fotos, historial y recordatorios de nuestros servidores en un máximo de <strong>30 días</strong>.</p>
      <p>Algunas cosas salen antes, sin que tengas que pedirlo: las conversaciones con Brotinho sin uso durante <strong>30 días</strong> se eliminan, el historial de recordatorios entregados desaparece a los <strong>14 días</strong>, y los análisis que no guardaste como planta desaparecen a los <strong>7 días</strong>.</p>
      <p>Los registros que la ley nos obliga a conservar — como los de acceso a la aplicación, por el plazo del Marco Civil de Internet — se preservan de forma aislada incluso tras la eliminación.</p>

      <h2>Tus derechos</h2>
      <p>La ley te permite, en cualquier momento:</p>
      <ul>
        <li>confirmar que tratamos tus datos y acceder a lo que tenemos;</li>
        <li>corregir datos incompletos o desactualizados;</li>
        <li>pedir la anonimización, el bloqueo o la eliminación de datos innecesarios;</li>
        <li>solicitar la portabilidad de tus datos;</li>
        <li>saber con quién compartimos tus datos.</li>
      </ul>
      <p>La portabilidad no depende de solicitud: en la app, en <strong>Perfil › Exportar mis datos</strong>, descargas al momento un archivo JSON con plantas, tareas, historial de cuidados, análisis, conversaciones con Brotinho, recordatorios recibidos y enlaces a tus fotos.</p>
      <p>La eliminación de cuenta y datos está descrita en <Link href="/es/eliminar-cuenta">Eliminar cuenta y datos</Link>. Para lo demás, escribe a <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a> — respondemos en un máximo de 15 días.</p>

      <h2>Menores</h2>
      <p>Broto no está dirigido a menores de 13 años y no recogemos sus datos conscientemente. No preguntamos la edad al registrarse, así que no podemos detectarlo por nuestra cuenta. Si eres responsable de un menor de 13 años con cuenta en Broto, escribe a <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>: eliminamos la cuenta y sus datos.</p>

      <h2>Cambios en esta política</h2>
      <p>Cuando cambiemos algo relevante, te avisamos dentro de la app antes de que entre en vigor. La fecha de vigencia al inicio de esta página indica siempre la versión actual.</p>
    </>
  );
}
