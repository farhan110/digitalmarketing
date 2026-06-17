import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'meta-ads')!

export const metadata: Metadata = {
  title: "Meta Ads Agency | Facebook & Instagram Advertising",
  description: "Meta Ads agency building full-funnel Facebook and Instagram campaigns with UGC creative that generate leads, drive sales, and scale profitably.",
  keywords: service.keywords,
  alternates: { canonical: '/meta-ads' },
  openGraph: { title: "Meta Ads Agency | Facebook & Instagram Advertising", description: "Meta Ads agency building full-funnel Facebook and Instagram campaigns with UGC creative that generate leads, drive sales, and scale profitably." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
