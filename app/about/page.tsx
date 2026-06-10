import type { Metadata } from 'next'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
import { Eye } from '@/components/StatCounter'
export const metadata: Metadata = { title:'About Mars | Digital Marketing Agency in Lucknow', description:'Learn how Mars helps brands grow with SEO, ads, content, automation, and strategy built for real business results.' }
export default function About() {
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div>
        <Eye text="About Us" />
        <h1 className="h-sec font-grotesk mb-4">Marketing That Actually <span className="grad">Performs</span></h1>
        <p className="lead">Mars is built for business owners who want marketing that actually performs. We combine strategy, design, content, paid media, and technical execution so you do not have to manage multiple freelancers or agencies.</p>
      </div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain grid-sidebar">
      <div>
        <Eye text="Our Approach" />
        <h2 className="h-sub font-grotesk mb-5">Understand. Build. Launch. <span className="grad">Improve.</span></h2>
        <div className="space-y-4 text-[14px] text-m-mu leading-[1.85] font-light">
          <p><strong className="text-white font-medium">Mars</strong> is a digital marketing company based in Lucknow, Uttar Pradesh. Our approach is simple: understand the market, build the right offer, launch the right campaign, and improve based on data.</p>
          <p>We work with local businesses, founders, D2C brands, restaurants, retail stores, startups, and service companies across Lucknow and beyond.</p>
          <p>Our work spans SEO, Meta Ads, Google Ads, social media management, content marketing, email marketing, and AI-powered marketing automation. Everything under one roof.</p>
        </div>
        <div className="mt-10">
          <Eye text="Brand Values" />
          <div className="grid-2 mt-6">{[
            { t:'Clarity Over Jargon', d:'We explain everything in simple language. No buzzwords, no confusion.' },
            { t:'Outcome Over Vanity', d:'We track leads, sales, and revenue — not just likes and impressions.' },
            { t:'Consistency Over Random Posting', d:'We build sustainable systems, not one-off campaigns that fizzle out.' },
            { t:'Growth That Compounds', d:'Every month builds on the last. Your marketing gets stronger over time.' },
          ].map(v => (<div key={v.t} className="glass"><div className="w-8 h-px bg-m-or mb-4" /><h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{v.t}</h3><p className="text-[12px] text-m-mu leading-[1.7] font-light">{v.d}</p></div>))}</div>
        </div>
      </div>
      <div className="space-y-3 lg:sticky lg:top-24">
        <div className="glass relative overflow-hidden"><p className="font-grotesk text-[42px] font-bold grad leading-none mb-2 relative">4+</p><p className="text-[10px] tracking-[2px] uppercase text-m-mu mb-2 relative">Years of Experience</p><p className="text-[12px] text-m-mu font-light relative">Cross-industry expertise in SEO, paid media, social, content, and AI marketing.</p></div>
        <div className="glass">
          <h3 className="font-grotesk text-[13px] font-semibold mb-4">Why Choose Us</h3>
          {['Strategy-first planning','Clear reporting and communication','Fast delivery with practical execution','SEO, ads, content, and website support under one roof'].map((f,i) => (
            <div key={i} className="flex gap-2 items-start py-2 border-b border-white/[0.05] last:border-none">
              <span className="text-m-or text-[8px] mt-1.5">●</span>
              <span className="text-[12px] text-m-mu font-light leading-[1.6]">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div></div>
    <div className="cta-sec"><div className="cta-glow" /><h2 className="h-sec font-grotesk mb-3 relative">If your business needs more <span className="grad">visibility and leads</span></h2><p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">Mars is ready to build the system behind it.</p><Link href="/contact" className="btn-cta relative">Book a Free Strategy Call</Link></div>
  </>)
}