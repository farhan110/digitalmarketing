import { mkdir, writeFile } from 'node:fs/promises'

const base = process.argv[2] || 'https://digitalmarketinginlucknow.in'
const output = process.argv[3] || '.seo-audit/live.json'
const routes = ['', '/about', '/services', '/contact', '/our-work', '/seo-services', '/google-ads', '/meta-ads', '/social-media', '/website-development', '/photography-video', '/ecommerce', '/our-work/labotemp', '/our-work/tailor-express', '/our-work/motherland', '/our-work/ixt-minds']
const decode = text => text.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/<[^>]+>/g, '').trim()
async function inspect(path) {
  const res = await fetch(base + path, { signal: AbortSignal.timeout(30000) })
  const html = await res.text()
  const head = html.split('</head>')[0]
  const meta = name => head.match(new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]+content="([^"]*)"`))?.[1] || ''
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]))
  const links = [...html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').matchAll(/<a[^>]+href="(\/[^"#]*)"/g)].map(m => m[1])
  return { path: path || '/', status: res.status, title: decode(head.match(/<title>(.*?)<\/title>/)?.[1] || ''), description: decode(meta('description')), canonical: head.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1], ogUrl: meta('og:url'), twitterTitle: decode(meta('twitter:title')), h1: [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map(m => decode(m[1])), schemaTypes: schemas.map(s => s['@type']), links: [...new Set(links)] }
}
const pages = []
for (let i = 0; i < routes.length; i += 4) pages.push(...await Promise.all(routes.slice(i, i + 4).map(inspect)))
const resources = []
for (const path of ['/robots.txt', '/sitemap.xml', '/this-page-does-not-exist']) {
  const response = await fetch(base + path, { signal: AbortSignal.timeout(30000) })
  resources.push({ path, status: response.status, text: path.endsWith('.txt') || path.endsWith('.xml') ? await response.text() : undefined })
}
const findings = pages.flatMap(p => [
  ...(p.status !== 200 ? [`${p.path}: status ${p.status}`] : []),
  ...(!p.title || !p.description ? [`${p.path}: missing title or description`] : []),
  ...(p.h1.length !== 1 ? [`${p.path}: ${p.h1.length} H1 headings`] : []),
  ...(p.title.split('MARS DIGITAL MARKETING').length > 2 ? [`${p.path}: brand duplicated in title`] : []),
  ...(p.canonical && p.ogUrl !== p.canonical ? [`${p.path}: Open Graph URL does not match canonical`] : []),
  ...(p.twitterTitle !== p.title ? [`${p.path}: Twitter title does not match this page`] : []),
])
await mkdir(output.replace(/[/\\][^/\\]+$/, ''), { recursive: true })
await writeFile(output, JSON.stringify({ checkedAt: new Date().toISOString(), base, pages, resources, findings }, null, 2))
console.log(JSON.stringify({ pages: pages.length, findings, resources: resources.map(({path,status}) => ({path,status})) }, null, 2))
