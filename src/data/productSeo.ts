import { products } from './site';
import { siteUrl } from './seo';

export type ProductSeo = {
  id: string;
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  keywords: string;
  image: string;
  imageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  sectionLabel: string;
  sectionTitle: string;
  body: string[];
  why: { title: string; text: string }[];
  category: string;
  accent: string;
  features: string[];
  related: string[];
};

const byId = Object.fromEntries(products.map((p) => [p.id, p]));

export const productSeo: ProductSeo[] = [
  {
    id: 'nicerwave',
    slug: 'nicerwave',
    path: '/nicerwave',
    name: 'NicerWave',
    title: 'NicerWave | Real Friends, Real Moments & Kinder Conversations',
    description:
      'NicerWave is the social app for real friends, real moments, and kinder conversations. Share swipeable photo albums, 24-hour stories, short-form Vins, encrypted messages, group calls, and create with Nicer AI Plus. Built by Nicle Inc.',
    keywords:
      'NicerWave, nicerwave app, social app, real friends, Vins short videos, kinder conversations, Nicer AI Plus, Nicle social network',
    image: '/images/nicerwave.png',
    imageAlt: 'NicerWave social network by Nicle Inc',
    heroTitle: 'Real friends. <span class="accent">Real moments.</span>',
    heroSubtitle:
      'Share what is happening, keep up with the people who matter, and talk the way friends do — in one app built for kinder conversations.',
    sectionLabel: 'What is NicerWave?',
    sectionTitle: 'A fresh, kinder way to connect with the people you care about',
    body: [
      'NicerWave is Nicle Inc’s social platform for real friends and real moments. Keep up with the people who matter through swipeable photo albums, 24-hour disappearing Stories, and short-form Vins videos.',
      'Enjoy built-in messages, group voice and video calls, creator gifts with NicerWallet, and create directly with Nicer AI Plus right in your chats. Built with safety and kindness at its core — no sold data, clear rules, and fair moderation.',
    ],
    why: [
      {
        title: 'Friends first',
        text: 'Your feed starts with the people you follow. No manipulative algorithms hiding the friends you care about.',
      },
      {
        title: 'Kindness built in',
        text: 'Clear community guidelines, pre-feed content screening, safer links checking, and two-step PIN security.',
      },
      {
        title: 'Vins & Rich Media',
        text: 'Record, trim, and share short videos with sounds, duets, captions, and insightful analytics for creators.',
      },
      {
        title: 'Nicer AI Plus built-in',
        text: 'An assistant right inside your chats for answers, writing help, translations, image editing, and document generation.',
      },
    ],
    category: 'SocialNetworkingApplication',
    accent: byId.nicerwave.accent,
    features: byId.nicerwave.features,
    related: ['nicerapp', 'nicer-ai-plus'],
  },
  {
    id: 'nicerapp',
    slug: 'nicerapp',
    path: '/nicerapp',
    name: 'nicerapp',
    title: 'nicerapp | End to End Encrypted Messaging by Nicle Inc',
    description:
      'nicerapp is Nicle Inc’s secure private messenger with true end to end encryption, no backdoors, transparent security, and private groups. Learn how nicerapp keeps conversations owned by people — not platforms.',
    keywords:
      'nicerapp, nicer app, encrypted messaging app, end to end encryption messenger, private messenger, no backdoors chat, secure messaging, private groups chat, Nicle privacy messenger',
    image: '/images/nicerapp-fit.jpeg',
    imageAlt: 'nicerapp secure private messaging by Nicle Inc',
    heroTitle: 'Messaging with <span class="accent">zero compromise</span>',
    heroSubtitle:
      'nicerapp delivers instant messaging with true end to end encryption, transparent security, and no backdoors — built for people who refuse to trade privacy for convenience.',
    sectionLabel: 'What is nicerapp?',
    sectionTitle: 'Private messaging you can actually trust',
    body: [
      'nicerapp is Nicle Inc’s privacy first messenger. Conversations stay sealed between people, security is transparent, and ownership of messages remains with users — not hidden server policies.',
      'Whether you chat one to one or in private groups, nicerapp is engineered for clarity, speed, and security without dark access paths.',
    ],
    why: [
      {
        title: 'End to end encryption',
        text: 'Messages stay sealed between people. Servers cannot read your conversations.',
      },
      {
        title: 'No backdoors',
        text: 'A transparent system with no hidden access paths — privacy is not a marketing line.',
      },
      {
        title: 'True ownership',
        text: 'Users keep ownership of conversations from the first message to long term archives.',
      },
    ],
    category: 'CommunicationApplication',
    accent: byId.nicerapp.accent,
    features: byId.nicerapp.features,
    related: ['nicerwave', 'security', 'nicer-ai-plus'],
  },
  {
    id: 'niceraiplus',
    slug: 'nicer-ai-plus',
    path: '/nicer-ai-plus',
    name: 'nicer ai plus',
    title: 'nicer ai plus | Advanced AI Assistant by Nicle Inc',
    description:
      'nicer ai plus is Nicle’s advanced AI assistant for chat, voice, code generation, documents, and image creation. Type or speak — get human like fluency with practical results.',
    keywords:
      'nicer ai plus, nicerai plus, AI assistant, code generation AI, document AI, image generation AI, conversational AI, Nicle intelligence',
    image: '/images/nicer-ai-plus-fit.jpeg',
    imageAlt: 'nicer ai plus advanced AI assistant by Nicle Inc',
    heroTitle: 'Intelligence that <span class="accent">thinks with you</span>',
    heroSubtitle:
      'nicer ai plus is an advanced conversational assistant for code, documents, images, and fluent chat — available through text or voice.',
    sectionLabel: 'What is nicer ai plus?',
    sectionTitle: 'An AI partner for building, writing, and creating',
    body: [
      'nicer ai plus is Nicle Inc’s advanced assistant platform. It helps people write code, summarize and create documents, generate images, and converse with human like fluency.',
      'Built in-house as part of Nicle’s independent AI stack, nicer ai plus is designed for practical work — not demos alone — across creators, developers, and teams.',
    ],
    why: [
      {
        title: 'Multimodal by default',
        text: 'Move between chat, voice, code, documents, and images in one intelligent workflow.',
      },
      {
        title: 'Built for real tasks',
        text: 'From debugging to drafting to visual generation — focused on outcomes people ship.',
      },
      {
        title: 'Nicle owned technology',
        text: 'Developed as part of Nicle’s independent AI approach across the Nicer Ecosystem.',
      },
    ],
    category: 'BusinessApplication',
    accent: byId.niceraiplus.accent,
    features: byId.niceraiplus.features,
    related: ['nicerwave', 'intelligence', 'nicerapp'],
  },
];

