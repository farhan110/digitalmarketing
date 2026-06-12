import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'google-ads')!

export const metadata: Metadata = {
  title: "Google Ads Management | Capture High-Intent Search Demand",
  description: "Google Ads management: search campaigns, keyword strategy, conversion tracking, and budget optimization that puts you in front of people already searching for your service.",
  keywords: service.keywords,
  alternates: { canonical: '/google-ads' },
  openGraph: { title: "Google Ads Management | Capture High-Intent Search Demand", description: "Google Ads management: search campaigns, keyword strategy, conversion tracking, and budget optimization that puts you in front of people already searching for your service." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
