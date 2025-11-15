'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  // Cierra menú al navegar
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('popstate', close)
    window.addEventListener('hashchange', close)
    return () => {
      window.removeEventListener('popstate', close)
      window.removeEventListener('hashchange', close)
    }
  }, [])

  // Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="ah-site-header">
      <nav className="ah-site-nav" aria-label="Barra principal">
        <Link href="/" className="ah-brand" aria-label="Inicio">
          <Image src="/logo-static.svg" alt="Agentik" width={120} height={32} priority className="ah-logo" />
        </Link>

        <div className="ah-spacer" />

        {/* Links desktop */}
        <div className="ah-links" role="menubar">
          <Link href="/terms" role="menuitem" className="ah-link">Términos</Link>
          <Link href="/privacy" role="menuitem" className="ah-link">Privacidad</Link>
          <Link href="#lead" role="menuitem" className="ah-cta">Únete</Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          className={`ah-burger ${open ? 'is-open' : ''}`}
          aria-label="Menú"
          aria-expanded={open}
          aria-controls="ah-mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Menú móvil (SIN logo para evitar duplicado) */}
      <div id="ah-mobile-menu" className={`ah-mmenu ${open ? 'open' : ''}`} role="dialog" aria-modal="true">
        <nav className="ah-mmenu__content" aria-label="Menú móvil">
          <Link href="/terms" className="ah-link" onClick={() => setOpen(false)}>Términos</Link>
          <Link href="/privacy" className="ah-link" onClick={() => setOpen(false)}>Privacidad</Link>
          <Link href="#lead" className="ah-cta" onClick={() => setOpen(false)}>Únete a la lista</Link>
        </nav>
      </div>
    </header>
  )
}