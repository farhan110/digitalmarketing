import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Portfolio & Proof of Work | Mars Digital Marketing Lucknow',
  description: 'Managed social media accounts, brand-led content, and ad strategy work across food & beverage, luxury retail, and consumer brands.',
  alternates: { canonical: '/portfolio' },
}

const work = [
  { title: 'Food & Beverage Brand', caption: 'Managed social media content and profile growth for a food and beverage brand.', g: 'from-mars-500/30 to-mars-600/5', tag: 'Instagram · Content · Growth' },
  { title: 'Luxury Retail Store', caption: 'Created brand-led content for a luxury retail store.', g: 'from-nebula-500/30 to-nebula-500/5', tag: 'Branding · Content Direction' },
  { title: 'Consumer Honey Brand', caption: 'Built content direction for a consumer honey brand with educational and product-focused posts.', g: 'from-ion-400/25 to-ion-400/5', tag: 'Content Strategy · Education' },
]

const partners = ['Brand One', 'Brand Two', 'Brand Three', 'Brand Four', 'Brand Five', 'Brand Six']

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        chip="Portfolio · Proof of Work"
        title="Real brands. Real content. Real management."
        intro="A look at the social media accounts, content direction, and brand work we manage — across food, retail, and consumer brands."
      />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-7 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 110}>
              <article className="glass glass-hover overflow-hidden">
                <div className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${w.g}`}>
                  <span className="rounded-full border border-white/15 bg-space-950/60 px-4 py-1.5 text-xs uppercase tracking-widest text-white/60 backdrop-blur">Add screenshot</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-mars-300">{w.tag}</span>
                  <h2 className="mt-2 font-grotesk text-lg font-semibold">{w.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{w.caption}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-6 text-center text-xs text-white/40">
            Tip: replace the placeholders above with your Instagram screenshots — each card supports an image with its caption.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[.25em] text-white/40">Brands we have worked with</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <span key={p} className="font-grotesk text-lg font-semibold text-white/25 transition hover:text-white/60">{p}</span>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/35">Replace with client logos — keep it minimal so it feels premium.</p>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}
