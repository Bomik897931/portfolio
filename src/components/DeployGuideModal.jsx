import React from 'react';
import { X, CheckCircle2, Rocket, GitBranch, Globe, Terminal, Copy, Check } from 'lucide-react';

export default function DeployGuideModal({ isOpen, onClose }) {
  const [copiedStep, setCopiedStep] = React.useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, stepIndex) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      title: "Step 1: Create a GitHub Repository",
      description: "Go to GitHub and create a new public repository (e.g., named 'portfolio' or '<your-username>.github.io').",
      command: `git init\ngit add .\ngit commit -m "Initial commit of Flutter & Java microservices portfolio"`,
    },
    {
      title: "Step 2: Link & Push to GitHub",
      description: "Link your local repository to your remote GitHub repo and push to the main branch:",
      command: `git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git\ngit branch -M main\ngit push -u origin main`,
    },
    {
      title: "Step 3: Enable Automated GitHub Actions Deployment",
      description: "This portfolio already includes a automated GitHub Actions workflow (`.github/workflows/deploy.yml`). In your GitHub repo: Go to Settings > Pages > Source > select 'GitHub Actions'.",
      command: `# That's it! Every time you push code to 'main', GitHub automatically builds and deploys your portfolio free with SSL!`,
    },
    {
      title: "Step 4: Access Your Live Site",
      description: "Within 60-90 seconds, your site will be live at:",
      command: `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`,
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
            <Rocket className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Free GitHub Pages Deployment Guide
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              Zero-cost automated CI/CD deployment configured
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-mono flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white font-mono">
                  {step.title}
                </h4>
              </div>
              <p className="text-xs text-slate-300 pl-7 leading-relaxed">
                {step.description}
              </p>

              {/* Command Box */}
              <div className="ml-7 relative bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                <pre className="overflow-x-auto whitespace-pre-wrap">{step.command}</pre>
                <button
                  type="button"
                  onClick={() => copyToClipboard(step.command, idx)}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy command"
                >
                  {copiedStep === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Vite relative base path (`./`) is already configured!
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs font-mono hover:from-cyan-300 hover:to-teal-300 transition-all shadow-md shadow-cyan-500/20"
          >
            Got it, Let's Go!
          </button>
        </div>

      </div>
    </div>
  );
}
