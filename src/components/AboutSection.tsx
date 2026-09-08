'use client';

import { motion } from 'framer-motion';
import { User, Code2, Bot, Globe, Terminal, Box, Award, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#0E1424]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            About Developer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            High Schooler from Bangladesh Building Digital Automations
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <MapPin className="h-3.5 w-3.5" />
              <span>Based in Bangladesh (GMT+6)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
              Passionate about turning complex code into automated reality.
            </h3>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-sans">
              <p>
                I&apos;m <strong className="text-white font-semibold">{PORTFOLIO_DATA.name}</strong> (
                <strong className="text-emerald-400 font-mono font-medium">{PORTFOLIO_DATA.brand}</strong>), a high school student in Bangladesh dedicated to modern software engineering, AI agent workflows, and full-stack web systems.
              </p>
              <p>
                From engineering autonomous <span className="text-white font-medium">AI Web Scrapers</span> that extract structured intelligence across thousands of pages to building multi-guild <span className="text-white font-medium">Discord Bots</span> and publishing open-source Minecraft mods on <span className="text-white font-medium">Modrinth</span> with over 10,000 downloads, I focus on clean code and reliable infrastructure.
              </p>
              <p>
                I actively collaborate with international clients and open-source communities to build websites, scrapers, and automated bots designed for scale, speed, and Google search indexability.
              </p>
            </div>

            {/* Core Values / Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Production Reliability</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Modern UI/UX Motion</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                <Bot className="h-4 w-4 text-purple-400 shrink-0" />
                <span>AI Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                <Award className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Open-Source Contributor</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {PORTFOLIO_DATA.specializations.map((spec) => (
              <div
                key={spec.id}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-500/40 transition-all group cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  {spec.id === 'ai' && <Bot className="h-6 w-6 text-purple-400" />}
                  {spec.id === 'web' && <Globe className="h-6 w-6 text-indigo-400" />}
                  {spec.id === 'discord' && <Terminal className="h-6 w-6 text-cyan-400" />}
                  {spec.id === 'modrinth' && <Box className="h-6 w-6 text-emerald-400" />}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
