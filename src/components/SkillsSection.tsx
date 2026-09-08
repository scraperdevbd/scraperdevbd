'use client';

import { motion } from 'framer-motion';
import { Bot, Globe, Terminal, Cpu, Code2, Server } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const TECH_TAGS = [
  'AI Automation', 'Next.js 15', 'React', 'TypeScript', 'Discord.js',
  'Python', 'Playwright', 'Tailwind CSS', 'Node.js', 'Modrinth',
  'Fabric API', 'Framer Motion', 'MongoDB', 'PostgreSQL', 'Git', 'Vercel'
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-[#0E1424]">
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
            Technical Stack Overview
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            A comprehensive matrix of technologies, frameworks, and programming proficiencies.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    {cat.iconName === 'Bot' && <Bot className="h-6 w-6 text-purple-400" />}
                    {cat.iconName === 'Globe' && <Globe className="h-6 w-6 text-indigo-400" />}
                    {cat.iconName === 'Terminal' && <Terminal className="h-6 w-6 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">{cat.description}</p>
                  </div>
                </div>

                {/* Animated Skill Progress Bars */}
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="mb-2 flex items-center justify-between text-xs font-mono">
                        <span className={`font-medium ${skill.highlight ? 'text-emerald-400' : 'text-slate-200'}`}>
                          {skill.name}
                        </span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800 border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1 }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-md shadow-emerald-500/50'
                              : 'bg-emerald-500/70'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
        >
          {TECH_TAGS.map((tag, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-default backdrop-blur-md"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
