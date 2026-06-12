import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'meta-ads')!

export const metadata: Metadata = {
  title: "Meta Ads Agency | Facebook & Instagram Lead Generation",
  description: "Meta Ads management for awareness, traffic, leads, and retargeting. Creative, targeting, offer, and landing page working together \u2014 so your ad budget is used with purpose.",
  keywords: service.keywords,
  alternates: { canonical: '/meta-ads' },
  openGraph: { title: "Meta Ads Agency | Facebook & Instagram Lead Generation", description: "Meta Ads management for awareness, traffic, leads, and retargeting. Creative, targeting, offer, and landing page working together \u2014 so your ad budget is used with purpose." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
