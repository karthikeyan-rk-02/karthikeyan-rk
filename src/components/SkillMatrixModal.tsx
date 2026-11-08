import React from 'react';
import { X, Check, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { SKILL_METERS } from '../data/portfolioData';

interface SkillMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillMatrixModal: React.FC<SkillMatrixModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Skill Proficiency Detailed Matrix"
    >
      <div
        className="w-full max-w-2xl bg-[#060e1d] border border-[#00f0ff]/60 rounded-lg p-6 relative reticle-corner cyan-glow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#3b494b]/30 mb-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-[#00f0ff]" />
            <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
              FULL ENGINE TELEMETRY MATRIX // AUDIT 2026
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#849495] hover:text-[#00f0ff] transition-colors"
            aria-label="Close matrix modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#b9cacb] mb-4">
          Standardized benchmark scores across core frontend specifications, client-side caching strategies, runtime engines, and distributed web micro-architectures.
        </p>

        <div className="space-y-3 mb-6">
          {SKILL_METERS.map((skill) => (
            <div
              key={skill.id}
              className="p-3 rounded bg-[#17202f]/40 border border-[#3b494b]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#dae2f8] block">{skill.name}</span>
                <span className="font-mono text-[10px] text-[#849495]">
                  CATEGORY: {skill.category.toUpperCase()} // STATUS: OPTIMIZED
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32 h-2 bg-[#060e1d] rounded-full overflow-hidden border border-[#3b494b]/40">
                  <div
                    className="h-full bg-[#00f0ff] rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className="font-mono text-xs font-bold text-[#00f0ff] w-10 text-right">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 p-3 rounded bg-[#060e1d] border border-[#3b494b]/30 font-mono text-[10px] text-[#849495]">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>ACCESSIBILITY: AAA / WCAG 2.1</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>LIGHTHOUSE PERFORMANCE: 99/100</span>
          </div>
        </div>

        <div className="mt-5 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] font-mono text-xs font-bold tracking-wider hover:bg-[#00f0ff] hover:text-[#060e1d] transition-all"
          >
            DISMISS MATRIX
          </button>
        </div>
      </div>
    </div>
  );
};
