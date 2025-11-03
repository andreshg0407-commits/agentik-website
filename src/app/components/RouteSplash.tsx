'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function RouteSplash() {
  const pathname = usePathname();
  const search = useSearchParams();
  const prevKey = useRef<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = pathname + '?' + (search?.toString() || '');
    if (prevKey.current !== null) {
      setShow(true);
      const t = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(t);
    }
    prevKey.current = key; // primera visita: no mostrar
  }, [pathname, search]);

  if (!show) return null;

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
  );
}