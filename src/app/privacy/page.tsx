export const metadata = {
  title: 'Política de Privacidad - Agentik',
  description: 'Cómo recopilamos y usamos tus datos en Agentik.',
}

export default function PrivacyPage() {
  return (
    <main className="page privacy" style={{maxWidth: 900, margin: '40px auto', padding: '0 16px'}}>
      <h1>Política de Privacidad</h1>

      <h2>1. Información que recopilamos</h2>
      <p>
        Datos de contacto (como email o WhatsApp si los proporcionas), contenidos que subas para
        procesar, y datos técnicos básicos (IP, dispositivo, analítica agregada).
      </p>

      <h2>2. Para qué la usamos</h2>
      <p>
        Para prestarte el servicio, mejorar funcionalidades, soporte y seguridad. No vendemos datos
        personales.
      </p>

      <h2>3. Compartición</h2>
      <p>
        Podemos usar proveedores (cloud, analítica) bajo contratos que protegen tu información.
      </p>

      <h2>4. Seguridad y retención</h2>
      <p>
        Aplicamos medidas razonables de seguridad. Conservamos datos el tiempo necesario para el fin
        por el cual fueron recopilados o por requerimientos legales.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a
        <a href="mailto:hola@agentickers.com"> hola@agentickers.com</a>.
      </p>

      <h2>6. Cambios</h2>
      <p>
        Esta política puede actualizarse. Publicaremos la versión vigente en este sitio.
      </p>
    </main>
  )
}