import { SITE } from './site'

export function webpageSchema(name: string, description: string, path: string, type = 'WebPage') {
  const url = `${SITE.url}${path === '/' ? '' : path}`
  return {
    '@context': 'https://schema.org', '@type': type, '@id': `${url}#webpage`,
    url, name, description, inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  }
}
