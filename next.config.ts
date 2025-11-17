// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Antes aquí estaba "eslint: { ignoreDuringBuilds: true }"
  // En Next 15+ con la nueva config eso ya no existe en el tipo,
  // por eso TypeScript se quejaba.

  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source:
          '/:all*\\.(mp4|webm|jpg|jpeg|png|gif|svg|ico|txt|xml|webmanifest)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Si tenías esto, puedes dejarlo si lo quieres:
  // staticPageGenerationTimeout: 120,
}

export default nextConfig