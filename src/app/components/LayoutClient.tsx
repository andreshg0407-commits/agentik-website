'use client'

import { Suspense } from 'react'
import { usePathname } from 'next/navigation'
import RouteSplashWrapper from './RouteSplashWrapper'

export default function LayoutClient() {
  const pathname = usePathname()
  const excluded = ['/404', '/not-found']
  if (excluded.includes(pathname)) return null

  // Reproduce el mp4 casi completo (ajusta a tu gusto)
  return (
    <Suspense fallback={null}>
      <RouteSplashWrapper durationMs={2400} delayMs={80} />
    </Suspense>
  )
}