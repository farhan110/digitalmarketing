import type { Metadata } from 'next'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
import { SectionEyebrow } from '@/components/StatCounter'

export const metadata: Metadata = {
  title: 'Local SEO Services in Lucknow | Mars Agency',
  description: 'Local SEO services in Lucknow — Google Business Profile, citations, reviews, hyper-local keyword strategy, and Google Maps ranking.',
}

const areas = [
  'Gomti Nagar','Hazratganj','Indira Nagar','Aliganj',
  'Aminabad','Mahanagar','Alambagh','Chowk',
  'Rajajipuram','Vikas Nagar','Jankipuram','Chinhat',
  'Sushant Golf City','Telibagh','Faizabad Road','Eldeco',
]
const seo = [
  { icon:'⌖', title:'Google Business Profile',  desc:'We claim, verify, and fully optimise your GBP — categories, photos, posts, Q&A — to maximise visibility on Google Maps and local search results.' },
  { icon:'🔑', title:'Local Keyword Research',   desc:'We identify high-intent local terms your Lucknow customers search for and structure your content, pages, and campaigns around them.' },
  { icon:'🏛', title:'Citation Building',        desc:'We submit and verify your business across 40+ local directories and aggregators to strengthen local authority and improve Maps ranking.' },
  { icon:'⭐', title:'Review Management',         desc:'Systematic review acquisition strategy that grows your Google star rating — a critical local ranking and trust factor.' },
  { icon:'📄', title:'On-Page Local SEO',         desc:'Location-specific landing pages, structured data markup, and local schema telling Google exactly where you operate and what you provide.' },
  { icon:'🗺', title:'Google Maps Ranking',      desc:'We work to get your business into the Local 3-Pack for high-value Lucknow searches — the most visible position in local search results.' },
]
const bizTypes = [
  'Clinics & Hospitals','Car Showrooms','Coaching Institutes','Real Estate Agencies',
  'Restaurants & Cafes','Retail Shops','Law Firms','Interior Design',
  'Event Planners','Fitness & Gyms','Travel Agencies','Financial Services',
  'Startups & Tech','E-Commerce Stores','Service Businesses',
]
const process = [
  { n:'01', title:'Local Audit',       desc:'We audit your GBP, website, current rankings, and competitor positions in Lucknow\'s local search landscape.' },
  { n:'02', title:'Keyword Targeting', desc:'We identify high-intent local keywords customers search for in Lucknow and build relevant content around them.' },
  { n:'03', title:'Optimisation',      desc:'We optimise your site, GBP, and citations so Google knows exactly where you are and what you offer.' },
  { n:'04', title:'Grow & Report',     desc:'We track rankings, traffic, and leads monthly — continuously improving to climb higher in local results.' },
]

export default function LocalSEO() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <SectionEyebrow text="Local Search Marketing" />
            <h1 className="head-h2 mb-4">
              Local SEO Services in<br /><span className="grad-text">Lucknow</span>
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] max-w-2xl font-light">
              Looking for a digital marketing agency in Lucknow that understands local customers? We help
              businesses across Gomti Nagar, Hazratganj, Indira Nagar, and 13+ other Lucknow areas grow
              online with SEO, paid ads, and Google Maps optimisation.
            </p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80">
            <MarsPlanetSmall size={180} />
          </div>
        </div>
      </div>

      {/* Areas */}
      <section className="px-8 py-14 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="Coverage" />
          <h2 className="head-h3 mb-6">Areas We Serve in Lucknow</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {areas.map(a => (
              <div key={a} className="bg-white/[0.04] border border-white/[0.08] rounded-lg py-2.5 px-3 text-center text-[12px] text-mars-mu hover:text-mars-or hover:border-mars-or/30 transition-all backdrop-blur-sm">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 py-14 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="Our Services" />
          <h2 className="head-h3 mb-6">What&apos;s Included in Our Local SEO Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {seo.map(s => (
              <div key={s.title} className="card-glass">
                <div className="srv-icon">{s.icon}</div>
                <h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{s.title}</h3>
                <p className="text-[12px] text-mars-mu leading-[1.7] font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="px-8 py-14 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="Industries" />
          <h2 className="head-h3 mb-6">Business Types We Help</h2>
          <div className="flex flex-wrap gap-2">
            {bizTypes.map(b => (
              <span key={b} className="text-[12px] text-mars-mu bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 backdrop-blur-sm font-light">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-8 py-14 max-md:px-5">
        <div className="max-w-7xl mx-auto">
          <SectionEyebrow text="Our Process" />
          <h2 className="head-h3 mb-8">How We Get You Ranked Locally</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0">
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

      {/* CTA */}
      <section className="px-8 py-24 max-md:px-5 text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.15), transparent 70%)', filter: 'blur(60px)' }} />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Get Ranked</p>
        <h2 className="head-h2 mb-3 relative">
          Start Getting Found by<br /><span className="grad-text">Local Customers</span>
        </h2>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-[1.8] font-light relative">
          Get a free local SEO audit. We will show you exactly where you stand and how to improve.
        </p>
        <Link href="/contact" className="btn-cta relative">Get Free Local SEO Audit →</Link>
      </section>
    </>
  )
}
