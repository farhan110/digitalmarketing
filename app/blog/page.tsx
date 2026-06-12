import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights for Lucknow Businesses',
  description: 'Practical guides on SEO, Google Ads, Meta Ads, content marketing, and AI for local businesses in Lucknow and across India.',
  alternates: { canonical: '/blog' },
}

const posts = [
  { title: 'Best digital marketing strategy for local businesses in Lucknow', desc: 'A practical playbook for local visibility: search, social, ads, and the order to do them in.', tag: 'Strategy', g: 'from-mars-500/25 to-mars-600/5' },
  { title: 'SEO vs Google Ads: which one should you start with?', desc: 'Organic vs paid search — how to decide based on your budget, timeline, and demand.', tag: 'SEO · Ads', g: 'from-nebula-500/25 to-nebula-500/5' },
  { title: 'How Meta Ads can help restaurants and retail brands grow', desc: 'Creative, targeting, and offers that turn Instagram and Facebook into a lead channel.', tag: 'Meta Ads', g: 'from-ion-400/20 to-ion-400/5' },
  { title: 'Why content marketing is important for service businesses', desc: 'How content builds trust before the first call — and shortens your sales cycle.', tag: 'Content', g: 'from-mars-500/20 to-nebula-500/10' },
  { title: 'How AI can speed up marketing without hurting quality', desc: 'Where AI helps (research, drafts, workflows) and where humans must stay in charge.', tag: 'AI Marketing', g: 'from-ion-400/20 to-mars-500/10' },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        chip="Blog"
        title="Marketing insights that move numbers"
        intro="Practical, no-jargon guides on SEO, ads, content, and AI — written for business owners, not marketers."
      />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="glass glass-hover group flex h-full flex-col overflow-hidden">
                <div className={`flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${p.g}`}>
                  <span className="font-grotesk text-4xl opacity-40">✦</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-mars-300">{p.tag}</span>
                  <h2 className="mt-2 font-grotesk text-lg font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-white/40">Coming soon</span>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={450}>
            <Link href="/contact" className="glass glass-hover flex h-full flex-col items-center justify-center p-10 text-center">
              <span className="font-grotesk text-2xl font-bold text-gradient">Have a topic in mind?</span>
              <p className="mt-3 text-sm text-white/60">Ask us anything about marketing your business — we may write about it next.</p>
              <span className="btn-ghost mt-6 text-sm">Ask Mars →</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
