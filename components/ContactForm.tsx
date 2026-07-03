'use client'
import { useState, type FormEvent } from 'react'
import { SERVICES } from '@/lib/site'

// FormSubmit delivers inquiries to this inbox (no account/API key needed).
// Submitting from the browser is FormSubmit's supported method.
// The FIRST submission triggers a one-time "Activate" email to this address —
// click Activate once and every future inquiry is delivered automatically.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/zaheer.haider887@gmail.com'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const f = new FormData(e.currentTarget)
    const payload = {
      _subject: `New Enquiry from ${f.get('name') || 'Website'} — MARS DIGITAL MARKETING`,
      _template: 'table',
      _captcha: 'false',
      Name: f.get('name'),
      Email: f.get('email'),
      Phone: f.get('phone') || '-',
      Business: f.get('business') || '-',
      Service: f.get('service') || '-',
      Message: f.get('message'),
    }
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({} as Record<string, unknown>))
      const ok = res.ok && String(json.success) !== 'false'
      setStatus(ok ? 'ok' : 'error')
      setMsg(ok ? '' : 'Something went wrong sending your message. Please try again or reach us on WhatsApp.')
    } catch {
      setStatus('error')
      setMsg('Something went wrong sending your message. Please try again or reach us on WhatsApp.')
    }
  }

  if (status === 'ok') {
    return (
      <div className="glass p-10 text-center">
        <div className="font-grotesk text-2xl font-bold text-gradient-mars">Message received 🚀</div>
        <p className="mt-3 text-white/70">Thanks! We&apos;ve got your details and will be in touch shortly with a practical plan and next steps.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="glass space-y-5 p-7 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/75">Name *</label>
          <input id="name" name="name" required className="input" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/75">Email *</label>
          <input id="email" name="email" type="email" required className="input" placeholder="you@business.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/75">Phone / WhatsApp</label>
          <input id="phone" name="phone" className="input" placeholder="+91" />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-white/75">Business name</label>
          <input id="business" name="business" className="input" placeholder="Your brand" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white/75">Service you&apos;re interested in</label>
        <select id="service" name="service" className="input" defaultValue="">
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
          <option value="Not sure">Not sure — recommend for me</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/75">Your goal *</label>
        <textarea id="message" name="message" required rows={5} className="input" placeholder="Share your budget and goals for a custom recommendation…" />
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Get My Growth Plan →'}
      </button>
      {status === 'error' && <p className="text-center text-sm text-red-400">{msg}</p>}
    </form>
  )
}
