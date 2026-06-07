import type { Metadata } from 'next'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
import { SectionEyebrow } from '@/components/StatCounter'

export const metadata: Metadata = {
  title: 'Client Case Studies | Mars Agency Lucknow',
  description: 'Real digital marketing results from Mars Agency clients across Lucknow and Kanpur. Case studies in F&B, retail, healthcare, fashion, and interior design.',
}

const cases = [
  {
    n: '01', cls: 'cn1', type: 'Cafe / F&B — Lucknow, UP', sub: 'Instagram + Meta Ads · 4 Months', tag: 'Social Media', tagCls: 'tp1',
    metrics: [
      { v:'1.1M+', l:'Monthly Reach',   c:'grad-text' },
      { v:'62,400', l:'Profile Views',  c:'grad-text2' },
      { v:'3.9X', l:'Engagement',       c:'text-mars-pk' },
      { v:'214', l:'Enquiries/Mo',      c:'grad-text3' },
    ],
    challenge: 'Strong food quality but weak social presence — losing walk-ins to competitors with active social pages despite a better product.',
    strategy: 'Repositioned as a premium destination using short-form video, hyper-local targeting, and offer-led content to drive footfall.',
    actions: [
      'Monthly content calendar with Reels, Stories, festive posts',
      'Reels around best-sellers and cafe ambiance',
      'Hyper-local Meta Ads within 5km radius',
      'Google Business Profile + local citations',
      'Eid, Mother\'s Day, Diwali viral campaigns',
    ],
    growth: [
      ['Monthly Reach', '4,200', '1.1M+ · +26,090%'],
      ['Profile Visits', '820', '62,400+ · +7,512%'],
      ['Avg. Reel Views', '680', '38,200+ · +5,518%'],
      ['Walk-in Enquiries', '22/mo', '214+ · +873%'],
      ['Google Reviews', '28', '240+ · +757%'],
    ],
    result: 'The cafe became the most-talked-about neighbourhood spot in its area. Monthly reach crossed 1.1M, walk-in enquiries grew 22→214/month, and the brand became the #1 Google Maps cafe recommendation in its locality.',
  },
  {
    n: '02', cls: 'cn2', type: 'Showroom / Retail — Kanpur, UP', sub: 'Instagram + Google Ads · 3 Months', tag: 'Paid Ads', tagCls: 'tp2',
    metrics: [
      { v:'920K+', l:'Monthly Reach',  c:'grad-text2' },
      { v:'6.8X', l:'ROAS',            c:'grad-text3' },
      { v:'168', l:'Leads/Month',      c:'grad-text' },
      { v:'₹218', l:'Cost Per Lead',   c:'text-mars-pk' },
    ],
    challenge: 'Zero digital strategy — needed serious enquiries from active buyers. Losing potential customers to competitors with stronger online presence.',
    strategy: 'Combined premium showroom walkthrough videos on social with high-intent Google Search Ads, capturing buyers at the exact moment they were ready to purchase.',
    actions: [
      'Professional walkthrough Reels and product videos',
      'Google Search Ads targeting high-intent Kanpur buyers',
      'Meta Lead Ads with direct "Book a Visit" form',
      'WhatsApp Business API — 60-second follow-up',
      'GBP rating: 3.9★ → 4.7★',
    ],
    growth: [
      ['Monthly Reach', '3,100', '920K+ · +29,577%'],
      ['Qualified Leads', '14/mo', '168+ · +1,100%'],
      ['Showroom Visits', '8/mo', '94+ · +1,075%'],
      ['Google Rating', '3.9 ★', '4.7 ★ · +21%'],
    ],
    result: '168 qualified leads/month at ₹218 CPL. Revenue from digital-sourced leads grew 6.8X. The showroom became the most-followed retail brand in its category across Kanpur.',
  },
  {
    n: '03', cls: 'cn3', type: 'Clinic / Healthcare — Lucknow, UP', sub: 'Google Ads + SEO · 5 Months', tag: 'Local SEO', tagCls: 'tp3',
    metrics: [
      { v:'4,860+', l:'Website Visits', c:'grad-text3' },
      { v:'312', l:'Appt. Leads/Mo',   c:'grad-text2' },
      { v:'38%', l:'MoM Growth',       c:'grad-text' },
      { v:'2.9X', l:'Call Volume',     c:'text-mars-pk' },
    ],
    challenge: 'Basic website, poor search visibility, insufficient appointment enquiries. Losing patients to competitors with stronger Google presence.',
    strategy: 'Focused on local SEO, call-focused Google search campaigns, and service-page optimisation to convert search traffic into booked appointments.',
    actions: [
      'Rebuilt service pages with SEO-optimised, patient-friendly content',
      'Google Call Ads targeting patients within 10km radius',
      'Full conversion tracking — calls, forms, bookings',
      'Location-specific landing pages per treatment',
      'GBP optimisation: 31 → 190+ Google reviews',
    ],
    growth: [
      ['Website Visits', '480/mo', '4,860+ · +912%'],
      ['Appointment Leads', '28/mo', '312+ · +1,014%'],
      ['Phone Calls', '18/mo', '52+ · +189%'],
      ['Google Reviews', '31', '190+ · +513%'],
    ],
    result: 'Top-ranked clinic in local Google search results for its key services. 312+ appointment leads per month — a complete transformation of the practice\'s digital patient acquisition pipeline.',
  },
  {
    n: '04', cls: 'cn4', type: 'Fashion / Lifestyle Store — Kanpur, UP', sub: 'Instagram + Meta Ads · 3 Months', tag: 'Social + Ads', tagCls: 'tp1',
    metrics: [
      { v:'1.6M+', l:'Monthly Reach',  c:'text-mars-pk' },
      { v:'5,700+', l:'Profile Visits', c:'grad-text' },
      { v:'4.4X', l:'Sales Lift',      c:'grad-text3' },
      { v:'96', l:'Store Enquiries',   c:'grad-text2' },
    ],
    challenge: 'Great products but online content didn\'t match in-store quality. Generic social presence, low engagement, limited reach beyond walk-in base.',
    strategy: 'Built a fashion-forward social media identity using lookbooks, seasonal Reels, and retargeting campaigns designed to showcase product quality and drive enquiries.',
    actions: [
      'Fashion-forward Reels for every collection drop',
      'Redesigned profile highlights, bio, link-in-bio',
      'Meta Retargeting Ads for profile visitors and video viewers',
      'Festive campaign series — Eid, Diwali, winter',
      'Lookalike audiences from existing customers',
    ],
    growth: [
      ['Monthly Reach', '6,200', '1.6M+ · +25,706%'],
      ['Avg. Reel Views', '940', '52,000+ · +5,432%'],
      ['Store Enquiries', '11/mo', '96+ · +773%'],
      ['Saves Per Post', '24', '840+ · +3,400%'],
    ],
    result: 'Most-followed fashion store in its locality. 4.4X sales lift during festive campaign periods. Store enquiries grew from 11 to 96/month. Monthly reach crossed 1.6M.',
  },
  {
    n: '05', cls: 'cn5', type: 'Interior Design Studio — Lucknow, UP', sub: 'SEO + Social + Meta Ads · 6 Months', tag: 'Multi-Channel', tagCls: 'tp1',
    metrics: [
      { v:'246', l:'Leads/Month',       c:'text-mars-ye' },
      { v:'5.2X', l:'Enquiry Volume',   c:'grad-text' },
      { v:'21%', l:'Lower CPL',         c:'grad-text3' },
      { v:'₹743', l:'Cost Per Lead',    c:'grad-text2' },
    ],
    challenge: 'Relied entirely on referrals with no digital lead pipeline. Needed premium enquiries and a stronger brand story for high-value home and commercial projects.',
    strategy: 'Combined SEO portfolio content, before/after storytelling on social, and lead-generation ads to showcase expertise and attract high-intent clients.',
    actions: [
      'Portfolio posts with before/after storytelling on Instagram',
      'Optimised service pages for interior design Lucknow keywords',
      'Meta Lead Ads with free consultation CTA',
      'Google Search Ads for "interior designer Lucknow"',
      'Retargeting funnel — site visitors to Meta and Google',
    ],
    growth: [
      ['Website Visits', '320/mo', '4,200+ · +1,213%'],
      ['Qualified Leads', '14/mo', '246+ · +1,657%'],
      ['Profile Views', '680', '38,600+ · +5,579%'],
      ['Cost Per Lead', '₹940', '₹743 · −21% ✓'],
    ],
    result: 'From 14 referral-only leads to 246+ qualified digital leads per month. Cost per lead dropped 21% while average project value increased — attracting more premium residential and commercial clients.',
  },
]

