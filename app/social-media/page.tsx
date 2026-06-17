import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'social-media')!

export const metadata: Metadata = {
  title: "Social Media Marketing Agency | Instagram & Facebook Growth",
  description: "Social media marketing that makes your brand recognizable and trustworthy: content strategy, Reels, creative design, and community management.",
  keywords: service.keywords,
  alternates: { canonical: '/social-media' },
  openGraph: { title: "Social Media Marketing Agency | Instagram & Facebook Growth", description: "Social media marketing that makes your brand recognizable and trustworthy: content strategy, Reels, creative design, and community management." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
