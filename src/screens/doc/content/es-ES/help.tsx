import { Link } from "@/components/Link";

export const title = "Ayuda · Broto";

export const description = "Dudas frecuentes sobre análisis, créditos, recordatorios de riego y tu cuenta de Broto.";

export function Body() {
  return (
    <>
      <h1>Ayuda</h1>

      <p className="intro">Las dudas que más aparecen. Si la tuya no está aquí, escribe a <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>.</p>

      <h2>Cómo funciona el análisis</h2>
      <p>Fotografías la planta y ya está — la app no pregunta nada antes. La foto va a un modelo de visión que devuelve la especie, sus cuidados y, cuando algo va mal, una lista ordenada de causas probables con una prueba que puedes hacer en casa para saber cuál es.</p>

      <h3>¿Por qué no viene una sola causa?</h3>
      <p>Porque la misma hoja amarilla significa cosas opuestas según el contexto: regada ayer y amarilleando es exceso de agua; dos semanas sin riego y amarilleando es lo contrario. En vez de llenarte de preguntas antes, la app ordena las causas por probabilidad y explica cómo distinguirlas.</p>

      <h3>¿Qué es “Cómo confirmar”?</h3>
      <p>La prueba que desempata. Por ejemplo: mete el dedo tres centímetros en la tierra — si sale húmedo, es exceso de agua, no un hongo. A veces te pide girar una hoja y mirar debajo, que es donde viven la cochinilla y la araña roja.</p>

      <h3>No reconoció la especie</h3>
      <p>Un primer plano de una hoja enferma a veces no muestra lo suficiente para identificar la planta. En esos casos preferimos decir que no lo sabemos antes que adivinar mal. Fotografía la planta entera e inténtalo de nuevo.</p>

      <h3>La foto salió mal, ¿perdí un análisis?</h3>
      <p>No. Cuando no conseguimos leer tu foto, el crédito vuelve a ti automáticamente y te lo decimos en pantalla.</p>

      <h2>Análisis y créditos</h2>

      <h3>¿Cuántos análisis tengo?</h3>
      <p>Empiezas con <strong>tres</strong>: el del mes más <strong>dos de bienvenida</strong>. Los de bienvenida son <strong>una sola vez</strong> — no vuelven el mes siguiente, pero tampoco caducan: se quedan ahí hasta que los uses. Después de esos es <strong>uno al mes</strong>, renovado el día 1. Cuando se acaban, puedes comprar análisis sueltos o suscribirte. La suscripción da hasta <strong>40 análisis al mes</strong> y <strong>150 mensajes al mes</strong> con Brotinho, con un límite de 30 mensajes al día.</p>

      <h2>Brotinho</h2>

      <h3>¿Qué responde?</h3>
      <p>Dudas sobre el cuidado de las plantas. Puede ver los datos de las plantas que guardaste, así que puedes preguntarle por una de ellas directamente. Lo que no hace: dosis de fitosanitarios ni decir si una planta es comestible.</p>

      <h3>Se me acabaron los mensajes</h3>
      <p>Son <strong>150 al mes</strong>, con un límite de 30 al día, y se renuevan el día 1. Brotinho viene en el plan completo y también se puede contratar por separado.</p>

      <h2>Recordatorios de riego</h2>

      <h3>El aviso llegó tarde</h3>
      <p>En Android, el ahorro de batería puede retrasar las notificaciones unos minutos — es una limitación del sistema. Para reducirlo, excluye a Broto en la configuración de optimización de batería de tu dispositivo.</p>

      <h3>No recibo ningún recordatorio</h3>
      <p>Comprueba que el permiso de notificaciones esté activo en los ajustes del dispositivo y que el recordatorio esté encendido tanto en general como en esa planta concreta, en <strong>Perfil → Notificaciones</strong>.</p>

      <h3>La hora es incorrecta</h3>
      <p>El recordatorio usa la zona horaria guardada en tu perfil. Si cambiaste de país, actualízala en <strong>Perfil → Editar perfil</strong>.</p>

      <h2>Cuenta y datos</h2>

      <h3>¿Cómo elimino mi cuenta?</h3>
      <p>En <strong>Perfil → Eliminar mi cuenta</strong>. El paso a paso completo, y qué ocurre con cada dato, está en <Link href="/es/eliminar-cuenta">Eliminar cuenta y datos</Link>.</p>

      <h3>Cambié de móvil, ¿pierdo mis plantas?</h3>
      <p>No. Todo queda guardado en tu cuenta. Entra con el mismo acceso en el dispositivo nuevo y tus plantas estarán ahí.</p>

      <h3>Olvidé mi contraseña</h3>
      <p>En la pantalla de entrar con correo, toca “Olvidé mi contraseña”. El enlace de restablecimiento llega a tu bandeja de entrada.</p>

      <h2>Hablar con nosotros</h2>
      <p>Escribe a <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>. Respondemos en un máximo de 3 días hábiles. Si es un problema técnico, incluye la versión de la app y el modelo del dispositivo — el botón “Ayuda y contacto” dentro de la app ya lo rellena por ti.</p>
    </>
  );
}
