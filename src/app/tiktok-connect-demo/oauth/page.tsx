// src/app/tiktok-connect-demo/oauth/page.tsx
import Link from 'next/link'

export default function TiktokOAuthMockPage() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: '#000000',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          borderRadius: '18px',
          background: '#111111',
          border: '1px solid #2b2b2b',
          padding: '2rem',
          boxShadow: '0 18px 45px rgba(0,0,0,0.7)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background:
                'linear-gradient(135deg, #25f4ee 0%, #fe2c55 50%, #000000 100%)',
              marginRight: '0.8rem',
            }}
          />
          <div>
            <div style={{ fontWeight: 700 }}>TikTok</div>
            <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>Log in to TikTok</div>
          </div>
        </div>

        <p
          style={{
            fontSize: '0.9rem',
            marginBottom: '1rem',
            opacity: 0.85,
          }}
        >
          Agentik is requesting permission to access your TikTok account:
        </p>

        <ul
          style={{
            fontSize: '0.85rem',
            marginBottom: '1.2rem',
            paddingLeft: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          <li>View basic profile information (user.info.basic)</li>
          <li>View profile details and stats (user.info.profile, user.info.stats)</li>
          <li>Upload and publish videos on your behalf (video.upload)</li>
        </ul>

        <p
          style={{
            fontSize: '0.8rem',
            opacity: 0.6,
            marginBottom: '1.4rem',
          }}
        >
          You can revoke this access at any time from your TikTok account settings.
        </p>

        <Link
          href="/tiktok-connect-demo/success"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '0.85rem 1.2rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: '#ffffff',
            color: '#000000',
            marginBottom: '0.75rem',
          }}
        >
          Authorize
        </Link>

        <button
          type="button"
          style={{
            display: 'block',
            width: '100%',
            padding: '0.8rem 1.2rem',
            borderRadius: '999px',
            border: 'none',
            background: 'transparent',
            color: '#888888',
            fontSize: '0.9rem',
            cursor: 'default',
          }}
        >
          Cancel
        </button>
      </div>
    </main>
  )
}