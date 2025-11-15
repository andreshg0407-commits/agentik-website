import './globals.css'
import type { Metadata, Viewport } from 'next'

import SiteHeader from './components/SiteHeader'
import LayoutClient from './components/LayoutClient'
import IntroOverlay from './components/IntroOverlay'   // 👈 IMPORTA EL INTRO

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agentickers.com'),
  title: 'Agentik',
  description: 'Automatización con IA para crear y escalar.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // para iPhone con notch
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {/* 👇 El intro se monta globalmente, antes del header */}
        <IntroOverlay />
        <SiteHeader />
        {children}
        <LayoutClient />
      </body>
    </html>
  )
}