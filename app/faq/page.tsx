'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
const faqs = [
  { q:'How soon can I see results?', a:'SEO typically shows meaningful improvements in 3-6 months. Paid ads (Meta Ads and Google Ads) can deliver results within 7-14 days of launch. We set realistic expectations upfront and provide monthly progress reports.' },
  { q:'Which service should I start with?', a:'It depends on your goals and budget. If you need immediate leads, start with Google Ads or Meta Ads. If you want long-term growth, SEO and content marketing are the foundation. We will recommend the best starting point during your free strategy call.' },
  { q:'Do you work with local businesses only?', a:'We specialize in Lucknow and nearby markets, but we also work with businesses across India. Our local expertise is an advantage for businesses targeting the UP market, but our strategies work for any geography.' },
  { q:'Can you manage the website content too?', a:'Yes. We handle website copywriting, blog content, landing page messaging, and campaign copy as part of our content marketing service.' },
  { q:'Do you provide reports and strategy reviews?', a:'Yes. Every client receives monthly reports covering rankings, traffic, leads, and campaign performance. We also hold regular strategy review calls to keep you informed and aligned.' },
  { q:'How much does digital marketing cost?', a:'Pricing depends on your goals, services needed, and industry competitiveness. We work with various budgets and focus on ROI. Book a free strategy call for a transparent proposal.' },
  { q:'Do you run both Google Ads and Meta Ads?', a:'Yes. We manage end-to-end advertising on Google (Search, Display, YouTube) and Meta (Facebook, Instagram) including strategy, creative, optimization, and reporting.' },
  { q:'What is AI marketing automation?', a:'AI marketing uses tools and automation to speed up content creation, audience targeting, email sequences, and campaign workflows. We integrate AI to make your marketing more efficient without losing the human touch.' },
]
export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null)
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div><p className="eye">FAQ</p><h1 className="h-sec font-grotesk mb-4">Frequently Asked <span className="grad">Questions</span></h1>
      <p className="lead">Every business is different, so the best strategy is always built around your goals, budget, and market.</p></div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain grid-sidebar">
      <div>{faqs.map((f,i) => (
        <div key={i} className={`faq-item ${open===i?'op':''}`}>
          <button className="fq-btn" onClick={() => setOpen(open===i?null:i)}>
            <span className="font-medium text-[14px] leading-[1.5] flex-1">{f.q}</span>
            <span className="fq-ic">+</span>
          </button>
          <div className={`fa-wrap ${open===i?'op':''}`}><div className="px-5 py-4 text-[14px] text-m-mu leading-[1.85] font-light">{f.a}</div></div>
        </div>
      ))}</div>
      <div className="glass lg:sticky lg:top-24 h-fit" style={{ background:'linear-gradient(180deg,rgba(255,107,53,0.08),rgba(247,37,133,0.04))' }}>
        <h3 className="font-grotesk text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-[13px] text-m-mu leading-[1.7] mb-5 font-light">The best way to get specific answers for your business is to talk to us directly.</p>
        <Link href="/contact" className="btn-p w-full justify-center text-[12px]">Book a Free Strategy Call</Link>
        <div className="mt-4 pt-4 border-t border-white/[0.08]">
          <p className="text-[11px] text-m-mu mb-1">Or reach us directly:</p>
          <a href="tel:+917007189274" className="text-[13px] text-m-or font-medium">+91 70071 89274</a>
        </div>
      </div>
    </div></div>
  </>)
}