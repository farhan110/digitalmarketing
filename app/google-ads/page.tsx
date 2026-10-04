import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'google-ads')!

export const metadata = pageMetadata(
  "Google Ads Agency in Lucknow",
  "Google Ads management in Lucknow: Search, Shopping, Performance Max and remarketing campaigns with conversion tracking for leads and online sales.",
  "/google-ads", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
