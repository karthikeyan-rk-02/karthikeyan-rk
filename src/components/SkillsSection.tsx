import React, { useState } from 'react';
import {
  Lightbulb,
  Eye,
  Clock,
  Users,
  GitBranch,
  Github,
  Code,
  Palette,
  Cpu,
  Package,
  Zap,
  CheckCircle,
  Cloud,
  Box,
  BarChart2
} from 'lucide-react';
import { SKILL_METERS, TOOL_TILES, SOFT_SKILLS, SkillMeter } from '../data/portfolioData';

interface SkillsSectionProps {
  onOpenSkillMatrixModal: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onOpenSkillMatrixModal }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'core' | 'framework' | 'backend'>('all');

  const filteredMeters = SKILL_METERS.filter((meter) => {
    if (activeCategoryFilter === 'all') return true;
    return meter.category === activeCategoryFilter;
  });

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitBranch': return <GitBranch className="w-6 h-6 mb-1 text-[#00f0ff]" />;
      case 'Github': return <Github className="w-6 h-6 mb-1 text-[#dae2f8]" />;
      case 'Code': return <Code className="w-6 h-6 mb-1 text-[#c4e7ff]" />;
      case 'Palette': return <Palette className="w-6 h-6 mb-1 text-[#6ffbbe]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 mb-1 text-[#00dbe9]" />;
      case 'Package': return <Package className="w-6 h-6 mb-1 text-[#ffb4ab]" />;
      case 'Zap': return <Zap className="w-6 h-6 mb-1 text-[#7bd0ff]" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6 mb-1 text-[#00f0ff]" />;
      case 'Cloud': return <Cloud className="w-6 h-6 mb-1 text-[#6ffbbe]" />;
      case 'Box': return <Box className="w-6 h-6 mb-1 text-[#c4e7ff]" />;
      default: return <Code className="w-6 h-6 mb-1 text-[#00f0ff]" />;
    }
  };

  const getSoftSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-3.5 h-3.5 text-[#00f0ff]" />;
      case 'Eye': return <Eye className="w-3.5 h-3.5 text-[#7bd0ff]" />;
      case 'Clock': return <Clock className="w-3.5 h-3.5 text-[#6ffbbe]" />;
      case 'Users': return <Users className="w-3.5 h-3.5 text-[#00dbe9]" />;
      default: return <Lightbulb className="w-3.5 h-3.5 text-[#00f0ff]" />;
    }
  };

  return (
    <section className="scroll-mt-20 space-y-6" id="skills-section" aria-label="Skills & Telemetry Matrix">
      {/* Section Title */}
      <div className="pb-3 border-b border-[#3b494b]/30">
        <span className="font-mono text-[10px] text-[#00f0ff] tracking-widest font-semibold">
          // 03. SKILLS & TELEMETRY MATRIX
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#dae2f8] mt-1">
          I build things for the web with <span className="text-[#00f0ff]">passion and performance.</span>
        </h2>
        <p className="text-[14px] text-[#b9cacb] max-w-3xl mt-1">
          Frontend mastery, resilient cloud runtime environments, and developer ecosystems evaluated at peak execution standards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Column 1: Core Proficiency Energy Meters (Col 6) */}
        <div className="lg:col-span-6 bg-[#060e1d]/80 border border-[#3b494b]/30 rounded-lg p-6 backdrop-blur-xl relative reticle-corner space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#3b494b]/20">
            <span className="font-mono text-[11px] font-bold text-[#00dbe9] tracking-wider">
              // FRONTEND & ENGINE PROFICIENCY
            </span>
            <div className="flex items-center space-x-1.5 font-mono text-[9px]">
              <button
                onClick={() => setActiveCategoryFilter('all')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${
                  activeCategoryFilter === 'all'
                    ? 'bg-[#00f0ff] text-[#060e1d] font-bold'
                    : 'text-[#849495] hover:text-[#dae2f8]'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setActiveCategoryFilter('core')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${
                  activeCategoryFilter === 'core'
                    ? 'bg-[#00f0ff] text-[#060e1d] font-bold'
                    : 'text-[#849495] hover:text-[#dae2f8]'
                }`}
              >
                DOM
              </button>
              <button
                onClick={() => setActiveCategoryFilter('framework')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${
                  activeCategoryFilter === 'framework'
                    ? 'bg-[#00f0ff] text-[#060e1d] font-bold'
                    : 'text-[#849495] hover:text-[#dae2f8]'
                }`}
              >
                REACT
              </button>
              <button
                onClick={() => setActiveCategoryFilter('backend')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${
                  activeCategoryFilter === 'backend'
                    ? 'bg-[#00f0ff] text-[#060e1d] font-bold'
                    : 'text-[#849495] hover:text-[#dae2f8]'
                }`}
              >
                NODE
              </button>
            </div>
          </div>

          {/* Skill Sliders */}
          <div className="space-y-4">
            {filteredMeters.map((skill) => (
              <div key={skill.id} className="space-y-1.5 group">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="font-bold text-[#dae2f8] flex items-center space-x-2 group-hover:text-[#00f0ff] transition-colors">
                    <span
                      className={`inline-block w-2 h-2 rounded-sm ${
                        skill.color === 'tertiary'
                          ? 'bg-[#6ffbbe]'
                          : skill.color === 'secondary'
                          ? 'bg-[#7bd0ff]'
                          : 'bg-[#00f0ff]'
                      }`}
                    ></span>
                    <span>{skill.name}</span>
                  </span>
                  <span className="font-mono text-[#00f0ff] font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#17202f] rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff] transition-all duration-700 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[#3b494b]/20 flex justify-center">
            <button
              onClick={onOpenSkillMatrixModal}
              className="w-full py-2 rounded bg-[#222a3a]/40 border border-[#3b494b]/30 hover:border-[#00f0ff] text-[#00f0ff] font-mono text-[11px] tracking-wider font-semibold transition-all hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] cursor-pointer flex items-center justify-center space-x-2 active:scale-98"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>☷ VIEW PROFICIENCY MATRIX</span>
            </button>
          </div>
        </div>

        {/* Column 2: Tools & Soft Capabilities (Col 6) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          {/* Tools & Tech Grid Tiles */}
          <div className="bg-[#060e1d]/80 border border-[#3b494b]/30 rounded-lg p-6 backdrop-blur-xl relative reticle-corner">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3b494b]/20">
              <span className="font-mono text-[11px] font-bold text-[#00dbe9] tracking-wider">
                // TOOLS & TECHNOLOGIES
              </span>
              <span className="font-mono text-[10px] text-[#849495]">10 TILES ACTIVE</span>
            </div>

            {/* Grid Tiles */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 text-center">
              {TOOL_TILES.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-[#17202f]/40 border border-[#3b494b]/30 hover:border-[#00f0ff] hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all flex flex-col items-center justify-center group cursor-pointer hover:-translate-y-0.5"
                  title={`${tool.name} - ${tool.category}`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span className="font-mono text-[10px] block text-[#dae2f8] mt-1 group-hover:text-[#00f0ff]">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Matrix Soft Skills */}
          <div className="bg-[#060e1d]/80 border border-[#3b494b]/30 rounded-lg p-6 backdrop-blur-xl relative reticle-corner space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#3b494b]/20">
              <span className="font-mono text-[11px] font-bold text-[#00dbe9] tracking-wider">
                // SOFT SKILLS & CAPABILITIES
              </span>
              <span className="font-mono text-[10px] text-[#849495]">INDEX 5.0</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOFT_SKILLS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#17202f]/20 p-2.5 rounded border border-[#3b494b]/20"
                >
                  <span className="font-mono text-[10px] text-[#dae2f8] flex items-center space-x-1.5">
                    {getSoftSkillIcon(item.iconName)}
                    <span>{item.name}</span>
                  </span>
                  <div className="flex space-x-1" aria-label={`Rating ${item.score} out of 5`}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i < item.score
                            ? 'bg-[#00f0ff] shadow-[0_0_4px_#00f0ff]'
                            : 'bg-[#3b494b]/40'
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Motto Banner */}
            <div className="flex items-center space-x-2 pt-2 text-[#849495] text-[12px] italic">
              <span className="text-[#00f0ff] font-bold">★</span>
              <span>
                "Always learning new architectures and exploring optimal pathways to build exceptional products."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
