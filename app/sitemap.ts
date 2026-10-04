import type { MetadataRoute } from 'next'
import { SERVICES, CASE_STUDIES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/about', '/services', '/our-work', '/contact']
  return [
    ...staticPages.map((p) => ({
      url: `${SITE.url}${p}`,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/${s.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...CASE_STUDIES.map((c) => ({
      url: `${SITE.url}/our-work/${c.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
