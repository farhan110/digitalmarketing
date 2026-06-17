# Mars — Digital Marketing Agency Website (v3)

Futuristic, animated, SEO-optimized website for digitalmarketinginlucknow.in.
Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy
Push to GitHub and import on Vercel (zero config), or `npm run build && npm start` on any Node host.

## Pages (16 routes)
Home, About, Services, SEO Services, Meta Ads, Google Ads, Social Media,
Content Marketing, Email Marketing, AI Marketing, Case Studies, Portfolio,
Blog, FAQ, Contact, plus auto-generated sitemap.xml and robots.txt.

## SEO built in
- Unique title + meta description + canonical per page (Lucknow keyword set)
- JSON-LD: ProfessionalService (sitewide), FAQPage (home + FAQ)
- Open Graph + Twitter cards, sitemap.ts, robots.ts
- Semantic H1/H2 structure following the content deck
- Self-hosted fonts (no external font requests = faster LCP)

## Where to edit things
- `lib/site.ts` — phone, email, all service content (one file drives all 7 service pages)
- `app/page.tsx` — home page sections and FAQ
- `components/` — Navbar, Footer, planet animation, starfield, forms
- `app/api/contact/route.ts` — contact form handler (Resend email snippet included, just add API key)

## To-do before launch
1. Set real phone number in `lib/site.ts`
2. Replace portfolio placeholders with Instagram screenshots (`app/portfolio/page.tsx`)
3. Add client logos (`app/portfolio/page.tsx`)
4. Hook up the contact form email (see `app/api/contact/route.ts`)
