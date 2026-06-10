import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye } from '@/components/StatCounter'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
export const metadata: Metadata = { title:'Blog | Mars', description:'Digital marketing insights, SEO tips, and growth strategies for Lucknow businesses.' }
const posts = [
  { t:'Best Digital Marketing Strategy for Local Businesses in Lucknow', d:'How to build an effective online presence that brings real customers to your Lucknow business using SEO, ads, and social media.' },
  { t:'SEO vs Google Ads: Which One Should You Start With?', d:'A practical comparison to help you decide whether to invest in organic search or paid advertising first based on your budget and goals.' },
  { t:'How Meta Ads Can Help Restaurants and Retail Brands Grow', d:'Learn how Facebook and Instagram advertising can drive footfall, inquiries, and sales for food and retail businesses.' },
  { t:'Why Content Marketing is Important for Service Businesses', d:'How strategic content builds trust, improves SEO, and turns website visitors into paying customers over time.' },
  { t:'How AI Can Speed Up Marketing Without Hurting Quality', d:'A practical guide to using AI tools for content, research, and campaign planning while keeping your brand voice authentic.' },
  { t:'The Complete Local SEO Guide for Lucknow Businesses', d:'Everything you need to know about ranking on Google Maps, optimizing your Google Business Profile, and dominating local search.' },
]
export default function Blog() {
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div><Eye text="Blog" /><h1 className="h-sec font-grotesk mb-4">Marketing <span className="grad">Insights</span></h1>
      <p className="lead">Practical tips, strategies, and guides to help your business grow online. Written for business owners, not marketers.</p></div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain">
      <div className="grid-2">{posts.map((p,i) => (
        <div key={i} className="glass group cursor-default">
          <div className="text-[10px] font-medium tracking-[2px] uppercase text-m-or mb-3">Article</div>
          <h2 className="font-grotesk text-[17px] md:text-[19px] font-semibold mb-3 leading-tight">{p.t}</h2>
          <p className="text-[13px] text-m-mu leading-[1.75] font-light mb-4">{p.d}</p>
          <span className="text-[12px] text-m-dm">Coming soon</span>
        </div>
      ))}</div>
    </div></div>
    <div className="cta-sec"><div className="cta-glow" /><h2 className="h-sec font-grotesk mb-3 relative">Want <span className="grad">custom advice</span> for your business?</h2><p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">We will give you a practical plan based on your specific situation.</p><Link href="/contact" className="btn-cta relative">Book a Free Strategy Call</Link></div>
  </>)
}