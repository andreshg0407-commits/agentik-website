'use client';

import { useState, useEffect } from 'react';
import { content } from './content';

export default function Home() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  // 🔹 Estado para controlar el intro
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Revisamos si el usuario ya vio el intro en esta sesión
    if (typeof window !== 'undefined') {
      const alreadySeen = window.sessionStorage.getItem('agentickers_intro_seen');
      if (alreadySeen) {
        setShowIntro(false);
        return;
      }

      // Si no lo ha visto, lo mostramos unos segundos y luego lo ocultamos
      const timer = setTimeout(() => {
        setShowIntro(false);
        window.sessionStorage.setItem('agentickers_intro_seen', '1');
      }, 5000); // ⏱ 5 segundos de intro, ajustable

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* INTRO OVERLAY CON VIDEO */}
      {showIntro && (
        <div
          className="introOverlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            autoPlay
            muted
            playsInline
            className="introVideo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="/intro-desktop.mp4"
          />
        </div>
      )}

      <main>
        {/* HERO sin video: usa poster.jpg como fondo */}
        <section
          className="hero"
          id="home"
          style={{
            background: "url('/poster.jpg') center / cover no-repeat",
            position: 'relative',
            minHeight: '88vh',
          }}
        >
          {/* Velo sutil para legibilidad sobre la foto */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,.38), rgba(0,0,0,.18) 40%, rgba(0,0,0,0))',
            }}
          />

          <div className="heroOverlay" style={{ position: 'relative', zIndex: 1 }}>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.sub}</p>

            {/* FORMULARIO → /api/lead (FormData, sin recargar) */}
            <form
              className="leadForm"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                setSending(true);
                setOk(null);
                try {
                  const res = await fetch('/api/lead', {
                    method: 'POST',
                    body: fd,
                    cache: 'no-store',
                  });
                  if (res.ok) {
                    setOk(true);
                    form.reset();
                  } else {
                    setOk(false);
                  }
                } catch {
                  setOk(false);
                } finally {
                  setSending(false);
                }
              }}
            >
              <input
                name="email"
                type="email"
                placeholder={content.form.fields.email}
                required
              />
              <input name="whatsapp" placeholder={content.form.fields.whatsapp} />

              <label htmlFor="interest" className="formLabel">
                ¿Qué te gustaría automatizar?
              </label>
              <select id="interest" name="interest" defaultValue="">
                <option value="" disabled>
                  Selecciona una opción…
                </option>
                {content.form.fields.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <input name="other" placeholder={content.form.fields.otherHint} />

              {/* Meta / anti-spam */}
              <input type="hidden" name="source" value="agentickers.com" />
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />

              <button type="submit" disabled={sending}>
                {sending ? 'Enviando…' : content.form.cta}
              </button>

              {ok === true && (
                <p className="mini" style={{ color: 'limegreen', marginTop: 8 }}>
                  ✅ Gracias, te avisaremos pronto.
                </p>
              )}
              {ok === false && (
                <p className="mini" style={{ color: 'tomato', marginTop: 8 }}>
                  Hubo un problema al enviar el formulario. Intenta de nuevo.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* VALUE BAR */}
        <section className="section valueBar" id="valor">
          <ul className="grid">
            {content.valueBar.map((v) => (
              <li key={v.title}>
                <strong>{v.title}</strong>
                <br />
                {v.text}
              </li>
            ))}
          </ul>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="section" id="como-funciona">
          <h2>Cómo funciona</h2>
          <ol className="steps">
            {content.how.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>

        {/* POR QUÉ */}
        <section className="section" id="por-que">
          <h2>Por qué Agentik</h2>
          <ul className="grid">
            {content.why.map((w) => (
              <li key={w.title}>
                <strong>{w.title}</strong>
                <br />
                {w.text}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <h2>FAQ</h2>
          <div className="faq">
            {content.faq.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section" id="contacto">
          <h2>{content.form.title}</h2>
          <a className="ctaGhost" href="#home">
            {content.form.cta}
          </a>
        </section>
      </main>
    </>
  );
}