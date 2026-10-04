import type { Metadata } from 'next'
import { SITE } from './site'

export function pageMetadata(title: string, description: string, path: string, keywords?: string[]): Metadata {
  const fullTitle = `${title} | ${SITE.legalName}`
  const url = `${SITE.url}${path === '/' ? '' : path}`
  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website', locale: 'en_IN', siteName: SITE.legalName,
      title: fullTitle, description, url,
      images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630, alt: SITE.legalName }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [`${SITE.url}/opengraph-image`] },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name,
      item: `${SITE.url}${item.path === '/' ? '' : item.path}`,
    })),
  }
}
