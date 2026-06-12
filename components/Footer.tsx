import Link from 'next/link'
import { SERVICES, SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative z-[2] mt-24 border-t border-white/10 bg-space-950/70 backdrop-blur-xl">
      <div className="glow-line" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-mars-400 to-mars-600 shadow-glow-sm" />
            <span className="font-grotesk text-xl font-bold">MARS</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Digital marketing agency in Lucknow. SEO, Ads, Content, Social Media, and AI Marketing — growth systems that move the numbers that matter.
          </p>
        </div>
        <div>
          <h3 className="font-grotesk text-sm font-semibold uppercase tracking-widest text-mars-300">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/${s.slug}`} className="transition hover:text-mars-300">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-grotesk text-sm font-semibold uppercase tracking-widest text-mars-300">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><Link href="/about" className="transition hover:text-mars-300">About</Link></li>
            <li><Link href="/case-studies" className="transition hover:text-mars-300">Case Studies</Link></li>
            <li><Link href="/portfolio" className="transition hover:text-mars-300">Portfolio</Link></li>
            <li><Link href="/blog" className="transition hover:text-mars-300">Blog</Link></li>
            <li><Link href="/faq" className="transition hover:text-mars-300">FAQ</Link></li>
            <li><Link href="/contact" className="transition hover:text-mars-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-grotesk text-sm font-semibold uppercase tracking-widest text-mars-300">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><a href={`tel:+${SITE.whatsapp}`} className="transition hover:text-mars-300">{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="transition hover:text-mars-300">{SITE.email}</a></li>
            <li>Lucknow, Uttar Pradesh, India</li>
            <li>Mon–Sat · 10AM–7PM IST</li>
          </ul>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#25D366]/35 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366]/20">WhatsApp Us</a>
          <div><Link href="/contact" className="btn-primary mt-5 text-sm">Request a Free Audit</Link></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        Mars | {SITE.url.replace('https://', '')} | SEO, Ads, Content, Social Media, and AI Marketing · © {new Date().getFullYear()} Mars. All rights reserved.
      </div>
    </footer>
  )
}