export default function CaseStudies() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <SectionEyebrow text="Client Results" />
            <h1 className="head-h2 mb-4">
              Real Campaigns. Real Growth.<br /><span className="grad-text">Real Results.</span>
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] max-w-xl font-light">
              All case studies are anonymised to protect client identities. Results reflect actual
              campaign performance across industries managed by Mars Agency.
            </p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80">
            <MarsPlanetSmall size={180} />
          </div>
        </div>
      </div>

      <section className="px-8 py-16 max-md:px-5">
        <div className="max-w-7xl mx-auto space-y-5">
          {cases.map(c => (
            <article key={c.n} className="card-glass !p-0 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center px-6 py-5 border-b border-white/[0.08]">
                <CaseNumber n={c.n} cls={c.cls} />
                <div>
                  <h3 className="font-grotesk text-[15px] font-semibold">{c.type}</h3>
                  <p className="text-[11px] text-mars-mu mt-0.5">{c.sub}</p>
                </div>
                <CaseTag tag={c.tag} cls={c.tagCls} />
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
                  {c.metrics.map(m => (
                    <div key={m.l} className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-3.5 text-center">
                      <p className={`font-grotesk text-[22px] font-bold leading-none mb-1 ${m.c}`}>{m.v}</p>
                      <p className="text-[9px] uppercase tracking-[0.8px] text-mars-mu font-medium">{m.l}</p>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5">
                  <div className="space-y-3 text-[12px] text-mars-mu leading-[1.75] font-light">
                    <div>
                      <h4 className="font-grotesk text-[10px] font-semibold tracking-[2px] uppercase grad-text mb-1.5">Challenge</h4>
                      <p>{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-grotesk text-[10px] font-semibold tracking-[2px] uppercase grad-text mb-1.5">Strategy</h4>
                      <p>{c.strategy}</p>
                    </div>
                    <div>
                      <h4 className="font-grotesk text-[10px] font-semibold tracking-[2px] uppercase grad-text mb-1.5">What We Did</h4>
                      <ul className="space-y-0.5">
                        {c.actions.map((a, i) => (
                          <li key={i} className="flex gap-2 text-[12px]">
                            <span className="text-mars-or text-[8px] mt-1.5 flex-shrink-0">●</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    {/* Growth Table */}
                    <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-black/20">
                      <div className="grid grid-cols-[1.8fr_1fr_1.2fr]"
                        style={{ background: 'linear-gradient(180deg, rgba(255,107,53,0.06), rgba(247,37,133,0.04))', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        {['Metric','Before','After & Growth'].map(h => (
                          <div key={h} className="px-3 py-2 font-grotesk text-[9px] font-semibold tracking-[1px] uppercase text-mars-mu">{h}</div>
                        ))}
                      </div>
                      {c.growth.map((row, i) => (
                        <div key={i} className="grid grid-cols-[1.8fr_1fr_1.2fr] border-b border-white/[0.05] last:border-none">
                          <div className="px-3 py-2 text-[11px] text-mars-mu">{row[0]}</div>
                          <div className="px-3 py-2 text-[11px] text-mars-mu">{row[1]}</div>
                          <div className="px-3 py-2 font-grotesk text-[11px] font-bold text-mars-gn flex items-center gap-1">
                            <span>↗</span>{row[2]}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Result */}
                    <div className="mt-3 rounded-lg p-3.5 relative overflow-hidden"
                         style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(6,182,212,0.04))', border: '1px solid rgba(16,185,129,0.2)' }}>
                      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
                           style={{ background: 'linear-gradient(180deg, #10b981, #06b6d4)' }} />
                      <p className="font-grotesk text-[10px] font-semibold tracking-[2px] text-mars-gn uppercase mb-1.5 pl-2">✦ Final Outcome</p>
                      <p className="text-[12px] text-[#a7f3d0] leading-[1.7] pl-2">{c.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-md:px-5 text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.15), transparent 70%)', filter: 'blur(60px)' }} />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Your Turn</p>
        <h2 className="head-h2 mb-3 relative">
          Ready to Create Your<br /><span className="grad-text">Success Story?</span>
        </h2>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-[1.8] font-light relative">
          Every great result started with a conversation. Let&apos;s talk about your business goals.
        </p>
        <Link href="/contact" className="btn-cta relative">Start a Project →</Link>
      </section>
    </>
  )
}

function CaseNumber({ n, cls }: { n: string; cls: string }) {
  const grads: Record<string, string> = {
    cn1: 'linear-gradient(135deg,#ff6b35,#f72585)',
    cn2: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
    cn3: 'linear-gradient(135deg,#10b981,#06b6d4)',
    cn4: 'linear-gradient(135deg,#f72585,#7c3aed)',
    cn5: 'linear-gradient(135deg,#fbbf24,#ff6b35)',
  }
  return (
    <div className="w-11 h-11 rounded-xl flex items-center justify-center font-grotesk text-[17px] font-bold text-white relative"
         style={{ background: grads[cls] }}>
      <div className="absolute -inset-1 rounded-2xl -z-10 blur-md opacity-50"
           style={{ background: grads[cls] }} />
      {n}
    </div>
  )
}

function CaseTag({ tag, cls }: { tag: string; cls: string }) {
  const styles: Record<string, { bg: string; bd: string; tx: string }> = {
    tp1: { bg: 'rgba(255,107,53,0.08)', bd: 'rgba(255,107,53,0.25)', tx: '#ff6b35' },
    tp2: { bg: 'rgba(6,182,212,0.08)',   bd: 'rgba(6,182,212,0.25)',   tx: '#06b6d4' },
    tp3: { bg: 'rgba(16,185,129,0.08)',  bd: 'rgba(16,185,129,0.25)',  tx: '#10b981' },
  }
  const s = styles[cls]
  return (
    <span className="font-grotesk text-[10px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border"
          style={{ background: s.bg, borderColor: s.bd, color: s.tx }}>
      {tag}
    </span>
  )
}
