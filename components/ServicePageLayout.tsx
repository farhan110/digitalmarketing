import Link from 'next/link'
import { MarsPlanetSmall } from './MarsPlanet'

type Props = {
  eyebrow: string
  title: string
  titleHighlight: string
  description: string
  seoTitle: string
  features: string[]
  cta: string
  children?: React.ReactNode
}

export function ServicePageLayout({ eyebrow, title, titleHighlight, description, features, cta, children }: Props) {
  return (
    <>
      <div className="pg-hero">
        <div className="contain grid lg:grid-cols-[1fr_200px] gap-8 items-center">
          <div>
            <p className="eye">{eyebrow}</p>
            <h1 className="h-sec font-grotesk mb-4">{title} <span className="grad">{titleHighlight}</span></h1>
            <p className="lead">{description}</p>
          </div>
          <div className="hidden lg:flex justify-end opacity-80"><MarsPlanetSmall size={140} /></div>
        </div>
      </div>
      <div className="sec"><div className="contain">
        <h2 className="h-sub font-grotesk mb-6">What We <span className="grad">Deliver</span></h2>
        <ul className="feat-list max-w-2xl">{features.map((f,i) => <li key={i}>{f}</li>)}</ul>
      </div></div>
      {children}
      <div className="cta-sec">
        <div className="cta-glow" />
        <h2 className="h-sec font-grotesk mb-3 relative">{cta}</h2>
        <p className="text-[14px] text-m-mu max-w-md mx-auto mb-7 leading-relaxed relative font-light">Tell us your goal, and we will suggest the best starting point.</p>
        <div className="flex gap-3 justify-center flex-wrap relative">
          <Link href="/contact" className="btn-cta">Book a Free Strategy Call</Link>
          <Link href="/services" className="btn-g">View All Services</Link>
        </div>
      </div>
    </>
  )
}
