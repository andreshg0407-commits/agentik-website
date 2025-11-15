// src/app/tiktok-connect-demo/page.tsx
import Link from 'next/link'

export default function TiktokConnectDemoPage() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: '#050816', // fondo oscuro uniforme
        color: '#ffffff',       // texto blanco por defecto
      }}
    >
      <section
        style={{
          maxWidth: '720px',
          width: '100%',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '2.5rem',
          boxShadow: '0 18px 45px rgba(0,0,0,0.6)',
          background: '#0b1020', // tarjeta un poco más clara
        }}
      >
        <h1
          style={{
            fontSize: '2.2rem',
            marginBottom: '0.75rem',
            fontWeight: 700,
            color: '#ffffff',
          }}
        >
          Convierte tus ideas en videos publicados en TikTok
        </h1>

        <p
          style={{
            opacity: 0.9,
            marginBottom: '1.5rem',
            lineHeight: 1.5,
            color: '#e2e8f0',
          }}
        >
          Conecta tu cuenta de TikTok con Agentik para automatizar la creación y
          publicación de contenido usando IA.
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link
            href="/tiktok-connect-demo/oauth"
            style={{
              padding: '0.9rem 1.6rem',
              borderRadius: '999px',
              border: 'none',
              fontWeight: 600,
              fontSize: '0.98rem',
              cursor: 'pointer',
              textDecoration: 'none',
              background:
                'linear-gradient(135deg, #25f4ee 0%, #fe2c55 40%, #1d97ff 100%)',
              color: '#ffffff',
              boxShadow: '0 8px 22px rgba(0,0,0,0.45)',
            }}
          >
            Conectar con TikTok
          </Link>

          <span style={{ fontSize: '0.85rem', opacity: 0.8, color: '#cbd5f5' }}>
            Usando la API oficial de TikTok (OAuth).
          </span>
        </div>
      </section>
    </main>
  )
}