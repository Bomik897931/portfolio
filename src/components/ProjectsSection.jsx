import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Sparkles, FolderGit2, Check, Smartphone, Server, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Mobile Application', 'Backend Microservices'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.type === filter || (filter === 'Full Stack' && p.category.includes('Full Stack')));

  return (
    <section id="projects" className="py-24 relative bg-[#070a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">Scale & Performance</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore production systems combining cross-platform mobile apps with distributed Java microservices.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-7 border border-slate-800/90 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <div>
                {/* Top Category & Status Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured Architecture
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Performance Metrics Badges */}
                <div className="space-y-2 mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Key Performance Metrics:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-1.5 text-xs font-mono text-slate-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-[11px]">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 px-3.5 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
