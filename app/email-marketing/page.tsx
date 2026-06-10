import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
export const metadata: Metadata = { title:'Email Marketing Services | Mars', description:'Improve repeat traffic and customer retention with email campaigns, automation flows, and newsletter strategy.' }
export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Email Marketing"
      title="Email Marketing"
      titleHighlight="Services"
      description="Email remains one of the strongest channels for lead nurturing and retention. We create email journeys that welcome new subscribers, re-engage old leads, promote offers, and keep your brand top of mind."
      features={["Welcome and onboarding sequences","Newsletter strategy and execution","Promotional campaign management","Lead nurturing automations","Audience segmentation","Performance reporting and optimization","Re-engagement campaigns"]}
      cta="Convert more of the traffic you already earned."
    />
  )
}