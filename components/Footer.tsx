import Link from 'next/link'
const srvLinks = [
  { label:'SEO Services', href:'/seo-services' },
  { label:'Meta Ads', href:'/meta-ads' },
  { label:'Google Ads', href:'/google-ads' },
  { label:'Social Media', href:'/social-media' },
  { label:'Content Marketing', href:'/content-marketing' },
  { label:'Email Marketing', href:'/email-marketing' },
  { label:'AI Marketing', href:'/ai-marketing' },
]
const coLinks = [
  { label:'About', href:'/about' },
  { label:'Services', href:'/services' },
  { label:'Case Studies', href:'/case-studies' },
  { label:'Portfolio', href:'/portfolio' },
  { label:'Blog', href:'/blog' },
  { label:'Contact', href:'/contact' },
]
export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/[0.08] mt-8">
      <div className="cta-sec">
        <div className="cta-glow" />
        <p className="eye relative" style={{ margin:'0 auto 14px' }}>Get In Touch</p>
        <h3 className="h-sec mb-3 relative font-grotesk">Ready to grow your <span className="grad">business?</span></h3>
        <p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed relative font-light">Digital marketing that brings traffic, leads, and growth for brands in Lucknow and beyond.</p>
        <div className="flex gap-3 justify-center flex-wrap relative">
          <Link href="/contact" className="btn-cta">Book a Free Strategy Call</Link>
          <a href="https://wa.me/917007189274?text=Hi%2C+I+want+to+grow+my+business+with+Mars" target="_blank" rel="noopener noreferrer" className="btn-g">WhatsApp Us</a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 py-12">
        <div>
          <Link href="/" className="flex items-center gap-2 font-grotesk font-bold text-base text-white mb-4">
            <span className="w-6 h-6 rounded-[7px] bg-[linear-gradient(135deg,#ff6b35,#f72585,#7c3aed)] flex items-center justify-center text-[11px] font-black">M</span>MARS
          </Link>
          <p className="text-[13px] text-m-mu leading-relaxed font-light mb-4">We help businesses turn attention into leads, leads into sales, and sales into repeat growth.</p>
          <p className="text-[10px] tracking-[2px] uppercase text-m-dm">digitalmarketinginlucknow.in</p>
        </div>
        <div>
          <h4 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase text-white mb-4">Services</h4>
          <ul className="flex flex-col gap-2">{srvLinks.map(l => (<li key={l.href}><Link href={l.href} className="text-[13px] text-m-mu hover:text-m-or transition-colors font-light">{l.label}</Link></li>))}</ul>
        </div>
        <div>
          <h4 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase text-white mb-4">Company</h4>
          <ul className="flex flex-col gap-2">{coLinks.map(l => (<li key={l.href}><Link href={l.href} className="text-[13px] text-m-mu hover:text-m-or transition-colors font-light">{l.label}</Link></li>))}</ul>
        </div>
        <div>
          <h4 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase text-white mb-4">Contact</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="tel:+917007189274" className="text-[13px] text-m-mu hover:text-m-or transition-colors font-light">+91 70071 89274</a></li>
            <li><a href="mailto:hello@marsagency.in" className="text-[13px] text-m-mu hover:text-m-or transition-colors font-light">hello@marsagency.in</a></li>
            <li className="text-[13px] text-m-mu font-light">Lucknow, Uttar Pradesh, India</li>
            <li className="text-[13px] text-m-mu font-light">Mon-Sat 10AM-7PM IST</li>
            <li className="pt-2"><a href="https://wa.me/917007189274" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/[0.06] px-4 py-2 rounded-lg">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.08] px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[10px] tracking-[2px] uppercase text-m-dm">Mars | digitalmarketinginlucknow.in | SEO, Ads, Content, Social Media, and AI Marketing</p>
        <p className="text-[10px] tracking-[2px] uppercase text-m-dm">Website by IXT Minds - ixtminds.com</p>
      </div>
    </footer>
  )
}