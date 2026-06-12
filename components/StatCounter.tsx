'use client'
import { useEffect, useRef, useState } from 'react'

export function StatCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const dur = 1600
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return (
    <div ref={ref} className="text-center">
      <div className="font-grotesk text-4xl font-bold text-gradient-mars md:text-5xl">{n}{suffix}</div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  )
}
