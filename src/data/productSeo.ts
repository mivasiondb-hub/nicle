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
    id: 'mivasion',
    slug: 'mivasion',
    path: '/mivasion',
    name: 'Mivasion',
    title: 'Mivasion | AI Image & Video Studio by Nicle Inc',
    description:
      'Mivasion is Nicle’s AI image and video studio for designers, marketers, and storytellers. Generate production quality visuals, cinematic video, style transfer, and studio workflows at machine speed.',
    keywords:
      'Mivasion, AI image generator, AI video studio, generative AI design, style transfer AI, Nicle creative tools, AI art studio',
    image: '/images/mivasion-fit.jpeg',
    imageAlt: 'Mivasion AI image and video studio by Nicle Inc',
    heroTitle: 'AI image and video, built for <span class="accent">real creative work</span>',
    heroSubtitle:
      'Mivasion helps creators ship stunning visuals and cinematic video with generative AI — production quality output without production timelines.',
    sectionLabel: 'What is Mivasion?',
    sectionTitle: 'A creative AI studio inside the Nicer Ecosystem',
    body: [
      'Mivasion is Nicle Inc’s generative studio for image and video. It is built for teams who need speed without sacrificing craft — from campaign visuals to cinematic sequences.',
      'As part of the Nicer Ecosystem, Mivasion connects creative generation with Nicle’s broader AI and social platforms, so ideas can move from prompt to publish with less friction.',
    ],
    why: [
      {
        title: 'Production ready visuals',
        text: 'Generate images and video that hold up in marketing, product, and storytelling workflows.',
      },
      {
        title: 'Style with control',
        text: 'Use style transfer and studio tools to keep brand direction consistent across creative output.',
      },
      {
        title: 'Built for teams',
        text: 'Designed for designers, marketers, and creators who need reliable generative workflows at scale.',
      },
    ],
    category: 'MultimediaApplication',
    accent: byId.mivasion.accent,
    features: byId.mivasion.features,
    related: ['worldnicer', 'nicer-ai-plus', 'chatnicer'],
  },
  {
    id: 'worldnicer',
    slug: 'worldnicer',
    path: '/worldnicer',
    name: 'worldnicer',
    title: 'worldnicer | Privacy First Social Network by Nicle Inc',
    description:
      'worldnicer is a positivity focused, privacy first social network from Nicle Inc. Microblogging, live conversations, and community tools built for kindness, discovery, and ownership of your social graph.',
    keywords:
      'worldnicer, world nicer, privacy first social network, positive social media, microblogging app, Nicle Inc social, kinder social network',
    image: '/og-worldnicer.jpeg',
    imageAlt: 'worldnicer — positivity focused social network by Nicle Inc',
    heroTitle: 'A social network built for <span class="accent">positivity &amp; privacy</span>',
    heroSubtitle:
      'worldnicer blends short form microblogging with real time conversation — designed for kindness, discovery, and true ownership of your social graph.',
    sectionLabel: 'What is worldnicer?',
    sectionTitle: 'Privacy first. Positivity focused. Built by Nicle.',
    body: [
      'worldnicer is Nicle Inc’s social platform for people who want community without compromise. Share short form updates, join live conversations, and grow communities where privacy and kindness are built in — not bolted on.',
      'As part of the Nicer Ecosystem, worldnicer connects creators and communities across a stack designed for trust, transparency, and human connection.',
    ],
    why: [
      {
        title: 'Privacy by design',
        text: 'Own your social graph. Clear controls. No dark patterns around your data.',
      },
      {
        title: 'Positivity first',
        text: 'Community tools and culture shaped for kindness, discovery, and real conversation.',
      },
      {
        title: 'Part of Nicle',
        text: 'Connected to the Nicer Ecosystem — messaging, AI, and creative tools under one vision.',
      },
    ],
    category: 'SocialNetworkingApplication',
    accent: byId.worldnicer.accent,
    features: byId.worldnicer.features,
    related: ['chatnicer', 'nicerapp', 'mivasion'],
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
    related: ['worldnicer', 'security', 'nicer-ai-plus'],
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
    related: ['mivasion', 'intelligence', 'nicerapp'],
  },
  {
    id: 'chatnicer',
    slug: 'chatnicer',
    path: '/chatnicer',
    name: 'Chatnicer',
    title: 'Chatnicer | Photos, Reels & Stories by Nicle Inc',
    description:
      'Chatnicer is Nicle’s social canvas for photos, Reels, Stories, creator discovery, and location aware feeds. Share moments and follow creators shaped by your interests.',
    keywords:
      'Chatnicer, chat nicer, photo sharing app, Reels app, Stories social, creator discovery, Nicle social media, short video platform',
    image: '/images/chatnicer-fit.webp',
    imageAlt: 'Chatnicer photos Reels and Stories by Nicle Inc',
    heroTitle: 'Share moments through <span class="accent">photos, Reels &amp; Stories</span>',
    heroSubtitle:
      'Chatnicer is the Nicle canvas for visual sharing — follow creators, message friends, and discover content shaped by interests and location.',
    sectionLabel: 'What is Chatnicer?',
    sectionTitle: 'A richer way to share everyday life',
    body: [
      'Chatnicer brings photos, short form video, and temporary Stories into one social experience. It is built for creators and communities who want discovery without losing the joy of real moments.',
      'Inside the Nicer Ecosystem, Chatnicer complements worldnicer and Nicle’s creative tools — helping people publish, follow, and connect through visual storytelling.',
    ],
    why: [
      {
        title: 'Visual first sharing',
        text: 'Photos, Reels, and Stories designed for fast creation and natural discovery.',
      },
      {
        title: 'Creator friendly',
        text: 'Find and follow creators with feeds tuned to interests and location.',
      },
      {
        title: 'Connected ecosystem',
        text: 'Part of Nicle’s social stack alongside worldnicer and creative AI tools.',
      },
    ],
    category: 'SocialNetworkingApplication',
    accent: byId.chatnicer.accent,
    features: byId.chatnicer.features,
    related: ['worldnicer', 'mivasion', 'social'],
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
    title: 'Social & Creative Platforms | worldnicer, Mivasion, Chatnicer',
    description:
      'Explore Nicle social and creative services: worldnicer for privacy first communities, Mivasion AI studio, and Chatnicer for photos, Reels, and Stories.',
    keywords: 'Nicle social, worldnicer, Mivasion, Chatnicer, creative platforms, social network services',
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
