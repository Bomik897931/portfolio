import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DeployGuideModal from './components/DeployGuideModal';

export default function App() {
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 cyber-grid relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Navbar */}
      <Navbar onOpenDeployGuide={() => setIsDeployModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ArchitectureShowcase />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeployGuide={() => setIsDeployModalOpen(true)} />

      {/* Interactive Deployment Guide Modal */}
      <DeployGuideModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
