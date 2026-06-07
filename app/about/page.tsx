import type { Metadata } from 'next'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
import { SectionEyebrow } from '@/components/StatCounter'

export const metadata: Metadata = {
  title: 'About Mars Agency | Digital Marketing Agency in Lucknow',
  description: 'Mars Agency is a Lucknow-based digital marketing agency that helps businesses grow with SEO, Google Ads, Meta Ads, social media, UGC video ads, and AI-powered marketing.',
}

const values = [
  { n:'01', title:'Results First',    desc:'Every strategy is measured by leads, sales, visibility, and ROI. We do not chase vanity metrics — we chase real business outcomes that matter to you.' },
  { n:'02', title:'Local Expertise',  desc:'We understand Lucknow, Kanpur, and nearby markets deeply — including audience behaviour, buying intent, and competitive dynamics specific to UP.' },
  { n:'03', title:'Transparency',     desc:'You get clear communication, honest reporting, and straightforward monthly updates. No jargon, no hidden surprises, no excuses.' },
  { n:'04', title:'Innovation',       desc:'We use AI tools, automation, and modern workflows to improve performance, reduce wasted spend, and keep your brand ahead of the competition.' },
]
const industries = [
  'Clinics & Healthcare','Automotive Showrooms','Coaching Institutes',
  'Real Estate Agencies','Restaurants & Cafes','Retail & E-Commerce',
  'SaaS & Tech Startups','Interior Design','Event Planning',
  'Legal & Financial Services','Fitness & Wellness','Travel & Hospitality',
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <SectionEyebrow text="Who We Are" />
            <h1 className="head-h2 mb-4">
              About <span className="grad-text">Mars Agency</span>
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] max-w-xl font-light">
              A Lucknow-based digital marketing agency focused on practical growth, not empty promises.
            </p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80">
            <MarsPlanetSmall size={180} />
          </div>
        </div>
      </div>

      <section className="px-8 py-16 max-md:px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <SectionEyebrow text="Our Story" />
            <h2 className="head-h2 mb-5">
              We Grow <span className="grad-text">Lucknow Businesses</span>
            </h2>
            <div className="space-y-4 text-[14px] text-mars-mu leading-[1.85] font-light">
              <p>
                <strong className="text-white font-medium">Mars Agency</strong> is a result-driven
                digital marketing agency based in Lucknow, Uttar Pradesh. We help businesses get
                found online and convert visitors into customers through SEO, paid ads, content,
                short-form video, and website optimisation.
              </p>
              <p>
                Our work spans local business marketing, automotive campaigns, SaaS promotion,
                and AI-powered workflows. Everything we do is built around leads, sales, visibility,
                and long-term brand strength — not empty promises or vanity metrics.
              </p>
              <p>
                We work with businesses across{' '}
                <strong className="text-white font-medium">Gomti Nagar, Hazratganj, Indira Nagar,
                Aliganj, Aminabad, Mahanagar,</strong> and nearby areas — understanding the local
                market, customer behaviour, and competition deeply.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12">
              <SectionEyebrow text="Values & Why Us" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {values.map(v => (
                  <div key={v.n} className="card-glass">
                    <p className="font-grotesk text-[24px] font-bold grad-text opacity-50 mb-2">{v.n}</p>
                    <h3 className="font-grotesk text-[14px] font-semibold mb-1.5">{v.title}</h3>
                    <p className="text-[12px] text-mars-mu leading-[1.7] font-light">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="mt-12">
              <SectionEyebrow text="Industries We Serve" />
              <div className="flex flex-wrap gap-2 mt-5">
                {industries.map(i => (
                  <span key={i} className="text-[11px] text-mars-mu bg-white/[0.04] border border-white/[0.08] rounded-full px-3.5 py-1.5 backdrop-blur-sm font-light">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 lg:sticky lg:top-24">
            <div className="card-glass relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #ff6b35, transparent 70%)', filter: 'blur(50px)', opacity: 0.4 }} />
              <p className="font-grotesk text-[42px] font-bold grad-text leading-none mb-2 relative">150+</p>
              <p className="font-grotesk text-[10px] tracking-[2px] uppercase text-mars-mu mb-5 relative">Businesses Grown</p>
              <Link href="/contact" className="btn-primary text-[11px] block text-center relative">Work With Us</Link>
            </div>

            <div className="card-glass relative overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(247,37,133,0.04))', borderColor: 'rgba(124,58,237,0.25)' }}>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(40px)', opacity: 0.3 }} />
              <p className="font-grotesk text-[14px] font-bold text-white mb-1.5 relative">
                Powered by <span style={{ background: 'linear-gradient(135deg,#7c3aed,#f72585)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>IXT MINDS</span>
              </p>
              <p className="text-[11px] text-mars-mu leading-[1.6] font-light relative">
                Our websites are developed in partnership with{' '}
                <a href="https://www.ixtminds.com" target="_blank" rel="noopener noreferrer" className="text-mars-pu">
                  ixtminds.com
                </a>{' '}
                — Web Apps · Mobile · AI Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-md:px-5 text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.15), transparent 70%)', filter: 'blur(60px)' }} />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Ready to Start?</p>
        <h2 className="head-h2 mb-3 relative">
          Let&apos;s Build Something<br /><span className="grad-text">Remarkable</span>
        </h2>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-[1.8] font-light relative">
          Tell us about your business and we&apos;ll show you exactly how we can help it grow online.
        </p>
        <Link href="/contact" className="btn-cta relative">Get Free Consultation →</Link>
      </section>
    </>
  )
}
