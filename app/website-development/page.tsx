import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'website-development')!

export const metadata: Metadata = {
  title: "Website Development Services | Fast, Converting Websites",
  description: "Website development services building fast, mobile-first, SEO-ready business sites, landing pages, and eCommerce stores designed to convert visitors into customers.",
  keywords: service.keywords,
  alternates: { canonical: '/website-development' },
  openGraph: { title: "Website Development Services | Fast, Converting Websites", description: "Website development services building fast, mobile-first, SEO-ready business sites, landing pages, and eCommerce stores designed to convert visitors into customers." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
