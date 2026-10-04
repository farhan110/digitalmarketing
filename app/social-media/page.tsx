import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'social-media')!

export const metadata = pageMetadata(
  "Social Media Marketing in Lucknow",
  "Social media marketing in Lucknow: content planning, Reels, brand design and community management for a consistent Facebook and Instagram presence.",
  "/social-media", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
