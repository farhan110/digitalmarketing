'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/services',     label: 'Services' },
  { href: '/case-studies', label: 'Our Work' },
  { href: '/local-seo',    label: 'Local SEO' },
  { href: '/faq',          label: 'FAQ' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[rgba(10,6,18,0.85)]' : 'py-4 bg-[rgba(10,6,18,0.65)]'
      } backdrop-blur-xl border-b border-white/[0.08]`}
    >
      <div className="flex items-center justify-between px-8 max-md:px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-grotesk font-bold text-base tracking-tight text-white">
          <span className="relative w-6 h-6 rounded-[7px] bg-[linear-gradient(135deg,#ff6b35_0%,#f72585_50%,#7c3aed_100%)] flex items-center justify-center text-[11px] font-black overflow-hidden">
            M
            <span className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shine" />
          </span>
          MARS AGENCY
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-[12px] font-medium transition-colors ${
                    active ? 'text-white' : 'text-mars-mu hover:text-white'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-[linear-gradient(90deg,#ff6b35,#f72585,#7c3aed)] rounded-full" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block btn-primary text-[12px] px-5 py-2.5"
        >
          Free Consultation →
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-mars-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-grotesk text-lg tracking-[2px] uppercase transition-colors ${
                pathname === href ? 'text-mars-or' : 'text-mars-mu hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-3">Free Consultation →</Link>
        </div>
      )}
    </nav>
  )
}
