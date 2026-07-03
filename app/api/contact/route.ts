import { NextResponse } from 'next/server'

// Inquiries are emailed here via FormSubmit (no account/API key needed).
// The FIRST submission triggers a one-time "Activate" email from FormSubmit
// to this address — click Activate once and all future submissions arrive automatically.
const NOTIFY_EMAIL = 'zaheer.haider887@gmail.com'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, business, service, message } = body
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Please fill in your name, email, and message.' }, { status: 400 })
    }

    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(NOTIFY_EMAIL)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New Enquiry from ${name} — MARS DIGITAL MARKETING`,
        _template: 'table',
        _captcha: 'false',
        Name: name,
        Email: email,
        Phone: phone || '-',
        Business: business || '-',
        Service: service || '-',
        Message: message,
      }),
    })
    const data = await res.json().catch(() => ({} as Record<string, unknown>))

    if (!res.ok || String(data.success) === 'false') {
      return NextResponse.json(
        { success: false, message: 'Something went wrong sending your message. Please try again or reach us on WhatsApp.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, message: 'Thanks! Your message has been received. We will be in touch shortly.' })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ success: false, message: 'Server error. Please try again or reach us on WhatsApp.' }, { status: 500 })
  }
}
