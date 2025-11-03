import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import RouteSplash from './components/RouteSplash';
import IntroOverlay from './components/IntroOverlay';

export const metadata: Metadata = {
  title: 'Agentik — Automatiza tu contenido y leads con IA',
  description: 'De una idea en tu Drive a contenido publicado y leads capturados.',
  openGraph: {
    title: 'Agentik — Automatiza tu contenido y leads con IA',
    description: 'De una idea en tu Drive a contenido publicado y leads capturados.',
    url: 'https://www.agentickers.com',
    siteName: 'Agentik',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Agentik' }],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Agentik', images: ['/og.jpg'] },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#0b6bff',
  colorScheme: 'light',
};

function NavBar() {
  return (
    <header className="nav">
      <Link href="/" className="brand">Agentik</Link>
      <nav>
        <Link href="/#como-funciona">Cómo funciona</Link>
        <Link href="/#por-que">Por qué</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/terms">Términos</Link>
        <Link href="/privacy">Privacidad</Link>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Intro en primera visita (usa tus intro-desktop/mobile.mp4) */}
        <IntroOverlay />

        {/* Splash corto en cambios de ruta */}
        <RouteSplash />

        {/* Nav + Contenido */}
        <NavBar />
        {children}

        {/* Footer global */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Agentik — Automatización real con IA</p>
        </footer>
      </body>
    </html>
  );
}