import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye } from '@/components/StatCounter'
import { MarsPlanetSmall } from '@/components/MarsPlanet'
export const metadata: Metadata = { title:'Case Studies | Mars', description:'See how Mars approaches real marketing problems with strategy, creative, paid media, content, and measurable execution.' }
export default function CaseStudies() {
  return (<>
    <div className="pg-hero"><div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
      <div><Eye text="Case Studies" /><h1 className="h-sec font-grotesk mb-4">Real Strategy. Real Execution. <span className="grad">Real Results.</span></h1>
      <p className="lead">A good case study shows the problem, the strategy, the execution, and the outcome. Below are examples of how we approach marketing problems.</p></div>
      <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
    </div></div>
    <div className="sec"><div className="contain">
      <div className="glass !p-0 overflow-hidden mb-6">
        <div className="px-5 py-4 md:px-8 md:py-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <p className="eye !mb-2">Featured Case Study</p>
            <h2 className="font-grotesk text-[20px] md:text-[24px] font-bold">Local Brand Visibility & <span className="grad">Lead Growth</span></h2>
          </div>
          <span className="text-[10px] font-medium tracking-[2px] uppercase px-3 py-1.5 rounded-full border border-m-or/30 bg-m-or/10 text-m-or self-start">Multi-Channel</span>
        </div>
        <div className="px-5 py-5 md:px-8 md:py-8 grid lg:grid-cols-2 gap-8">
          <div className="space-y-5 text-[14px] text-m-mu leading-[1.8] font-light">
            <div><h3 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase grad mb-2">Challenge</h3><p>The brand had a weak online presence, inconsistent content, and no clear lead-generation system. They were losing customers to competitors with stronger digital presence.</p></div>
            <div><h3 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase grad mb-2">Strategy</h3><p>We rebuilt the messaging, improved the website content, launched a focused content plan, and supported the offer with Meta and Google campaigns.</p></div>
            <div><h3 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase grad mb-2">Execution</h3>
              <ul className="feat-list !mt-2">{['Clarified the offer and rewrote the homepage copy','Mapped keywords for service pages and blog topics','Built ad creatives and landing page messaging','Used social content to build trust and retarget visitors','Set up conversion tracking and monthly reporting'].map((f,i) => <li key={i}>{f}</li>)}</ul>
            </div>
          </div>
          <div>
            <h3 className="font-grotesk text-[11px] font-semibold tracking-[2px] uppercase grad3 mb-4">Outcomes</h3>
            <div className="grid-2 gap-3 mb-5">{[
              { v:'Improved', l:'Search & Social Visibility' },
              { v:'Better', l:'Qualified Engagement' },
              { v:'More', l:'Consistent Inquiries' },
              { v:'Stronger', l:'Brand Presence' },
            ].map(m => (<div key={m.l} className="glass !p-4 text-center"><p className="font-grotesk text-[20px] font-bold grad3 mb-1">{m.v}</p><p className="text-[9px] text-m-mu uppercase tracking-wider">{m.l}</p></div>))}</div>
            <div className="glass !rounded-xl relative overflow-hidden" style={{ background:'linear-gradient(135deg,rgba(16,185,129,0.06),rgba(6,182,212,0.04))', borderColor:'rgba(16,185,129,0.2)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background:'linear-gradient(180deg,#10b981,#06b6d4)' }} />
              <p className="text-[13px] text-[#a7f3d0] leading-[1.7] pl-3">The brand went from inconsistent posting and zero inbound leads to a recognizable local presence with a steady stream of qualified inquiries from the right audience.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-m-dm mt-8">More case studies coming soon as we complete ongoing campaigns. Want to be our next success story?</p>
    </div></div>
    <div className="cta-sec"><div className="cta-glow" /><h2 className="h-sec font-grotesk mb-3 relative">Want results <span className="grad">like this?</span></h2><p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed font-light relative">Let us build your growth system.</p><Link href="/contact" className="btn-cta relative">Book a Free Strategy Call</Link></div>
  </>)
}