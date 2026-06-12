'use client'
import { useState, type FormEvent } from 'react'
import { SERVICES } from '@/lib/site'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      setStatus(res.ok ? 'ok' : 'error')
      setMsg(json.message || '')
    } catch {
      setStatus('error')
      setMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  if (status === 'ok') {
    return (
      <div className="glass p-10 text-center">
        <div className="font-grotesk text-2xl font-bold text-gradient-mars">Message received 🚀</div>
        <p className="mt-3 text-white/70">{msg || 'We will be in touch with a practical plan and next steps.'}</p>
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
