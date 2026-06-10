import Link from 'next/link'
import { MarsPlanet } from '@/components/MarsPlanet'
import { StatCounter, Eye } from '@/components/StatCounter'

const services = [
  { n:'01', t:'SEO Services', d:'Rank for the right searches with keyword research, on-page optimization, technical audits, and content strategy.', href:'/seo-services', ic:'io' },
  { n:'02', t:'Meta Ads', d:'Reach the right audience with creative, targeting, offer, and landing page all supporting each other.', href:'/meta-ads', ic:'ip' },
  { n:'03', t:'Google Ads', d:'Capture demand from people already searching for what you offer with search and remarketing campaigns.', href:'/google-ads', ic:'iu' },
  { n:'04', t:'Social Media', d:'Make your brand recognizable, trustworthy, and easy to remember with content that balances education, proof, and personality.', href:'/social-media', ic:'ic' },
  { n:'05', t:'Content Marketing', d:'Attract the right audience, explain your value clearly, and help people decide faster with strategic content.', href:'/content-marketing', ic:'ig' },
  { n:'06', t:'Email Marketing', d:'Lead nurturing and retention through welcome sequences, newsletters, promotional campaigns, and automation.', href:'/email-marketing', ic:'iy' },
  { n:'07', t:'AI Marketing', d:'Speed up content workflows, improve efficiency, and scale repetitive tasks without losing quality.', href:'/ai-marketing', ic:'io' },
]
const process = [
  { n:'01', t:'Discover', d:'Understand the market, study competitors, audit your current presence, and identify growth opportunities.' },
  { n:'02', t:'Build', d:'Design the right offer, create the campaign strategy, build creatives, and set up tracking.' },
  { n:'03', t:'Grow', d:'Launch, measure, optimize, and scale what works for long-term compounding growth.' },
]
const marq = ['SEO Lucknow','Meta Ads','Google Ads','Social Media','Content Marketing','Email Marketing','AI Marketing','Lead Generation','Website Development','Brand Strategy']

export default function Home() {
  return (<>
    <section className="relative px-4 md:px-8 pt-28 md:pt-32 pb-12 overflow-hidden z-[2]">
      <div className="contain grid lg:grid-cols-[1fr_400px] gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full text-[11px] font-medium text-m-or" style={{ background:'rgba(255,107,53,0.08)', border:'1px solid rgba(255,107,53,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-m-or animate-[pulse_2s_infinite]" style={{ boxShadow:'0 0 12px #ff6b35' }} />
            Digital Marketing Company in Lucknow
          </div>
          <h1 className="h-hero font-grotesk mb-4">Digital Marketing That Brings <span className="grad">Traffic, Leads & Growth</span></h1>
          <p className="lead mb-6">From SEO and paid ads to social media and content, Mars builds practical growth systems that help your business get found, get clicked, and get chosen.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn-p">Book a Free Strategy Call</Link>
            <Link href="/case-studies" className="btn-g">See Case Studies</Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-center"><MarsPlanet size={280} /></div>
      </div>
    </section>
    <div className="marq"><div className="mtrack">{[...marq,...marq].map((m,i) => <span key={i} className={`mi ${i%2===0?'hi':''}`}>{m}</span>)}</div></div>
    <div className="stats-band">
      <StatCounter target={150} suffix="+" label="Clients Served" />
      <StatCounter target={98} suffix="%" label="Satisfaction" />
      <StatCounter target={4} suffix="+" label="Years Experience" />
      <StatCounter target={10} suffix="X" label="Average ROI" />
    </div>
    <div className="sec"><div className="contain">
      <Eye text="Our Services" />
      <h2 className="h-sec font-grotesk mb-3">We Design Complete <span className="grad">Growth Systems</span></h2>
      <p className="lead mb-8">We do not sell random posts or disconnected campaigns. We connect discovery, trust, conversion, and repeat business.</p>
      <div className="grid-3">{services.map(s => (
        <Link key={s.n} href={s.href} className="glass group">
          <div className={`srv-icon ${s.ic}`}>{s.n}</div>
          <h3 className="font-grotesk text-[15px] font-semibold mb-1.5">{s.t}</h3>
          <p className="text-[12px] text-m-mu leading-[1.7] font-light">{s.d}</p>
          <span className="inline-flex items-center gap-1 mt-3 text-[11px] text-m-or font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">Learn more &rarr;</span>
        </Link>
      ))}</div>
    </div></div>
    <div className="sec" style={{ background:'linear-gradient(180deg,transparent,rgba(255,107,53,0.02),transparent)' }}><div className="contain">
      <Eye text="How We Work" />
      <h2 className="h-sec font-grotesk mb-3">Three Steps: <span className="grad">Discover, Build, Grow</span></h2>
      <p className="lead mb-8">Our approach is simple: understand the market, build the right campaign, and improve based on data.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {process.map(p => (<div key={p.n} className="proc-step"><div className="ps-icon">{p.n}</div><h3 className="font-grotesk text-[15px] font-semibold mb-1.5">{p.t}</h3><p className="text-[13px] text-m-mu leading-[1.7] font-light">{p.d}</p></div>))}
      </div>
    </div></div>
    <div className="sec"><div className="contain">
      <Eye text="Why Choose Mars" />
      <h2 className="h-sec font-grotesk mb-3">Strategy + Execution <span className="grad">Under One Roof</span></h2>
      <div className="grid-3 mt-8">{[
        { t:'Strategy-First Planning', d:'Every campaign starts with research, competitive analysis, and a clear plan before we spend a single rupee.' },
        { t:'Clear Reporting', d:'Simple monthly updates on what is working and where to improve. No jargon, no surprises.' },
        { t:'Fast Practical Execution', d:'We move quickly from strategy to live campaigns, content, and ads — with clear timelines.' },
        { t:'Full-Service Team', d:'SEO, ads, content, social, email, and website support under one roof. One team, one point of contact.' },
        { t:'Results Over Vanity', d:'We measure success by leads, sales, and revenue growth — not impressions or follower counts.' },
        { t:'Growth That Compounds', d:'We build systems that keep delivering results month after month, not one-off campaigns that fizzle out.' },
      ].map(f => (<div key={f.t} className="glass"><div className="w-8 h-px bg-m-or mb-4" /><h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{f.t}</h3><p className="text-[12px] text-m-mu leading-[1.7] font-light">{f.d}</p></div>))}</div>
    </div></div>
    <div className="cta-sec">
      <div className="cta-glow" />
      <p className="eye relative" style={{ margin:'0 auto 14px' }}>Ready to Grow?</p>
      <h2 className="h-sec font-grotesk mb-3 relative">Your Business Deserves <span className="grad">Better Marketing</span></h2>
      <p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">Tell us what you want to achieve. We will reply with a practical plan, clear next steps, and honest feedback.</p>
      <div className="flex gap-3 justify-center flex-wrap relative">
        <Link href="/contact" className="btn-cta">Book a Free Strategy Call</Link>
        <Link href="/contact" className="btn-g">Request a Free Audit</Link>
      </div>
    </div>
  </>)
}