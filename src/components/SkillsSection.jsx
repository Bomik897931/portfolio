import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Smartphone, Server, Cloud, Cpu, CheckCircle2, Star } from 'lucide-react';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { key: 'all', label: 'All Disciplines', icon: Cpu },
    { key: 'mobile', label: 'Flutter & Mobile', icon: Smartphone },
    { key: 'backend', label: 'Java Microservices', icon: Server },
    { key: 'cloudAndDevOps', label: 'DevOps & Databases', icon: Cloud },
  ];

  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return Object.entries(skills);
    }
    return Object.entries(skills).filter(([key]) => key === activeTab);
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Toolkit</span> & Engineering Depth
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From reactive mobile client states to high-throughput backend services and container orchestration.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredCategories().map(([catKey, catData]) => (
            <div
              key={catKey}
              className="glass-panel p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {catData.category}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    {catData.items.length} Skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {catData.description}
                </p>

                {/* Items */}
                <div className="grid grid-cols-1 gap-2.5">
                  {catData.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                        item.highlight
                          ? 'bg-slate-900/90 border-cyan-500/40 text-slate-100 shadow-sm shadow-cyan-500/10'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {item.highlight ? (
                          <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                        )}
                        <span className="font-medium font-mono">{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        item.level === 'Expert' 
                          ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-500/30' 
                          : item.level === 'Advanced'
                          ? 'text-indigo-300 bg-indigo-950/70 border border-indigo-500/30'
                          : 'text-slate-400 bg-slate-800/50'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in production</span>
                <span className="text-cyan-400/70 font-semibold">2+ Yrs Proven</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
