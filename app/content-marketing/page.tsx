import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
export const metadata: Metadata = { title:'Content Marketing Services | Mars', description:'Grow trust and search visibility with content marketing, blog strategy, landing page copy, and website messaging.' }
export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Content Marketing"
      title="Content Marketing"
      titleHighlight="Services"
      description="Good content does three things: it attracts the right audience, explains your value clearly, and helps people decide faster. We write content that supports SEO, social media, email, and sales pages."
      features={["Website copywriting","Blog outlines and SEO articles","Landing page messaging","Campaign copy and ad hooks","Lead magnet creation","Newsletter content strategy","Brand messaging and tone of voice"]}
      cta="Make your brand easier to understand, trust, and buy from."
    />
  )
}