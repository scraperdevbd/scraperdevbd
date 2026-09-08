'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Box, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './icons/GithubIcon';

const CATEGORIES = [
  { id: 'all', label: 'All Creations' },
  { id: 'ai', label: 'AI & Scraping' },
  { id: 'web', label: 'Web Applications' },
  { id: 'discord', label: 'Discord Bots' },
  { id: 'modrinth', label: 'Modrinth Mods' },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#0B0F19]">
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
            Featured Creations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Selected Works & Open Source
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto font-sans">
            From autonomous AI agents and web platforms to Discord bot ecosystems and Modrinth creations.
          </p>
        </motion.div>

        {/* Filter Buttons with layoutId */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 bg-white/5 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-project-filter"
                    className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {project.categoryLabel}
                    </span>
                    {project.stats && (
                      <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {project.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 group-hover:underline flex items-center gap-1">
                    <span>View Project Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && <GithubIcon className="h-4 w-4 text-slate-400" />}
                    {project.liveUrl && <ExternalLink className="h-4 w-4 text-slate-400" />}
                    {project.modrinthUrl && <Box className="h-4 w-4 text-slate-400" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
