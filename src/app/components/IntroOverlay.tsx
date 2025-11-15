'use client'

import { useEffect, useRef, useState } from 'react'

export default function IntroOverlay() {
  const [show, setShow] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const seen = sessionStorage.getItem('introSeen')
    if (!seen) {
      setShow(true)
      sessionStorage.setItem('introSeen', '1')
    }
  }, [])

  // 🔥 Controla el padding del body de forma ABSOLUTA
  useEffect(() => {
    if (show) {
      document.body.style.paddingTop = "0px"     // 🔥 Esto elimina la franja sí o sí
    } else {
      document.body.style.paddingTop = ""         // vuelve al CSS normal
    }

    return () => {
      document.body.style.paddingTop = ""
    }
  }, [show])

  const onEnded = () => setShow(false)

  if (!show) return null

  return (
    <div className="intro-overlay" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onEnded}
        className="intro-video"
      >
        <source src="/intro-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/intro-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        Tu navegador no puede reproducir el video de introducción.
      </video>

      <button
        className="intro-skip"
        onClick={() => setShow(false)}
        aria-label="Saltar introducción"
      >
        Entrar
      </button>
    </div>
  )
}