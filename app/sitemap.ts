import type { MetadataRoute } from 'next'
import { SERVICES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPages = ['', '/about', '/services', '/case-studies', '/portfolio', '/blog', '/faq', '/contact']
  return [
    ...staticPages.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]
}
