// app/tiktok-connect-demo/success/page.tsx
import Link from 'next/link'

export default function TiktokSuccessPage() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <section
        style={{
          maxWidth: '640px',
          width: '100%',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.12)',
          padding: '2.5rem',
          boxShadow: '0 18px 45px rgba(0,0,0,0.35)',
          background:
            'radial-gradient(circle at top, #25f4ee33, transparent 55%), #050816',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            marginBottom: '0.75rem',
            fontWeight: 700,
          }}
        >
          Tu video se ha publicado exitosamente en TikTok
        </h1>

        <p
          style={{
            opacity: 0.9,
            marginBottom: '1.5rem',
            lineHeight: 1.5,
          }}
        >
          Agentik usó la API oficial de TikTok para subir el video al perfil que
          acabas de autorizar. Cada usuario conecta y publica únicamente en su
          propia cuenta.
        </p>

        <div
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '0.4rem' }}>
            Vista previa del post
          </div>
          <div
            style={{
              height: '220px',
              borderRadius: '10px',
              background:
                'linear-gradient(135deg, #000000 0%, #1d97ff 40%, #fe2c55 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              opacity: 0.9,
            }}
          >
            Video AI generado · Publicado desde Agentik
          </div>
        </div>

        <Link
          href="/tiktok-connect-demo"
          style={{
            display: 'inline-block',
            padding: '0.85rem 1.4rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: '#ffffff',
            color: '#000000',
          }}
        >
          Volver a Agentik
        </Link>
      </section>
    </main>
  )
}