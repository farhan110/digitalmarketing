import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'google-ads')!

export const metadata: Metadata = {
  title: "Google Ads Agency | PPC & Search Campaign Management",
  description: "Google Ads agency managing high-intent Search, Shopping, Performance Max, and remarketing campaigns engineered for qualified leads and measurable return on ad spend.",
  keywords: service.keywords,
  alternates: { canonical: '/google-ads' },
  openGraph: { title: "Google Ads Agency | PPC & Search Campaign Management", description: "Google Ads agency managing high-intent Search, Shopping, Performance Max, and remarketing campaigns engineered for qualified leads and measurable return on ad spend." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
