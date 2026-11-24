import React from 'react';
import { Smartphone, Server, ShieldCheck, Zap, Layers, RefreshCw, Cpu, Database, Network } from 'lucide-react';

export default function ArchitectureShowcase() {
  const tiers = [
    {
      step: "01",
      title: "Mobile Client (Flutter)",
      badge: "Clean Architecture",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
      bgGlow: "bg-cyan-500/10",
      features: [
        "BLoC / Riverpod Reactive State",
        "Offline-First SQLite & Hive DB",
        "Native Android & iOS Bridge",
        "Biometric Security & Token Storage"
      ]
    },
    {
      step: "02",
      title: "API Gateway & Edge",
      badge: "Spring Cloud Gateway",
      icon: ShieldCheck,
      color: "from-teal-400 to-emerald-500",
      borderColor: "border-teal-500/30",
      textColor: "text-teal-400",
      bgGlow: "bg-teal-500/10",
      features: [
        "Central JWT Verification & Claims",
        "Redis Token Bucket Rate Limiting",
        "Service Discovery (Eureka / Consul)",
        "Circuit Breaking (Resilience4j)"
      ]
    },
    {
      step: "03",
      title: "Java Microservices",
      badge: "Spring Boot 3",
      icon: Server,
      color: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400",
      bgGlow: "bg-indigo-500/10",
      features: [
        "Decomposed Business Domains",
        "RESTful Endpoints & WebSockets",
        "Asynchronous Kafka Event Bus",
        "JPA / Hibernate Query Tuning"
      ]
    },
    {
      step: "04",
      title: "Data & Infrastructure",
      badge: "Docker & Cloud",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      bgGlow: "bg-purple-500/10",
      features: [
        "PostgreSQL & MySQL Replication",
        "In-Memory Redis Distributed Cache",
        "Dockerized Container Deployments",
        "Automated CI/CD via GitHub Actions"
      ]
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-[#080d15]/60 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <Network className="w-3.5 h-3.5 text-indigo-400" />
            <span>End-to-End System Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Mobile UX</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Microservice Scale</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rather than isolating frontend from backend, I engineer unified systems where reactive Flutter interfaces talk seamlessly to containerized Java Spring Boot microservice topologies.
          </p>
        </div>

        {/* 4-Tier Interactive Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl relative border hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Glowing Corner Step indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tier.bgGlow} border ${tier.borderColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${tier.textColor}`} />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                    LAYER {tier.step}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider ${tier.textColor}`}>
                    {tier.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tier.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full ${tier.textColor} bg-current`}></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent glow strip */}
                <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${tier.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* Live Architecture Status Bar */}
        <div className="mt-12 glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-200">Production Paradigm:</span>
            <span className="text-cyan-400">Strict Separation of Concerns & Clean Architecture</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-300">Client: Flutter 3.x</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Backend: Spring Boot 3 + Java 21</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Protocols: REST / WebSockets / gRPC</span>
          </div>
        </div>

      </div>
    </section>
  );
}
