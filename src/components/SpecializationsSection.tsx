'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Globe, Terminal, Box, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const DETAILS = {
  ai: {
    title: 'Autonomous Web Scraping & AI Agent Workflows',
    subtitle: 'Extracting data at scale with headless browser automation, proxy pools, anti-bot bypass, and LLM processing.',
    bullets: [
      'Playwright & Python headless browser automation',
      'Dynamic CAPTCHA resolution and Cloudflare bypass strategies',
      'Structured JSON output validation using Pydantic / Zod',
      'LLM enrichment for automatic data categorization and synthesis'
    ],
    tech: ['Python', 'Playwright', 'Node.js', 'OpenAI API', 'Gemini API', 'PostgreSQL'],
    stat: '50k+ Data Records Processed'
  },
  web: {
    title: 'Full-Stack Next.js & Modern Web Engineering',
    subtitle: 'Building blazing-fast web applications with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.',
    bullets: [
      'Static Site Generation (SSG) & Server-Side Rendering (SSR) for instant SEO indexing',
      'Framer Motion smooth scroll-driven reveals & layout morphing',
      'Responsive design across mobile (375px), tablet, and desktop viewports',
      'Lighthouse 100/100 performance and accessibility optimization'
    ],
    tech: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    stat: '100/100 Lighthouse Benchmark'
  },
  discord: {
    title: 'Custom Discord Bot Infrastructure & Slash Commands',
    subtitle: 'High-availability Discord bots built with Discord.js, slash commands, interactive buttons, and webhooks.',
    bullets: [
      'Multi-guild command dispatch and context-aware interaction handlers',
      'Automated support ticket creation with persistent database logs',
      'Real-time automated webhooks for GitHub & platform events',
      'Docker containerized deployment with 99.9% uptime'
    ],
    tech: ['Discord.js', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'REST APIs'],
    stat: '99.9% Production Uptime'
  },
  modrinth: {
    title: 'Modrinth Minecraft Mods & Fabric API Creations',
    subtitle: 'Developing client and server utilities for Minecraft published open-source on Modrinth.',
    bullets: [
      'Java & Fabric API mod development for high-performance gameplay tweaks',
      'Automated CI/CD build scripts with Gradle & GitHub Actions',
      'Active community feedback integration and update cycles',
      'Published open-source tools with over 10,000 active downloads'
    ],
    tech: ['Java', 'Fabric API', 'Minecraft Modding', 'Gradle', 'Modrinth API'],
    stat: '10,000+ Downloads on Modrinth'
  }
};

export default function SpecializationsSection() {
  const [activeTab, setActiveTab] = useState<'ai' | 'web' | 'discord' | 'modrinth'>('ai');

  const activeDetail = DETAILS[activeTab];

  return (
    <section id="specializations" className="relative py-28 px-6 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Core Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Specialized Development Domains
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            Click across the core specializations below to explore architectural capabilities.
          </p>
        </motion.div>

        {/* Tab Buttons with layoutId */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {PORTFOLIO_DATA.specializations.map((spec) => {
            const isActive = activeTab === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveTab(spec.id as any)}
                className={`relative px-6 py-3 rounded-2xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2.5 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 bg-[#131B2E]/50 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-spec-tab"
                    className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {spec.id === 'ai' && <Bot className={`h-4 w-4 relative z-10 ${isActive ? 'text-purple-400' : ''}`} />}
                {spec.id === 'web' && <Globe className={`h-4 w-4 relative z-10 ${isActive ? 'text-indigo-400' : ''}`} />}
                {spec.id === 'discord' && <Terminal className={`h-4 w-4 relative z-10 ${isActive ? 'text-cyan-400' : ''}`} />}
                {spec.id === 'modrinth' && <Box className={`h-4 w-4 relative z-10 ${isActive ? 'text-emerald-400' : ''}`} />}
                <span className="relative z-10">{spec.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  {activeDetail.stat}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeDetail.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {activeDetail.subtitle}
                </p>

                <div className="space-y-3 pt-2">
                  {activeDetail.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {activeDetail.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphical Showcase Block */}
              <div className="lg:col-span-5 bg-[#080C14] rounded-2xl p-6 border border-white/10 font-mono text-xs text-slate-300 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span>scraperdevbd://{activeTab}-executor</span>
                </div>
                <div className="space-y-2 text-slate-400">
                  <p className="text-emerald-400">$ initializing {activeTab}_system...</p>
                  <p>&gt; status: ONLINE [200 OK]</p>
                  <p>&gt; modules: {activeDetail.tech.slice(0, 4).join(', ')}</p>
                  <p>&gt; security: Proxy Rotation & Anti-Bot Enabled</p>
                  <p className="text-purple-400">&gt; executing task pipeline...</p>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                      className="h-full bg-emerald-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
