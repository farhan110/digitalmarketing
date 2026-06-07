import Link from 'next/link'
import { MarsPlanet } from '@/components/MarsPlanet'
import { StatCounter, SectionEyebrow } from '@/components/StatCounter'

const services = [
  { n: '01', label: 'SEO',       title: 'SEO & Organic Growth',       icon: '⊙', cls: 'io', desc: 'Rank higher on Google with keyword research, on-page optimisation, technical audits, and content marketing that compounds.' },
  { n: '02', label: 'PPC',       title: 'Google Ads (PPC)',           icon: '◈', cls: 'ip', desc: 'Search, Display & YouTube campaigns with keyword strategy, bid management, and conversion tracking for max ROAS.' },
  { n: '03', label: 'META',      title: 'Meta Ads',                   icon: '▣', cls: 'iu', desc: 'Facebook & Instagram campaigns with scroll-stopping creatives, custom audiences, and retargeting funnels.' },
  { n: '04', label: 'SOCIAL',    title: 'Social Media Marketing',     icon: '◫', cls: 'ic', desc: 'Loyal communities on Instagram, Facebook, LinkedIn, YouTube — strategy, content, analytics, all in one.' },
  { n: '05', label: 'WEB',       title: 'Website Development',        icon: '▤', cls: 'ig', desc: 'Fast, mobile-optimised, SEO-ready WordPress sites that rank, load quickly, and convert visitors into customers.' },
  { n: '07', label: 'UGC VIDEO', title: 'UGC Video Ads',              icon: '▶', cls: 'io', desc: 'Authentic creator-style videos for Meta Ads, Reels & YouTube Shorts — high-trust, high-converting content.', isNew: true },
]
const features = [
  { icon: '⌖', cls: 'fo', title: 'Deep Local Expertise',    desc: 'We understand Lucknow\'s market, audience behaviour, and local competition — your unfair advantage.' },
  { icon: '⌭', cls: 'fp', title: 'Performance-First',        desc: 'Every campaign is measured by leads, sales, and real business growth — not vanity metrics.' },
  { icon: '⊞', cls: 'fu', title: 'Full-Service Team',        desc: 'SEO, Ads, Social, Websites, UGC Video, and AI — all under one roof, single point of contact.' },
  { icon: '⌬', cls: 'fc', title: 'Transparent Reporting',    desc: 'Clear monthly reports on what\'s working and where to improve. No jargon, no hidden surprises.' },
  { icon: '◈', cls: 'fg', title: 'Creative + Performance',   desc: 'Brand-building content + direct-response strategy. Marketing that looks great and drives results.' },
  { icon: '⌘', cls: 'fy', title: 'AI-Powered Workflows',     desc: 'We integrate cutting-edge AI tools and automation to deliver better results faster.' },
]
const process = [
  { n: '01', title: 'Discovery & Audit',   desc: 'Audit your online presence, analyse competitors, identify growth opportunities in the Lucknow market.' },
  { n: '02', title: 'Strategy & Planning', desc: 'Custom digital marketing plan built around your goals, audience, budget, and timeline. No templates.' },
  { n: '03', title: 'Execution & Launch',  desc: 'Launch campaigns, publish content, manage ads with precision, transparency, and clear communication.' },
  { n: '04', title: 'Measure & Scale',     desc: 'Monthly reporting, performance review, continuous optimisation — scaling what works for long-term growth.' },
]
const marq = [
  'SEO Lucknow', 'Google Ads', 'Meta Ads', 'Social Media',
  'UGC Video Ads', 'Local SEO', 'AI Marketing', 'WhatsApp Marketing',
  'Lead Generation', 'Website Development',
]

