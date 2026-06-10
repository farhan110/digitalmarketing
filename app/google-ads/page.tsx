import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
export const metadata: Metadata = { title:'Google Ads Management in Lucknow | Mars', description:'Get more high-intent leads with Google Ads campaigns, keyword strategy, conversion tracking, and landing page optimization.' }
export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Google Ads"
      title="Google Ads Management in"
      titleHighlight="Lucknow"
      description="Google Ads are ideal when people are already searching for what you offer. We create search campaigns that capture demand, support remarketing, and send traffic to landing pages built for action."
      features={["Search campaign setup and management","Keyword and negative keyword strategy","Conversion tracking and analytics","Landing page optimization","Budget optimization and bid management","Search term analysis and refinement","Remarketing campaign setup"]}
      cta="Start getting in front of people already looking for your service."
    />
  )
}