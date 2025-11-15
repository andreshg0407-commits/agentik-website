'use client'
import dynamic from 'next/dynamic'

type Props = { durationMs?: number; delayMs?: number }

const RouteSplash = dynamic(() => import('./RouteSplash'), { ssr: false })

export default function RouteSplashWrapper(props: Props) {
  return <RouteSplash {...props} />
}