import Link from 'next/link'

const services = [
  'SEO & Organic Growth', 'Google Ads (PPC)', 'Meta Ads',
  'Social Media Marketing', 'UGC Video Ads', 'Local SEO',
  'Website Development', 'AI-Powered Marketing',
]
const company = [
  { label: 'About Us',     href: '/about' },
  { label: 'Our Work',     href: '/case-studies' },
  { label: 'Services',     href: '/services' },
  { label: 'Local SEO',    href: '/local-seo' },
  { label: 'FAQ',          href: '/faq' },
  { label: 'Contact',      href: '/contact' },
]

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/[0.08] mt-12">
      {/* Top CTA */}
      <div className="px-8 py-14 max-md:px-5 border-b border-white/[0.08] text-center relative overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 w-[600px] h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.12), transparent 70%)', filter: 'blur(60px)' }}
        />
        <p className="eyebrow relative" style={{ margin: '0 auto 14px' }}>Get In Touch</p>
        <h3 className="head-h2 mb-3 relative">
          Ready to grow your <span className="grad-text">Lucknow business?</span>
        </h3>
        <p className="text-[14px] text-mars-mu max-w-md mx-auto mb-7 leading-relaxed relative">
          Free consultation. Honest pricing. Real results.
        </p>
        <div className="flex gap-3 justify-center flex-wrap relative">
          <Link href="/contact" className="btn-cta">Start a Project →</Link>
          <a
            href="https://wa.me/917007189274?text=Hi%2C+I+want+to+grow+my+business+with+Mars+Agency"
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Footer columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-14 max-md:px-5">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-grotesk font-bold text-base text-white mb-5">
            <span className="w-6 h-6 rounded-[7px] bg-[linear-gradient(135deg,#ff6b35_0%,#f72585_50%,#7c3aed_100%)] flex items-center justify-center text-[11px] font-black">M</span>
            MARS AGENCY
          </Link>
          <p className="text-[13px] text-mars-mu leading-relaxed mb-5 font-light">
            A result-driven digital marketing agency in Lucknow. Helping businesses grow online
            through SEO, paid ads, social media, UGC video, and AI-powered strategies.
          </p>
          <p className="text-[10px] tracking-[2px] uppercase text-mars-dm leading-relaxed">
            Website Development Partner:<br />
            <a href="https://www.ixtminds.com" target="_blank" rel="noopener noreferrer" className="grad-text font-medium">
              IXT Minds — ixtminds.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase text-white mb-5">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.map(s => (
              <li key={s}>
                <Link href="/services" className="text-[13px] text-mars-mu hover:text-mars-or transition-colors font-light">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase text-white mb-5">Company</h4>
          <ul className="flex flex-col gap-2.5">
            {company.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-[13px] text-mars-mu hover:text-mars-or transition-colors font-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase text-white mb-5">Contact</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="tel:+917007189274" className="text-[13px] text-mars-mu hover:text-mars-or transition-colors font-light">
                +91 70071 89274
              </a>
            </li>
            <li>
              <a href="mailto:hello@marsagency.in" className="text-[13px] text-mars-mu hover:text-mars-or transition-colors font-light">
                hello@marsagency.in
              </a>
            </li>
            <li className="text-[13px] text-mars-mu font-light">Lucknow, Uttar Pradesh, India</li>
            <li className="text-[13px] text-mars-mu font-light">Mon–Sat · 10AM–7PM IST</li>
            <li className="pt-3">
              <a
                href="https://wa.me/917007189274"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/[0.06] hover:bg-[#22c55e]/[0.1] px-4 py-2 rounded-lg transition-colors"
              >
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08] px-8 py-5 max-md:px-5 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[11px] tracking-[2px] uppercase text-mars-dm">
          © {new Date().getFullYear()} Mars Agency Lucknow — All Rights Reserved
        </p>
        <p className="text-[11px] tracking-[2px] uppercase text-mars-dm">
          Digital Marketing Agency in Lucknow, UP
        </p>
      </div>
    </footer>
  )
}
