import { Link } from "@/components/Link";

export const title = "Suscripción y reembolsos · Broto";

export const description = "Precios de las suscripciones de Broto, renovación automática, cómo cancelar y cómo pedir un reembolso.";

export function Body() {
  return (
    <>
      <h1>Suscripción y reembolsos</h1>
      <p className="updated">Vigente desde el 20 de agosto de 2026</p>

      <p className="intro">Cómo cobra Broto, cómo cancelar y cómo recuperar tu dinero.</p>

      <h2>Qué es gratuito</h2>
      <ul>
        <li><strong>3 para empezar</strong> — el del mes más 2 de bienvenida, que son una sola vez y se quedan ahí hasta que los uses — y <strong>1 al mes</strong> después, renovado el día 1.</li>
        <li>Durante los 3 primeros días después del registro, todo lo de la suscripción completa es gratuito: análisis, Brotinho y recordatorio de todos los cuidados.</li>
        <li>Después, registrar plantas, anotar riegos y recibir su recordatorio sigue siendo gratuito y sin límite de cantidad.</li>
      </ul>

      <h2>Análisis suelto</h2>
      <p>Terminada la prueba, puedes comprar análisis sueltos por <strong>R$ 1,90 cada uno</strong>, sin suscribirte. No caducan y no hay límite de cuántos puedes comprar.</p>

      <h2>Suscripciones</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Plan</th><th>Precio</th><th>Cobro</th></tr></thead>
          <tbody>
            <tr><td>Completo mensual</td><td>R$ 12,90</td><td>Se renueva cada mes</td></tr>
            <tr><td>Completo anual</td><td>R$ 119,90</td><td>Se renueva cada año</td></tr>
          </tbody>
        </table>
      </div>
      <p>La suscripción completa da hasta <strong>40 análisis al mes</strong> y <strong>150 mensajes al mes</strong> con Brotinho, sin gastar los créditos sueltos. Sigue aplicándose el límite de <strong>30 mensajes al día</strong> descrito en los <Link href="/es/terminos">Términos de Uso</Link>.</p>
      <p>La suscripción se <strong>renueva automáticamente</strong> a través de la App Store o Google Play hasta que la canceles. El cobro se hace en tu cuenta de la tienda, y nosotros no tenemos acceso a los datos de tu tarjeta.</p>

      <h2>Cómo cancelar</h2>
      <div className="callout warn">
        <p className="title">Cancelar no es lo mismo que reembolsar</p>
        <p>Cancelar impide los próximos cobros. El periodo ya pagado sigue vigente hasta el final, y ese importe no se devuelve automáticamente — para eso hay que pedir el reembolso a la tienda.</p>
      </div>
      <ul>
        <li><strong>iPhone y iPad:</strong> Ajustes → tu nombre → Suscripciones → Broto → Cancelar suscripción.</li>
        <li><strong>Android:</strong> Google Play → foto de perfil → Pagos y suscripciones → Suscripciones → Broto → Cancelar.</li>
      </ul>
      <p>Cancela al menos 24 horas antes de la fecha de renovación; si no, el siguiente ciclo ya habrá sido cobrado.</p>

      <h2>Derecho de desistimiento</h2>
      <div className="callout">
        <p className="title">7 días, garantizados por ley</p>
        <p>El artículo 49 del Código de Defensa del Consumidor brasileño te da derecho a desistir de la compra en un plazo de <strong>7 días corridos</strong> desde la contratación, con devolución íntegra del importe pagado. Esto se aplica a las suscripciones de Broto contratadas en Brasil, con independencia de la política de las tiendas.</p>
        <p>Si la tienda rechaza tu solicitud dentro de ese plazo, escribe a <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a> con el comprobante de compra y lo gestionamos con ellos.</p>
      </div>

      <h2>Cómo pedir un reembolso</h2>
      <p>Los pagos los procesan las tiendas, así que el reembolso también pasa por ellas. No tenemos acceso técnico para devolver el importe directamente.</p>
      <ul>
        <li><strong>Apple:</strong> entra en <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>, inicia sesión con tu Apple ID, elige la compra y solicita el reembolso.</li>
        <li><strong>Google Play:</strong> las compras de las últimas 48 horas se pueden devolver directamente en la Play Store. Pasado ese plazo, la solicitud llega a nosotros y respondemos en un máximo de 3 días hábiles.</li>
      </ul>

      <h2>Eliminar la cuenta no cancela la suscripción</h2>
      <div className="callout danger">
        <p>La suscripción pertenece a tu cuenta de la App Store o de Google Play, no a tu cuenta de Broto. <strong>Cancela la suscripción en la tienda antes de eliminar tu cuenta</strong> — de lo contrario el cobro continúa aunque no tengas la app. Consulta <Link href="/es/eliminar-cuenta">Eliminar cuenta y datos</Link>.</p>
      </div>

      <h2>Cambio de precio</h2>
      <p>Si los precios cambian, te avisamos con antelación dentro de la app y por correo. El nuevo precio solo se aplica a partir de la renovación siguiente, y puedes cancelar antes.</p>
    </>
  );
}
