import Link from 'next/link'
import type { Service } from '@/lib/site'
import { SERVICES } from '@/lib/site'
import { Reveal } from './Reveal'
import { Icon } from './Icons'
import { CTASection } from './CTASection'

export function ServicePageLayout({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-36 md:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="chip">{service.tagline}</span>
            <h1 className="mt-6 font-grotesk text-4xl font-bold leading-tight md:text-5xl">
              {service.name} <span className="text-gradient">that performs</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Strategy Call</Link>
              <Link href="/case-studies" className="btn-ghost">View Case Studies</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass glass-hover relative flex aspect-square max-w-md items-center justify-center justify-self-center p-10">
              <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-br from-mars-500/10 via-transparent to-nebula-500/10" />
              <Icon name={service.icon} className="h-28 w-28 text-mars-400 drop-shadow-[0_0_24px_rgba(255,107,61,.5)]" />
              <span className="planet-ring !inset-6"><span className="sat" /></span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <Reveal><h2 className="text-center font-grotesk text-3xl font-bold md:text-4xl">What&apos;s included</h2></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f, i) => (
            <Reveal key={f} delay={i * 80}>
              <div className="glass glass-hover flex items-start gap-4 p-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mars-500/15 text-mars-400">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <p className="font-medium text-white/85">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-xl font-medium leading-relaxed text-white/80">
            <span className="text-gradient-mars font-grotesk text-2xl">“</span> {service.cta} <span className="text-gradient-mars font-grotesk text-2xl">”</span>
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <Reveal><h2 className="text-center font-grotesk text-2xl font-bold">Pairs well with</h2></Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link href={`/${s.slug}`} className="glass glass-hover block p-6">
                <Icon name={s.icon} className="h-8 w-8 text-mars-400" />
                <h3 className="mt-4 font-grotesk text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-white/60">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
