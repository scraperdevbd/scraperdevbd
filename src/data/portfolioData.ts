export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'web' | 'discord' | 'modrinth';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  stats?: string;
  githubUrl?: string;
  liveUrl?: string;
  modrinthUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  features: string[];
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  name: "Asif Parvez",
  brand: "ScraperDevBD",
  title: "Building Next-Gen AI & Digital Systems",
  subtitle: "High School Developer from Bangladesh specializing in AI Automation, Full-Stack Next.js Web Building, Custom Discord Bot Architecture, and Modrinth Open Source creations.",
  location: "Bangladesh (GMT+6)",
  email: "scraperdev.bd@gmail.com",
  github: "https://github.com/scraperdevbd",
  modrinth: "https://modrinth.com/user/scraperdev.bd",
  websiteUrl: "https://scraperdevbd.fun",
  stats: [
    { label: "Core Specializations", value: "4+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Mod Downloads", value: "10k+" },
    { label: "Discord Bot Uptime", value: "99.9%" }
  ],
  specializations: [
    {
      id: "ai",
      title: "AI Automation Systems",
      description: "Autonomous agents, web scraping, LLM integrations, and automated data extraction pipelines.",
      icon: "Bot",
      color: "purple"
    },
    {
      id: "web",
      title: "Full-Stack Website Building",
      description: "Crafting fast Next.js web applications, responsive Tailwind interfaces, and custom dashboards.",
      icon: "Globe",
      color: "indigo"
    },
    {
      id: "discord",
      title: "Discord Bot Infrastructure",
      description: "Multi-guild moderation bots, ticket systems, custom slash commands, and webhook integrations.",
      icon: "Terminal",
      color: "cyan"
    },
    {
      id: "modrinth",
      title: "Modrinth Open Source",
      description: "Developing Minecraft mods, optimization tweaks, and utility datapacks published on Modrinth.",
      icon: "Box",
      color: "emerald"
    }
  ],
  projects: [
    {
      id: "ai-scraper-engine",
      title: "AI Autonomous Web Scraper",
      category: "ai",
      categoryLabel: "AI & Scraping",
      shortDescription: "High-performance autonomous scraping pipeline with dynamic anti-bot bypass & AI data structuring.",
      fullDescription: "An advanced web scraping and data extraction engine engineered with Python and Node.js. Handles headless browser sessions, proxy rotation, CAPTCHA solutions, and automatically formats raw web data into clean JSON schemas powered by LLM models.",
      tags: ["Python", "Playwright", "Node.js", "OpenAI API", "JSON Schema"],
      stats: "50k+ Pages Scraped",
      githubUrl: "https://github.com/scraperdevbd",
      featured: true,
      accentColor: "from-purple-500 to-indigo-500"
    },
    {
      id: "modrinth-mc-utilities",
      title: "Minecraft Optimization & Utility Mods",
      category: "modrinth",
      categoryLabel: "Modrinth Open Source",
      shortDescription: "Published open-source Fabric mods and tweaks with over 10,000 downloads on Modrinth.",
      fullDescription: "A series of lightweight Minecraft mods designed for client-side performance, inventory management, and custom game mechanics. Built using Java & Fabric API and trusted by thousands of active players worldwide.",
      tags: ["Java", "Fabric API", "Minecraft Modding", "Modrinth", "Gradle"],
      stats: "10,000+ Downloads",
      modrinthUrl: "https://modrinth.com/user/scraperdev.bd",
      githubUrl: "https://github.com/scraperdevbd",
      featured: true,
      accentColor: "from-emerald-500 to-teal-500"
    },
    {
      id: "discord-bot-ecosystem",
      title: "Multi-Guild Moderation & Ticket Bot",
      category: "discord",
      categoryLabel: "Discord Bots",
      shortDescription: "Custom Discord bot architecture with slash commands, automated ticket workflows, and 99.9% uptime.",
      fullDescription: "A enterprise-grade Discord bot powering communities with slash commands, interactive buttons, automated reaction roles, moderation logs, and real-time support ticket channels backed by MongoDB.",
      tags: ["Discord.js", "TypeScript", "Node.js", "MongoDB", "Webhooks"],
      stats: "99.9% Uptime",
      githubUrl: "https://github.com/scraperdevbd",
      featured: true,
      accentColor: "from-cyan-500 to-blue-500"
    },
    {
      id: "scraperdevbd-website",
      title: "ScraperDevBD Main Platform",
      category: "web",
      categoryLabel: "Web Applications",
      shortDescription: "Modern single-page developer platform built with Next.js App Router, Framer Motion, and SEO metadata.",
      fullDescription: "The official high-performance website for ScraperDevBD built with Next.js, Framer Motion animations, dark OLED styling, JSON-LD SEO schema, and instant page speed optimization.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      stats: "100/100 Lighthouse",
      liveUrl: "https://scraperdevbd.fun",
      githubUrl: "https://github.com/scraperdevbd",
      featured: true,
      accentColor: "from-blue-500 to-indigo-600"
    },
    {
      id: "llm-agent-pipeline",
      title: "Autonomous LLM Research Agent",
      category: "ai",
      categoryLabel: "AI & Scraping",
      shortDescription: "AI agent pipeline that conducts web searches, gathers sources, and generates detailed analytical reports.",
      fullDescription: "A specialized AI workflow that accepts complex research prompts, automatically queries web search endpoints, parses top results, and generates structured executive summaries with full markdown citations.",
      tags: ["Python", "FastAPI", "Gemini API", "Vector Embeddings"],
      stats: "Sub-5s Research Cycle",
      githubUrl: "https://github.com/scraperdevbd",
      featured: false,
      accentColor: "from-purple-600 to-pink-500"
    }
  ] as Project[],
  skillCategories: [
    {
      title: "AI & Automation",
      iconName: "Bot",
      description: "Building intelligent extraction pipelines and autonomous agent flows.",
      skills: [
        { name: "Web Scraping & Extraction", level: 95, highlight: true },
        { name: "LLM Agent Pipelines", level: 90, highlight: true },
        { name: "Prompt Architecture", level: 92 },
        { name: "API & Webhook Workflows", level: 95 }
      ]
    },
    {
      title: "Web Engineering",
      iconName: "Globe",
      description: "Creating responsive, fast single-page applications and web interfaces.",
      skills: [
        { name: "Next.js App Router", level: 92, highlight: true },
        { name: "React & TypeScript", level: 88, highlight: true },
        { name: "Tailwind CSS & UI/UX", level: 95 },
        { name: "REST APIs & JSON Schemas", level: 90 }
      ]
    },
    {
      title: "Discord & Modding",
      iconName: "Terminal",
      description: "Engineering Discord bots and publishing Minecraft open-source mods.",
      skills: [
        { name: "Discord.js & Bot Systems", level: 95, highlight: true },
        { name: "Slash Commands & Buttons", level: 92 },
        { name: "Modrinth Mods & Fabric API", level: 85, highlight: true },
        { name: "Git & Vercel Deployments", level: 88 }
      ]
    }
  ] as SkillCategory[],
  services: [
    {
      id: "ai-scraping",
      title: "AI & Web Scraping Solutions",
      iconName: "Bot",
      description: "Custom web scrapers, data extraction scripts, and automated AI pipelines tailored for your business needs.",
      features: [
        "Dynamic anti-bot & CAPTCHA bypass",
        "Structured JSON / CSV export format",
        "Automated scheduled cron updates",
        "LLM summary & data enrichment"
      ],
      badge: "Popular"
    },
    {
      id: "web-dev",
      title: "Full-Stack Website Building",
      iconName: "Globe",
      description: "Modern, ultra-fast Next.js websites and landing pages optimized for search engines and high conversion.",
      features: [
        "Next.js App Router & SSG setup",
        "Framer Motion interactive animations",
        "Google Indexing & SEO best practices",
        "Dark mode & mobile responsive UI"
      ],
      badge: "High Demand"
    },
    {
      id: "discord-bots",
      title: "Custom Discord Bot Engineering",
      iconName: "Terminal",
      description: "Tailor-made Discord bots with slash commands, moderation workflows, ticket systems, and database storage.",
      features: [
        "Slash commands & interactive embeds",
        "Automated ticket & support queues",
        "Webhook & external API integrations",
        "Hosted with 99.9% uptime support"
      ],
      badge: "Full Custom"
    }
  ] as Service[],
  faqs: [
    {
      question: "What is ScraperDevBD and who is behind it?",
      answer: "ScraperDevBD is the online handle of Asif Parvez, a high school software developer based in Bangladesh. I specialize in web scraping, AI automation pipelines, Next.js web development, custom Discord bots, and Modrinth Minecraft mods."
    },
    {
      question: "Can you build custom web scrapers for complex websites?",
      answer: "Yes! I engineer custom scrapers using Python, Playwright, and Node.js capable of bypassing cloudflare, handling JavaScript rendering, and organizing output into structured JSON or database tables."
    },
    {
      question: "How is this website optimized for Google search indexing?",
      answer: "This single-page site on https://scraperdevbd.fun is built using Next.js with static site generation (SSG), semantic HTML5 tags, comprehensive meta descriptions, Open Graph protocol, dynamic sitemap.xml, robots.txt, and JSON-LD Person/WebSite Schema markup."
    },
    {
      question: "How can I order a custom Discord bot or website build?",
      answer: "You can reach out directly via the contact form on this page or email me at scraperdev.bd@gmail.com with your project specifications."
    },
    {
      question: "What technology stack do you use for web applications?",
      answer: "My primary stack includes Next.js (React), TypeScript, Tailwind CSS, Framer Motion for smooth UI animations, Node.js/Python for backends, and Vercel for fast global deployment."
    }
  ] as FaqItem[]
};
