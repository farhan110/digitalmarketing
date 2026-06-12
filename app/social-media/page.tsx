import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'social-media')!

export const metadata: Metadata = {
  title: "Social Media Management | Instagram & Facebook Growth",
  description: "Social media management in Lucknow: monthly content planning, Reels direction, captions, hashtags, creative templates, and community management that builds a recognizable brand.",
  keywords: service.keywords,
  alternates: { canonical: '/social-media' },
  openGraph: { title: "Social Media Management | Instagram & Facebook Growth", description: "Social media management in Lucknow: monthly content planning, Reels direction, captions, hashtags, creative templates, and community management that builds a recognizable brand." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
