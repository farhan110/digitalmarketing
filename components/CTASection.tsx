import Link from 'next/link'
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
            <Link href="/contact" className="btn-ghost">Request a Free Audit</Link>
            <Link href="/case-studies" className="btn-ghost">View Case Studies</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
