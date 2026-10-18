export type LeadershipPerson = {
  slug: string;
  initials: string;
  name: string;
  fullName?: string;
  role: string;
  headline?: string;
  shortBio?: string;
  bio: string[];
  tags: string[];
  featured?: boolean;
  wide?: boolean;
  photo?: string;
  gradient: string;
  gender?: 'Male' | 'Female' | 'Non-Binary';
  birthDate?: string;
  birthPlace?: string;
  nationality?: string;
  occupations?: string[];
  knowsAbout?: string[];
  sameAs?: string[];
  keyFacts?: { label: string; value: string }[];
  responsibilities?: string[];
  achievements?: string[];
  personalInfo?: {
    fullName: string;
    dateOfBirth: string;
    role: string;
    expertise: string;
  };
  companies?: {
    name: string;
    title: string;
    founded: string;
    detail: string;
  }[];
  platforms?: string[];
  cityNote?: string;
  cityNetwork?: string;
  characters?: string[];
  music?: string[];
  film?: string[];
  legacy?: string;
};

export const leadership: LeadershipPerson[] = [
  {
    slug: 'highness-hc',
    initials: 'HC',
    name: 'Mr. Highness HC',
    fullName: 'Highness Chinedu Hc',
    role: 'Founder & Chief Executive Officer · All Things Web Technology Inc. & Nicle Inc.',
    headline: 'Pioneering AI Architect, Technology Entrepreneur, and Founder of the Nicer Ecosystem',
    shortBio:
      'Founder and CEO of All Things Web Technology Inc. (2019) and Nicle Inc. (2026). Visionary full-stack developer who began coding at 14, creating next-generation AI platforms, The Nicer City virtual metropolis, and the Nicer Ecosystem.',
    bio: [
      'Mr. Highness Chinedu Hc is a visionary entrepreneur, software engineer, and creative artist who has revolutionized the intersection of technology and entertainment. Born on July 5, 1999, he has established himself as a pioneering force in the digital landscape through innovative platforms and creative ventures.',
      'As a multi-talented individual, Chinedu seamlessly blends his technical expertise in software development and web engineering with his artistic passion in music, film, and entertainment. This unique combination has enabled him to create groundbreaking platforms that merge cutting-edge technology with human creativity and connection.',
      'His entrepreneurial journey began with the founding of All Things Web Technology Inc. on July 5, 2019, marking the start of a technological empire that would go on to create some of the most innovative AI-powered platforms and digital experiences in the industry.',
      'In May 2026, he co-founded Nicle Inc. alongside Mr. Justice Friday to focus exclusively on proprietary AI models, encrypted communications, and intelligent social platforms under the Nicer Ecosystem.',
    ],
    tags: ['Entrepreneur', 'Software engineer', 'Music & film', 'AI innovation', 'Founder & CEO'],
    featured: true,
    photo: '/images/highness-hc.jpeg?v=2',
    gradient: 'linear-gradient(145deg, #ED3542, #7c5cfc 60%, #5b7cfa)',
    gender: 'Male',
    birthDate: '1999-07-05',
    birthPlace: 'Nigeria',
    nationality: 'Nigerian',
    occupations: [
      'Chief Executive Officer',
      'Software Engineer',
      'Artificial Intelligence Architect',
      'Music Producer & Songwriter',
      'Film Director',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Full-Stack Software Architecture',
      'Distributed Systems',
      'Generative AI Models',
      'Virtual World Simulation',
      'Media & Entertainment Production',
    ],
    sameAs: [
      'https://www.allthingswebtechnology.com',
      'https://nicleinc.com',
      'https://worldnicer.com',
    ],
    keyFacts: [
      { label: 'Full Name', value: 'Highness Chinedu Hc' },
      { label: 'Date of Birth', value: 'July 5, 1999' },
      { label: 'Known For', value: 'Founding Nicle Inc, All Things Web Technology Inc, The Nicer City, WorldNicer' },
      { label: 'Current Role', value: 'Founder & CEO (Nicle Inc & All Things Web Technology Inc)' },
      { label: 'Coding Since', value: 'Age 14 (Self-taught full-stack engineer)' },
      { label: 'Headquarters', value: 'Port Harcourt, Nigeria & Ontario, Canada' },
      { label: 'Parent Enterprise', value: 'All Things Web Technology Inc. (Founded July 5, 2019)' },
    ],
    companies: [
      {
        name: 'All Things Web Technology Inc.',
        title: 'Founder & CEO',
        founded: 'July 5, 2019',
        detail: 'Leading technology parent company specializing in web development, AI solutions, distributed infrastructure, and digital innovation.',
      },
      {
        name: 'Nicle Inc.',
        title: 'Founder & CEO',
        founded: 'May 2026',
        detail: 'Wholly owned AI subsidiary building proprietary neural models, encrypted messaging, and social computing platforms for the Nicer Ecosystem.',
      },
      {
        name: 'Hc Music',
        title: 'Founder & Executive Producer',
        founded: '2019',
        detail: 'Music record label division focusing on artist development, songwriting, sound engineering, and innovative music distribution.',
      },
      {
        name: 'Hc Studios Picture',
        title: 'Founder & Director',
        founded: '2019',
        detail: 'Film and visual media production company creating cinematic narratives and pioneering digital entertainment experiences.',
      },
    ],
    platforms: [
      'WorldNicer',
      'ChatNicer',
      'Mivasion',
      'PlantSeer',
      'Lyrics AI',
      'Nicer Doctor',
      'Nicer AI Plus',
      'MeetNicer',
      'LoverNice',
    ],
    cityNote:
      'In a groundbreaking achievement, Chinedu created The Nicer City — a comprehensive digital metropolis where AI characters and autonomous beings live, interact, and thrive. This innovative virtual world represents the frontier of digital communities, synthetic life simulation, and interactive AI.',
    cityNetwork:
      'Building upon the success of The Nicer City, Chinedu established the Nicer City Networks in 2020, creating an interconnected ecosystem that bridges the digital and physical worlds through advanced networking technologies and AI integration.',
    characters: [
      'Miva',
      'Mivasion',
      'Piva',
      'Mellah',
      'Dellah',
      'Star Rose',
      'Dr. Star Rica',
      'Dr. Emeralds',
    ],
    music: ['Singer & Songwriter', 'Record Producer', 'Sound Engineering', 'Music Industry Innovation', 'Artist Development'],
    film: ['Actor & Performer', 'Film Director', 'Executive Content Creator', 'Visual Storytelling', 'Cinematography'],
    legacy:
      "Mr. Highness Chinedu Hc continues to push the boundaries of what's possible at the intersection of technology, creativity, and human connection. Through his visionary leadership at All Things Web Technology Inc. and Nicle Inc., he is building a future where AI, entertainment, and human experience seamlessly converge to create extraordinary digital experiences that enhance and enrich lives around the world.",
  },
  {
    slug: 'justice-friday',
    initials: 'JF',
    name: 'Mr. Justice Friday',
    fullName: 'Justice Friday',
    role: 'Co-Founder, Manager & Software Engineer · All Things Web Technology Inc. & Nicle Inc.',
    headline: 'Technology Executive, Co-Founder of Nicle Inc, and Systems Architect',
    shortBio:
      'Co-Founder of Nicle Inc. and Manager of All Things Web Technology Inc. Bridges executive judgment with engineering depth, overseeing technical strategy, scalable systems, and operational growth.',
    bio: [
      'Mr. Justice Friday is a technology executive, entrepreneur, and software engineer who serves as Co-Founder of Nicle Inc. and Manager of All Things Web Technology Inc. Alongside Mr. Highness HC, he co-founded Nicle Inc. in May 2026, helping establish the company’s vision as a subsidiary dedicated to intelligent software, advanced AI systems, and the Nicer Ecosystem.',
      'Appointed Manager of All Things Web Technology Inc. on July 5, 2021, he has been instrumental in strengthening operational excellence, guiding technical execution, and supporting sustained organizational growth. His leadership spans software development, web engineering, AI systems, and business management — enabling him to connect strategic direction with hands-on product delivery.',
      'Born on October 7, Mr. Justice Friday has built a reputation as a multidisciplinary professional whose strength lies in bridging executive judgment with engineering depth. As Co-Founder, he works closely with the CEO on product architecture, technical strategy, and the long-term roadmap for Nicle’s expanding portfolio.',
      'In his managerial capacity, he has fostered a culture of collaboration, efficiency, and continuous improvement. His approach emphasizes scalable system design, performance-driven execution, and thoughtful process leadership — contributing to the successful delivery of major initiatives across both organizations.',
      'An entrepreneur at heart, Mr. Justice Friday remains focused on building sustainable digital solutions and advancing technology-driven enterprises. Recognized for his dedication, adaptability, and strategic mindset, he continues to shape the vision and success of All Things Web Technology Inc. and Nicle Inc., advancing software, web technologies, and artificial intelligence with purpose and precision.',
    ],
    tags: ['Co-founder', 'Software engineering', 'AI & operations', 'Systems architect'],
    featured: false,
    wide: true,
    photo: '/images/justice-friday.jpeg?v=2',
    gradient: 'linear-gradient(145deg, #5b7cfa, #34c759 55%, #2f9bff)',
    gender: 'Male',
    birthDate: '10-07',
    nationality: 'Nigerian',
    occupations: [
      'Co-Founder',
      'General Manager',
      'Software Engineer',
      'Systems Architect',
      'Operations Director',
    ],
    knowsAbout: [
      'Software Engineering & Scalability',
      'Cross-functional Team Operations',
      'AI Systems Deployment',
      'Product Architecture',
      'Enterprise Technology Strategy',
    ],
    sameAs: [
      'https://www.allthingswebtechnology.com',
      'https://nicleinc.com',
    ],
    keyFacts: [
      { label: 'Full Name', value: 'Mr. Justice Friday' },
      { label: 'Date of Birth', value: 'October 7' },
      { label: 'Key Roles', value: 'Co-Founder (Nicle Inc), Manager (All Things Web Technology Inc)' },
      { label: 'Executive Tenure', value: 'Manager since July 5, 2021; Co-Founder since May 2026' },
      { label: 'Expertise', value: 'Full-Stack Engineering, Operations, Systems Scalability' },
      { label: 'Organizations', value: 'All Things Web Technology Inc. & Nicle Inc.' },
    ],
    responsibilities: [
      'Oversee daily operations and technical team coordination',
      'Manage project timelines, release cycles, and deliverables',
      'Lead strategic technical planning sessions with the CEO',
      'Ensure high code quality and architectural standards across departments',
      'Coordinate between engineering, product, and leadership stakeholders',
      'Monitor performance metrics, system reliability, and KPIs',
      'Implement operational and process improvements across both firms',
      'Support engineering recruitment, mentoring, and team development',
    ],
    achievements: [
      'Successfully managed cross-functional engineering teams since 2021',
      'Co-founded Nicle Inc. to pioneer the Nicer Ecosystem in 2026',
      'Implemented efficient operational and delivery processes company-wide',
      'Led strategic planning and scalable system deployments',
      'Maintained consistent 99.9%+ performance and reliability across major products',
      'Coordinated multiple critical product releases across web, AI, and mobile',
    ],
    personalInfo: {
      fullName: 'Mr. Justice Friday',
      dateOfBirth: 'October 7',
      role: 'Co-Founder & Manager',
      expertise: 'Tech & Business',
    },
  },
  {
    slug: 'kiowa-george',
    initials: 'KG',
    name: 'Mrs. Kiowa Assing George',
    fullName: 'Kiowa George Assing',
    role: 'Chief Financial Officer · All Things Web Technology Inc. & Nicle Inc.',
    headline: 'Chief Financial Officer & Strategic Fiscal Architect',
    shortBio:
      'Chief Financial Officer overseeing financial strategy, capital allocation, corporate governance, and sustainable fiscal growth across All Things Web Technology Inc. and Nicle Inc.',
    bio: [
      "Kiowa George Assing, professionally known as Mrs Kiowa George, serves as the Chief Financial Officer (CFO) of All Things Web Technology Inc. She was appointed to this critical leadership position on January 21, 2022, bringing her extensive financial expertise to guide the company's fiscal strategy and operations.",
      "As CFO, Mrs Kiowa George has been instrumental in establishing robust financial frameworks that support the company's rapid growth in the technology sector. Her strategic approach to financial management has enabled All Things Web Technology to maintain strong financial health while pursuing ambitious expansion goals.",
      "With her keen analytical skills and deep understanding of corporate finance, she has successfully implemented comprehensive financial controls, optimized resource allocation, and provided strategic insights that drive informed decision-making across all levels of the organization. Her leadership in financial matters has been crucial to the company's continued success and sustainable growth.",
    ],
    tags: ['Corporate finance', 'Financial controls', 'Strategic growth', 'CFO'],
    featured: false,
    wide: true,
    photo: '/images/kiowa-george.png',
    gradient: 'linear-gradient(145deg, #7c5cfc, #ED3542 50%, #ff8a3d)',
    gender: 'Female',
    occupations: ['Chief Financial Officer', 'Corporate Finance Strategist', 'Fiscal Director'],
    knowsAbout: ['Corporate Finance', 'Capital Allocation', 'Auditing & Compliance', 'Budgeting & Forecasting'],
    sameAs: ['https://www.allthingswebtechnology.com', 'https://nicleinc.com'],
    keyFacts: [
      { label: 'Full Name', value: 'Mrs. Kiowa Assing George' },
      { label: 'Role', value: 'Chief Financial Officer (CFO)' },
      { label: 'Appointed Date', value: 'January 21, 2022' },
      { label: 'Expertise', value: 'Corporate Finance, Fiscal Operations & Governance' },
      { label: 'Companies', value: 'All Things Web Technology Inc. & Nicle Inc.' },
    ],
    responsibilities: [
      'Oversee all financial operations, auditing, and corporate reporting',
      'Develop and manage multi-entity annual budgets and forecasts',
      'Lead financial planning, fiscal modeling, and analysis activities',
      'Ensure strict compliance with international financial regulations',
      'Manage global cash flow, treasury, and working capital',
      'Coordinate with external financial auditors and institutional stakeholders',
      'Provide quantitative insights for major strategic and investment decisions',
      'Monitor financial KPIs and departmental expenditure efficiency',
      'Implement stringent internal financial controls and risk management procedures',
      'Support fundraising, strategic capital allocation, and investment activities',
    ],
    achievements: [
      'Successfully managed multi-entity corporate finances since 2022',
      'Implemented robust financial reporting and automated control systems',
      'Led strategic financial planning across rapid company expansion phases',
      'Optimized budget allocation and reduced operational overhead by 22%',
      'Established high-standard financial compliance procedures across jurisdictions',
      'Supported Nicle Inc. inception and subsidiary launch through sound fiscal backing',
    ],
  },
  {
    slug: 'divine-amadi',
    initials: 'DA',
    name: 'Divine Amadi',
    fullName: 'Divine Amadi',
    role: 'Project Manager & Software Engineer · All Things Web Technology Inc. & Nicle Inc.',
    headline: 'Project Management Leader, Agile Strategist & Software Engineer',
    shortBio:
      'Project Manager & Software Engineer driving agile execution, technical delivery, cross-functional alignment, and product quality across both technology organizations.',
    bio: [
      "Divine Amadi serves as the Project Manager at All Things Web Technology Inc., where he was appointed on November 21, 2023. Since joining the company, he has brought exceptional project management expertise and leadership skills that have significantly enhanced the organization's project delivery capabilities.",
      'With his strong background in project coordination and team leadership, Divine has successfully managed multiple complex technology projects, ensuring they are delivered on time, within budget, and to the highest quality standards. His methodical approach to project management and ability to coordinate cross-functional teams has made him an invaluable asset to the company.',
      "Divine's commitment to excellence and continuous improvement has led to the implementation of robust project management frameworks and processes that have streamlined operations and improved overall project success rates. His leadership style fosters collaboration and drives teams toward achieving ambitious project goals while maintaining high standards of quality and efficiency.",
    ],
    tags: ['Project coordination', 'Team leadership', 'Delivery excellence', 'Agile'],
    featured: false,
    wide: true,
    photo: '/images/divine-amadi.jpeg?v=2',
    gradient: 'linear-gradient(145deg, #ff8a3d, #ED3542 45%, #7c5cfc)',
    gender: 'Male',
    occupations: ['Project Manager', 'Software Engineer', 'Scrum Master', 'Technical Delivery Lead'],
    knowsAbout: ['Agile & Scrum Methodologies', 'Software Development Lifecycle', 'Sprint Management', 'Risk Mitigation'],
    sameAs: ['https://www.allthingswebtechnology.com', 'https://nicleinc.com'],
    keyFacts: [
      { label: 'Full Name', value: 'Divine Amadi' },
      { label: 'Role', value: 'Project Manager & Software Engineer' },
      { label: 'Appointed Date', value: 'November 21, 2023' },
      { label: 'Expertise', value: 'Technical Project Delivery, Agile Systems, Software Engineering' },
      { label: 'Organizations', value: 'All Things Web Technology Inc. & Nicle Inc.' },
    ],
    responsibilities: [
      'Plan, execute, and deliver complex technology projects on schedule and budget',
      'Lead and coordinate cross-functional engineering, design, and QA teams',
      'Manage project scopes, development sprints, timelines, and resource allocation',
      'Proactively identify and mitigate technical blockers and project risks',
      'Ensure high-standard quality benchmarks and deliverable requirements are met',
      'Maintain transparent real-time status reporting to executive leadership',
      'Implement modern agile and DevOps management best practices',
      'Monitor sprint velocity, bug resolution rates, and milestone delivery KPIs',
      'Facilitate daily standups, sprint reviews, and technical retro sessions',
      'Support continuous improvement across product and engineering lifecycles',
    ],
    achievements: [
      'Successfully managed multiple flagship technology projects since 2023',
      'Implemented agile delivery frameworks improving turnaround by 30%',
      'Led cross-functional teams to deliver mission-critical software on time',
      'Established transparent project tracking, dashboarding, and KPI systems',
      'Coordinated smooth launches for worldnicer, nicer ai plus, and nicerapp updates',
    ],
  },
  {
    slug: 'kingston-onweagba',
    initials: 'KO',
    name: 'Kingston Uchenna Onweagba',
    fullName: 'Kingston Uchenna Onweagba',
    role: 'Marketing Partner · Digital Marketing Strategist · Nicle Inc.',
    headline: 'Digital Growth Strategist, Media Founder & AI Marketing Partner',
    shortBio:
      'Founder of Spix Media and Marketing Partner at Nicle Inc., specializing in data-driven growth, brand positioning, audience development, and AI-powered storytelling.',
    bio: [
      'Kingston Uchenna Onweagba is a Digital Marketing Strategist, entrepreneur, and content creator with a strong passion for helping businesses achieve sustainable growth through innovative digital solutions. As the Founder of Spix Media, he has partnered with businesses, educational institutions, and organizations to strengthen their digital presence through strategic branding, social media marketing, paid advertising, and AI-powered content creation.',
      'With expertise in data-driven marketing and creative brand storytelling, Kingston helps organizations connect with the right audiences, build credibility, and generate measurable business results. His work focuses on developing effective digital strategies that increase visibility, improve customer engagement, and accelerate business growth in an increasingly competitive marketplace.',
      "As a Marketing Partner at Nicle Inc., Kingston plays a key role in expanding the company's brand presence and promoting its innovative technology solutions. He works closely with the team to help businesses adopt modern digital strategies that improve efficiency, productivity, and long-term success. His vision is centered on empowering organizations across Africa and beyond by combining strategic marketing with emerging technologies to unlock new opportunities for growth.",
    ],
    tags: ['Digital marketing', 'Brand growth', 'AI-powered content', 'Media founder'],
    featured: false,
    wide: true,
    photo: '/images/kingston-onweagba.jpeg',
    gradient: 'linear-gradient(145deg, #2f9bff, #5b7cfa 45%, #34c759)',
    gender: 'Male',
    occupations: ['Digital Marketing Strategist', 'Media Founder', 'Brand Growth Consultant', 'Content Producer'],
    knowsAbout: ['Digital Marketing Strategy', 'Audience Growth', 'AI Content Creation', 'Brand Storytelling'],
    sameAs: ['https://www.allthingswebtechnology.com', 'https://nicleinc.com'],
    keyFacts: [
      { label: 'Full Name', value: 'Kingston Uchenna Onweagba' },
      { label: 'Role', value: 'Marketing Partner & Digital Marketing Strategist' },
      { label: 'Founded Venture', value: 'Spix Media' },
      { label: 'Expertise', value: 'Brand Strategy, Social Media Growth, AI Media Production' },
      { label: 'Affiliations', value: 'Nicle Inc. & Spix Media' },
    ],
    responsibilities: [
      'Expand Nicle Inc. brand visibility and awareness across global digital channels',
      'Develop and execute data-driven digital marketing and user acquisition campaigns',
      'Lead strategic social media campaigns, paid media, and brand storytelling',
      'Pioneer AI-powered content workflows that maximize audience engagement',
      'Drive community building and marketing partnerships across Africa and international hubs',
      'Help commercial partners leverage Nicle technology for digital transformation',
      'Align marketing analytics and KPIs with product roadmap milestones',
    ],
    achievements: [
      'Founded Spix Media, delivering high-impact branding and growth campaigns',
      'Partnered with diverse enterprises and educational institutions to scale digital reach',
      'Pioneered AI-assisted creative workflows for multi-channel brand growth',
      'Significantly boosted organic reach and product recognition for Nicle platforms',
    ],
  },
];

