import Link from 'next/link'

export const dynamic = 'force-dynamic' // evita prerender estático del 404

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Página no encontrada</h1>
      <p>La ruta que buscaste no existe.</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  )
}