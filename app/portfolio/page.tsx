import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye } from '@/components/StatCounter'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
export const metadata: Metadata = { title:'Portfolio & Proof of Work | Mars', description:'See examples of social media management, content creation, and brand work managed by Mars.' }
export default function Portfolio() {
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div><Eye text="Portfolio" /><h1 className="h-sec font-grotesk mb-4">Proof of <span className="grad">Work</span></h1>
      <p className="lead">Real accounts. Real content. Real management. Here are examples of the kind of work we do for our clients.</p></div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain">
      <div className="grid-3">{[
        { t:'Food & Beverage Brand', d:'Managed social media content and profile growth for a food and beverage brand. Strategy, content calendar, Reels, and community management.' },
        { t:'Luxury Retail Store', d:'Created brand-led content for a luxury retail store. Visual identity, seasonal campaigns, and premium storytelling across Instagram.' },
        { t:'Consumer Health Brand', d:'Built content direction for a consumer health brand with educational and product-focused posts. Grew reach from zero to 1L+ monthly.' },
        { t:'Automotive Showroom', d:'Managed digital advertising and social presence for an automotive showroom. Google Ads, Meta Ads, and video content production.' },
        { t:'Interior Design Studio', d:'Portfolio storytelling, before-after content, and lead generation campaigns for a premium interior design studio in Lucknow.' },
        { t:'Healthcare Clinic', d:'Local SEO, Google Business Profile management, and patient acquisition campaigns for a healthcare practice in Lucknow.' },
      ].map(p => (
        <div key={p.t} className="glass"><div className="w-full h-32 rounded-lg bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] mb-4 flex items-center justify-center text-m-dm text-[12px]">Client Screenshot</div>
        <h3 className="font-grotesk text-[15px] font-semibold mb-2">{p.t}</h3><p className="text-[13px] text-m-mu leading-[1.7] font-light">{p.d}</p></div>
      ))}</div>
    </div></div>
    <div className="cta-sec"><div className="cta-glow" /><h2 className="h-sec font-grotesk mb-3 relative">Want to see your brand <span className="grad">here?</span></h2><p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">Let us build your growth story.</p><Link href="/contact" className="btn-cta relative">Book a Free Strategy Call</Link></div>
  </>)
}