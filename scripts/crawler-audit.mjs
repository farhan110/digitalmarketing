import assert from 'node:assert/strict'

const base = process.argv[2] || 'http://localhost:3101'
const canonical = 'https://digitalmarketinginlucknow.in'
const schemas = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]))
const visible = html => html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ')
async function html(path) {
  const res = await fetch(base + path, { redirect: 'manual' })
  assert.equal(res.status, 200, `${path}: expected direct HTTP 200`)
  assert.equal(res.headers.get('location'), null, `${path}: unexpected redirect`)
  return res.text()
}
const home = await html('/')
const faq = await html('/faq')
const service = await html('/seo-services')
const website = schemas(home).filter(s => s['@type'] === 'WebSite')
assert.equal(website.length, 1)
assert.equal(website[0].name, 'Mars Digital Marketing Lucknow')
assert.match(home, /property="og:site_name" content="Mars Digital Marketing Lucknow"/)
assert.match(home, /rel="icon"[^>]+href="\/favicon.ico"/)
assert.match(visible(home), /Mars Digital Marketing Lucknow/)
assert.match(visible(service), /What does your SEO service in Lucknow include/)
assert.match(faq, /rel="canonical" href="https:\/\/digitalmarketinginlucknow.in\/faq"/)
assert.match(visible(faq), /Digital marketing FAQs/)
assert.match(visible(faq), /How much do your digital marketing services cost/)
assert.ok(!faq.includes('NEXT_REDIRECT'))
const faqSchema = schemas(faq).find(s => s['@type'] === 'FAQPage')
assert.ok(faqSchema.mainEntity.length >= 7)
assert.equal(faqSchema.isPartOf['@id'], `${canonical}/#website`)
assert.ok(!schemas(home).some(s => s['@type'] === 'FAQPage'), 'Repeated general questions marked up on homepage')
const org = schemas(home).find(s => s['@type'] === 'Organization')
assert.equal(org.logo.url, `${canonical}/mars-icon.png`)
assert.ok(!org.address && !org.geo && !org.priceRange)
const svc = schemas(service).find(s => s['@type'] === 'Service')
assert.equal(svc.provider['@id'], org['@id'])
assert.ok(schemas(service).some(s => s['@id'] === svc.mainEntityOfPage['@id']))
const robots = await html('/robots.txt')
assert.match(robots, /User-Agent: \*/i)
assert.match(robots, /Allow: \//i)
assert.match(robots, /Disallow: \/api\//i)
assert.match(robots, /Sitemap: https:\/\/digitalmarketinginlucknow.in\/sitemap.xml/i)
assert.match(await html('/sitemap.xml'), /<loc>https:\/\/digitalmarketinginlucknow.in\/faq<\/loc>/)
for (const [path, mime] of [['/favicon.ico', 'image/'], ['/mars-icon.png', 'image/png'], ['/apple-touch-icon.png', 'image/png'], ['/mars-icon.svg', 'image/svg+xml']]) {
  const res = await fetch(base + path)
  assert.equal(res.status, 200, path)
  assert.ok(res.headers.get('content-type')?.includes(mime), `${path}: incorrect MIME`)
  const bytes = Buffer.from(await res.arrayBuffer())
  if (path.endsWith('.png')) {
    const size = path.includes('apple') ? 180 : 96
    assert.equal(bytes.readUInt32BE(16), size)
    assert.equal(bytes.readUInt32BE(20), size)
  }
}
console.log('Passed: direct FAQ page, server HTML, site name, linked schema, sitemap, robots and favicon assets.')