export function getProductSeo(idOrSlug: string) {
  return productSeo.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export function buildProductSchema(product: ProductSeo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: product.category,
    operatingSystem: 'Web, iOS, Android',
    url: `${siteUrl}${product.path}`,
    image: product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`,
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    brand: {
      '@type': 'Brand',
      name: 'Nicle Inc',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nicle Inc',
      url: siteUrl,
    },
    featureList: product.features.join(', '),
  };
}

export function buildProductFaqSchema(product: ProductSeo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${product.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: product.description,
        },
      },
      {
        '@type': 'Question',
        name: `Who makes ${product.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${product.name} is built by Nicle Inc, a subsidiary of All Things Web Technology Inc., as part of the Nicer Ecosystem.`,
        },
      },
      {
        '@type': 'Question',
        name: `What can I do with ${product.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${product.name} includes: ${product.features.join(', ')}.`,
        },
      },
    ],
  };
}

export const productItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Nicle Inc Products',
  itemListElement: productSeo.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${siteUrl}${product.path}`,
    name: product.name,
    description: product.description,
  })),
};

export const serviceHubSeo = {
  social: {
    title: 'Social & Creative Platforms | NicerWave by Nicle Inc',
    description:
      'Explore NicerWave — built for real friends, real moments, and kinder conversations. Posts, photo albums, 24-hour stories, Vins, encrypted calls, and Nicer AI Plus.',
    keywords: 'NicerWave, Nicle social, social networking, kinder social network, Vins short videos',
    path: '/social',
  },
  intelligence: {
    title: 'AI Intelligence Services | nicer ai plus by Nicle Inc',
    description:
      'Nicle intelligence services powered by nicer ai plus — conversational AI, code generation, documents, and image creation for individuals and teams.',
    keywords: 'Nicle AI, nicer ai plus, AI services, code AI, document AI, intelligence platform',
    path: '/intelligence',
  },
  security: {
    title: 'Security Services | Encrypted Messaging with nicerapp',
    description:
      'Nicle security services centered on nicerapp — end to end encryption, no backdoors, transparent security, and private groups for trusted communication.',
    keywords: 'Nicle security, nicerapp, encrypted messaging service, private chat, no backdoors',
    path: '/security',
  },
};
