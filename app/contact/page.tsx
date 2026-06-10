'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
const services = ['SEO Services','Meta Ads Management','Google Ads Management','Social Media Marketing','Content Marketing','Email Marketing','AI Marketing Automation','Full Digital Marketing','Not Sure - Need Consultation']
const details = [
  { l:'Phone / WhatsApp', v:'+91 70071 89274', href:'tel:+917007189274' },
  { l:'Email', v:'hello@marsagency.in', href:'mailto:hello@marsagency.in' },
  { l:'Location', v:'Lucknow, Uttar Pradesh, India', href:'#' },
  { l:'Hours', v:'Mon-Sat 10:00 AM - 7:00 PM IST', href:'#' },
  { l:'Response Time', v:'Within 2-4 hours', href:'#' },
]
export default function Contact() {
  const [form, setForm] = useState({ name:'',email:'',phone:'',business:'',service:'',message:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [msg, setMsg] = useState('')
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }))
  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { setStatus('error'); setMsg('Please fill name, email, and message.'); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      const data = await res.json()
      if (data.success) { setStatus('success'); setMsg("Message received. We will reply within a few hours."); setForm({ name:'',email:'',phone:'',business:'',service:'',message:'' }) }
      else { setStatus('error'); setMsg(data.message || 'Something went wrong.') }
    } catch { setStatus('error'); setMsg('Network error. Please try WhatsApp instead.') }
  }
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div><p className="eye">Contact</p><h1 className="h-sec font-grotesk mb-4">Tell Us What You Want to <span className="grad">Achieve</span></h1>
      <p className="lead">We will reply with a practical plan, clear next steps, and honest feedback about what will work best for your business.</p></div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain grid-sidebar items-start">
      <form onSubmit={submit} className="glass order-2 lg:order-1">
        <h3 className="font-grotesk text-[16px] font-semibold mb-5">Send Us a Message</h3>
        {status!=='idle' && (<div className={`p-3 mb-4 text-[13px] rounded-lg border font-light ${status==='success'?'border-m-gn/40 bg-m-gn/[0.06] text-m-gn':status==='error'?'border-red-500/40 bg-red-500/[0.06] text-red-400':'border-m-or/40 bg-m-or/[0.06] text-m-or'}`}>{msg || 'Sending...'}</div>)}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="fg"><label htmlFor="n">Your Name *</label><input id="n" type="text" value={form.name} onChange={upd('name')} placeholder="Your Name" required /></div>
          <div className="fg"><label htmlFor="e">Email *</label><input id="e" type="email" value={form.email} onChange={upd('email')} placeholder="you@example.com" required /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="fg"><label htmlFor="p">Phone / WhatsApp</label><input id="p" type="tel" value={form.phone} onChange={upd('phone')} placeholder="+91 98765 43210" /></div>
          <div className="fg"><label htmlFor="b">Business Name</label><input id="b" type="text" value={form.business} onChange={upd('business')} placeholder="Your Business" /></div>
        </div>
        <div className="fg"><label htmlFor="s">Service Interested In</label><select id="s" value={form.service} onChange={upd('service')}><option value="">Select...</option>{services.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
        <div className="fg"><label htmlFor="m">Your Goals & Challenges *</label><textarea id="m" value={form.message} onChange={upd('message')} required placeholder="Tell us about your business, current challenges, and what you want to achieve..." /></div>
        <button type="submit" disabled={status==='loading'} className="btn-p w-full justify-center py-3.5 disabled:opacity-60">{status==='loading'?'Sending...':'Send Message'}</button>
        <p className="text-[11px] text-m-dm mt-3 text-center font-light">We respond within 2-4 hours during business hours.</p>
      </form>
      <div className="space-y-3 order-1 lg:order-2">
        <div className="glass relative overflow-hidden">
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle,#ff6b35,transparent 70%)', filter:'blur(50px)', opacity:0.4 }} />
          <h3 className="font-grotesk text-[12px] font-semibold tracking-[2px] uppercase grad mb-4 relative">Contact Details</h3>
          {details.map(d => (<div key={d.l} className="py-2.5 border-b border-white/[0.08] last:border-none relative">
            <p className="text-[9px] font-semibold tracking-[1.5px] uppercase text-m-mu mb-1">{d.l}</p>
            {d.href.startsWith('#') ? <p className="text-[13px] text-white font-medium">{d.v}</p> : <a href={d.href} className="text-[13px] text-white font-medium hover:text-m-or transition-colors">{d.v}</a>}
          </div>))}
        </div>
        <a href="https://wa.me/917007189274?text=Hi%2C+I+want+to+grow+my+business+with+Mars" target="_blank" rel="noopener noreferrer" className="btn-wa">WhatsApp Us Directly</a>
        <div className="glass">
          <h3 className="font-grotesk text-[12px] font-semibold tracking-[2px] uppercase grad3 mb-3">Free Strategy Call Includes</h3>
          {['Business and market review','Competitor analysis','Custom growth recommendations','Clear next steps and pricing','No pressure, no obligation'].map((i,n) => (
            <div key={n} className="flex gap-2.5 items-start py-2 border-b border-white/[0.05] last:border-none">
              <span className="w-4 h-4 rounded-full bg-m-gn flex items-center justify-center text-[8px] flex-shrink-0 mt-0.5">✓</span>
              <span className="text-[13px] text-m-mu font-light leading-[1.6]">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </div></div>
  </>)
}