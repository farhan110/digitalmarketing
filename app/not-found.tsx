import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <div className="font-grotesk text-8xl font-bold text-gradient">404</div>
      <h1 className="mt-4 font-grotesk text-2xl font-bold">Lost in space</h1>
      <p className="mt-3 text-white/60">This page drifted out of orbit. Let&apos;s get you back to base.</p>
      <Link href="/" className="btn-primary mt-8">Back to Home</Link>
    </section>
  )
}
