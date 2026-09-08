'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Box, Send, Copy, Check, Sparkles, MessageSquare, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#0B0F19]">
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
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Start a Custom Build & Project Inquiry
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Need a high-throughput AI scraper, Next.js web application, or custom Discord bot? Send a message directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white">Direct Communication</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                I monitor project requests daily and respond to emails and Discord inquiries quickly.
              </p>

              {/* Email Copy Card */}
              <div className="bg-[#080C14] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <div className="text-xs font-mono text-white truncate font-medium">{PORTFOLIO_DATA.email}</div>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-all cursor-pointer shrink-0 ml-2"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="h-5 w-5 text-emerald-400" />
                    <span>GitHub Profile</span>
                  </div>
                  <span className="text-slate-400 font-mono">@scraperdevbd</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.modrinth}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <Box className="h-5 w-5 text-emerald-400" />
                    <span>Modrinth Minecraft Mods</span>
                  </div>
                  <span className="text-slate-400 font-mono">@scraperdev.bd</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto">
                      <Sparkles className="h-8 w-8 animate-bounce" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-white">Message Received!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto font-sans">
                      Thank you for reaching out, <strong className="text-emerald-400">{formData.name}</strong>. I will review your project requirements and respond to your email at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs cursor-pointer transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">Send a Commission Request</h3>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                          className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">Project Category</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. AI Scraper / Discord Bot / Next.js Web App"
                        className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">Project Specifications & Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project goals, required features, timeline, and tech stack preferences..."
                        className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white text-xs font-sans focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Commission Request</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
