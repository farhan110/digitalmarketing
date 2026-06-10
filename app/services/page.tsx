import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye } from '@/components/StatCounter'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
export const metadata: Metadata = { title:'Digital Marketing Services in Lucknow | Mars', description:'Explore Mars services including SEO, Meta Ads, Google Ads, social media management, content marketing, email marketing, and AI automation.' }
const srvs = [
  { t:'SEO Services', d:'Keyword research, on-page optimization, technical SEO, local SEO, blog strategy, and Google Business Profile optimization.', href:'/seo-services', ic:'io' },
  { t:'Meta Ads Management', d:'Audience research, funnel planning, creative concepts, ad copy, lead generation, retargeting, and campaign optimization.', href:'/meta-ads', ic:'ip' },
  { t:'Google Ads Management', d:'Search campaign setup, keyword and negative keyword strategy, conversion tracking, landing page optimization, and budget management.', href:'/google-ads', ic:'iu' },
  { t:'Social Media Marketing', d:'Monthly content planning, reels and short-form video, caption writing, creative templates, community management, and reporting.', href:'/social-media', ic:'ic' },
  { t:'Content Marketing', d:'Website copywriting, blog articles, landing page messaging, campaign copy, ad hooks, lead magnets, and newsletter content.', href:'/content-marketing', ic:'ig' },
  { t:'Email Marketing', d:'Welcome sequences, newsletter strategy, promotional campaigns, lead nurturing automations, segmentation, and performance reporting.', href:'/email-marketing', ic:'iy' },
  { t:'AI Marketing Automation', d:'Content ideation, prompt workflows, reporting automation, customer journey optimization, and AI-assisted campaign planning.', href:'/ai-marketing', ic:'io' },
]
export default function Services() {
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div>
        <Eye text="Our Services" />
        <h1 className="h-sec font-grotesk mb-4">Complete <span className="grad">Growth Systems</span></h1>
        <p className="lead">We do not sell random posts or disconnected campaigns. We design complete growth systems that connect discovery, trust, conversion, and repeat business.</p>
      </div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain">
      <div className="grid-3">{srvs.map(s => (
        <Link key={s.t} href={s.href} className="glass group">
          <div className={`srv-icon ${s.ic}`}>{s.t[0]}</div>
          <h3 className="font-grotesk text-[16px] font-semibold mb-2">{s.t}</h3>
          <p className="text-[13px] text-m-mu leading-[1.7] font-light mb-3">{s.d}</p>
          <span className="inline-flex items-center gap-1 text-[11px] text-m-or font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">View details &rarr;</span>
        </Link>
      ))}</div>
    </div></div>
    <div className="cta-sec"><div className="cta-glow" /><Eye text="Not Sure Where to Start?" /><h2 className="h-sec font-grotesk mb-3 relative">Tell us your <span className="grad">goal</span></h2><p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">We will suggest the best starting point for your business.</p><Link href="/contact" className="btn-cta relative">Book a Free Strategy Call</Link></div>
  </>)
}