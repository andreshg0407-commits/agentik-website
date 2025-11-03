// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // No bloquea compilaciones por reglas de ESLint en Vercel/CI.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Evita el loader de imágenes; útil si todo está en /public o si no usarás next/image.
  images: {
    unoptimized: true,
  },

  // Opcional: mantiene buen desempeño con Turbopack en dev/build.
  experimental: {
    turbo: {},
  },

  // Cachea fuerte tus estáticos (videos, imágenes, iconos) en CDN/navegador.
  async headers() {
    return [
      {
        source: '/:all*\\.(?:mp4|webm|jpg|jpeg|png|gif|svg|ico|txt|xml|webmanifest)$',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Si en algún momento tienes rutas dinámicas que tarden, puedes subir el timeout:
  // staticPageGenerationTimeout: 120,
};

export default nextConfig;