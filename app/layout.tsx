import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mars Agency Lucknow | Digital Marketing Agency',
    template: '%s | Mars Agency',
  },
  description:
    'Mars Agency is a result-driven digital marketing agency in Lucknow. SEO, Google Ads, Meta Ads, social media, UGC video ads, website development, and AI-powered strategies.',
  keywords: [
    'digital marketing agency Lucknow',
    'SEO company Lucknow',
    'Google Ads Lucknow',
    'Meta Ads agency Lucknow',
    'UGC video ads Lucknow',
    'social media marketing Lucknow',
  ],
  openGraph: {
    type: 'website', locale: 'en_IN', url: 'https://marsagency.in',
    siteName: 'Mars Agency',
    title: 'Mars Agency Lucknow | Digital Marketing Agency',
    description: 'Result-driven digital marketing in Lucknow.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="bg-mars-bg text-white antialiased overflow-x-hidden">
        <div className="bg-mesh" />
        <div className="bg-grid" />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
