import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
export const metadata: Metadata = { title:'Social Media Marketing in Lucknow | Mars', description:'Build brand trust and engagement with social media strategy, content planning, design, reels, and account management.' }
export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Social Media"
      title="Social Media Marketing in"
      titleHighlight="Lucknow"
      description="Social media should do more than fill a feed. It should make your brand recognizable, trustworthy, and easy to remember. We create content plans that balance education, proof, promotion, and personality."
      features={["Monthly content planning and calendar","Reels and short-form video direction","Caption writing and hashtag strategy","Creative templates and brand consistency","Community management and engagement","Performance reporting and analytics","Profile optimization and growth strategy"]}
      cta="Turn your social media presence into a real growth asset."
    />
  )
}