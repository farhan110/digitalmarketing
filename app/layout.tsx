import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const grotesk = Space_Grotesk({ subsets:['latin'], weight:['400','500','600','700'], variable:'--font-grotesk', display:'swap' })
const inter = Inter({ subsets:['latin'], weight:['300','400','500','600','700'], variable:'--font-inter', display:'swap' })

export const metadata: Metadata = {
  title: { default:'Digital Marketing Company in Lucknow | Mars', template:'%s | Mars' },
  description: 'Mars helps businesses grow with SEO, Meta Ads, Google Ads, social media, content, email marketing, and AI-powered strategy.',
  keywords: ['digital marketing company in Lucknow','SEO services in Lucknow','Meta Ads agency','Google Ads management','social media marketing','content marketing','email marketing','AI marketing automation'],
  openGraph: { type:'website', locale:'en_IN', url:'https://digitalmarketinginlucknow.in', siteName:'Mars', title:'Digital Marketing Company in Lucknow | Mars', description:'Mars helps businesses grow with SEO, Meta Ads, Google Ads, social media, content, email marketing, and AI-powered strategy.' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="bg-m-bg text-white antialiased overflow-x-hidden font-inter">
        <div className="bg-mesh" />
        <div className="bg-grid" />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
