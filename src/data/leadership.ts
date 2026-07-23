export type LeadershipPerson = {
  initials: string;
  name: string;
  role: string;
  bio: string[];
  tags: string[];
  featured?: boolean;
  wide?: boolean;
  photo?: string;
  gradient: string;
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
    initials: 'HC',
    name: 'Mr. Highness HC',
    role: 'Founder & Chief Executive Officer · All Things Web Technology Inc. & Nicle Inc.',
    bio: [
      'Mr. Highness Chinedu Hc is a visionary entrepreneur, software engineer, and creative artist who has revolutionized the intersection of technology and entertainment. Born on July 5, 1999, he has established himself as a pioneering force in the digital landscape through innovative platforms and creative ventures.',
      'As a multi-talented individual, Chinedu seamlessly blends his technical expertise in software development and web engineering with his artistic passion in music, film, and entertainment. This unique combination has enabled him to create groundbreaking platforms that merge cutting-edge technology with human creativity and connection.',
      'His entrepreneurial journey began with the founding of All Things Web Technology Inc. on July 5, 2019, marking the start of a technological empire that would go on to create some of the most innovative AI-powered platforms and digital experiences in the industry.',
    ],
    tags: ['Entrepreneur', 'Software engineer', 'Music & film', 'AI innovation'],
    featured: true,
    photo: '/images/highness-hc.png',
    gradient: 'linear-gradient(145deg, #ED3542, #7c5cfc 60%, #5b7cfa)',
    companies: [
      {
        name: 'All Things Web Technology Inc.',
        title: 'Founder & CEO',
        founded: 'July 5, 2019',
        detail: 'Leading technology company specializing in web development, AI solutions, and digital innovation.',
      },
      {
        name: 'Hc Music',
        title: 'Founder',
        founded: '2019',
        detail: 'Music record label division focusing on artist development and music production.',
      },
      {
        name: 'Hc Studios Picture',
        title: 'Founder',
        founded: '2019',
        detail: 'Film production company division creating innovative visual content and entertainment.',
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
      'In a groundbreaking achievement, Chinedu created The Nicer City — a comprehensive digital metropolis where AI characters and beings live, interact, and thrive. This innovative virtual world represents the future of digital communities and AI interaction.',
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
    music: ['Singer & Songwriter', 'Record Producer', 'Music Industry Innovation', 'Artist Development'],
    film: ['Actor & Performer', 'Film Director', 'Content Creator', 'Visual Storytelling'],
    legacy:
      "Mr. Highness Chinedu Hc continues to push the boundaries of what's possible at the intersection of technology, creativity, and human connection. Through his visionary leadership at All Things Web Technology Inc. and its divisions, he is building a future where AI, entertainment, and human experience seamlessly converge to create extraordinary digital experiences that enhance and enrich lives around the world.",
  },
  {
    initials: 'JF',
    name: 'Mr. Justice Friday',
    role: 'Co-Founder, Manager & Software Engineer · All Things Web Technology Inc. & Nicle Inc.',
    bio: [
      'Mr. Justice Friday is a technology executive, entrepreneur, and software engineer who serves as Co-Founder of Nicle Inc. and Manager of All Things Web Technology Inc. Alongside Mr. Highness HC, he co-founded Nicle Inc. in May 2026, helping establish the company’s vision as a subsidiary dedicated to intelligent software, advanced AI systems, and the Nicer Ecosystem.',
      'Appointed Manager of All Things Web Technology Inc. on July 5, 2021, he has been instrumental in strengthening operational excellence, guiding technical execution, and supporting sustained organizational growth. His leadership spans software development, web engineering, AI systems, and business management — enabling him to connect strategic direction with hands-on product delivery.',
      'Born on October 7, Mr. Justice Friday has built a reputation as a multidisciplinary professional whose strength lies in bridging executive judgment with engineering depth. As Co-Founder, he works closely with the CEO on product architecture, technical strategy, and the long-term roadmap for Nicle’s expanding portfolio.',
      'In his managerial capacity, he has fostered a culture of collaboration, efficiency, and continuous improvement. His approach emphasizes scalable system design, performance-driven execution, and thoughtful process leadership — contributing to the successful delivery of major initiatives across both organizations.',
      'An entrepreneur at heart, Mr. Justice Friday remains focused on building sustainable digital solutions and advancing technology-driven enterprises. Recognized for his dedication, adaptability, and strategic mindset, he continues to shape the vision and success of All Things Web Technology Inc. and Nicle Inc., advancing software, web technologies, and artificial intelligence with purpose and precision.',
    ],
    tags: ['Co-founder', 'Software engineering', 'AI & operations'],
    featured: false,
    wide: true,
    photo: '/images/justice-friday.jpeg',
    responsibilities: [
      'Oversee daily operations and team coordination',
      'Manage project timelines and deliverables',
      'Lead strategic planning sessions',
      'Ensure quality standards across all departments',
      'Coordinate between different teams and stakeholders',
      'Monitor performance metrics and KPIs',
      'Implement process improvements',
      'Support team development and growth',
    ],
    achievements: [
      'Successfully managed cross-functional teams since 2021',
      'Implemented efficient operational processes',
      'Led strategic planning initiatives',
      'Maintained high team performance standards',
      'Coordinated multiple project deliveries',
    ],
    personalInfo: {
      fullName: 'Mr. Justice Friday',
      dateOfBirth: 'October 7',
      role: 'Co-Founder & Manager',
      expertise: 'Tech & Business',
    },
    gradient: 'linear-gradient(145deg, #5b7cfa, #34c759 55%, #2f9bff)',
  },
  {
    initials: 'KG',
    name: 'Mrs. Kiowa Assing George',
    role: 'Chief Financial Officer · All Things Web Technology Inc. & Nicle Inc.',
    bio: [
      "Kiowa George Assing, professionally known as Mrs Kiowa George, serves as the Chief Financial Officer (CFO) of All Things Web Technology Inc. She was appointed to this critical leadership position on January 21, 2022, bringing her extensive financial expertise to guide the company's fiscal strategy and operations.",
      "As CFO, Mrs Kiowa George has been instrumental in establishing robust financial frameworks that support the company's rapid growth in the technology sector. Her strategic approach to financial management has enabled All Things Web Technology to maintain strong financial health while pursuing ambitious expansion goals.",
      "With her keen analytical skills and deep understanding of corporate finance, she has successfully implemented comprehensive financial controls, optimized resource allocation, and provided strategic insights that drive informed decision-making across all levels of the organization. Her leadership in financial matters has been crucial to the company's continued success and sustainable growth.",
    ],
    tags: ['Corporate finance', 'Financial controls', 'Strategic growth'],
    featured: false,
    wide: true,
    photo: '/images/kiowa-george.jpeg',
    responsibilities: [
      'Oversee all financial operations and reporting',
      'Develop and manage annual budgets and forecasts',
      'Lead financial planning and analysis activities',
      'Ensure compliance with financial regulations',
      'Manage cash flow and working capital',
      'Coordinate with external auditors and stakeholders',
      'Provide financial insights for strategic decisions',
      'Monitor financial performance and KPIs',
      'Implement financial controls and procedures',
      'Support fundraising and investment activities',
    ],
    achievements: [
      'Successfully managed company finances since 2022',
      'Implemented robust financial reporting systems',
      'Led strategic financial planning initiatives',
      'Optimized budget allocation and cost management',
      'Established financial controls and compliance procedures',
      'Supported company growth through sound financial strategies',
    ],
    gradient: 'linear-gradient(145deg, #7c5cfc, #ED3542 50%, #ff8a3d)',
  },
  {
    initials: 'DA',
    name: 'Divine Amadi',
    role: 'Project Manager & Software Engineer · All Things Web Technology Inc. & Nicle Inc.',
    bio: [
      "Divine Amadi serves as the Project Manager at All Things Web Technology Inc., where he was appointed on November 21, 2023. Since joining the company, he has brought exceptional project management expertise and leadership skills that have significantly enhanced the organization's project delivery capabilities.",
      'With his strong background in project coordination and team leadership, Divine has successfully managed multiple complex technology projects, ensuring they are delivered on time, within budget, and to the highest quality standards. His methodical approach to project management and ability to coordinate cross-functional teams has made him an invaluable asset to the company.',
      "Divine's commitment to excellence and continuous improvement has led to the implementation of robust project management frameworks and processes that have streamlined operations and improved overall project success rates. His leadership style fosters collaboration and drives teams toward achieving ambitious project goals while maintaining high standards of quality and efficiency.",
    ],
    tags: ['Project coordination', 'Team leadership', 'Delivery excellence'],
    featured: false,
    wide: true,
    photo: '/images/divine-amadi.jpeg',
    responsibilities: [
      'Plan, execute, and deliver technology projects on time and within budget',
      'Lead and coordinate cross-functional project teams',
      'Manage project scope, timeline, and resource allocation',
      'Identify and mitigate project risks and issues',
      'Ensure quality standards and deliverable requirements are met',
      'Communicate project status to stakeholders and leadership',
      'Implement project management best practices and methodologies',
      'Monitor project performance and provide regular reporting',
      'Facilitate team meetings and project coordination sessions',
      'Support continuous improvement in project delivery processes',
    ],
    achievements: [
      'Successfully managed multiple technology projects since 2023',
      'Implemented agile project management methodologies',
      'Led cross-functional teams to deliver projects on time',
      'Established project tracking and reporting systems',
      'Improved project delivery efficiency by 30%',
      'Coordinated successful product launches and updates',
    ],
    gradient: 'linear-gradient(145deg, #ff8a3d, #ED3542 45%, #7c5cfc)',
  },
];
