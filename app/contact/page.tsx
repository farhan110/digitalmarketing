'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'

const services = [
  'SEO & Organic Growth',
  'Google Ads (PPC)',
  'Meta Ads (Facebook & Instagram)',
  'Social Media Marketing',
  'Website Development',
  'Local SEO & Google Business',
  'UGC Video Ads & Short-Form Content',
  'AI-Powered Marketing',
  'Analytics & Reporting',
  'Email & WhatsApp Marketing',
  'Full Digital Marketing Package',
  'Not Sure — Need Consultation',
]
const details = [
  { l:'Phone / WhatsApp', v:'+91 70071 89274',                    href:'tel:+917007189274' },
  { l:'Email',             v:'hello@marsagency.in',                href:'mailto:hello@marsagency.in' },
  { l:'Location',          v:'Lucknow, Uttar Pradesh, India',      href:'#' },
  { l:'Business Hours',    v:'Mon – Sat · 10:00 AM – 7:00 PM IST', href:'#' },
  { l:'Response Time',     v:'Within 2–4 hours',                   href:'#' },
]
const incl = [
  'Website and online presence audit',
  'Local SEO and Google ranking review',
  'Competitor analysis overview',
  'Custom strategy recommendation',
  'Transparent pricing discussion',
  'Next step plan with timeline',
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', business:'', service:'', message:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [msg, setMsg] = useState('')

  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error'); setMsg('Please fill in your name, email, and message.'); return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success'); setMsg("Message received. We'll be in touch within a few hours.")
        setForm({ name:'', email:'', phone:'', business:'', service:'', message:'' })
      } else {
        setStatus('error'); setMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error'); setMsg('Network error. Please try again or message us on WhatsApp.')
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h1 className="head-h2 mb-4">
              Let&apos;s Grow Your<br /><span className="grad-text">Business Together</span>
            </h1>
            <p className="text-[14px] text-mars-mu leading-[1.8] max-w-xl font-light">
              We offer a free consultation for every new enquiry. Tell us about your business and
              we will come back with a clear strategy, honest pricing, and a plan that actually works.
            </p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80">
            <MarsPlanetSmall size={180} />
          </div>
        </div>
      </div>

      <section className="px-8 py-16 max-md:px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[340px_1fr] gap-5 items-start">

          {/* Sidebar */}
          <div className="space-y-3 lg:sticky lg:top-24">
            {/* Contact Details */}
            <div className="card-glass relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #ff6b35, transparent 70%)', filter: 'blur(50px)', opacity: 0.4 }} />
              <h3 className="font-grotesk text-[12px] font-semibold tracking-[2px] uppercase grad-text mb-4 relative">Contact Details</h3>
              {details.map(d => (
                <div key={d.l} className="py-2.5 border-b border-white/[0.08] last:border-none relative">
                  <p className="font-grotesk text-[9px] font-semibold tracking-[1.5px] uppercase text-mars-mu mb-1">{d.l}</p>
                  {d.href.startsWith('#') ? (
                    <p className="text-[12px] text-white font-medium">{d.v}</p>
                  ) : (
                    <a href={d.href} className="text-[12px] text-white font-medium hover:text-mars-or transition-colors">{d.v}</a>
                  )}
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="card-glass">
              <h3 className="font-grotesk text-[12px] font-semibold tracking-[2px] uppercase grad-text3 mb-4">Free Consultation Includes</h3>
              {incl.map((i, n) => (
                <div key={n} className="flex gap-2.5 items-start py-2 border-b border-white/[0.05] last:border-none">
                  <span className="w-4 h-4 rounded-full bg-mars-gn flex items-center justify-center text-[8px] flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[12px] text-mars-mu font-light leading-[1.6]">{i}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a href="https://wa.me/917007189274?text=Hi%2C+I+want+to+grow+my+business+with+Mars+Agency"
               target="_blank" rel="noopener noreferrer"
               className="w-full flex items-center justify-center gap-2 font-grotesk text-[12px] font-semibold uppercase tracking-wider border border-[#22c55e]/30 text-[#22c55e] bg-[#22c55e]/[0.06] hover:bg-[#22c55e]/[0.1] py-3 rounded-xl transition-colors backdrop-blur-sm">
              💬 Message Us on WhatsApp
            </a>

            {/* Partner Box */}
            <div className="card-glass relative overflow-hidden text-center"
                 style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(247,37,133,0.04))', borderColor: 'rgba(124,58,237,0.25)' }}>
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                   style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(40px)', opacity: 0.3 }} />
              <p className="font-grotesk text-[14px] font-bold mb-1 relative">
                IXT <span style={{ background: 'linear-gradient(135deg,#7c3aed,#f72585)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>MINDS</span>
              </p>
              <p className="text-[10px] text-mars-mu leading-[1.5] font-light relative">
                Website Development Partner<br />
                <a href="https://www.ixtminds.com" target="_blank" rel="noopener noreferrer" className="text-mars-pu hover:underline">
                  ixtminds.com
                </a> · Web · Mobile · AI
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="card-glass">
            <h3 className="font-grotesk text-[16px] font-semibold mb-5">Send Us a Message</h3>

            {status !== 'idle' && (
              <div className={`p-3 mb-3 text-[12px] rounded-lg border font-light ${
                status === 'success' ? 'border-mars-gn/40 bg-mars-gn/[0.06] text-mars-gn' :
                status === 'error'   ? 'border-red-500/40 bg-red-500/[0.06] text-red-400' :
                                       'border-mars-or/40 bg-mars-or/[0.06] text-mars-or'
              }`}>{msg || 'Sending...'}</div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="fg">
                <label htmlFor="n">Your Name *</label>
                <input id="n" type="text" value={form.name} onChange={upd('name')} placeholder="Rahul Sharma" required />
              </div>
              <div className="fg">
                <label htmlFor="e">Email Address *</label>
                <input id="e" type="email" value={form.email} onChange={upd('email')} placeholder="rahul@example.com" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="fg">
                <label htmlFor="p">Phone / WhatsApp</label>
                <input id="p" type="tel" value={form.phone} onChange={upd('phone')} placeholder="+91 98765 43210" />
              </div>
              <div className="fg">
                <label htmlFor="b">Business Name</label>
                <input id="b" type="text" value={form.business} onChange={upd('business')} placeholder="Your Business" />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="s">Service You&apos;re Interested In</label>
              <select id="s" value={form.service} onChange={upd('service')}>
                <option value="">Select a service...</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="fg">
              <label htmlFor="m">Tell Us About Your Business *</label>
              <textarea id="m" value={form.message} onChange={upd('message')} required
                placeholder="Briefly describe your business, current challenges, and what you want to achieve..." />
            </div>

            <button type="submit" disabled={status === 'loading'}
              className="btn-primary w-full justify-center py-3.5 disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : "Send Message — Let's Talk →"}
            </button>

            <p className="text-[11px] text-mars-dm/80 mt-3 leading-[1.6] font-light text-center">
              We respond within 2–4 hours during business hours. Your information is kept confidential.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
