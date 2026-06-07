'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'

const faqs = [
  { q: 'What makes Mars Agency different from other digital marketing agencies in Lucknow?',
    a: 'Our agency combines deep local market understanding with hands-on experience in SEO, Google Ads, Meta Ads, social media marketing, website optimisation, UGC video ads, and AI-powered workflows. We focus on practical strategies that help businesses get more visibility, more leads, and better online growth — not generic templates that ignore Lucknow\'s unique market dynamics.' },
  { q: 'How long does it take to see results from SEO?',
    a: 'Local SEO in Lucknow typically shows meaningful improvements in rankings and traffic within 3 to 6 months. Paid advertising (Google Ads and Meta Ads) delivers results much faster — often within the first 7 to 14 days after launch. We set realistic expectations upfront and provide monthly progress reports.' },
  { q: 'What types of businesses do you work with?',
    a: 'We work with clinics, hospitals, automotive showrooms, coaching institutes, real estate agencies, restaurants, retail shops, law firms, fitness centres, travel agencies, SaaS platforms, interior design studios, and local service businesses across Lucknow, Kanpur, and other UP cities.' },
  { q: 'How much does digital marketing cost for a Lucknow business?',
    a: 'Pricing depends on your goals, services needed, and industry competitiveness. We work with various budgets and always focus on delivering positive ROI. Book a free consultation — we will assess your situation and give you a transparent proposal with expected outcomes and realistic timelines.' },
  { q: 'Can you help my business rank on Google Maps in Lucknow?',
    a: 'Absolutely. Google Business Profile optimisation is one of our core local SEO services. We optimise your GBP listing, build local citations across 40+ directories, manage your review strategy, and ensure your business appears prominently in Google Maps results.' },
  { q: 'Do you run both Google Ads and Meta Ads campaigns?',
    a: 'Yes. We manage end-to-end paid advertising on Google Ads (Search, Display, Shopping, YouTube) and Meta Ads (Facebook and Instagram) — including strategy, audience research, ad creative, bid optimisation, A/B testing, and monthly performance reporting.' },
  { q: 'What is UGC video marketing and how does it help my business?',
    a: 'UGC-style video uses creator-like storytelling to make your brand feel more authentic and relatable. These videos perform better than polished ads on Meta, Instagram Reels, and YouTube Shorts — with higher engagement rates and lower cost-per-lead.' },
  { q: 'What is AI-powered marketing and how does it benefit my business?',
    a: 'AI marketing uses artificial intelligence tools and automation to make your marketing more effective and efficient. This includes AI-assisted content creation, smart audience targeting, automated email sequences, chatbots, and predictive analytics.' },
  { q: 'Do you provide monthly reports and updates?',
    a: 'Yes. Every client receives monthly reports covering rankings, traffic, leads, and ad performance. We also hold regular check-in calls to keep you fully informed about what is working and what we are optimising next.' },
  { q: 'Can you build a website for my Lucknow business?',
    a: 'Yes. We build fast, mobile-optimised, SEO-ready websites and landing pages on WordPress — developed in partnership with IXT Minds (ixtminds.com). Every site is designed to rank on Google, load quickly, and convert visitors into customers.' },
  { q: 'Do you work with businesses outside Lucknow?',
    a: 'Yes. While we specialise in Lucknow, we also work with businesses across Uttar Pradesh including Kanpur, Agra, Varanasi, and other cities — particularly for SEO, Google Ads, Meta Ads, social media, and website projects.' },
  { q: 'How do I get started with Mars Agency?',
    a: 'The easiest way is to reach out via our contact form, call us, or send a WhatsApp message at +91 70071 89274. We will schedule a free consultation to understand your business, goals, and current digital presence — then come back with a clear strategy and transparent pricing.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <p className="eyebrow">Common Questions</p>
            <h1 className="head-h2 mb-4">
              Frequently Asked<br /><span className="grad-text">Questions</span>
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] max-w-xl font-light">
              Everything you need to know about working with Mars Agency — Lucknow&apos;s result-driven
              digital marketing team.
            </p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80">
            <MarsPlanetSmall size={180} />
          </div>
        </div>
      </div>

      <section className="px-8 py-16 max-md:px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-6 items-start">

          {/* Sidebar */}
          <div className="card-glass relative overflow-hidden lg:sticky lg:top-24"
               style={{ background: 'linear-gradient(180deg, rgba(255,107,53,0.08), rgba(247,37,133,0.04))' }}>
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(circle, #ff6b35, transparent 70%)', filter: 'blur(40px)', opacity: 0.3 }} />
            <h3 className="font-grotesk text-xl font-bold mb-2 relative">
              12 Questions.<br /><span className="grad-text">Clear Answers.</span>
            </h3>
            <p className="text-[12px] text-mars-mu leading-[1.7] mb-5 font-light relative">
              Get straight answers about our services, timelines, pricing, and how we help Lucknow
              businesses grow online.
            </p>

            {[
              { v: '3–6',  l: 'Months SEO Results' },
              { v: '7–14', l: 'Days Paid Ad Results' },
              { v: '2–4h', l: 'Response Time' },
            ].map(s => (
              <div key={s.l} className="flex justify-between items-baseline py-3 border-b border-white/[0.08] relative">
                <span className="font-grotesk text-lg font-bold text-white">{s.v}</span>
                <span className="text-[10px] text-mars-mu uppercase tracking-[1px] font-medium text-right">{s.l}</span>
              </div>
            ))}
            <div className="flex justify-between items-baseline py-3 relative">
              <span className="font-grotesk text-lg font-bold grad-text">Free</span>
              <span className="text-[10px] text-mars-mu uppercase tracking-[1px] font-medium text-right">First Consultation</span>
            </div>
          </div>

          {/* FAQ list */}
          <div>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'op' : ''}`}>
                <button
                  className="fq-trigger"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-medium text-[13px] leading-[1.5] flex-1">{f.q}</span>
                  <span className="fq-ic">+</span>
                </button>
                <div className={`fa-wrap ${open === i ? 'op' : ''}`}>
                  <div className="px-5 py-4 text-[13px] text-mars-mu leading-[1.85] font-light">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-md:px-5 text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.15), transparent 70%)', filter: 'blur(60px)' }} />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Still Have Questions?</p>
        <h2 className="head-h2 mb-3 relative">
          Let&apos;s Talk About<br /><span className="grad-text">Your Business</span>
        </h2>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-[1.8] font-light relative">
          We are happy to answer any questions and explain exactly how we can help your business grow.
        </p>
        <div className="flex gap-3 justify-center flex-wrap relative">
          <Link href="/contact" className="btn-cta">Contact Us →</Link>
          <a href="tel:+917007189274" className="btn-ghost">📞 Call Us Now</a>
        </div>
      </section>
    </>
  )
}
