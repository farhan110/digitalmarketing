import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icons'
import { CTASection } from '@/components/CTASection'
import { SERVICES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, Google Ads, Meta Ads, Web & More',
  description: 'Complete growth systems: SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, Photography & Video Production, and eCommerce marketing — connected for discovery, trust, and conversion.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        chip="Our Services"
        title="Complete growth systems, not random campaigns"
        intro="We don't sell random posts or disconnected campaigns. We design complete growth systems that connect discovery, trust, conversion, and repeat business."
      />

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link href={`/${s.slug}`} className="glass glass-hover group block h-full p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mars-500/20 to-nebula-500/15 text-mars-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-grotesk text-xl font-semibold">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.short}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-white/50">
                  {s.cards.slice(0, 3).map((c) => <li key={c.title}>• {c.title}</li>)}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mars-300 transition-all group-hover:gap-3">Explore service →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-14 text-center text-lg text-white/70">
            Tell us your goal, and we will suggest the best starting point.
          </p>
          <div className="mt-6 text-center"><Link href="/contact" className="btn-primary">Get a Growth Plan</Link></div>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}
