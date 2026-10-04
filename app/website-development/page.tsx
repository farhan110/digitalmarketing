import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'website-development')!

export const metadata = pageMetadata(
  "Website Development in Lucknow",
  "Website development in Lucknow for business sites, campaign landing pages and eCommerce stores, with mobile usability and search-friendly structure.",
  "/website-development", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
