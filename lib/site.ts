export const SITE = {
  name: 'Mars',
  legalName: 'MARS DIGITAL MARKETING',
  url: 'https://digitalmarketinginlucknow.in',
  title: 'Digital Marketing Agency in Lucknow | MARS DIGITAL MARKETING',
  description:
    'MARS DIGITAL MARKETING is a results-driven digital marketing agency in Lucknow offering SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, Photography & Video Production, and eCommerce marketing.',
  phone: '+91 70071 89274',
  whatsapp: '917007189274',
  locality: 'Lucknow',
  region: 'Uttar Pradesh',
}

export type ServiceCard = { title: string; desc: string }

export type Service = {
  slug: string
  name: string
  short: string
  h1: string
  subtitle: string
  description: string
  cards: ServiceCard[]
  cta: string
  icon: string
  keywords: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'seo-services',
    name: 'SEO Services',
    short: 'Don’t just rank higher — drive growth.',
    h1: 'Search Engine Optimization – SEO Company in Lucknow',
    subtitle: 'Don’t just rank higher. Drive growth!',
    description:
      'MARS DIGITAL MARKETING is the best SEO company in Lucknow. We combine on-page, off-page, and technical SEO expertise to make your website discoverable and drive targeted organic traffic. With every second seeing 100,000 Google searches – and 75% of users never scrolling past page one, ranking high is critical. Our data-driven SEO strategies help businesses climb search rankings and unlock sustainable growth online.',
    cards: [
      { title: 'On-Page SEO', desc: 'We optimize titles, meta tags, headings, content, and internal links so every page sends the right signals to search engines and answers exactly what your customers are searching for.' },
      { title: 'Off-Page SEO', desc: 'We build authority through high-quality backlinks, digital PR, and citations that tell Google your brand is trusted and worth ranking above the competition.' },
      { title: 'Technical SEO', desc: 'We fix crawlability, site speed, mobile usability, indexing, and structured data so search engines can access and understand your site without friction.' },
      { title: 'GEO/AEO Optimization', desc: 'We optimize your content for AI-powered search and answer engines like ChatGPT, Gemini, and Google’s AI Overviews, so your brand gets discovered where buyers now ask their questions.' },
    ],
    cta: 'Want more organic traffic without depending only on ads? Let us build your search strategy.',
    icon: 'search',
    keywords: ['SEO company in Lucknow', 'SEO services in Lucknow', 'technical SEO', 'GEO AEO optimization', 'on-page SEO', 'off-page SEO'],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    short: 'Capture demand from people already searching.',
    h1: 'Google Ads Agency',
    subtitle: 'Capture high-intent demand at the exact moment of search.',
    description:
      'Google Ads put your business in front of customers at the exact moment they’re searching for what you offer. We build and manage high-intent Search, Shopping, and remarketing campaigns engineered for qualified leads and measurable return on ad spend — not just clicks.',
    cards: [
      { title: 'Search Campaigns', desc: 'We target high-commercial-intent keywords with tightly themed ad groups and compelling copy that turns searches into enquiries.' },
      { title: 'Shopping & Performance Max', desc: 'We set up and optimize product feeds and Performance Max campaigns to drive sales across Search, Shopping, YouTube, and Display.' },
      { title: 'Remarketing & Display', desc: 'We re-engage visitors who didn’t convert with strategic display and remarketing campaigns that keep your brand top of mind.' },
      { title: 'Conversion Tracking & Optimization', desc: 'We implement accurate conversion tracking and continuously optimize bids, keywords, and budgets to lower your cost per lead.' },
    ],
    cta: 'Start getting in front of people who are already looking for your service.',
    icon: 'target',
    keywords: ['Google Ads agency', 'PPC management', 'Google Ads management', 'search ads', 'Performance Max'],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    short: 'Leads and sales from Facebook & Instagram.',
    h1: 'Meta Ads Agency',
    subtitle: 'Full-funnel Facebook & Instagram campaigns that scale profitably.',
    description:
      'Meta Ads work best when creative, targeting, offer, and landing page all pull in the same direction. We build full-funnel Facebook and Instagram campaigns — backed by scroll-stopping creative and UGC — that generate leads, drive sales, and scale profitably.',
    cards: [
      { title: 'Lead Generation Campaigns', desc: 'We design campaigns and lead funnels that bring in qualified enquiries at a cost that makes sense for your business.' },
      { title: 'eCommerce & Sales Campaigns', desc: 'We build conversion-focused campaigns that turn ad spend into trackable, profitable online sales.' },
      { title: 'UGC & Creative Strategy', desc: 'We produce and test user-generated content, testimonials, and product creatives that build trust and improve conversion rates.' },
      { title: 'Retargeting & Scaling', desc: 'We re-engage warm audiences and scale winning campaigns with audience expansion and budget frameworks that protect ROAS.' },
    ],
    cta: 'Need more leads and sales from Instagram and Facebook? We build the campaign and the creative system behind it.',
    icon: 'meta',
    keywords: ['Meta Ads agency', 'Facebook ads management', 'Instagram ads', 'UGC ads', 'ROAS'],
  },
  {
    slug: 'social-media',
    name: 'Social Media Marketing',
    short: 'Make your brand recognizable and easy to remember.',
    h1: 'Social Media Marketing',
    subtitle: 'Make your brand recognizable, trustworthy, and impossible to forget.',
    description:
      'Social media should do more than fill a feed — it should make your brand recognizable, trustworthy, and easy to remember. We create content systems that balance education, proof, promotion, and personality so your audience keeps coming back.',
    cards: [
      { title: 'Content Strategy & Planning', desc: 'We build monthly content calendars rooted in your goals, audience, and brand voice — no more random posting.' },
      { title: 'Reels & Short-Form Video', desc: 'We direct and script Reels and short-form video designed to grow reach and engagement on Instagram and Facebook.' },
      { title: 'Creative & Design', desc: 'We design on-brand templates, carousels, and posts that make your profile look premium and consistent.' },
      { title: 'Community Management', desc: 'We manage comments, messages, and engagement while reporting on the metrics that signal real growth.' },
    ],
    cta: 'Turn your Instagram and Facebook presence into a real growth asset.',
    icon: 'share',
    keywords: ['social media marketing', 'social media management', 'Instagram marketing', 'content strategy'],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    short: 'Websites built to convert, not just to look good.',
    h1: 'Website Development',
    subtitle: 'Fast, mobile-first websites built to convert.',
    description:
      'Your website is your hardest-working salesperson. We design and develop fast, mobile-first, SEO-ready websites that load quickly, build trust, and turn visitors into customers — whether you need a business site, a landing page, or a full eCommerce store.',
    cards: [
      { title: 'Business Websites', desc: 'Modern, responsive websites that present your brand professionally and guide visitors toward action.' },
      { title: 'Landing Pages', desc: 'High-converting landing pages purpose-built for your ad campaigns and offers.' },
      { title: 'eCommerce Stores', desc: 'Scalable online stores with seamless checkout experiences designed to maximize sales.' },
      { title: 'Speed & SEO Optimization', desc: 'We build with clean code, fast load times, and search-friendly structure baked in from day one.' },
    ],
    cta: 'Need a website that actually brings in business? Let’s build one engineered to convert.',
    icon: 'code',
    keywords: ['website development', 'web design', 'landing page development', 'eCommerce website'],
  },
  {
    slug: 'photography-video',
    name: 'Photography and Video Production',
    short: 'Visuals that make your brand impossible to scroll past.',
    h1: 'Photography and Video Production',
    subtitle: 'Visuals that make your brand impossible to scroll past.',
    description:
      'Great content starts with great visuals. We produce professional photography and video — from product shoots to brand films and short-form social content — that elevate your brand and perform across every platform.',
    cards: [
      { title: 'Product Photography', desc: 'Crisp, conversion-ready product images for your website, ads, and online marketplaces.' },
      { title: 'Brand & Lifestyle Shoots', desc: 'Visual stories that capture your brand’s personality and build emotional connection with your audience.' },
      { title: 'Video Production', desc: 'From concept to final cut — brand films, ads, and explainer videos produced end to end.' },
      { title: 'Short-Form & Reels Content', desc: 'Scroll-stopping vertical video crafted for Instagram, Facebook, and YouTube Shorts.' },
    ],
    cta: 'Let’s create visuals that make your brand stand out everywhere it shows up.',
    icon: 'camera',
    keywords: ['product photography', 'video production', 'brand photography', 'reels content'],
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    short: 'Turn your store into a profitable growth engine.',
    h1: 'Ecommerce',
    subtitle: 'Turn your store into a profitable growth engine.',
    description:
      'We help eCommerce brands grow profitably with an integrated approach across SEO, paid ads, creative, and conversion optimization. From store setup to scaling acquisition, we build the systems that increase sales and customer lifetime value.',
    cards: [
      { title: 'Store Setup & Optimization', desc: 'We build and refine your store for a frictionless shopping and checkout experience.' },
      { title: 'eCommerce SEO', desc: 'We optimize product and category pages to capture high-intent organic traffic.' },
      { title: 'Paid Acquisition (Meta & Google)', desc: 'We run profitable Meta and Google campaigns engineered to acquire customers at scale.' },
      { title: 'Conversion Rate Optimization', desc: 'We improve product pages, funnels, and offers to convert more of the traffic you already have.' },
    ],
    cta: 'Ready to scale your store profitably? Let’s build your eCommerce growth system.',
    icon: 'cart',
    keywords: ['eCommerce marketing', 'eCommerce SEO', 'online store growth', 'conversion rate optimization'],
  },
]

