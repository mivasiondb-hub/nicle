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
  /** False until platforms, pricing, and availability are confirmed; omits those claims from the schema. */
  publiclyListed?: boolean;
  /** Platforms the app is actually available on (defaults to web, iOS and Android). */
  operatingSystem?: string;
  /** Store listing, when there is one. */
  downloadUrl?: string;
};

const byId = Object.fromEntries(products.map((p) => [p.id, p]));

export const productSeo: ProductSeo[] = [
  {
    id: 'nicerwave',
    slug: 'nicerwave',
    path: '/nicerwave',
    name: 'nicerwave',
    title: 'nicerwave | The Social Operating System by Nicle Inc',
    description:
      'nicerwave is the social operating system from Nicle Inc: the first highly customizable public creator platform, built to discover new talent and let every voice be heard, even creators with no followers. Get help from the Miva AI assistant, sell on Nicer Market, grow your NicerWorth and run for President of Trends.',
    keywords:
      'nicerwave, nicer wave, social operating system, creator platform, discover new talent, Nicers, Miva AI, Nicer Market, NicerWorth, President of Trends, Governor of Trends, Nicle social',
    image: '/images/nicerwave-fit.jpeg',
    imageAlt: 'nicerwave social operating system by Nicle Inc',
    heroTitle: 'Every voice. <span class="accent">Heard.</span>',
    heroSubtitle:
      'nicerwave is the highly customizable creator platform where new talent gets discovered, even with zero followers.',
    sectionLabel: 'What is nicerwave?',
    sectionTitle: 'The social operating system',
    body: [
      'nicerwave is the first highly customizable public creator platform. It is built to discover new talent and let every voice be heard, even creators with no followers. On nicerwave, followers are called Nicers.',
      'The Miva AI assistant helps you find your way around and sell on Nicer Market. NicerWorth grows as you take part, and the whole app is designed to encourage positivity and protect mental health. You can customize the look however you want: move icons, rearrange things and change wallpapers.',
    ],
    why: [
      {
        title: 'Every voice heard',
        text: 'Built to discover new talent, so creators can be heard without needing followers.',
      },
      {
        title: 'Miva AI and Nicer Market',
        text: 'Miva helps you get around the app, sell on Nicer Market and find buyers on other platforms.',
      },
      {
        title: 'NicerWorth',
        text: 'A score that grows as you use the app. Reach Icon level and run for President of Trends.',
      },
    ],
    category: 'SocialNetworkingApplication',
    accent: byId.nicerwave.accent,
    features: byId.nicerwave.features,
    related: ['nicerapp', 'nicer-ai-plus', 'social'],
    operatingSystem: 'iOS, Android',
    downloadUrl: 'https://apps.apple.com/app/id6818673106',
  },
  {
    id: 'nicerapp',
    slug: 'nicerapp',
    operatingSystem: 'iOS, Android, Windows, Web',
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.nicerapps.nicle',
    path: '/nicerapp',
    name: 'nicerapp',
    title: 'nicerapp | AI Voice Messaging and Calling by Nicle Inc',
    description:
      'nicerapp is Nicle Inc’s AI-powered messaging and calling app that works even on 2G. Say "Hey Nicer" to send messages, reply to chats, make calls and more, hands-free and even with your phone locked. It understands Nigerian Pidgin, Igbo, Hausa, Yoruba, Zulu and many other languages, and responds only to your voice.',
    keywords:
      'nicerapp, nicer app, Hey Nicer, AI voice messaging, voice messenger, hands-free messaging, works on 2G, Pidgin voice assistant, Igbo, Hausa, Yoruba, Zulu, Nicle messenger',
    image: '/images/nicerapp-fit.jpeg',
    imageAlt: 'nicerapp AI voice messaging by Nicle Inc',
    heroTitle: 'Messaging you can <span class="accent">just talk to</span>',
    heroSubtitle:
      'nicerapp is an AI-powered messaging and calling app. Say "Hey Nicer" and it sends messages, replies to chats and makes calls, even on 2G.',
    sectionLabel: 'What is nicerapp?',
    sectionTitle: 'AI voice messaging for everyone',
    body: [
      'nicerapp is Nicle Inc’s AI-powered messaging and calling app. You don’t have to touch your phone: say "Hey Nicer" to send messages, reply to chats, make calls, check who’s online and play stories, even while your phone is locked.',
      'It works on 2G networks and understands Nigerian Pidgin, Igbo, Hausa, Yoruba, Zulu and many other languages. It learns how you talk and responds only to your voice, so nobody else can use it.',
    ],
    why: [
      {
        title: 'Hands-free',
        text: 'Say "Hey Nicer" to message, call and move around the app without touching your phone.',
      },
      {
        title: 'Works on 2G',
        text: 'Built to keep you connected even on slow networks.',
      },
      {
        title: 'Your language, your voice',
        text: 'Understands Pidgin, Igbo, Hausa, Yoruba, Zulu and more, and responds only to you.',
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
    title: 'nicer ai plus | AI Assistant on the Nicer AI Models by Nicle Inc',
    description:
      'nicer ai plus is Nicle’s own AI assistant, built on the Nicer AI model family: Miva 2.5, Miva 3.5 Flash, Miva 4.5, Divi 1B and HC Ultra 1. Chat, talk by voice, write code, analyze documents and files, create images and music, edit photos, or use it as a life coach, creative partner, mood tracker or dream interpreter, inside nicerapp and nicerwave.',
    keywords:
      'nicer ai plus, Nicer AI, Miva 2.5, Miva 3.5 Flash, Miva 4.5, Divi 1B, HC Ultra 1, AI assistant, AI models, code generation, document analysis, image generation, AI music, life coach AI, Nicle intelligence',
    image: '/images/nicer-ai-plus-fit.jpeg',
    imageAlt: 'nicer ai plus AI assistant by Nicle Inc',
    heroTitle: 'Our own AI, <span class="accent">built to help you</span>',
    heroSubtitle:
      'nicer ai plus is Nicle’s AI assistant, running on our own Nicer AI models and available inside nicerapp and nicerwave.',
    sectionLabel: 'What is Nicer AI?',
    sectionTitle: 'Our own models and our own assistant',
    body: [
      'Nicer AI is a family of AI models built in-house at Nicle: Miva 2.5, Miva 3.5 Flash, Miva 4.5, Divi 1B and HC Ultra 1.',
      'nicer ai plus is the assistant built on them, available inside nicerapp and nicerwave. It can chat, talk by voice, write code, analyze documents and uploaded files, create images and music, edit photos and write documents. It can also be a life coach, creative partner, best friend, mood tracker or dream interpreter.',
    ],
    why: [
      {
        title: 'Our own models',
        text: 'Runs on the Nicer AI family: Miva 2.5, Miva 3.5 Flash, Miva 4.5, Divi 1B and HC Ultra 1.',
      },
      {
        title: 'Inside your apps',
        text: 'Available right inside nicerapp and nicerwave, where you already talk and create.',
      },
      {
        title: 'More than a chatbot',
        text: 'Code, documents, images, music and photo edits, plus a life coach, mood tracker and dream interpreter.',
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
    url: `${siteUrl}${product.path}`,
    image: product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`,
    description: product.description,
    ...(product.publiclyListed === false
      ? {}
      : {
          operatingSystem: product.operatingSystem ?? 'Web, iOS, Android',
          ...(product.downloadUrl ? { downloadUrl: product.downloadUrl } : {}),
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }),
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
    title: 'Social & Creative Platforms | nicerwave and nicer ai plus',
    description:
      'Explore Nicle social and creative services: nicerwave, the social operating system where every voice is heard, and nicer ai plus, our own AI assistant.',
    keywords: 'Nicle social, nicerwave, nicer ai plus, creator platform, social operating system, creative platforms',
    path: '/social',
  },
  intelligence: {
    title: 'Nicer AI | Nicle’s AI Models and the nicer ai plus Assistant',
    description:
      'Nicer AI is Nicle’s own family of AI models (Miva 2.5, Miva 3.5 Flash, Miva 4.5, Divi 1B and HC Ultra 1) and the nicer ai plus assistant built on them: chat, voice, code, documents, images, music and more.',
    keywords: 'Nicer AI, Nicle AI, Miva 2.5, Miva 3.5 Flash, Miva 4.5, Divi 1B, HC Ultra 1, nicer ai plus, AI models, AI assistant',
    path: '/intelligence',
  },
  security: {
    title: 'Security Services | Private AI Voice Messaging with nicerapp',
    description:
      'Nicle security services centered on nicerapp: AI voice messaging that responds only to your voice, with end to end encryption and no backdoors.',
    keywords: 'Nicle security, nicerapp, encrypted messaging service, private chat, no backdoors',
    path: '/security',
  },
};
