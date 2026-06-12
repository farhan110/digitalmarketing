import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, business, service, message } = body
    if (!name || !email || !message) return NextResponse.json({ success:false, message:'Required fields missing.' }, { status:400 })
    console.log('=== New Contact — Mars ===', { name, email, phone, business, service, message, ts: new Date().toISOString() })
    // Uncomment for Resend: import { Resend } from 'resend'; const r = new Resend(process.env.RESEND_API_KEY); await r.emails.send({ from:'contact@marsagency.in', to:'hello@marsagency.in', subject:`New Enquiry — ${name}`, text:`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nService: ${service}\n\n${message}` })
    return NextResponse.json({ success:true, message:"Message received. We will be in touch." })
  } catch (error) { console.error('Contact error:', error); return NextResponse.json({ success:false, message:'Server error.' }, { status:500 }) }
}