export type CaseSection = {
  h: string
  paras?: string[]
  bullets?: string[]
  groups?: { title: string; bullets: string[] }[]
  checks?: string[]
  pEnd?: string
}

export type CaseStudy = {
  slug: string
  client: string
  category: string
  metric: string
  title: string
  cardDesc: string
  accent: string
  sections: CaseSection[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'labotemp',
    client: 'Labotemp',
    category: 'SEO · Google Ads · AI Search',
    metric: '0 → 150+ AI visits in 3 months',
    title: 'Driving B2B Lead Generation Through SEO, Google Ads & AI Search Optimization',
    cardDesc: 'How we grew a US-based B2B laboratory equipment manufacturer’s leads through SEO, Google Ads, and AI search optimization — from 0 to 150+ monthly AI-driven visits in 3 months.',
    accent: 'from-mars-500/30 to-mars-600/5',
    sections: [
      { h: 'Client Overview', paras: ['Labotemp is a leading laboratory equipment manufacturer based in the United States, serving businesses, research facilities, laboratories, and industrial clients with high-quality temperature control and testing equipment. The company partnered with MARS DIGITAL MARKETING to strengthen its online presence, generate qualified B2B leads, and increase visibility across both traditional search engines and emerging AI-powered search platforms.'] },
      { h: 'The Challenge', paras: ['Despite offering industry-leading laboratory equipment, Labotemp faced challenges in attracting consistent organic traffic and generating qualified inquiries through search engines. The company wanted to:'], bullets: ['Increase organic visibility for high-intent laboratory equipment keywords.', 'Generate more qualified B2B leads through Google Search.', 'Improve online authority within the laboratory equipment industry.', 'Gain visibility in emerging AI-powered search platforms such as ChatGPT and other AI assistants.', 'Reduce dependence on a limited number of traffic sources.'] },
      { h: 'Our Strategy', paras: ['To achieve these goals, our team implemented a comprehensive digital growth strategy combining:'], bullets: ['Search Engine Optimization (SEO)', 'Google Ads Management', 'AI Search Optimization (AEO/GEO)', 'Technical Website Optimization', 'Content Optimization', 'Conversion Rate Optimization'], pEnd: 'We optimized product pages, category pages, technical content, metadata, internal linking structures, and website performance while simultaneously improving the site’s visibility for AI-powered search engines.' },
      { h: 'Results Achieved', paras: ['Within just 3 months, Labotemp experienced significant growth in both search visibility and lead generation:'], checks: ['Increased AI-driven traffic from 0 monthly visits to over 150 monthly visits through AI Search Optimization (AEO/GEO).', 'Achieved first-page visibility for numerous high-intent laboratory equipment keywords.', 'Improved organic search performance across product and service pages.', 'Generated qualified B2B inquiries through a combination of SEO and Google Ads campaigns.', 'Increased brand visibility across Google Search, ChatGPT, Bing, and other AI-powered discovery platforms.'] },
      { h: 'Conversion Performance', paras: ['Our optimization efforts not only improved traffic but also enhanced conversion opportunities across the website.', 'The website also recorded successful lead conversions through optimized inquiry funnels, helping Labotemp attract highly relevant business prospects.'] },
      { h: 'Conclusion', paras: ['By combining traditional SEO, Google Ads, and next-generation AI Search Optimization, MARS DIGITAL MARKETING helped Labotemp establish a stronger digital presence and generate measurable business growth. The project demonstrates how B2B manufacturers can leverage both search engines and AI-driven discovery platforms to attract qualified buyers and create a sustainable pipeline of leads.'] },
    ],
  },
  {
    slug: 'tailor-express',
    client: 'Tailor Express',
    category: 'SEO · CRO · Web Design',
    metric: 'Page 4 → Page 1 in 5 months',
    title: 'From Page 4 to Page 1 with SEO, CRO & Website Optimization',
    cardDesc: 'How we took an online tailoring startup from Page 4 to #1 on Google with SEO, CRO, and a complete website redesign in just 5 months.',
    accent: 'from-nebula-500/30 to-nebula-500/5',
    sections: [
      { h: 'Client Overview', paras: ['Tailor Express is an online tailoring service that offers convenient doorstep tailoring solutions for customers seeking professional stitching, alterations, and custom tailoring services. As a growing startup, the company had a strong business model but struggled to gain visibility on Google and attract consistent organic traffic.', 'The team partnered with MARS DIGITAL MARKETING to improve search rankings, increase website conversions, and create a modern user experience that would help turn visitors into customers.'] },
      { h: 'The Challenge', paras: ['When Tailor Express approached us, their website had limited search visibility and was ranking on the fourth page of Google for several important business keywords. As a result, potential customers were unable to discover their services, leading to missed opportunities and slower business growth.', 'Key challenges included:'], bullets: ['Poor rankings for high-intent tailoring keywords.', 'Limited organic traffic and brand visibility.', 'Low website engagement and conversion rates.', 'Outdated website design and user experience.', 'Strong competition from established local tailoring businesses.'] },
      { h: 'Our Strategy', paras: ['To help Tailor Express compete effectively and dominate search results, we implemented a complete digital growth strategy focused on:'], groups: [
        { title: 'Search Engine Optimization (SEO)', bullets: ['Comprehensive keyword research', 'On-page SEO optimization', 'Content improvements', 'Internal linking optimization', 'Technical SEO enhancements', 'Local SEO optimization'] },
        { title: 'Conversion Rate Optimization (CRO)', bullets: ['Improved customer journey', 'Optimized service pages', 'Enhanced call-to-action placement', 'Simplified inquiry and booking process'] },
        { title: 'Website UI/UX Redesign', bullets: ['Modern, professional website design', 'Improved mobile responsiveness', 'Faster page loading speed', 'Better navigation structure', 'Trust-building visual elements'] },
      ] },
      { h: 'Results Achieved', paras: ['Within just 5 months, Tailor Express experienced remarkable growth in both visibility and customer acquisition.'], checks: ['Improved rankings from Page 4 to Page 1 for highly competitive tailoring keywords.', 'Achieved #1 rankings for important search terms including Tailor Services, Online Tailor, Tailor Near Me, and numerous related tailoring and alteration keywords.', 'Significant increase in organic search visibility across target locations.', 'Higher click-through rates from Google Search results.', 'Increased website traffic from customers actively searching for tailoring services.', 'Improved lead generation and customer inquiries.', 'Better conversion rates through strategic CRO implementation.'] },
      { h: 'Website Transformation', paras: ['Beyond SEO, our team completely enhanced the website’s user experience and visual appeal. The redesigned website now offers:'], bullets: ['A modern and professional appearance', 'Improved user engagement', 'Better navigation and accessibility', 'Stronger trust signals', 'Higher conversion potential'], pEnd: 'The new design not only improved the brand’s credibility but also played a key role in converting more visitors into paying customers.' },
      { h: 'Business Impact', paras: ['Through a combination of SEO, UI/UX improvements, and Conversion Rate Optimization, Tailor Express transformed from a relatively unknown startup into a highly visible online tailoring brand. By securing first-page rankings for its most valuable keywords and creating a seamless customer experience, the business significantly increased its online presence, customer inquiries, and overall growth potential.'] },
      { h: 'Conclusion', paras: ['This project demonstrates how the right combination of SEO, website design, and CRO can completely transform a startup’s online performance. In just five months, MARS DIGITAL MARKETING helped Tailor Express move from page four obscurity to first-page dominance, generating more visibility, more traffic, and more customers through a data-driven digital marketing strategy.'] },
    ],
  },
  {
    slug: 'motherland',
    client: 'Motherland',
    category: 'Meta Ads · UGC · eCommerce',
    metric: 'Scaled to ₹3L+/month profitably',
    title: 'Scaling an Organic Honey Brand Through High-Performance Meta Advertising',
    cardDesc: 'How we scaled a premium organic honey brand’s Meta ad spend past ₹3 lakh/month profitably using UGC creative, CRO, and retention marketing.',
    accent: 'from-ion-400/25 to-ion-400/5',
    sections: [
      { h: 'Client Overview', paras: ['Motherland is a premium natural food brand specializing in pure, unprocessed honey sourced from different floral origins across India. The brand offers a wide range of honey varieties, catering to health-conscious consumers looking for authentic and high-quality natural products.', 'While Motherland had an excellent product line and growing market demand, the company struggled to achieve consistent profitability from its Meta advertising campaigns.', 'The brand partnered with MARS DIGITAL MARKETING to improve advertising performance, increase customer acquisition, and scale revenue profitably.'] },
      { h: 'The Challenge', paras: ['Before working with MARS DIGITAL MARKETING, Motherland faced several growth obstacles:'], bullets: ['Inconsistent return on ad spend (ROAS)', 'Rising customer acquisition costs', 'Limited ad creative testing', 'Poor conversion efficiency', 'Difficulty scaling campaigns profitably', 'Low customer retention from paid traffic', 'Underutilized user-generated content (UGC) opportunities'], pEnd: 'Despite having quality products and strong customer satisfaction, the advertising campaigns were not generating the level of returns needed for sustainable growth.' },
      { h: 'Our Strategy', paras: ['To transform campaign performance, we implemented a comprehensive Meta Ads growth strategy focused on profitability, customer retention, and scalable acquisition.'], groups: [
        { title: 'Meta Advertising Optimization', bullets: ['Complete account audit and restructuring', 'Audience segmentation and targeting refinement', 'Campaign consolidation for improved learning', 'Budget optimization and scaling framework', 'Performance-based bid management'] },
        { title: 'UGC Creative Strategy', bullets: ['Customer testimonial videos', 'Product demonstration creatives', 'Lifestyle-focused content', 'Problem-solution ad formats', 'Founder and brand storytelling creatives', 'Social proof-based advertisements'] },
        { title: 'Conversion Optimization', bullets: ['Landing page experience', 'Product presentation', 'Customer journey', 'Purchase flow', 'Call-to-action placement', 'Mobile shopping experience'] },
        { title: 'Retention Marketing', bullets: ['Retargeting campaigns', 'Existing customer promotions', 'Repeat purchase campaigns', 'Lookalike audience expansion', 'Customer nurturing funnels'] },
      ] },
      { h: 'Results Achieved', paras: ['Through continuous optimization and data-driven decision-making, Motherland experienced substantial growth in advertising performance.'], checks: ['Successfully scaled Meta Ads spend to over ₹3,00,000 per month.', 'Achieved significantly higher Return on Ad Spend (ROAS).', 'Increased customer acquisition while maintaining profitability.', 'Improved conversion rates through optimized creatives and landing experiences.', 'Built a scalable advertising system capable of supporting long-term growth.', 'Increased repeat customer purchases through retention-focused campaigns.', 'Reduced wasted ad spend through audience and campaign optimization.', 'Enhanced brand visibility and engagement across Meta platforms.'] },
      { h: 'Creative Performance Success', paras: ['UGC-based advertising became one of the strongest contributors to campaign success. By leveraging authentic customer experiences and relatable product storytelling, Motherland was able to:'], bullets: ['Increase customer trust', 'Improve click-through rates', 'Lower acquisition costs', 'Generate higher purchase intent', 'Increase conversion efficiency'], pEnd: 'The combination of performance marketing and authentic content created a powerful growth engine for the brand.' },
      { h: 'Business Impact', paras: ['Motherland transformed from a brand struggling to generate strong advertising returns into a scalable eCommerce business supported by a profitable Meta advertising ecosystem.', 'With consistent optimization, creative testing, and audience refinement, the brand now operates successful Meta campaigns with monthly advertising budgets exceeding ₹3 lakh while continuing to generate strong returns and repeat customers.'] },
      { h: 'Conclusion', paras: ['This project demonstrates how strategic Meta advertising, UGC content, conversion optimization, and retention marketing can transform an eCommerce brand’s growth trajectory. By focusing on profitability rather than simply increasing spend, MARS DIGITAL MARKETING helped Motherland build a sustainable customer acquisition system that continues to drive revenue growth and brand expansion.'] },
    ],
  },
  {
    slug: 'ixt-minds',
    client: 'IXT Minds',
    category: 'Google Ads · International · CRO',
    metric: 'Higher-quality global leads',
    title: 'Generating High-Quality International Leads Through Strategic Google Ads',
    cardDesc: 'How we generated high-quality international leads for a custom app development company through precision Google Ads targeting and conversion optimization.',
    accent: 'from-nebula-500/25 to-mars-500/10',
    sections: [
      { h: 'Client Overview', paras: ['IXT Minds is a technology solutions company specializing in custom mobile app development, web application development, software solutions, and digital product engineering. The company serves startups, entrepreneurs, and businesses looking to transform ideas into scalable digital products.', 'While IXT Minds had the technical expertise to deliver world-class applications, they faced significant challenges in attracting qualified international clients through Google Ads.', 'The company partnered with MARS DIGITAL MARKETING to improve lead quality, optimize advertising performance, and establish a stronger presence in competitive global markets.'] },
      { h: 'The Challenge', paras: ['Before working with MARS DIGITAL MARKETING, IXT Minds was investing in Google Ads but struggling to reach the right audience internationally.', 'Key challenges included:'], bullets: ['Low-quality leads from irrelevant regions.', 'High advertising costs with inconsistent returns.', 'Difficulty targeting decision-makers and business owners.', 'Poor campaign segmentation.', 'Inefficient keyword targeting.', 'Low conversion rates despite receiving clicks.', 'Strong competition from established global software development agencies.'], pEnd: 'The primary goal was not simply to increase traffic but to attract businesses genuinely interested in app development services and capable of becoming long-term clients.' },
      { h: 'Our Strategy', paras: ['After conducting a detailed audit of the existing advertising campaigns, we developed a comprehensive international lead generation strategy focused on precision targeting and conversion optimization.'], groups: [
        { title: 'Google Ads Account Restructuring', bullets: ['Creating highly targeted campaign structures', 'Separating services based on buyer intent', 'Optimizing geographic targeting', 'Refining audience segmentation', 'Eliminating wasted ad spend'] },
        { title: 'High-Intent Keyword Strategy', bullets: ['Mobile App Development Company', 'Custom App Development Services', 'Android App Development Company', 'iOS App Development Company', 'Hire App Developers', 'Software Development Services'] },
        { title: 'International Audience Targeting', bullets: ['High-value business regions', 'Startup ecosystems', 'Technology-focused markets', 'Countries with strong outsourcing demand'] },
        { title: 'Conversion Rate Optimization', bullets: ['Landing page messaging', 'Lead forms', 'Service page content', 'Call-to-action placement', 'Trust-building elements', 'Mobile user experience'] },
      ] },
      { h: 'Results Achieved', paras: ['Through continuous optimization and strategic audience targeting, IXT Minds achieved substantial improvements in campaign performance.'], checks: ['Improved lead quality from international markets.', 'Reduced wasted advertising spend on irrelevant audiences.', 'Increased qualified inquiries from businesses actively seeking app development services.', 'Improved conversion rates through landing page and campaign optimization.', 'Enhanced visibility in competitive international markets.', 'Generated a consistent pipeline of high-intent leads.', 'Increased opportunities for long-term client acquisition.'] },
      { h: 'Why the Campaign Succeeded', paras: ['The success of this campaign was driven by three key factors:'], bullets: ['Precision international targeting', 'High-intent keyword selection', 'Continuous conversion optimization'], pEnd: 'Rather than competing for every click, we focused on attracting the right clicks from businesses with genuine purchasing intent.' },
      { h: 'Business Impact', paras: ['By focusing on audience quality rather than simply increasing traffic, IXT Minds was able to connect with more relevant prospects and business decision-makers.', 'The optimized Google Ads strategy helped position the company as a trusted technology partner for businesses seeking mobile app and software development services, resulting in stronger lead generation and improved overall marketing efficiency.'] },
      { h: 'Conclusion', paras: ['This project demonstrates how a well-structured Google Ads strategy can transform lead generation for technology companies operating in competitive international markets. Through advanced targeting, campaign optimization, and conversion-focused execution, MARS DIGITAL MARKETING helped IXT Minds attract higher-quality prospects, improve advertising efficiency, and build a scalable international lead generation system.'] },
    ],
  },
]

