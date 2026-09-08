'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Box, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-2xl bg-[#131B2E] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {project.categoryLabel}
            </span>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Title & Description */}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
            {project.fullDescription}
          </p>

          {/* Stats Badge if available */}
          {project.stats && (
            <div className="mb-6 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Benchmark / Impact: <strong>{project.stats}</strong></span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Live Site</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono transition-all"
              >
                <GithubIcon className="h-3.5 w-3.5 text-emerald-400" />
                <span>GitHub Code</span>
              </a>
            )}
            {project.modrinthUrl && (
              <a
                href={project.modrinthUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 text-xs font-mono transition-all"
              >
                <Box className="h-3.5 w-3.5 text-emerald-400" />
                <span>Modrinth Page</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
