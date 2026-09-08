'use client';

import { motion } from 'framer-motion';
import { Bot, Globe, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ServicesSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-28 px-6 bg-[#0E1424]">
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
            Solutions Overview
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Services & Build Offerings
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Custom engineered AI automations, full-stack websites, and Discord bot ecosystems.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-emerald-500/50 transition-all relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    {service.iconName === 'Bot' && <Bot className="h-6 w-6 text-purple-400" />}
                    {service.iconName === 'Globe' && <Globe className="h-6 w-6 text-indigo-400" />}
                    {service.iconName === 'Terminal' && <Terminal className="h-6 w-6 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 border border-white/10 hover:border-emerald-500 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
