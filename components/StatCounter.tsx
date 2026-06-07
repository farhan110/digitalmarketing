'use client'
import { useEffect, useRef, useState } from 'react'

export function StatCounter({
  target, suffix = '', label,
}: { target: number; suffix?: string; label: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return
        fired.current = true
        const dur = 1600
        let start: number | null = null
        function tick(now: number) {
          if (!start) start = now
          const p = Math.min((now - start) / dur, 1)
          const e = 1 - Math.pow(1 - p, 3)
          setVal(Math.floor(e * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} className="sb-item">
      <div className="sb-num">{val}{suffix}</div>
      <div className="sb-lbl">{label}</div>
    </div>
  )
}

export function SectionEyebrow({ text }: { text: string }) {
  return <p className="eyebrow">{text}</p>
}
