import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icons'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About MARS DIGITAL MARKETING | Digital Marketing Agency',
  description: 'MARS DIGITAL MARKETING is built for business owners who want marketing that actually performs — strategy, design, content, paid media, and technical execution under one roof.',
  alternates: { canonical: '/about' },
}

const why = [
  { t: 'Strategy-first planning', d: 'Every campaign starts with market understanding, not guesswork.', i: 'target' },
  { t: 'Clear reporting and communication', d: 'You always know what is running, what it costs, and what it returns.', i: 'chart' },
  { t: 'Fast delivery with practical execution', d: 'We move quickly and focus on what actually moves numbers.', i: 'rocket' },
  { t: 'Everything under one roof', d: 'SEO, ads, content, web, and creative support — no juggling freelancers.', i: 'spark' },
]

const values = [
  'Clarity over jargon',
  'Outcome over vanity metrics',
  'Consistency over random posting',
  'Growth that compounds over time',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        chip="About MARS DIGITAL MARKETING"
        title="Marketing that actually performs"
        intro="MARS DIGITAL MARKETING is built for business owners who want marketing that actually performs. We combine strategy, design, content, paid media, and technical execution so you don't have to manage multiple freelancers or agencies."
      />

      <section className="mx-auto max-w-7xl px-5 py-14">
        <Reveal>
          <div className="glass mx-auto max-w-3xl p-8 text-center md:p-12">
            <p className="text-lg leading-relaxed text-white/75">
              Our approach is simple: <span className="text-mars-300 font-semibold">understand the market</span>, build the right offer,
              launch the right campaign, and <span className="text-nebula-400 font-semibold">improve based on data</span>.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <Reveal><h2 className="text-center font-grotesk text-3xl font-bold md:text-4xl">Why choose us</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.t} delay={i * 100}>
              <div className="glass glass-hover flex gap-5 p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mars-500/15 text-mars-400"><Icon name={w.i} /></span>
                <div>
                  <h3 className="font-grotesk text-lg font-semibold">{w.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{w.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <Reveal><h2 className="text-center font-grotesk text-3xl font-bold md:text-4xl">Brand values</h2></Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v} delay={i * 90}>
              <div className="glass glass-hover p-7 text-center">
                <span className="font-grotesk text-3xl font-bold text-gradient-mars">0{i + 1}</span>
                <p className="mt-3 font-semibold text-white/85">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 text-center">
        <Reveal>
          <p className="text-xl leading-relaxed text-white/80">
            If your business needs more visibility, more leads, and more trust online, <span className="text-gradient font-grotesk font-bold">MARS DIGITAL MARKETING is ready to build the system behind it.</span>
          </p>
          <Link href="/contact" className="btn-primary mt-8">Start Your Growth Plan</Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}
