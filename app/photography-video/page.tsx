import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'photography-video')!

export const metadata: Metadata = {
  title: "Photography & Video Production Services",
  description: "Professional photography and video production: product shoots, brand and lifestyle photography, video production, and short-form Reels content that elevate your brand.",
  keywords: service.keywords,
  alternates: { canonical: '/photography-video' },
  openGraph: { title: "Photography & Video Production Services", description: "Professional photography and video production: product shoots, brand and lifestyle photography, video production, and short-form Reels content that elevate your brand." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
