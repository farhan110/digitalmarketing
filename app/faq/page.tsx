import Link from 'next/link'
import { FAQS, SERVICES } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import { webpageSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'

const title = 'Digital Marketing FAQs'
const description = 'Answers about Mars digital marketing services in Lucknow, SEO timelines, campaign reporting, pricing and eCommerce advertising.'
export const metadata = pageMetadata(title, description, '/faq')

export default function FAQPage() {
  const schema = {
    ...webpageSchema(title, description, '/faq', 'FAQPage'),
    mainEntity: FAQS.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <PageHero chip="Questions & answers" title="Digital marketing FAQs" intro="Understand our services, reporting and approach before planning your next marketing campaign." />
      <div className="mx-auto max-w-4xl px-5">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faq' }]} />
        <section aria-label="Common digital marketing questions" className="mt-8 space-y-6">
          {FAQS.map(faq => <section key={faq.q} className="glass p-7"><h2 className="font-grotesk text-xl font-semibold">{faq.q}</h2><p className="mt-3 leading-relaxed text-white/75">{faq.a}</p></section>)}
        </section>
        <section className="mt-14">
          <h2 className="font-grotesk text-2xl font-semibold">Questions about a specific service?</h2>
          <p className="mt-3 text-white/75">Each service page explains what we provide and answers questions about that channel.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">{SERVICES.map(service => <li key={service.slug}><Link href={`/${service.slug}`} className="text-mars-300 underline">{service.name}</Link></li>)}</ul>
          <p className="mt-8 text-white/75">For a plan based on your business goals, <Link href="/contact" className="text-mars-300 underline">contact our team</Link>.</p>
        </section>
      </div>
    </>
  )
}
