'use client';
import { useEffect, useRef, useState } from 'react';

const INTRO_KEY = 'agentik:intro:seen';      // sessionStorage: solo 1 vez por sesión
const INTRO_MIN_MS = 1600;                   // duración mínima visible (ajústalo)
const INTRO_MAX_MS = 6000;                   // seguridad por si el video no emite 'ended'

export default function IntroOverlay() {
  const [show, setShow] = useState(false);
  const [canHide, setCanHide] = useState(false);
  const vref = useRef<HTMLVideoElement>(null);
  const startRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Si ya se vio, nunca mostrar
    if (sessionStorage.getItem(INTRO_KEY)) return;

    sessionStorage.setItem(INTRO_KEY, '1');
    setShow(true);
    startRef.current = Date.now();

    const v = vref.current;
    if (!v) return;

    const onLoaded = () => {
      // Autoplay en iOS requiere muted + playsInline (ya están en el JSX)
      v.play().catch(() => {});
    };
    const onEnded = () => {
      // Solo ocultar si ya pasó el mínimo
      const elapsed = Date.now() - startRef.current;
      if (elapsed >= INTRO_MIN_MS) setShow(false);
      else {
        // espera al mínimo
        setTimeout(() => setShow(false), INTRO_MIN_MS - elapsed);
      }
    };

    v.addEventListener('loadeddata', onLoaded);
    v.addEventListener('canplay', onLoaded);
    v.addEventListener('ended', onEnded);

    // Falla segura: oculta aunque no termine (por si tarda en cargar)
    timerRef.current = window.setTimeout(() => setCanHide(true), INTRO_MIN_MS);
    const killMax = window.setTimeout(() => setShow(false), INTRO_MAX_MS);

    return () => {
      v.removeEventListener('loadeddata', onLoaded);
      v.removeEventListener('canplay', onLoaded);
      v.removeEventListener('ended', onEnded);
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(killMax);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="introOverlay" aria-hidden="true">
      <video
        ref={vref}
        className="introVideo"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        {/* Desktop y mobile */}
        <source src="/intro-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/intro-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>

      {/* Botón para saltar (opcional) */}
      <button
        className="introSkip"
        onClick={() => setShow(false)}
        disabled={!canHide}
        aria-label="Saltar introducción"
        title={canHide ? 'Entrar' : 'Cargando…'}
      >
        {canHide ? 'Entrar' : '…'}
      </button>
    </div>
  );
}