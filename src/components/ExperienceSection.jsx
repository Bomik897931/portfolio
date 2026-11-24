import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building, CheckCircle, GraduationCap, Award, Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#080d15]/50 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Enterprise Clients</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Over 5+ years building and scaling production mobile & backend systems for banking and public sector leaders.
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
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="font-mono text-[11px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-1 rounded-md">
                  {item.period}
                </span>
              </div>

              {/* Main Experience Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300">
                <div className="sm:hidden mb-2">
                  <span className="font-mono text-[11px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                    {item.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* Client & Project Badge */}
                {item.client && (
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                      {item.client}
                    </span>
                    {item.projects && (
                      <span className="text-xs font-mono text-slate-400">
                        ({item.projects})
                      </span>
                    )}
                  </div>
                )}

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="mt-20 pt-12 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2.5 mb-4 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">Education</h3>
            </div>
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-sm font-bold text-slate-100 font-mono">
                  {edu.degree}
                </div>
                <div className="text-xs text-slate-400">
                  {edu.institution}
                </div>
                <div className="text-[11px] text-cyan-400 font-mono">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2.5 mb-4 text-amber-400">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">Certifications & Expertise</h3>
            </div>
            <ul className="space-y-2.5">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
