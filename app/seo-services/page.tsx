import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'seo-services')!

export const metadata: Metadata = {
  title: "SEO Services in Lucknow | Rank for Searches That Convert",
  description: "SEO services in Lucknow: keyword research, on-page and technical SEO, local SEO, blog strategy, and Google Business Profile optimization that brings organic traffic which converts.",
  keywords: service.keywords,
  alternates: { canonical: '/seo-services' },
  openGraph: { title: "SEO Services in Lucknow | Rank for Searches That Convert", description: "SEO services in Lucknow: keyword research, on-page and technical SEO, local SEO, blog strategy, and Google Business Profile optimization that brings organic traffic which converts." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
