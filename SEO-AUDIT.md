# MARS DIGITAL MARKETING — SEO and GEO audit

Audited 4 October 2026 (India time). Website: https://digitalmarketinginlucknow.in. Repository: https://github.com/farhan110/digitalmarketing.

## Scope and status

The audit covers the 16 canonical pages: homepage, About, Services, Contact, Our Work, seven service pages, and four case studies. It includes rendered metadata, headings, structured data, crawl files, domain routing, and code review. A production build and a local crawl verified the prepared changes. The code changes require GitHub submission and deployment before they affect the live site.

The earlier Hostinger/Vercel domain conflict has been corrected. During the audit, some network DNS caches still served the old WordPress site. Those responses were excluded from the Vercel metadata findings. The Vercel-hosted pages were audited through the working www address before its redirect was configured.

## Findings and corrections

| Priority | Finding | Evidence | Action/status |
| --- | --- | --- | --- |
| High | www and non-www served the same pages without a preferred-host redirect | Both returned HTTP 200 before the change | Live: www now returns HTTP 308 to the same path on the main domain |
| High | Core content depended on animation JavaScript for visibility | `.reveal` defaulted to opacity 0 across headings and paragraphs | Prepared: visible by default; animation only after hydration, with a timeout fallback |
| Medium | Brand name repeated in page titles | Live About, Contact, and Our Work titles repeated MARS DIGITAL MARKETING | Prepared: one shared metadata helper with a single brand suffix |
| Medium | Inner-page Open Graph URLs referred to the homepage, and Twitter titles were inherited | Live crawl found mismatches on all 15 inner pages | Prepared: each page has its own canonical URL, sharing title, description, and image |
| Medium | Most service headings lacked the primary location | Six of seven service H1s did not name Lucknow | Prepared: clear Lucknow service headings, unique titles and descriptions |
| Medium | Service pages had limited direct answers to buying questions | Existing pages described deliverables but had no service-specific FAQ sections | Prepared: three visible questions and answers per service, with matching FAQ structured data |
| Medium | Breadcrumb navigation and markup were absent from service and case-study pages | Code review and live schema inspection | Prepared: visible breadcrumb trails and BreadcrumbList on all seven services and four case studies |
| Medium | SEO copy used unsupported superlatives and search statistics | SEO page claimed “best” and included uncited 100,000-search/75% figures | Prepared: replace with factual descriptions of the offered work |
| Medium | Organization coordinates used the centre of Lucknow rather than a verified business location | Hard-coded geo 26.8467, 80.9462; no confirmed business address | Prepared: remove unverified coordinates; retain existing city-level information |
| Low | Sitemap modification dates represented rebuild time rather than actual content edits | `new Date()` used for every URL | Prepared: omit dates until reliable content modification dates are available |
| Low | Statistics initially rendered as zero without JavaScript | Counter component initial state was zero | Prepared: server-render the configured values; animate after hydration |
| Low | Sharing cards lacked a designed image | No Open Graph image asset in the repository | Prepared: generated 1200 × 630 brand sharing image |

## What already works

- The 16 Vercel content pages return HTTP 200 and each has one H1.
- Sitemap and robots.txt return HTTP 200; the sitemap lists the canonical content routes.
- Canonical tags already identify the main domain.
- A deliberately nonexistent URL returns HTTP 404.
- Homepage, service, business, website, and case-study structured data are present.
- Google verification and GA4 configuration exist in the code. Their account ownership, tracking accuracy, and reporting have not been verified.
- Service links and case studies are visible in the rendered HTML.

## Service keyword and content map

These are relevance-based targets, not measured search-volume or ranking estimates.

| Page | Primary focus | Supporting topics |
| --- | --- | --- |
| `/` | digital marketing agency in Lucknow | marketing services, lead generation, business growth |
| `/seo-services` | SEO company / SEO services in Lucknow | technical SEO, local SEO, on-page SEO, GEO/AEO |
| `/google-ads` | Google Ads agency in Lucknow | PPC management, search campaigns, conversion tracking |
| `/meta-ads` | Meta Ads agency in Lucknow | Facebook ads, Instagram ads, lead generation, retargeting |
| `/social-media` | social media marketing in Lucknow | content strategy, Reels, community management |
| `/website-development` | website development in Lucknow | business websites, landing pages, eCommerce development |
| `/photography-video` | photography and video production in Lucknow | product shoots, brand photography, Reels production |
| `/ecommerce` | eCommerce marketing agency in Lucknow | product SEO, paid acquisition, conversion optimization |

## GEO approach

GEO here means improving discoverability and clarity for generative search and answer systems, alongside local search relevance. The first pass improves accessible text, concise service answers, consistent identity, entity references in structured data, navigation, and metadata.

Google states that normal SEO foundations apply to AI Overviews and AI Mode; special AI text files or special schema are not required. See [Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features). FAQs are useful content; this agency should not expect Google's restricted FAQ rich-result feature merely because FAQ markup is present.

Existing case-study results were retained, but their accuracy and client permission have not been independently verified. Strengthen them with authentic dated evidence, methodology, before/after measurements, and approved client references. Add author or reviewer details only when verified. Avoid fabricated reviews, locations, social profiles, awards, rankings, or guaranteed AI citations.

## Next steps requiring account data or business evidence

1. Sign in to the existing Search Console property. Review Pages, Performance, Sitemaps, Manual Actions, and selected URL Inspection reports; do not infer indexing from an empty public search query.
2. Check that the canonical sitemap is submitted and successfully processed. After deployment, inspect the homepage and priority services, then request recrawling where appropriate.
3. Record the previous 28 days of clicks, impressions, relevant queries, landing pages and enquiries as the baseline. Review changes after recrawling and over subsequent weeks; rankings or AI citations are not guaranteed.
4. Verify business address/service-area model, hours, telephone, and official profiles before expanding local business markup. No Google Business Profile currently exists, according to the owner.
5. Collect original project visuals, team information, case-study evidence, and client-approved testimonials. Improve pages using those assets rather than creating repetitive city pages or a generic blog feed.
6. Measure mobile Core Web Vitals and PageSpeed before changing animation or font strategy. No performance score or field-data pass is claimed by this audit.
7. Confirm enquiry delivery and GA4 lead events. No test enquiry was sent; the contact handler forwards user data to FormSubmit and may require account activation.
8. Separately schedule the framework maintenance update: the repository pins Next.js 14.2.5 and the package registry flags it as vulnerable. This SEO pass preserves dependencies to avoid combining a framework migration with content changes.

## Validation

- Production build: passed, including TypeScript checking and route generation.
- Local crawl: all 16 canonical pages HTTP 200; one H1 each; no missing title/description, duplicate brand title, canonical/Open Graph mismatch, or Twitter title mismatch.
- robots.txt and sitemap.xml: HTTP 200; nonexistent route: HTTP 404.
- Sharing image: HTTP 200.
- Live www service URL: HTTP 308 with the same path preserved on the main domain.
- Source review: content remains visible in initial HTML/CSS; service FAQs and structured data use the same answer source.

The crawl results are saved locally under `.seo-audit/`. Run `node scripts/seo-audit.mjs https://digitalmarketinginlucknow.in .seo-audit/after-deployment.json` after publishing. This lightweight audit does not replace Search Console, performance measurement, or structured-data validator checks.

## References

- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Next.js metadata documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
