import React from 'react';
import { X, ExternalLink, Code2, Check, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${project.title}`}
    >
      <div
        className="w-full max-w-2xl bg-[#060e1d] border border-[#00f0ff]/50 rounded-lg p-6 relative reticle-corner cyan-glow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#3b494b]/30 mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-[10px] text-[#00f0ff] uppercase tracking-wider">
              // TELEMETRY DOSSIER
            </span>
            <span className="font-mono text-[10px] text-[#849495]">({project.code})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#849495] hover:text-[#00f0ff] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Banner Area */}
        <div className="relative w-full h-48 rounded border border-[#3b494b]/40 bg-[#17202f]/60 flex items-center justify-center overflow-hidden mb-6">
          <div className="text-center p-4">
            <h3 className="font-mono text-2xl font-bold text-[#00f0ff] mb-1">{project.title}</h3>
            <p className="font-mono text-xs text-[#849495]">{project.bannerSubtitle}</p>
          </div>
          {project.isFeatured && (
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#00f0ff]/20 border border-[#00f0ff] font-mono text-[10px] text-[#00f0ff] font-bold">
              FEATURED UNIT
            </div>
          )}
        </div>

        {/* Narrative */}
        <div className="space-y-4 mb-6">
          <p className="text-[#dae2f8] text-sm leading-relaxed">{project.description}</p>
          <div className="p-3 rounded bg-[#17202f]/40 border border-[#3b494b]/30 space-y-1.5 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-[#849495]">CATEGORY:</span>
              <span className="text-[#00dbe9]">{project.categoryLabel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#849495]">ARCHITECTURE:</span>
              <span className="text-[#dae2f8]">Distributed Edge & Micro-Client</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#849495]">AUDIT STATUS:</span>
              <span className="text-[#6ffbbe]">100% PASS (WCAG 2.1 AA)</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <span className="font-mono text-[10px] text-[#849495] uppercase block mb-2">
            STACK REPOSITORY
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-[#17202f] border border-[#00f0ff]/30 font-mono text-xs text-[#7df4ff]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#3b494b]/30">
          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded bg-[#00f0ff] text-[#060e1d] font-mono text-xs font-bold tracking-wider hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all flex items-center space-x-2"
          >
            <span>LIVE DEMO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.repoUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded border border-[#3b494b]/40 hover:border-[#00f0ff] text-[#dae2f8] font-mono text-xs tracking-wider transition-all flex items-center space-x-2"
          >
            <span>SOURCE CODE</span>
            <Code2 className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
