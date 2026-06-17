import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icons'
import { CTASection } from '@/components/CTASection'
import { CASE_STUDIES, SITE } from '@/lib/site'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug)
  if (!study) return {}
  const title = `${study.client} Case Study — ${study.title}`
  return {
    title,
    description: study.cardDesc,
    alternates: { canonical: `/our-work/${study.slug}` },
    openGraph: { title, description: study.cardDesc },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug)
  if (!study) notFound()
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.client} Case Study: ${study.title}`,
    description: study.cardDesc,
    author: { '@type': 'Organization', name: 'MARS DIGITAL MARKETING', url: SITE.url },
    publisher: { '@type': 'Organization', name: 'MARS DIGITAL MARKETING', url: SITE.url },
    mainEntityOfPage: `${SITE.url}/our-work/${study.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative mx-auto max-w-4xl px-5 pb-6 pt-36 md:pt-44">
        <Reveal>
          <Link href="/our-work" className="text-sm text-white/55 transition hover:text-mars-300">← Back to Our Work</Link>
          <span className="chip mt-6">{study.category}</span>
          <h1 className="mt-5 font-grotesk text-4xl font-bold leading-tight md:text-5xl">{study.client}</h1>
          <p className="mt-3 text-xl text-white/75">{study.title}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-nebula-400/30 bg-nebula-500/10 px-4 py-2 text-sm font-semibold text-nebula-300">
            <Icon name="chart" className="h-4 w-4" /> {study.metric}
          </div>
        </Reveal>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-8">
        {study.sections.map((sec, i) => (
          <Reveal key={sec.h} delay={i * 40}>
            <section className="glass mb-6 p-7 md:p-9">
              <h2 className="font-grotesk text-2xl font-bold text-gradient-mars">{sec.h}</h2>
              {sec.paras?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-white/75">{p}</p>
              ))}
              {sec.groups?.map((g) => (
                <div key={g.title} className="mt-5">
                  <h3 className="font-grotesk text-lg font-semibold text-white">{g.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mars-400" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {sec.bullets && (
                <ul className="mt-4 space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mars-400" />{b}
                    </li>
                  ))}
                </ul>
              )}
              {sec.checks && (
                <ul className="mt-4 space-y-3">
                  {sec.checks.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-white/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400"><Icon name="check" className="h-3 w-3" /></span>{c}
                    </li>
                  ))}
                </ul>
              )}
              {sec.pEnd && <p className="mt-4 leading-relaxed text-white/75">{sec.pEnd}</p>}
            </section>
          </Reveal>
        ))}
      </article>

      <section className="mx-auto max-w-4xl px-5 py-10 text-center">
        <Reveal>
          <p className="text-lg text-white/70">Want results like this? Let&apos;s build your growth system.</p>
          <Link href="/contact" className="btn-primary mt-6">Book a Free Strategy Call</Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <Reveal><h2 className="text-center font-grotesk text-2xl font-bold">More of our work</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link href={`/our-work/${c.slug}`} className="glass glass-hover block p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-mars-300">{c.category}</span>
                <h3 className="mt-2 font-grotesk text-lg font-semibold">{c.client}</h3>
                <p className="mt-2 text-sm text-white/60">{c.metric}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