export const FAQS = [
  { q: 'What services does MARS DIGITAL MARKETING offer?', a: 'MARS DIGITAL MARKETING provides SEO Services, Google Ads Management, Meta Ads (Facebook & Instagram Ads), Social Media Marketing, Website Development, eCommerce Marketing, Photography, Video Production, and Conversion Rate Optimization (CRO) services for businesses of all sizes.' },
  { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. Most businesses start seeing measurable improvements within 3 to 6 months, while highly competitive industries may take longer. The timeline depends on your website’s current condition, competition, and target keywords.' },
  { q: 'Can you manage Meta Ads for eCommerce businesses?', a: 'Yes. We specialize in Facebook and Instagram advertising for eCommerce brands. Our team creates high-converting campaigns, UGC ads, retargeting campaigns, and customer acquisition strategies to increase sales and improve ROAS.' },
  { q: 'How much do your digital marketing services cost?', a: 'Our digital marketing plans start from as low as ₹10,000/month. Pricing depends on the services required, business goals, and project scope. We offer customized packages for startups, small businesses, and growing brands.' },
  { q: 'Do you provide regular reports?', a: 'Yes. We provide weekly progress updates and detailed monthly performance reports covering rankings, traffic, leads, ad performance, and key growth metrics.' },
  { q: 'Will I have a dedicated account manager?', a: 'Yes. Every client is assigned a dedicated digital marketing specialist who serves as a single point of contact. You can connect with them anytime to discuss campaign progress, strategy, implementation, and performance.' },
  { q: 'How do you measure the success of a digital marketing campaign?', a: 'We track key performance indicators (KPIs) such as website traffic, keyword rankings, leads, conversions, return on ad spend (ROAS), customer acquisition cost (CAC), and overall revenue growth.' },
]
