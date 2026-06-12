import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icons'
import { ContactForm } from '@/components/ContactForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Mars | Book a Free Strategy Call — Lucknow',
  description: 'Tell us what you want to achieve. We reply with a practical plan, clear next steps, and honest feedback about what will work best for your business in Lucknow.',
  alternates: { canonical: '/contact' },
}

const options = [
  { t: 'Book a strategy call', d: 'A free call to map your goals to the right channels.', i: 'phone' },
  { t: 'Request a website content audit', d: 'We review your site and tell you what to fix first.', i: 'search' },
  { t: 'Ask for SEO or ad campaign support', d: 'Already running campaigns? We can optimize them.', i: 'chart' },
  { t: 'Share your budget and goals', d: 'Get a custom recommendation — honest and practical.', i: 'target' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        chip="Contact"
        title="Let's build your growth system"
        intro="Tell us what you want to achieve. We will reply with a practical plan, clear next steps, and honest feedback about what will work best for your business."
      />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-5">
            {options.map((o, i) => (
              <Reveal key={o.t} delay={i * 90}>
                <div className="glass glass-hover flex items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mars-500/15 text-mars-400"><Icon name={o.i} className="h-5 w-5" /></span>
                  <div>
                    <h2 className="font-grotesk font-semibold">{o.t}</h2>
                    <p className="mt-1 text-sm text-white/60">{o.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <div className="glass p-6">
                <h2 className="font-grotesk font-semibold text-mars-300">Direct contact</h2>
                <p className="mt-2 text-sm text-white/65">Email: <a href={`mailto:${SITE.email}`} className="text-white underline-offset-4 hover:underline">{SITE.email}</a></p>
                <p className="mt-1 text-sm text-white/65">Phone / WhatsApp: <span className="text-white">{SITE.phone}</span></p>
                <p className="mt-3 text-xs text-white/40">Based in Lucknow · Working with brands across India</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  )
}
