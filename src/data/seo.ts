/** Canonical site URL used for SEO, sitemap, and social previews. Update when domain is live. */
export const siteUrl = 'https://nicleinc.com';

export const siteName = 'Nicle Inc';

export const defaultSeo = {
  title: 'Nicle Inc | AI Software, Social Platforms & the Nicer Ecosystem',
  description:
    'Nicle Inc builds next-generation AI models and intelligent software — including worldnicer, nicerapp, Mivasion, nicer ai plus, and Chatnicer — as a subsidiary of All Things Web Technology Inc.',
  image: '/og-default.png',
  imageAlt: 'Nicle Inc — building the future of artificial intelligence and human connection',
  type: 'website' as const,
  twitterCard: 'summary_large_image' as const,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nicle Inc',
  legalName: 'Nicle Inc',
  url: siteUrl,
  logo: `${siteUrl}/nicle-logo.png`,
  foundingDate: '2026-05',
  parentOrganization: {
    '@type': 'Organization',
    name: 'All Things Web Technology Inc.',
    foundingDate: '2019-07-05',
    founder: {
      '@type': 'Person',
      name: 'Mr. Highness HC',
    },
  },
  founder: [
    { '@type': 'Person', name: 'Mr. Highness HC' },
    { '@type': 'Person', name: 'Mr. Justice Friday' },
  ],
  sameAs: [],
  description: defaultSeo.description,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: defaultSeo.description,
  publisher: {
    '@type': 'Organization',
    name: siteName,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/nicle-logo.png`,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/products?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const sitemapPaths = [
  '/',
  '/about',
  '/products',
  '/mivasion',
  '/worldnicer',
  '/nicerapp',
  '/nicer-ai-plus',
  '/chatnicer',
  '/team',
  '/news',
  '/contact',
  '/careers',
  '/social',
  '/intelligence',
  '/security',
];
