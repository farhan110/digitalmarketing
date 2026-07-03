import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Starfield } from '@/components/Starfield'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { SITE, SERVICES } from '@/lib/site'

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
  title: { default: SITE.title, template: '%s | MARS DIGITAL MARKETING' },
  description: SITE.description,
  keywords: [
    'digital marketing agency in Lucknow', 'SEO company in Lucknow', 'Google Ads agency',
    'Meta Ads agency', 'social media marketing', 'website development', 'photography and video production', 'eCommerce marketing',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  verification: { google: 'rMNEZk_SRFNzIRWFJfGcynF5PehX2PCYuDWKMLxJTq0' },
  openGraph: {
    type: 'website', locale: 'en_IN', url: SITE.url, siteName: 'MARS DIGITAL MARKETING',
    title: SITE.title, description: SITE.description,
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: 'MARS DIGITAL MARKETING',
  alternateName: 'Mars Digital Marketing Lucknow',
  url: SITE.url,
  description: SITE.description,
  telephone: SITE.phone,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 26.8467, longitude: 80.9462 },
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'Country', name: 'India' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: [],
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.name, url: `${SITE.url}/${s.slug}` },
  })),
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: 'MARS DIGITAL MARKETING',
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en-IN',
}

const GA_ID = 'G-LTK0BCEHKN'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-base">
      <body className="overflow-x-hidden bg-space-950 font-inter text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Starfield />
        <div className="bg-aurora" />
        <div className="bg-grid" />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  )
}
