import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'photography-video')!

export const metadata = pageMetadata(
  "Photography & Video Production in Lucknow",
  "Product photography, brand shoots, video production and Reels content in Lucknow for websites, social media, advertising and online stores.",
  "/photography-video", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
