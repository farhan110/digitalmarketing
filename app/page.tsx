import Link from 'next/link'
import type { Metadata } from 'next'
import { MarsPlanet } from '@/components/MarsPlanet'
import { Reveal } from '@/components/Reveal'
import { StatCounter } from '@/components/StatCounter'
import { Icon } from '@/components/Icons'
import { CTASection } from '@/components/CTASection'
import { SERVICES, CASE_STUDIES, FAQS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Lucknow | MARS DIGITAL MARKETING',
  description:
    'MARS DIGITAL MARKETING is a results-driven digital marketing agency in Lucknow helping businesses grow online visibility, generate qualified leads, and increase revenue through SEO, Google Ads, Meta Ads, Social Media, Website Development, Photography & Video, and eCommerce.',
  alternates: { canonical: '/' },
}

const industries = ['Retail', 'Food & Beverage', 'Lifestyle', 'Education', 'B2B & Manufacturing', 'eCommerce', 'Technology', 'Service Businesses']

const steps = [
  { n: '01', title: 'Discover', text: 'We understand your market, audience, and offer — then map the channels and keywords that matter.', icon: 'search' },
  { n: '02', title: 'Build', text: 'We launch the right campaigns, content, and pages — connected as one growth system, not random posts.', icon: 'rocket' },
  { n: '03', title: 'Grow', text: 'We measure, report, and improve based on data, so growth compounds month after month.', icon: 'chart' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="chip">🚀 Digital Marketing Agency in Lucknow</span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-grotesk text-4xl font-bold leading-[1.1] md:text-6xl">
                Digital Marketing Agency in <span className="text-gradient">Lucknow</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                MARS DIGITAL MARKETING is a results-driven digital marketing agency in Lucknow helping businesses grow their online visibility, generate qualified leads, and increase revenue through data-backed marketing strategies. We specialize in SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, Photography &amp; Video Production, and eCommerce marketing solutions designed to help brands stand out in today&apos;s competitive digital landscape.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Book a Free Strategy Call</Link>
                <Link href="/contact" className="btn-ghost">Request a Free Audit</Link>
                <Link href="/our-work" className="btn-ghost">See Our Work</Link>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                <StatCounter value={4} suffix="+" label="Years of experience" />
                <StatCounter value={7} label="Growth services" />
                <StatCounter value={100} suffix="%" label="Performance focused" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}><MarsPlanet /></Reveal>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section aria-label="Industries we serve" className="border-y border-white/5 bg-white/[.02] py-6">
        <p className="mb-4 text-center text-xs uppercase tracking-[.2em] text-white/40">
          Trusted by growing brands across industries
        </p>
        <div className="marquee">
          <div className="marquee-track">
            {[...industries, ...industries].map((b, i) => (
              <span key={i} className="font-grotesk text-lg font-semibold text-white/35">✦ {b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <span className="chip mx-auto block w-fit">Our Services</span>
          <h2 className="mt-5 text-center font-grotesk text-3xl font-bold md:text-5xl">
            One team. <span className="text-gradient">Every growth channel.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/65">
            We design complete growth systems that connect discovery, trust, conversion, and repeat business — across every channel your brand needs.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link href={`/${s.slug}`} className="glass glass-hover group block h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-mars-500/20 to-nebula-500/15 text-mars-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={s.icon} />
                </span>
                <h2 className="mt-5 font-grotesk text-xl font-semibold">{s.name}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mars-300 transition-all group-hover:gap-3">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR WORK / CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal>
          <span className="chip mx-auto block w-fit">Our Work</span>
          <h2 className="mt-5 text-center font-grotesk text-3xl font-bold md:text-5xl">
            Real brands. <span className="text-gradient">Real results.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/65">
            A look at how we&apos;ve helped businesses grow through search, ads, and conversion — click any project to read the full case study.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link href={`/our-work/${c.slug}`} className="glass glass-hover group relative block h-full overflow-hidden p-8">
                <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-60`} />
                <span className="text-xs font-semibold uppercase tracking-widest text-mars-300">{c.category}</span>
                <h3 className="mt-3 font-grotesk text-2xl font-bold">{c.client}</h3>
                <p className="mt-1 text-sm font-medium text-nebula-400">{c.metric}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{c.cardDesc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  Read case study <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="mt-10 text-center"><Link href="/our-work" className="btn-ghost">View all work →</Link></div>
        </Reveal>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="chip">Why MARS</span>
            <h2 className="mt-5 font-grotesk text-3xl font-bold md:text-4xl">
              Marketing that <span className="text-gradient-mars">actually performs</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">
              We combine strategy, design, content, paid media, and technical execution under one roof — so you don&apos;t have to manage multiple freelancers or agencies. We understand the market, build the right offer, launch the right campaign, and improve based on data.
            </p>
            <ul className="mt-7 space-y-3.5">
              {['Strategy-first planning', 'Clear weekly updates and monthly reporting', 'A dedicated specialist as your point of contact', 'SEO, ads, content, web, and creative under one roof'].map((v) => (
                <li key={v} className="flex items-start gap-3 text-white/80">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mars-500/20 text-mars-400"><Icon name="check" className="h-3 w-3" /></span>
                  {v}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-ghost mt-8">More about us →</Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { t: 'Clarity over jargon', i: 'spark' },
                { t: 'Outcome over vanity metrics', i: 'target' },
                { t: 'Consistency over random posting', i: 'chart' },
                { t: 'Growth that compounds', i: 'rocket' },
              ].map((v, i) => (
                <div key={v.t} className={`glass glass-hover p-6 ${i % 2 ? 'sm:translate-y-6' : ''}`}>
                  <Icon name={v.i} className="h-7 w-7 text-nebula-400" />
                  <p className="mt-4 font-grotesk font-semibold">{v.t}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <span className="chip mx-auto block w-fit">How we work</span>
          <h2 className="mt-5 text-center font-grotesk text-3xl font-bold md:text-5xl">A simple 3-step process</h2>
        </Reveal>
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="glow-line absolute left-0 right-0 top-12 hidden md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 150}>
              <div className="glass glass-hover relative p-8 text-center">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-mars-600 to-mars-400 px-4 py-1 font-grotesk text-sm font-bold shadow-glow-sm">{s.n}</span>
                <span className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-mars-500/10 text-mars-400"><Icon name={s.icon} className="h-7 w-7" /></span>
                <h3 className="mt-5 font-grotesk text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
        <Reveal>
          <h2 className="text-center font-grotesk text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
