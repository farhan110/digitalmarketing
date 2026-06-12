import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { SERVICES } from '@/lib/site'

const service = SERVICES.find((s) => s.slug === 'ai-marketing')!

export const metadata: Metadata = {
  title: "AI Marketing Automation | Faster, Smarter, Human-Led",
  description: "AI marketing automation: research and ideation support, prompt workflows, reporting helpers, and customer journey optimization \u2014 AI speed with human-led strategy and quality.",
  keywords: service.keywords,
  alternates: { canonical: '/ai-marketing' },
  openGraph: { title: "AI Marketing Automation | Faster, Smarter, Human-Led", description: "AI marketing automation: research and ideation support, prompt workflows, reporting helpers, and customer journey optimization \u2014 AI speed with human-led strategy and quality." },
}

export default function Page() {
  return <ServicePageLayout service={service} />
}
