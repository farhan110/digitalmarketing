import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, business, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Required fields missing.' }, { status: 400 })
    }

    // ── Default: log to console (works without any email setup) ──
    console.log('=== New Contact Form Submission — Mars Agency ===')
    console.log({ name, email, phone, business, service, message, timestamp: new Date().toISOString() })

    // ── Option A: Resend (recommended) — npm install resend ──
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@marsagency.in',
    //   to: 'hello@marsagency.in',
    //   subject: `New Enquiry — ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nService: ${service}\n\nMessage:\n${message}`,
    // })

    // ── Option B: Gmail + Nodemailer — npm install nodemailer ──
    // import nodemailer from 'nodemailer'
    // const t = nodemailer.createTransport({ service: 'gmail',
    //   auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } })
    // await t.sendMail({
    //   from: process.env.EMAIL_USER, to: 'hello@marsagency.in',
    //   subject: `New Enquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nService: ${service}\n\nMessage:\n${message}`,
    //   replyTo: email,
    // })

    return NextResponse.json({ success: true, message: "Message received. We'll be in touch soon." })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ success: false, message: 'Server error.' }, { status: 500 })
  }
}
