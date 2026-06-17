import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'ecommerce')!

export const metadata: Metadata = {
  title: "eCommerce Marketing Agency | Grow Your Online Store",
  description: "eCommerce marketing across SEO, paid ads, creative, and conversion optimization, from store setup to scaling acquisition and customer lifetime value.",
  keywords: service.keywords,
  alternates: { canonical: '/ecommerce' },
  openGraph: { title: "eCommerce Marketing Agency | Grow Your Online Store", description: "eCommerce marketing across SEO, paid ads, creative, and conversion optimization, from store setup to scaling acquisition and customer lifetime value." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
