'use client'
import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Keep server-rendered content visible if JavaScript or animation support fails.
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = el.getBoundingClientRect()
    if (bounds.top < window.innerHeight && bounds.bottom > 0) return
    el.classList.add('reveal-pending')
    const fallback = window.setTimeout(() => el.classList.remove('reveal-pending'), 4000)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.remove('reveal-pending'); io.disconnect(); window.clearTimeout(fallback) } }),
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => { io.disconnect(); window.clearTimeout(fallback) }
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
