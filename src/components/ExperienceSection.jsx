import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#080d15]/50 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on delivery of production-grade mobile solutions and distributed backend systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Glowing Node on Timeline */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080d15] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-sm shadow-cyan-400/50">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mx-auto mt-0.5"></div>
              </div>

              {/* Year label on the left (on sm+ screens) */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                  {item.period}
                </span>
              </div>

              {/* Main Experience Card */}
              <div className="glass-panel p-6 rounded-2xl border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300">
                <div className="sm:hidden mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                    {item.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
