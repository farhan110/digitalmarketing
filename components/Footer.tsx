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
            MARS DIGITAL MARKETING — SEO, Google Ads, Meta Ads, Social Media, Website Development, Photography &amp; Video, and eCommerce growth systems that move the numbers that matter.
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
            <li><Link href="/about" className="transition hover:text-mars-300">About us</Link></li>
            <li><Link href="/our-work" className="transition hover:text-mars-300">Our Work</Link></li>
            <li><Link href="/services" className="transition hover:text-mars-300">Services</Link></li>
            <li><Link href="/contact" className="transition hover:text-mars-300">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-grotesk text-sm font-semibold uppercase tracking-widest text-mars-300">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><a href={`tel:+${SITE.whatsapp}`} className="transition hover:text-mars-300">{SITE.phone}</a></li>
            <li>Lucknow, Uttar Pradesh, India</li>
            <li>Mon–Sat · 10AM–7PM IST</li>
          </ul>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#25D366]/35 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366]/20">WhatsApp Us</a>
          <div><Link href="/contact" className="btn-primary mt-4 text-sm">Request a Free Audit</Link></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        MARS DIGITAL MARKETING | {SITE.url.replace('https://', '')} | SEO, Ads, Content, Social Media &amp; Web · © {new Date().getFullYear()} MARS DIGITAL MARKETING. All rights reserved.
      </div>
    </footer>
  )
}
