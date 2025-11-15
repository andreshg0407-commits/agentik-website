'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  /** ms visible tras un cambio de ruta */
  durationMs?: number
  /** retrasa el arranque del splash (ms) */
  delayMs?: number
}

export default function RouteSplash({ durationMs = 600, delayMs = 0 }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // clave única por ruta + query
  const key = `${pathname}?${searchParams?.toString() ?? ''}`

  const firstPaintRef = useRef(true)
  const timeoutRef = useRef<number | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // evitar SSR fantasma por si acaso (de todos modos es client-only)
    if (typeof window === 'undefined') return

    // en la PRIMERA renderización no mostramos el splash
    if (firstPaintRef.current) {
      firstPaintRef.current = false
      return
    }

    // en cambios de ruta/params: mostrar splash breve
    const start = () => setShow(true)
    const stop = () => setShow(false)

    const t1 = window.setTimeout(start, delayMs)
    const t2 = window.setTimeout(stop, delayMs + durationMs)

    // guarda para limpiar si cambia rápido
    timeoutRef.current = t2

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, delayMs, durationMs])

  if (!show) return null

  return (
    <div className="splash overlay" aria-hidden="true">
      <video
        src="/logo-anim.mp4"
        className="splashLogoVideo"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/logo-static.png"
      />
    </div>
  )
}