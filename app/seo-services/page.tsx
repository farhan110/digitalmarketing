import { pageMetadata } from '@/lib/seo'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'seo-services')!

export const metadata = pageMetadata(
  "SEO Company in Lucknow",
  "SEO services in Lucknow from MARS DIGITAL MARKETING: technical SEO, on-page content, internal links, authority building and AI search optimization.",
  "/seo-services", service.keywords,
)

export default function Page() {
  return <ServicePageLayout service={service} />
}
