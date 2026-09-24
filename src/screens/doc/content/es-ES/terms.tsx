import { Link } from "@/components/Link";

export const title = "Términos de Uso · Broto";

export const description = "Las reglas de uso de Broto y los límites de lo que un análisis por foto puede decir.";

export function Body() {
  return (
    <>
      <h1>Términos de Uso</h1>
      <p className="updated">Vigente desde el 22 de agosto de 2026</p>

      <p className="intro">Al crear una cuenta en Broto aceptas estos términos. Si no estás de acuerdo con alguna parte, no uses la app.</p>

      <h2>Qué hace Broto</h2>
      <p>Broto es una aplicación de apoyo al cuidado de plantas. Fotografías una planta y recibes una sugerencia de especie, un diagnóstico diferencial y un plan de cuidado. La app también tiene a <strong>Brotinho</strong>, un asistente que responde por escrito dudas sobre el cuidado de las plantas.</p>

      <div className="callout warn">
        <p className="title">Sugerencia automática, no dictamen</p>
        <p>La identificación, el diagnóstico y las respuestas de Brotinho los genera un modelo de inteligencia artificial. <strong>Pueden estar equivocados.</strong> Son un punto de partida para observar tu planta, no un informe técnico.</p>
        <p>Broto <strong>no</strong> sustituye a un agrónomo, un botánico ni un veterinario.</p>
      </div>

      <div className="callout danger">
        <p className="title">Nunca uses Broto para decidir si algo es comestible</p>
        <p>La app no informa sobre comestibilidad y no debe usarse con esa finalidad bajo ninguna circunstancia. Las plantas comestibles tienen sosias tóxicas, y un error aquí puede ser mortal.</p>
        <p>La alerta de toxicidad para animales es informativa y se basa en la especie sugerida. Ante cualquier sospecha de ingestión por parte de tu mascota, acude a un veterinario de inmediato — no consultes la app.</p>
      </div>

      <h2>Tratamiento de plagas y enfermedades</h2>
      <p>Cuando la app sugiere un tratamiento, prioriza el manejo cultural — podar la hoja afectada, ajustar el riego, mejorar la ventilación, aislar la planta. Cuando menciona un producto, indica solo la categoría. <strong>Broto nunca informa dosis de plaguicidas.</strong> Sigue siempre la etiqueta del fabricante.</p>

      <h2>Tu cuenta</h2>
      <ul>
        <li>Debes tener 13 años o más para crear una cuenta.</li>
        <li>Los datos que facilites deben ser verdaderos.</li>
        <li>Eres responsable de mantener tu contraseña segura.</li>
        <li>Una cuenta pertenece a una persona; no la compartas.</li>
      </ul>

      <h2>Tus fotos</h2>
      <p>Las fotos que envías siguen siendo tuyas. Nos concedes solo la licencia necesaria para almacenarlas en tu cuenta, enviarlas al modelo de visión y mostrártelas de vuelta dentro de la app. No usamos tus fotos en material de difusión ni las hacemos públicas.</p>

      <h2>Lo que no está permitido</h2>
      <ul>
        <li>Usar la app con fines ilícitos, incluida la identificación de plantas de cultivo prohibido.</li>
        <li>Intentar burlar los límites de análisis o el sistema de créditos.</li>
        <li>Hacer ingeniería inversa, automatizar peticiones o sobrecargar el servicio.</li>
        <li>Subir imágenes de terceros sin autorización, o contenido ofensivo e ilegal.</li>
      </ul>
      <p>Las cuentas que incumplan estas reglas pueden ser suspendidas o cerradas.</p>

      <h2>Suscripción</h2>
      <p>Broto ofrece tres días de prueba con acceso completo desde el registro, análisis sueltos de pago y una suscripción completa con hasta 40 análisis y 150 mensajes de Brotinho al mes. Las condiciones completas, incluidos precios, cancelación y reembolso, están en <Link href="/es/reembolso">Suscripción y reembolsos</Link>.</p>

      <h3>Límite de uso razonable</h3>
      <p>Los <strong>40 análisis al mes</strong> se aplican a los análisis incluidos en tu plan. <strong>Los análisis sueltos que compras quedan fuera de ese límite</strong> — puedes usarlos aunque el mes esté completo. Por encima de eso, cada cuenta puede hacer como máximo <strong>50 análisis al día</strong>, contándolo todo, y enviar como máximo <strong>150 mensajes al mes</strong> a Brotinho, con un máximo de <strong>30 al día</strong>. Ningún plan de Broto es ilimitado. El contador se reinicia a medianoche UTC. El tope diario existe para proteger el servicio del uso automatizado y de las cuentas compartidas — en uso normal nadie se acerca. Los análisis fallidos no cuentan para el límite.</p>

      <h3>Quién vende la suscripción</h3>
      <p>Las suscripciones las vende la <strong>App Store</strong> o <strong>Google Play</strong>, según dónde hayas descargado la app. Son ellas las que cobran, emiten el comprobante y procesan los reembolsos. Estos Términos regulan el uso de Broto; la compra en sí sigue también las condiciones de la tienda donde se hizo.</p>

      <h2>Condiciones exigidas por Apple</h2>
      <p>Si usas Broto en un dispositivo Apple, se aplican también las condiciones siguientes, exigidas por la App Store:</p>
      <ul>
        <li>Este contrato se celebra entre tú y 61.021.870 Ghabriel Elias Fonseca de Souza, <strong>no con Apple</strong>. Apple no es responsable de la app ni de su contenido.</li>
        <li>La licencia de uso es personal, intransferible y limitada a los dispositivos Apple que poseas o controles, conforme a las Reglas de Uso de la App Store.</li>
        <li>El soporte y el mantenimiento de la app son responsabilidad nuestra. Apple no tiene ninguna obligación de prestarlos.</li>
        <li>Si la app no cumple alguna garantía aplicable, puedes notificarlo a Apple, que reembolsará el importe pagado. En la máxima medida permitida por la ley, esa es la única obligación de Apple en materia de garantías.</li>
        <li>Somos responsables de las reclamaciones tuyas o de terceros relativas a la app, incluidas responsabilidad por producto, cumplimiento normativo y alegaciones de infracción de propiedad intelectual.</li>
        <li>Declaras no encontrarte en un país sujeto a embargo del Gobierno de los Estados Unidos ni figurar en ninguna lista de partes prohibidas.</li>
        <li>Apple y sus filiales son terceros beneficiarios de estos Términos y pueden exigir su cumplimiento directamente frente a ti.</li>
      </ul>

      <h2>Disponibilidad</h2>
      <p>Trabajamos para mantener la app en funcionamiento, pero no garantizamos un servicio ininterrumpido. Podemos modificar, suspender o descontinuar funciones, avisando con antelación razonable cuando el cambio sea relevante.</p>

      <h2>Limitación de responsabilidad</h2>
      <p>En los límites permitidos por la legislación brasileña, no respondemos por daños derivados de decisiones que tomes basándote en las sugerencias de la app, incluida la pérdida o muerte de plantas. Nada de lo aquí dispuesto afecta a los derechos que te reconoce el Código de Defensa del Consumidor brasileño.</p>

      <h2>Ley aplicable</h2>
      <p>Estos términos se rigen por las leyes brasileñas. Se elige el fuero de tu domicilio para resolver cualquier controversia, conforme al Código de Defensa del Consumidor.</p>
    </>
  );
}
