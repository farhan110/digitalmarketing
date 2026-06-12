import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icons'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Case Studies | Digital Marketing Results — Mars Lucknow',
  description: 'How Mars rebuilds messaging, content, and campaigns to grow visibility and leads. Problem → strategy → execution → outcome, documented clearly.',
  alternates: { canonical: '/case-studies' },
}

const execution = [
  'Clarified the offer and rewrote the homepage copy',
  'Mapped keywords for service pages and blog topics',
  'Built ad creatives and landing page messaging',
  'Used social content to build trust and retarget visitors',
]

const results = [
  { t: 'Improved visibility across search and social channels', i: 'search' },
  { t: 'Better engagement from qualified audiences', i: 'spark' },
  { t: 'More consistent inquiries from the right visitors', i: 'phone' },
  { t: 'A stronger brand presence with clearer messaging', i: 'rocket' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        chip="Case Studies"
        title="Problem. Strategy. Execution. Outcome."
        intro="A good case study shows the full journey — not just a screenshot. Here is how we approach growth for the brands we work with."
      />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <Reveal>
          <article className="glass overflow-hidden">
            <div className="border-b border-white/10 bg-gradient-to-r from-mars-500/10 via-transparent to-nebula-500/10 p-8 md:p-10">
              <span className="chip">Featured case study</span>
              <h2 className="mt-4 font-grotesk text-2xl font-bold md:text-3xl">Local Brand Visibility and Lead Growth</h2>
            </div>
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
              <div>
                <h3 className="font-grotesk text-lg font-semibold text-mars-300">The challenge</h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  The brand had a weak online presence, inconsistent content, and no clear lead-generation system.
                </p>
                <h3 className="mt-8 font-grotesk text-lg font-semibold text-nebula-400">The strategy</h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  We rebuilt the messaging, improved the website content, launched a focused content plan, and supported the offer with Meta and Google campaigns.
                </p>
              </div>
              <div>
                <h3 className="font-grotesk text-lg font-semibold text-ion-300">The execution</h3>
                <ul className="mt-3 space-y-3">
                  {execution.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-white/75">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ion-400/15 text-ion-300"><Icon name="check" className="h-3 w-3" /></span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 p-8 md:p-10">
              <h3 className="font-grotesk text-lg font-semibold">The outcome</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {results.map((r) => (
                  <div key={r.t} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.03] p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mars-500/15 text-mars-400"><Icon name={r.i} className="h-5 w-5" /></span>
                    <p className="text-sm font-medium text-white/80">{r.t}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <p className="text-lg text-white/70">Want results like this? Let us build your growth system.</p>
            <Link href="/contact" className="btn-primary mt-6">Book a Free Strategy Call</Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}
