import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'content-marketing')!

export const metadata: Metadata = {
  title: "Content Marketing Services | Copy, Blogs & Landing Pages",
  description: "Content marketing that attracts the right audience and converts: website copywriting, blog articles, landing page messaging, ad hooks, and newsletter content.",
  keywords: service.keywords,
  alternates: { canonical: '/content-marketing' },
  openGraph: { title: "Content Marketing Services | Copy, Blogs & Landing Pages", description: "Content marketing that attracts the right audience and converts: website copywriting, blog articles, landing page messaging, ad hooks, and newsletter content." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
