import Link from 'next/link'
import { SITE } from '@/lib/site'
import { Reveal } from './Reveal'

export function CTASection({ title = 'Ready to launch your growth?', text = 'Tell us what you want to achieve. We will reply with a practical plan, clear next steps, and honest feedback about what will work best for your business.' }: { title?: string; text?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <Reveal>
        <div className="glass shine relative overflow-hidden px-6 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-mars-500/20 blur-3xl" />
          <h2 className="font-grotesk text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Book a Free Strategy Call</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C+I+want+to+grow+my+business+with+Mars`} target="_blank" rel="noopener noreferrer" className="btn-ghost !border-[#25D366]/40 hover:!bg-[#25D366]/10">WhatsApp Us</a>
            <Link href="/contact" className="btn-ghost">Request a Free Audit</Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/55">
            <a href={`tel:+${SITE.whatsapp}`} className="transition hover:text-mars-300">📞 {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="transition hover:text-mars-300">✉️ {SITE.email}</a>
            <span>📍 Lucknow, Uttar Pradesh, India</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
