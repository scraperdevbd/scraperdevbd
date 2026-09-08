'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, Box, Terminal, Bot, Globe, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Ambient glowing background blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-purple-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono font-medium text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-950/40">
            <Sparkles className="h-3.5 w-3.5" />
            High School Developer from Bangladesh
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-slate-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Available for Custom Builds
          </span>
        </motion.div>

        {/* Main Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="block text-white">Building Next-Gen</span>
          <span className="block text-gradient mt-1">AI & Digital Systems</span>
        </motion.h1>

        {/* Subtitle / Bio Overview */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-sans"
        >
          Hi, I am <strong className="text-white font-semibold">{PORTFOLIO_DATA.name}</strong> (
          <span className="text-emerald-400 font-medium font-mono">{PORTFOLIO_DATA.brand}</span>
          ). I specialize in <span className="text-white font-medium">AI Automation</span>, modern{' '}
          <span className="text-white font-medium">Website Building</span>, custom{' '}
          <span className="text-white font-medium">Discord Bot Architecture</span>, and open-source{' '}
          <span className="text-white font-medium">Modrinth</span> projects.
        </motion.p>

        {/* Core Skill Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex flex-wrap justify-center gap-3 text-xs font-mono"
        >
          <div className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/30 px-4 py-2 text-purple-300 backdrop-blur-md shadow-md">
            <Bot className="h-4 w-4 text-purple-400" />
            <span>AI Automation</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-950/30 px-4 py-2 text-indigo-300 backdrop-blur-md shadow-md">
            <Globe className="h-4 w-4 text-indigo-400" />
            <span>Web Applications</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/30 px-4 py-2 text-cyan-300 backdrop-blur-md shadow-md">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <span>Discord Bots</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-4 py-2 text-emerald-300 backdrop-blur-md shadow-md">
            <Box className="h-4 w-4 text-emerald-400" />
            <span>Modrinth Projects</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/25"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#131B2E] hover:bg-[#1C2844] text-white border border-white/10 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
          >
            <span>Get in Touch</span>
            <Mail className="h-4 w-4 text-emerald-400" />
          </motion.button>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href={PORTFOLIO_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white border border-white/10 hover:border-emerald-500/50 rounded-xl px-4 py-2 bg-white/5 transition-all"
          >
            <GithubIcon className="h-4 w-4 text-emerald-400" />
            <span>GitHub</span>
          </a>
          <a
            href={PORTFOLIO_DATA.modrinth}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white border border-white/10 hover:border-emerald-500/50 rounded-xl px-4 py-2 bg-white/5 transition-all"
          >
            <Box className="h-4 w-4 text-emerald-400" />
            <span>Modrinth</span>
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white border border-white/10 hover:border-emerald-500/50 rounded-xl px-4 py-2 bg-white/5 transition-all"
          >
            <Mail className="h-4 w-4 text-emerald-400" />
            <span>{PORTFOLIO_DATA.email}</span>
          </a>
        </motion.div>

        {/* Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 text-center">
              <div className="font-serif text-3xl font-bold text-white mb-1 text-gradient">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