export default function Home() {
  return (
    <>
      {/* ════ HERO ════ */}
      <section className="relative px-8 pt-32 pb-16 max-md:px-5 max-md:pt-28 overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_440px] gap-10 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full text-[11px] font-medium text-mars-or"
                 style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-mars-or animate-pulse-dot"
                    style={{ boxShadow: '0 0 12px #ff6b35' }} />
              Lucknow&apos;s Digital Marketing Experts
              <span className="ml-1 text-[8px] font-bold bg-mars-or text-mars-bg px-1.5 py-0.5 rounded-md tracking-wider">NEW</span>
            </div>
            <h1 className="head-hero mb-4">
              Grow Your<br />
              Business with <span className="grad-text">Result-Driven</span><br />
              Marketing
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] mb-6 max-w-lg font-light">
              We help Lucknow businesses generate quality leads, increase visibility, and build
              stronger brands through SEO, paid ads, social media, UGC video, and AI-powered strategies.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">Get Free Consultation →</Link>
              <Link href="/case-studies" className="btn-ghost">View Our Work</Link>
            </div>
          </div>

          {/* Mars Planet */}
          <div className="hidden lg:flex justify-center">
            <MarsPlanet size={300} />
          </div>
        </div>
      </section>

      {/* ════ MARQUEE ════ */}
      <div className="marq-wrap">
        <div className="mtrack">
          {[...marq, ...marq].map((item, i) => (
            <span key={i} className={`mi ${i % 2 === 0 ? 'hi' : ''}`}>{item}</span>
          ))}
        </div>
      </div>

      {/* ════ STATS BAND ════ */}
      <div className="stats-band">
        <StatCounter target={150} suffix="+" label="Clients Served" />
        <StatCounter target={98}  suffix="%" label="Satisfaction Rate" />
        <StatCounter target={5}   suffix="+" label="Years Experience" />
        <StatCounter target={10}  suffix="X" label="Average ROI" />
      </div>

      {/* ════ SERVICES ════ */}
      <section className="px-8 py-20 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="What We Do" />
          <h2 className="head-h2 mb-3">
            Built for <span className="grad-text">Real Growth.</span><br />
            Not Empty Promises.
          </h2>
          <p className="text-[14px] text-mars-mu leading-[1.8] max-w-lg mb-10 font-light">
            Comprehensive digital marketing services designed for Lucknow businesses — from
            visibility to leads to revenue.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map(s => (
              <div key={s.n} className="card-glass">
                <div className={`srv-icon ${s.cls}`}>{s.icon}</div>
                <div className="flex justify-between items-center mb-2">
                  <p className="font-grotesk text-[10px] tracking-[2px] uppercase text-mars-dm">{s.n} — {s.label}</p>
                  {s.isNew && (
                    <span className="font-grotesk text-[9px] font-bold bg-[linear-gradient(135deg,#ff6b35,#f72585,#7c3aed)] text-white px-2 py-0.5 rounded-md tracking-wider">NEW</span>
                  )}
                </div>
                <h3 className="font-grotesk text-[15px] font-semibold mb-1.5">{s.title}</h3>
                <p className="text-[12px] text-mars-mu leading-[1.7] font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHY US ════ */}
      <section className="px-8 py-20 max-md:px-5"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255,107,53,0.02), transparent)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="Why Mars Agency" />
          <h2 className="head-h2 mb-3">
            Six Reasons Lucknow Businesses<br />
            Choose <span className="grad-text">Mars Agency</span>
          </h2>
          <p className="text-[14px] text-mars-mu leading-[1.8] max-w-lg mb-10 font-light">
            Local expertise. Performance-first execution. Full-service team. Everything you need
            under one roof.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map(f => (
              <div key={f.title} className="card-glass">
                <div className="srv-icon">{f.icon}</div>
                <h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{f.title}</h3>
                <p className="text-[12px] text-mars-mu leading-[1.7] font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PROCESS ════ */}
      <section className="px-8 py-20 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="How We Work" />
          <h2 className="head-h2 mb-3">
            Our <span className="grad-text2">4-Step Process</span><br />
            Built for Real Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-y-6 lg:gap-y-0">
            {process.map(p => (
              <div key={p.n} className="proc-step">
                <div className="ps-icon">{p.n}</div>
                <h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{p.title}</h3>
                <p className="text-[12px] text-mars-mu leading-[1.7] font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="px-8 py-24 max-md:px-5 text-center relative overflow-hidden border-t border-white/[0.08]">
        <div
          className="absolute left-1/2 top-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.15), transparent 70%)', filter: 'blur(60px)' }}
        />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Ready to Grow?</p>
        <h2 className="head-h2 mb-3 relative">
          Your Business Deserves<br /><span className="grad-text">Better Marketing</span>
        </h2>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-[1.8] font-light relative">
          Let&apos;s talk about how Mars Agency can help your Lucknow business get more visibility,
          more leads, and better results. Free consultation — no commitment required.
        </p>
        <Link href="/contact" className="btn-cta relative">Get Your Free Consultation →</Link>
      </section>
    </>
  )
}
