export const SITE = {
  name: 'Mars',
  url: 'https://digitalmarketinginlucknow.in',
  title: 'Digital Marketing Agency in Lucknow | Mars',
  description:
    'Mars is a digital marketing company in Lucknow offering SEO services, Meta Ads, Google Ads, social media management, content marketing, email marketing, and AI marketing automation.',
  phone: '+91-00000-00000',
  email: 'hello@digitalmarketinginlucknow.in',
  locality: 'Lucknow',
  region: 'Uttar Pradesh',
}

export type Service = {
  slug: string
  name: string
  short: string
  tagline: string
  description: string
  features: string[]
  cta: string
  icon: string
  keywords: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'seo-services',
    name: 'SEO Services',
    short: 'Rank for searches that actually convert.',
    tagline: 'SEO Services in Lucknow',
    description:
      'Our SEO work is built for people who want to rank for the right searches, not just collect traffic that never converts. We start with keyword research, search intent mapping, on-page optimization, content planning, internal linking, and technical cleanup. Then we refine based on analytics and search performance.',
    features: [
      'Keyword research and competitor analysis',
      'On-page SEO and content optimization',
      'Technical SEO audits',
      'Local SEO for Lucknow businesses',
      'Blog strategy and topical authority',
      'Google Business Profile optimization',
    ],
    cta: 'Want more organic traffic without depending only on ads? Let us build your search strategy.',
    icon: 'search',
    keywords: ['SEO services in Lucknow', 'local SEO Lucknow', 'technical SEO audit', 'Google Business Profile optimization'],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    short: 'Leads from Instagram & Facebook, with purpose.',
    tagline: 'Meta Ads Agency',
    description:
      'Meta Ads work best when the creative, targeting, offer, and landing page all support each other. We build campaigns for awareness, traffic, lead generation, and retargeting so your budget is used with purpose.',
    features: [
      'Audience research and funnel planning',
      'Creative concepts and ad copy',
      'Lead generation and retargeting',
      'Campaign optimization and testing',
      'Reporting with performance insights',
    ],
    cta: 'Need more leads from Instagram and Facebook? We can build the campaign and the creative system behind it.',
    icon: 'meta',
    keywords: ['Meta Ads agency', 'Facebook ads management Lucknow', 'Instagram lead generation'],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    short: 'Capture demand from people already searching.',
    tagline: 'Google Ads Management',
    description:
      'Google Ads are ideal when people are already searching for what you offer. We create search campaigns that capture demand, support remarketing, and send traffic to landing pages built for action.',
    features: [
      'Search campaign setup',
      'Keyword and negative keyword strategy',
      'Conversion tracking',
      'Landing page recommendations',
      'Budget optimization and search term analysis',
    ],
    cta: 'Start getting in front of people who are already looking for your service.',
    icon: 'target',
    keywords: ['Google Ads management', 'PPC agency Lucknow', 'search ads management'],
  },
  {
    slug: 'social-media',
    name: 'Social Media Management',
    short: 'Make your brand recognizable and easy to remember.',
    tagline: 'Social Media Marketing',
    description:
      'Social media should do more than fill a feed. It should make your brand recognizable, trustworthy, and easy to remember. We create content plans that balance education, proof, promotion, and personality.',
    features: [
      'Monthly content planning',
      'Reels and short-form video direction',
      'Caption writing and hashtag strategy',
      'Creative templates and brand consistency',
      'Community management and reporting',
    ],
    cta: 'Turn your Instagram and Facebook presence into a real growth asset.',
    icon: 'share',
    keywords: ['social media marketing', 'social media management Lucknow', 'Instagram marketing'],
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing',
    short: 'Content that attracts, explains, and converts.',
    tagline: 'Content Marketing',
    description:
      'Good content does three things: it attracts the right audience, explains your value clearly, and helps people decide faster. We write content that supports SEO, social media, email, and sales pages.',
    features: [
      'Website copywriting',
      'Blog outlines and articles',
      'Landing page messaging',
      'Campaign copy and ad hooks',
      'Lead magnet and newsletter content',
    ],
    cta: 'Make your brand easier to understand, easier to trust, and easier to buy from.',
    icon: 'pen',
    keywords: ['content marketing', 'content writing services Lucknow', 'blog strategy'],
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    short: 'Convert more of the traffic you already earned.',
    tagline: 'Email Marketing & Automation',
    description:
      'Email remains one of the strongest channels for lead nurturing and retention. We create email journeys that welcome new subscribers, re-engage old leads, promote offers, and keep your brand top of mind.',
    features: [
      'Welcome sequences',
      'Newsletter strategy',
      'Promotional campaigns',
      'Lead nurturing automations',
      'Segmentation and reporting',
    ],
    cta: 'Convert more of the traffic you already earned.',
    icon: 'mail',
    keywords: ['email marketing', 'email automation agency', 'lead nurturing'],
  },
  {
    slug: 'ai-marketing',
    name: 'AI Marketing Automation',
    short: 'Faster, smarter marketing — human-led.',
    tagline: 'AI Marketing Automation',
    description:
      'AI should make marketing faster and smarter, not generic. We use AI tools to support research, planning, content drafting, campaign ideas, and workflow automation while keeping strategy and quality human-led.',
    features: [
      'Content ideation and research support',
      'Prompt workflows for faster execution',
      'Reporting and automation helpers',
      'Customer journey optimization',
    ],
    cta: 'Use AI to save time, improve consistency, and scale smarter.',
    icon: 'bot',
    keywords: ['AI marketing automation', 'AI marketing agency', 'marketing automation Lucknow'],
  },
]
