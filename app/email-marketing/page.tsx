import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'email-marketing')!

export const metadata: Metadata = {
  title: "Email Marketing & Automation | Nurture and Convert Leads",
  description: "Email marketing services: welcome sequences, newsletters, promotional campaigns, lead nurturing automations, and segmentation \u2014 convert more of the traffic you already earned.",
  keywords: service.keywords,
  alternates: { canonical: '/email-marketing' },
  openGraph: { title: "Email Marketing & Automation | Nurture and Convert Leads", description: "Email marketing services: welcome sequences, newsletters, promotional campaigns, lead nurturing automations, and segmentation \u2014 convert more of the traffic you already earned." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
