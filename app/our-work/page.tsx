import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { CTASection } from '@/components/CTASection'
import { CASE_STUDIES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Work | Digital Marketing Case Studies — MARS DIGITAL MARKETING',
  description: 'Real case studies from MARS DIGITAL MARKETING — B2B lead generation, SEO that moves brands from Page 4 to Page 1, profitable Meta Ads scaling, and high-quality international Google Ads leads.',
  alternates: { canonical: '/our-work' },
}

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        chip="Our Work"
        title="Results we're proud to show"
        intro="Every project below follows the same path: understand the problem, build the right strategy, execute, and measure the outcome. Click any project to read the full case study."
      />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link href={`/our-work/${c.slug}`} className="glass glass-hover group relative block h-full overflow-hidden p-8">
                <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-60`} />
                <span className="text-xs font-semibold uppercase tracking-widest text-mars-300">{c.category}</span>
                <h2 className="mt-3 font-grotesk text-2xl font-bold">{c.client}</h2>
                <p className="mt-1 text-sm font-medium text-nebula-400">{c.metric}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{c.cardDesc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Read case study <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
