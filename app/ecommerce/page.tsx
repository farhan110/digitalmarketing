import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'ecommerce')!

export const metadata = pageMetadata(
  "eCommerce Marketing Agency in Lucknow",
  "eCommerce marketing in Lucknow combining product SEO, Google and Meta Ads, store optimization and creative to improve acquisition and conversions.",
  "/ecommerce", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
