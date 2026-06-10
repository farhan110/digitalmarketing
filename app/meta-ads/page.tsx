import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
export const metadata: Metadata = { title:'Meta Ads Management in Lucknow | Mars', description:'Reach the right audience with Meta Ads that combine strong creative, clear targeting, and landing pages that convert.' }
export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Meta Ads"
      title="Meta Ads Management in"
      titleHighlight="Lucknow"
      description="Meta Ads work best when the creative, targeting, offer, and landing page all support each other. We build campaigns for awareness, traffic, lead generation, and retargeting so your budget is used with purpose."
      features={["Audience research and funnel planning","Creative concepts and ad copy","Lead generation and retargeting campaigns","Campaign optimization and A/B testing","Reporting with performance insights","Landing page recommendations","Budget allocation and scaling strategy"]}
      cta="Need more leads from Instagram and Facebook?"
    />
  )
}