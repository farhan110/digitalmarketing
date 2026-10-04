import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'meta-ads')!

export const metadata = pageMetadata(
  "Meta Ads Agency in Lucknow",
  "Facebook and Instagram ads management in Lucknow. MARS DIGITAL MARKETING connects creative, lead generation, eCommerce campaigns and retargeting.",
  "/meta-ads", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
