import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Starfield } from '@/components/Starfield'
import { SITE } from '@/lib/site'

import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s | Mars' },
  description: SITE.description,
  keywords: [
    'digital marketing company in Lucknow', 'SEO services in Lucknow', 'Meta Ads agency',
    'Google Ads management', 'social media marketing', 'content marketing', 'email marketing', 'AI marketing automation',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', locale: 'en_IN', url: SITE.url, siteName: 'Mars',
    title: SITE.title, description: SITE.description,
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mars',
  url: SITE.url,
  description: SITE.description,
  areaServed: ['Lucknow', 'India'],
  address: { '@type': 'PostalAddress', addressLocality: SITE.locality, addressRegion: SITE.region, addressCountry: 'IN' },
  email: SITE.email,
  priceRange: '₹₹',
  sameAs: [],
  makesOffer: [
    'SEO Services', 'Meta Ads Management', 'Google Ads Management', 'Social Media Management',
    'Content Marketing', 'Email Marketing', 'AI Marketing Automation',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-base">
      <body className="overflow-x-hidden bg-space-950 font-inter text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Starfield />
        <div className="bg-aurora" />
        <div className="bg-grid" />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
