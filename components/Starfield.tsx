'use client'
import { useEffect, useRef } from 'react'

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let stars: { x: number; y: number; r: number; s: number; p: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth * DPR
      canvas.height = window.innerHeight * DPR
      const count = Math.min(180, Math.floor((window.innerWidth * window.innerHeight) / 9000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 1.2 + 0.3) * DPR,
        s: Math.random() * 0.05 + 0.01,
        p: Math.random() * Math.PI * 2,
      }))
    }
    resize()
    window.addEventListener('resize', resize)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let t = 0
    const draw = () => {
      t += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const st of stars) {
        const tw = reduced ? 0.7 : 0.5 + 0.5 * Math.sin(t * 1.6 + st.p)
        ctx.globalAlpha = 0.25 + tw * 0.55
        ctx.fillStyle = st.p % 1 > 0.85 ? '#a78bfa' : st.p % 1 > 0.7 ? '#ffb38a' : '#ffffff'
        ctx.beginPath()
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        ctx.fill()
        if (!reduced) {
          st.y += st.s * DPR
          if (st.y > canvas.height) st.y = 0
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full opacity-70" />
}
