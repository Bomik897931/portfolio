import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Rocket } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onOpenDeployGuide }) {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-[#06080d] text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              {personal.avatarText}
            </div>
            <div>
              <p className="text-slate-200 font-bold">
                {personal.name} &bull; {personal.role}
              </p>
              <p className="text-[11px] text-slate-500">
                Deployable on GitHub Pages (100% Free)
              </p>
            </div>
          </div>

          {/* Center: Deployment helper link */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDeployGuide}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>GitHub Pages Deployment Guide</span>
            </button>
          </div>

          {/* Right: Back to top and socials */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 text-center text-slate-500 text-[11px]">
          &copy; {new Date().getFullYear()} {personal.name}. Powered by React, Vite, and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
