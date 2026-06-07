import type { Metadata } from 'next'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
import { SectionEyebrow } from '@/components/StatCounter'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Lucknow | Mars Agency',
  description: 'Mars Agency offers SEO, Google Ads, Meta Ads, social media, UGC video ads, website development, local SEO, and AI marketing services in Lucknow.',
}

const services = [
  { n:'01', l:'SEO',       icon:'⊙', cls:'io', title:'SEO & Organic Growth',         desc:'Rank higher on Google with keyword research, on-page optimisation, technical SEO audits, link building, and content marketing.', kw:'SEO company Lucknow · SEO services UP · organic growth' },
  { n:'02', l:'PPC',       icon:'◈', cls:'ip', title:'Google Ads',                   desc:'Immediate visibility with Search, Display & YouTube campaigns. Strategy, copywriting, bid management, conversion tracking.', kw:'Google Ads agency Lucknow · PPC services UP' },
  { n:'03', l:'META',      icon:'▣', cls:'iu', title:'Meta Ads',                     desc:'Facebook & Instagram campaigns with scroll-stopping creatives, custom audiences, lookalikes, and retargeting funnels.', kw:'Meta Ads Lucknow · Facebook Ads · Instagram Ads UP' },
  { n:'04', l:'SOCIAL',    icon:'◫', cls:'ic', title:'Social Media Marketing',       desc:'Build a loyal community on Instagram, Facebook, LinkedIn, YouTube with strategy, content, design & analytics.', kw:'social media management Lucknow · Instagram marketing' },
  { n:'05', l:'WEB',       icon:'▤', cls:'ig', title:'Website Development',          desc:'Fast, mobile-optimised, SEO-ready WordPress sites built in partnership with IXT Minds (ixtminds.com).', kw:'website development Lucknow · WordPress UP · landing pages' },
  { n:'06', l:'LOCAL SEO', icon:'⌖', cls:'iy', title:'Local SEO & GBP',              desc:'Dominate local Lucknow search — GBP optimisation, citations, reviews, hyper-local keywords for Maps visibility.', kw:'local SEO Lucknow · Google Business · Maps ranking' },
  { n:'08', l:'AI',        icon:'◇', cls:'io', title:'AI-Powered Marketing',         desc:'AI tools and automation for content, audience insights, chatbots, automated emails, and faster execution.', kw:'AI marketing Lucknow · marketing automation UP' },
  { n:'09', l:'ANALYTICS', icon:'▥', cls:'ic', title:'Analytics & Reporting',        desc:'GA4, Search Console, Meta Pixel, conversion tracking setup plus clear monthly reports with actionable insights.', kw:'Google Analytics Lucknow · reporting UP' },
  { n:'10', l:'EMAIL',     icon:'✉', cls:'ig', title:'Email & WhatsApp Marketing',   desc:'Targeted email campaigns and WhatsApp automation to nurture leads, promote offers, and drive repeat business.', kw:'email marketing Lucknow · WhatsApp marketing UP' },
]

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <SectionEyebrow text="Services" />
            <h1 className="head-h2 mb-4">
              10 Digital Marketing Services<br /><span className="grad-text">Built for Real Results</span>
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] max-w-xl font-light">
              Comprehensive services designed to grow your Lucknow business — from visibility to
              leads to revenue.
            </p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80">
            <MarsPlanetSmall size={180} />
          </div>
        </div>
      </div>

      <section className="px-8 py-16 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          {/* Featured: UGC Video */}
          <div className="relative mb-6 p-7 rounded-2xl overflow-hidden backdrop-blur-md grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.08), rgba(247,37,133,0.04))', border: '1px solid rgba(255,107,53,0.25)' }}>
            <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #ff6b35, transparent 70%)', filter: 'blur(60px)', opacity: 0.4 }} />
            <div className="relative">
              <span className="inline-block font-grotesk text-[10px] font-bold bg-[linear-gradient(135deg,#ff6b35,#f72585,#7c3aed)] text-white px-3 py-1 rounded-md tracking-wider uppercase mb-3">
                ◆ Featured New Service
              </span>
              <h3 className="head-h3 mb-2">UGC Video Ads & Short-Form Content</h3>
              <p className="text-[13px] text-mars-mu leading-[1.8] max-w-xl font-light mb-2">
                Authentic creator-style videos that feel real, build trust quickly, and drive
                stronger ad performance. We script, direct, shoot, and edit UGC-style videos for
                Meta Ads, Instagram Reels, YouTube Shorts, and landing pages — designed to stop
                the scroll and convert viewers into leads.
              </p>
            </div>
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl text-white relative"
              style={{ background: 'linear-gradient(135deg,#ff6b35,#f72585,#7c3aed)', boxShadow: '0 12px 40px rgba(255,107,53,0.4)' }}>
              ▶
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map(s => (
              <div key={s.n} className="card-glass">
                <div className={`srv-icon ${s.cls}`}>{s.icon}</div>
                <p className="font-grotesk text-[10px] tracking-[2px] uppercase text-mars-dm mb-2">{s.n} — {s.l}</p>
                <h3 className="font-grotesk text-[15px] font-semibold mb-1.5">{s.title}</h3>
                <p className="text-[12px] text-mars-mu leading-[1.7] font-light mb-2">{s.desc}</p>
                <p className="text-[10px] text-mars-dm/70 font-light">Keywords: {s.kw}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-md:px-5 text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.15), transparent 70%)', filter: 'blur(60px)' }} />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Get Started</p>
        <h2 className="head-h2 mb-3 relative">
          Not Sure Which Service<br /><span className="grad-text">You Need?</span>
        </h2>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-[1.8] font-light relative">
          We will audit your current online presence and recommend the right strategy for your
          business — completely free.
        </p>
        <Link href="/contact" className="btn-cta relative">Request Free Audit →</Link>
      </section>
    </>
  )
}
