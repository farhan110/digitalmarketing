import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'seo-services')!

export const metadata: Metadata = {
  title: "SEO Company in Lucknow | Search Engine Optimization Services",
  description: "MARS DIGITAL MARKETING is a results-driven SEO company in Lucknow offering on-page, off-page, technical SEO, and GEO/AEO optimization that drives targeted organic traffic and growth.",
  keywords: service.keywords,
  alternates: { canonical: '/seo-services' },
  openGraph: { title: "SEO Company in Lucknow | Search Engine Optimization Services", description: "MARS DIGITAL MARKETING is a results-driven SEO company in Lucknow offering on-page, off-page, technical SEO, and GEO/AEO optimization that drives targeted organic traffic and growth." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