export function getLeaderBySlug(slug: string): LeadershipPerson | undefined {
  return leadership.find((p) => p.slug === slug);
}

export function buildLeaderKnowledgeGraphJsonLd(person: LeadershipPerson, siteUrl: string) {
  const profileUrl = `${siteUrl}/team/${person.slug}`;
  const imageUrl = person.photo
    ? person.photo.startsWith('http')
      ? person.photo
      : `${siteUrl}${person.photo}`
    : `${siteUrl}/og-default.png`;

  const personSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${profileUrl}#person`,
    name: person.name,
    alternateName: person.fullName || person.name,
    url: profileUrl,
    image: imageUrl,
    jobTitle: person.role.split('·')[0].trim(),
    description: person.shortBio || person.bio[0],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Nicle Inc.',
        url: siteUrl,
      },
      {
        '@type': 'Organization',
        name: 'All Things Web Technology Inc.',
        url: 'https://www.allthingswebtechnology.com',
      },
    ],
    sameAs: person.sameAs || [siteUrl],
    knowsAbout: person.knowsAbout || ['Artificial Intelligence', 'Software Development'],
  };

  if (person.birthDate && person.birthDate.length === 10) {
    personSchema.birthDate = person.birthDate;
  }
  if (person.birthPlace) {
    personSchema.birthPlace = {
      '@type': 'Place',
      name: person.birthPlace,
    };
  }
  if (person.nationality) {
    personSchema.nationality = {
      '@type': 'Country',
      name: person.nationality,
    };
  }
  if (person.occupations) {
    personSchema.hasOccupation = person.occupations.map((occ) => ({
      '@type': 'Occupation',
      name: occ,
    }));
  }
  if (person.companies) {
    personSchema.founder = person.companies.map((comp) => ({
      '@type': 'Organization',
      name: comp.name,
      foundingDate: comp.founded,
      description: comp.detail,
    }));
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': profileUrl,
    url: profileUrl,
    name: `${person.name} - Biography & Executive Profile`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nicle Inc',
      url: siteUrl,
    },
    about: { '@id': `${profileUrl}#person` },
    mainEntity: { '@id': `${profileUrl}#person` },
    description: `Official biography and leadership profile for ${person.name} (${person.role}). Career milestones, companies founded, platforms developed, and contributions to the Nicer Ecosystem.`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Team',
        item: `${siteUrl}/team`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: person.name,
        item: profileUrl,
      },
    ],
  };

  return [personSchema, profilePageSchema, breadcrumbSchema];
}
