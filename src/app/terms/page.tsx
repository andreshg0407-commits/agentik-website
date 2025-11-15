export const metadata = {
  title: 'Términos y Condiciones - Agentik',
  description: 'Condiciones de uso del sitio y servicios de Agentik.',
}

export default function TermsPage() {
  return (
    <main className="page terms" style={{maxWidth: 900, margin: '40px auto', padding: '0 16px'}}>
      <h1>Términos y Condiciones</h1>

      <h2>1. Aceptación</h2>
      <p>
        Al usar este sitio o nuestros servicios, aceptas estos términos. Si no estás de acuerdo,
        por favor no los utilices.
      </p>

      <h2>2. Servicios</h2>
      <p>
        Agentik ofrece automatizaciones y herramientas de creación de contenido. Podemos actualizar o
        modificar funciones en cualquier momento para mejorar el servicio.
      </p>

      <h2>3. Uso permitido</h2>
      <p>
        Te comprometes a no usar el servicio para actividades ilegales, spam, scraping no autorizado,
        ni para infringir derechos de terceros.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        La marca, el código y los recursos del sitio pertenecen a Agentik o sus licenciantes. El
        contenido que cargues seguirá siendo tuyo; nos concedes una licencia limitada para procesarlo
        y prestarte el servicio.
      </p>

      <h2>5. Limitación de responsabilidad</h2>
      <p>
        El servicio se ofrece “tal cual”. En la medida permitida por la ley, no somos responsables
        por pérdidas indirectas o derivadas del uso del servicio.
      </p>

      <h2>6. Modificaciones</h2>
      <p>
        Podemos modificar estos términos. Si el cambio es sustancial, lo comunicaremos por el sitio.
      </p>

      <h2>7. Contacto</h2>
      <p>
        ¿Dudas? Escríbenos: <a href="mailto:hola@agentickers.com">hola@agentickers.com</a>
      </p>
    </main>
  )
}