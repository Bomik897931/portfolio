import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Menu, X, Mail, ExternalLink, Rocket } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenDeployGuide }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080b11]/85 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold font-mono text-base shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              {portfolioData.personal.avatarText}
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-base">
                {portfolioData.personal.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 block font-mono">Flutter & Java Microservices</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDeployGuide}
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 px-3 py-2 rounded-lg transition-all"
              title="How to deploy to GitHub Pages free"
            >
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              <span>Deploy Guide</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all font-mono"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDeployGuide}
              className="p-2 text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg"
              aria-label="Deploy Guide"
            >
              <Rocket className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-[#0d121c]/95 border-b border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-lg shadow-md"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
