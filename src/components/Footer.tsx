'use client';

import { useState, useEffect } from 'react';
import { Terminal, Box, Mail, Clock, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export default function Footer() {
  const [bdTime, setBdTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setBdTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070A12] border-t border-white/10 pt-16 pb-12 px-6 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
                <Terminal className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                ScraperDev<span className="text-emerald-400">BD</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Official website of Asif Parvez (ScraperDevBD) — Bangladeshi High School Developer specializing in AI Automation, Next.js Web Systems, Discord Bot Architecture, and Modrinth Minecraft Mods.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3.5 py-1.5 rounded-full w-fit">
              <Clock className="h-3.5 w-3.5" />
              <span>Bangladesh Time (GMT+6): {bdTime || '11:20 PM'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Story</a></li>
              <li><a href="#specializations" className="hover:text-emerald-400 transition-colors">Specializations</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Skills Matrix</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Ecosystem</h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-emerald-400" />
                <span>GitHub @scraperdevbd</span>
              </a>
              <a
                href={PORTFOLIO_DATA.modrinth}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Box className="h-4 w-4 text-emerald-400" />
                <span>Modrinth @scraperdev.bd</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>{PORTFOLIO_DATA.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} ScraperDevBD (Asif Parvez). All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-emerald-400 cursor-pointer transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
