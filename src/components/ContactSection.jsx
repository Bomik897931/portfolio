import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const { socials, personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${socials.email}?subject=Inquiry from Portfolio (${formData.name})&body=${encodeURIComponent(formData.message)} (From: ${formData.email})`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 cyber-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you need a high-performance Flutter mobile application, resilient Java microservices, or full-stack architectural advice, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-7 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking impactful opportunities in Mobile & Microservice engineering. Feel free to reach out directly via email or social networks.
              </p>

              {/* Email One-Click Copy Box */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Email Address</span>
                    <span className="text-xs sm:text-sm font-mono text-slate-200 select-all font-medium truncate">
                      {socials.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>CURRENT AVAILABILITY: ACTIVE</span>
                </div>
                <p className="text-xs text-slate-400">
                  Response turnaround: typically within 24 hours. Open to contract, full-time, and architectural consulting.
                </p>
              </div>

              {/* Social Link Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors text-xs font-mono font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors text-xs font-mono font-medium"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Transmission
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Fill out the transmission payload below to start an initial discussion.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Message Payload
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about your project, timeline, or open engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all font-mono text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center">
                    ✓ Email client trigger prepared. Thank you!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
