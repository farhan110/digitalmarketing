'use client'
import { useEffect, useRef, useState } from 'react'
export function StatCounter({ target, suffix='', label }: { target:number; suffix?:string; label:string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return; fired.current = true
      let s: number|null = null
      function tick(now: number) { if(!s) s=now; const p=Math.min((now-s)/1600,1); setVal(Math.floor((1-Math.pow(1-p,3))*target)); if(p<1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick); obs.disconnect()
    }, { threshold:.4 })
    obs.observe(el); return () => obs.disconnect()
  }, [target])
  return (<div ref={ref} className="sb-item"><div className="sb-num">{val}{suffix}</div><div className="sb-lbl">{label}</div></div>)
}
export function Eye({ text }: { text:string }) { return <p className="eye">{text}</p> }
