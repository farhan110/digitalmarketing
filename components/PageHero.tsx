import { Reveal } from './Reveal'

export function PageHero({ chip, title, intro }: { chip: string; title: string; intro: string }) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-36 text-center md:pt-44">
      <Reveal>
        <span className="chip">{chip}</span>
        <h1 className="mx-auto mt-6 max-w-4xl font-grotesk text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{intro}</p>
      </Reveal>
    </section>
  )
}
