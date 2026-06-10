import type { Metadata } from 'next'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
import { Eye } from '@/components/StatCounter'
export const metadata: Metadata = { title:'SEO Services in Lucknow | Mars', description:'Improve rankings, traffic, and leads with SEO services built around keyword research, on-page optimization, technical fixes, and content strategy.' }
const features = ['Keyword research and competitor analysis','On-page SEO and content optimization','Technical SEO audits and fixes','Local SEO for Lucknow businesses','Blog strategy and topical authority building','Google Business Profile optimization','Internal linking and site architecture','Search intent mapping and content planning','Monthly ranking and traffic reporting']
const process = [
  { n:'01', t:'SEO Audit & Research', d:'We audit your current rankings, analyse competitors, map search intent, and identify the highest-value keyword opportunities for your business.' },
  { n:'02', t:'On-Page & Technical Fixes', d:'We optimize your page titles, meta descriptions, headings, content structure, page speed, schema markup, and crawlability.' },
  { n:'03', t:'Content & Link Building', d:'We create SEO-optimized blog posts, service pages, and landing pages while building quality backlinks to grow your domain authority.' },
  { n:'04', t:'Measure & Improve', d:'We track rankings, traffic, leads, and conversions monthly — then continuously refine the strategy based on what the data tells us.' },
]
const faqs = [
  { q:'How long does SEO take to show results?', a:'Local SEO in Lucknow typically shows meaningful improvements in 3 to 6 months. Some quick wins like GBP optimization and technical fixes can show results faster.' },
  { q:'Do you guarantee first page rankings?', a:'No honest SEO agency can guarantee specific rankings because Google controls its algorithm. What we guarantee is a data-driven, best-practice approach that consistently improves your visibility over time.' },
  { q:'Do I need SEO if I already run ads?', a:'Yes. SEO builds long-term organic traffic that you do not pay for per click. Ads give you immediate visibility, but SEO compounds over time and reduces your cost per lead significantly.' },
  { q:'What is local SEO and do I need it?', a:'Local SEO helps your business appear in Google Maps and local search results when people nearby search for your services. If you serve customers in Lucknow, local SEO is essential.' },
]
export default function SEOServices() {
  return (<>
    <div className="pg-hero"><div className="contain">
      <div className="grid lg:grid-cols-[1fr_200px] gap-8 items-center">
        <div>
          <Eye text="SEO Services" />
          <h1 className="h-sec font-grotesk mb-4">SEO That Ranks You for the <span className="grad">Right Searches</span></h1>
          <p className="lead mb-6">Our SEO work is built for people who want to rank for the right searches, not just collect traffic that never converts. We start with research, optimize for intent, and refine based on analytics.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn-p">Get a Free SEO Audit</Link>
            <Link href="/case-studies" className="btn-g">See Results</Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
      </div>
      <div className="srv-hero-stat mt-8">
        <div className="srv-stat"><div className="srv-stat-v grad">3-6</div><div className="srv-stat-l">Months to Results</div></div>
        <div className="srv-stat"><div className="srv-stat-v grad2">200%</div><div className="srv-stat-l">Avg. Traffic Growth</div></div>
        <div className="srv-stat"><div className="srv-stat-v grad3">Top 10</div><div className="srv-stat-l">Keyword Rankings</div></div>
        <div className="srv-stat"><div className="srv-stat-v" style={{ color:'#fbbf24' }}>ROI</div><div className="srv-stat-l">Focused Strategy</div></div>
      </div>
    </div></div>

    <div className="sec"><div className="contain grid-sidebar">
      <div>
        <Eye text="What is Included" />
        <h2 className="h-sub font-grotesk mb-6">Everything Your Business Needs to <span className="grad">Rank Higher</span></h2>
        <ul className="feat-list">{features.map((f,i) => <li key={i}>{f}</li>)}</ul>
      </div>
      <div className="glass lg:sticky lg:top-24 h-fit">
        <h3 className="font-grotesk text-[14px] font-semibold grad mb-5">Why SEO Matters</h3>
        <div className="space-y-4 text-[13px] text-m-mu leading-[1.75] font-light">
          <p>SEO is the only channel where your marketing investment compounds over time. Unlike ads, organic traffic does not stop when you stop paying.</p>
          <p>For Lucknow businesses, local SEO is particularly powerful — it puts you in front of customers who are actively searching for exactly what you offer, right when they need it.</p>
        </div>
        <Link href="/contact" className="btn-p w-full justify-center mt-6 text-[12px]">Want More Organic Traffic?</Link>
      </div>
    </div></div>

    <div className="sec" style={{ background:'linear-gradient(180deg,transparent,rgba(255,107,53,0.02),transparent)' }}><div className="contain">
      <Eye text="Our SEO Process" />
      <h2 className="h-sub font-grotesk mb-8">How We Get You <span className="grad">Ranked</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {process.map(p => (<div key={p.n} className="proc-step"><div className="ps-icon">{p.n}</div><h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{p.t}</h3><p className="text-[12px] text-m-mu leading-[1.7] font-light">{p.d}</p></div>))}
      </div>
    </div></div>

    <div className="sec"><div className="contain max-w-3xl">
      <Eye text="SEO FAQ" />
      <h2 className="h-sub font-grotesk mb-6">Common SEO <span className="grad">Questions</span></h2>
      {faqs.map((f,i) => (
        <div key={i} className="glass !rounded-xl mb-3">
          <h3 className="font-grotesk text-[14px] font-semibold mb-2">{f.q}</h3>
          <p className="text-[13px] text-m-mu leading-[1.75] font-light">{f.a}</p>
        </div>
      ))}
    </div></div>

    <div className="cta-sec"><div className="cta-glow" /><h2 className="h-sec font-grotesk mb-3 relative">Want more organic traffic <span className="grad">without depending only on ads?</span></h2><p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">Let us build your search strategy.</p><Link href="/contact" className="btn-cta relative">Get a Free SEO Audit</Link></div>
  </>)
}