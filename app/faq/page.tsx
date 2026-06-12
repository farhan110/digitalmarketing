import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'FAQ | Digital Marketing Questions Answered — Mars Lucknow',
  description: 'How soon can you see results? Which service should you start with? Honest answers about SEO, ads, content, and reporting from Mars, Lucknow.',
  alternates: { canonical: '/faq' },
}

const faqs = [
  { q: 'How soon can I see results?', a: 'Paid ads (Meta and Google) can generate traffic and leads within days of launch. SEO builds over 3–6 months and keeps compounding. Social media trust-building is steady and consistent. We set honest expectations for each channel before we start.' },
  { q: 'Which service should I start with?', a: 'It depends on your goal and budget. If people already search for your service, Google Ads or SEO capture that demand. If you need awareness and leads from social, Meta Ads work first. Share your goal and we will recommend the best starting point.' },
  { q: 'Do you work with local businesses only?', a: 'No. We work with brands in Lucknow and across India. Local businesses benefit from our local SEO and geo-targeted ads, while broader brands use our full growth system.' },
  { q: 'Can you manage the website content too?', a: 'Yes. Website copywriting, landing page messaging, blog articles, and SEO content are all part of our content marketing service — so your site supports your campaigns.' },
  { q: 'Do you provide reports and strategy reviews?', a: 'Yes. Clear reporting and communication is one of our core promises. You get performance reports with insights, plus regular strategy reviews so the plan keeps improving.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        chip="FAQ"
        title="Honest answers, no jargon"
        intro="Every business is different, so the best strategy is always built around your goals, budget, and market. Here are the questions we hear most."
      />
      <section className="mx-auto max-w-3xl px-5 py-10">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
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
