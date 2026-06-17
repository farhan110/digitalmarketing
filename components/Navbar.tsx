'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SERVICES } from '@/lib/site'

const links = [
  { href: '/our-work', label: 'Our Work' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact us' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-space-950/80 shadow-lg shadow-black/30 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="MARS DIGITAL MARKETING — home">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-mars-400 to-mars-600 shadow-glow-sm transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -inset-1 rounded-full border border-dashed border-nebula-400/50" style={{ animation: 'spin 14s linear infinite' }} />
          </span>
          <span className="font-grotesk text-xl font-bold tracking-wide">MARS</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/75 lg:flex">
          <Link href="/" className="py-2 transition hover:text-white">Home</Link>
          <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <Link href="/services" className="flex items-center gap-1 py-2 transition hover:text-white">
              Services <span className={`text-[10px] transition-transform ${svcOpen ? 'rotate-180' : ''}`}>▼</span>
            </Link>
            {svcOpen && (
              <div className="glass absolute left-1/2 top-full w-72 -translate-x-1/2 p-2">
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="block rounded-lg px-4 py-2.5 transition hover:bg-mars-500/10 hover:text-mars-300">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 transition hover:text-white">{l.label}</Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-2.5 text-sm">Book a Free Strategy Call</Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-space-950/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2.5 text-white/85">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-mars-300">All Services</Link>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} onClick={() => setOpen(false)} className="block py-2 pl-3 text-white/70">{s.name}</Link>
          ))}
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-white/85">{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">Book a Free Strategy Call</Link>
        </div>
      )}
    </header>
  )
}
