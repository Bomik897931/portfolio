import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Smartphone, Server, Database, ArrowRight, Mail, Download, Sparkles, Code2, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const { personal, stats, socials } = portfolioData;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Cyber Glow Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 cyber-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{personal.status}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">{personal.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Enterprise Flutter Apps</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Java Microservices</span>.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {personal.tagline}
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* CTAs & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-sm font-mono group"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={socials.resume}
                download="Bomik_Ansari_CV.docx"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-all text-sm font-mono shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${socials.email}`}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Tech Stack Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 -z-10"></div>
              
              {/* Terminal Frame */}
              <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl">
                
                {/* Window header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>runtime-bridge.sys</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                    LIVE
                  </div>
                </div>

                {/* Code Terminal Body */}
                <div className="p-5 font-mono text-xs space-y-4 text-left">
                  
                  {/* Flutter Client Snippet */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-cyan-400 flex items-center gap-1">
                        <Smartphone className="w-3.5 h-3.5" /> [Flutter / BLoC Client]
                      </span>
                      <span className="text-[11px] text-slate-500">lib/bloc/transaction_bloc.dart</span>
                    </div>
                    <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/80 text-slate-300">
                      <p className="text-slate-500">// Enterprise banking encryption & telemetry</p>
                      <p><span className="text-purple-400">final</span> payload = <span className="text-cyan-300">AESCrypto</span>.encrypt(data);</p>
                      <p><span className="text-purple-400">final</span> res = <span className="text-purple-400">await</span> apiClient.post(</p>
                      <p className="pl-4 text-emerald-400">'/api/v1/corporate/trade-emerge',</p>
                      <p className="pl-4">body: payload,</p>
                      <p>);</p>
                      <p className="text-slate-400">emit(TransactionSuccess(res.payload));</p>
                    </div>
                  </div>

                  {/* Microservice Gateway Event */}
                  <div className="flex items-center justify-center gap-3 py-1 text-slate-500">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                      ⚡ HTTP/2 • Spring Cloud & Oracle DB
                    </span>
                    <div className="h-px bg-slate-800 flex-1"></div>
                  </div>

                  {/* Java Spring Boot Backend Snippet */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-indigo-400 flex items-center gap-1">
                        <Server className="w-3.5 h-3.5" /> [Java Spring Boot Service]
                      </span>
                      <span className="text-[11px] text-slate-500">TradeController.java</span>
                    </div>
                    <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/80 text-slate-300">
                      <p className="text-yellow-400">@PostMapping<span className="text-slate-300">("/trade-emerge")</span></p>
                      <p><span className="text-purple-400">public</span> ResponseEntity&lt;TradeResponse&gt; <span className="text-cyan-400">processRequisition</span>() &#123;</p>
                      <p className="pl-4 text-slate-400">// Oracle DB transaction commit & audit trail</p>
                      <p className="pl-4"><span className="text-purple-400">return</span> ResponseEntity.ok(tradeService.execute());</p>
                      <p>&#125;</p>
                    </div>
                  </div>

                  {/* System Health Status */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3 h-3 text-emerald-400" />
                      Oracle DB + Redis Cache: <strong className="text-emerald-400">Healthy</strong>
                    </span>
                    <span className="text-slate-500">Latency: 18ms</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
