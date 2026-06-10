'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href:'/', label:'Home' },
  { href:'/about', label:'About' },
  { href:'/services', label:'Services' },
  { href:'/case-studies', label:'Case Studies' },
  { href:'/portfolio', label:'Portfolio' },
  { href:'/blog', label:'Blog' },
  { href:'/contact', label:'Contact' },
]

export function Navbar() {
  const p = usePathname()
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  useEffect(() => { const h = () => setSc(window.scrollY > 40); window.addEventListener('scroll',h); return () => window.removeEventListener('scroll',h) }, [])
  useEffect(() => { setOpen(false) }, [p])
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${sc ? 'py-2.5 bg-[rgba(10,6,18,0.92)]' : 'py-3.5 bg-[rgba(10,6,18,0.6)]'} backdrop-blur-xl border-b border-white/[0.08]`}>
      <div className="flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-grotesk font-bold text-[15px] md:text-base text-white">
          <span className="relative w-6 h-6 rounded-[7px] bg-[linear-gradient(135deg,#ff6b35,#f72585,#7c3aed)] flex items-center justify-center text-[11px] font-black overflow-hidden">M<span className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shine_3s_linear_infinite]" /></span>
          MARS
        </Link>
        <ul className="hidden lg:flex gap-6">
          {links.map(l => (
            <li key={l.href}><Link href={l.href} className={`relative text-[12px] font-medium transition-colors ${p === l.href || (l.href !== '/' && p?.startsWith(l.href)) ? 'text-white' : 'text-m-mu hover:text-white'}`}>{l.label}{(p === l.href || (l.href !== '/' && p?.startsWith(l.href))) && <span className="absolute -bottom-1 left-0 right-0 h-px bg-[linear-gradient(90deg,#ff6b35,#f72585)] rounded-full" />}</Link></li>
          ))}
        </ul>
        <Link href="/contact" className="hidden lg:inline-flex btn-p text-[11px] !px-5 !py-2.5">Book a Free Strategy Call</Link>
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={`block w-5 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-0 bg-m-bg/[0.97] backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 pt-16">
          <button className="absolute top-5 right-5 text-m-mu text-xl" onClick={() => setOpen(false)}>✕</button>
          {links.map(l => (<Link key={l.href} href={l.href} className={`font-grotesk text-lg tracking-[2px] uppercase ${p === l.href ? 'text-m-or' : 'text-m-mu'}`}>{l.label}</Link>))}
          <Link href="/contact" className="btn-p mt-2">Book a Free Strategy Call</Link>
        </div>
      )}
    </nav>
  )
}
