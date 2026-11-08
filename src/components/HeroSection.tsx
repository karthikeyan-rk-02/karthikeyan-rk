import React from 'react';
import { ArrowRight, Download, Database, Layers, Star, Rocket, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onDownloadResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onDownloadResume }) => {
  return (
    <section className="pt-4 scroll-mt-20" id="hero-section" aria-label="About and Hero Section">
      {/* Top Bento Split: Persona + Interactive Code Telemetry Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Hero Card: Identity Reticle Deck (Col 7) */}
        <div className="lg:col-span-7 bg-[#060e1d]/85 border border-[#00f0ff]/25 rounded-lg p-6 lg:p-8 backdrop-blur-xl relative reticle-corner cyan-glow flex flex-col justify-between">
          <div>
            {/* Diagnostic Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-[#00f0ff] tracking-widest font-semibold">
                // 01. ABOUT ME
              </span>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#00f0ff] pulse-dot"></span>
                <span className="font-mono text-[10px] text-[#849495]">LOC: REMOTE // IN</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#dae2f8] tracking-tight leading-tight mb-2">
              Hi; I'm{' '}
              <span className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]">
                Karthikeyan
              </span>
              <span className="text-[#00f0ff] animate-pulse">_</span>
            </h1>

            {/* Sub-Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded border border-[#00dbe9]/40 bg-[#222a3a]/40 text-[#7df4ff] font-mono text-[11px] font-semibold tracking-wider mb-5">
              [ FULL-STACK DEVELOPER & ARCHITECT ]
            </div>

            {/* Bio Narrative */}
            <p className="text-[15px] sm:text-[16px] text-[#b9cacb] max-w-2xl leading-relaxed mb-6">
              I build exceptional, accessible, and performant digital experiences for the modern web with
              passion, clean architecture, and precision. Focused on bridging tactical frontend fidelity
              with resilient distributed backend services.
            </p>
          </div>

          {/* CTAs & Action Reticle Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#3b494b]/30">
            <button
              onClick={() => onNavigate('#projects-section')}
              className="relative group px-5 py-2.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] font-mono text-[13px] tracking-wider font-bold transition-all hover:bg-[#00f0ff] hover:text-[#060e1d] hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] active:scale-95 flex items-center space-x-2 cursor-pointer"
            >
              <span>&gt; VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDownloadResume}
              className="px-5 py-2.5 rounded border border-[#3b494b]/50 hover:border-[#7df4ff] text-[#dae2f8] font-mono text-[13px] tracking-wider font-medium transition-all hover:bg-[#222a3a]/40 active:scale-95 flex items-center space-x-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#00dbe9]" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <div className="ml-auto hidden sm:flex items-center space-x-3 text-[#849495] font-mono text-[10px]">
              <span className="text-[#4edea3] flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] inline-block animate-ping"></span>
                <span>ACTIVE COCKPIT</span>
              </span>
              <span>SYSTEMS NOMINAL</span>
            </div>
          </div>
        </div>

        {/* Right Hero Card: Code Matrix & Wireframe Telemetry (Col 5) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Code Card with Cyber Corner Accents */}
          <div className="bg-[#060e1d]/85 border border-[#00f0ff]/25 rounded-lg p-5 backdrop-blur-xl relative reticle-corner shadow-[0_0_20px_rgba(0,240,255,0.08)]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#3b494b]/30">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#93000a]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#31394a]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3]/60"></span>
                <span className="font-mono text-[10px] text-[#849495] ml-2">developer.config.ts</span>
              </div>
              <span className="font-mono text-[10px] text-[#00f0ff]">NODE.JS v20</span>
            </div>

            {/* Code lines with line numbers */}
            <pre className="font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-[#dae2f8]">
              <code>
                <span className="text-[#849495]">01</span>  <span className="text-[#c4e7ff]">const</span>{' '}
                <span className="text-[#00f0ff] font-semibold">developer</span> = &#123;{'\n'}
                <span className="text-[#849495]">02</span>    <span className="text-[#7bd0ff]">passion</span>:{' '}
                <span className="text-[#6ffbbe]">"building web interfaces"</span>,{'\n'}
                <span className="text-[#849495]">03</span>    <span className="text-[#7bd0ff]">focus</span>:{' '}
                <span className="text-[#6ffbbe]">"full-stack development"</span>,{'\n'}
                <span className="text-[#849495]">04</span>    <span className="text-[#7bd0ff]">goal</span>:{' '}
                <span className="text-[#6ffbbe]">"pixel perfect experiences"</span>,{'\n'}
                <span className="text-[#849495]">05</span>    <span className="text-[#7bd0ff]">alwaysLearning</span>:{' '}
                <span className="text-[#7df4ff]">true</span>,{'\n'}
                <span className="text-[#849495]">06</span>    <span className="text-[#7bd0ff]">runtime</span>:{' '}
                <span className="text-[#6ffbbe]">"TypeScript & Cloud"</span>{'\n'}
                <span className="text-[#849495]">07</span>  &#125;;{'\n'}
                <span className="text-[#849495]">08</span>  <span className="text-[#849495]">// shipping scalable digital products 🚀</span>
              </code>
            </pre>
          </div>

          {/* System Overview Telemetry Stat Counter Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#060e1d]/80 border border-[#3b494b]/30 rounded-lg p-4 backdrop-blur-xl">
            {/* Stat 1 */}
            <div className="p-2 border-r border-[#3b494b]/20">
              <Database className="w-4 h-4 text-[#00f0ff] mb-1" />
              <div className="text-xl sm:text-2xl font-bold text-[#dae2f8]">15+</div>
              <div className="font-mono text-[9px] text-[#849495] uppercase tracking-wider">
                Projects Built
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-2 border-r border-[#3b494b]/20">
              <Layers className="w-4 h-4 text-[#7bd0ff] mb-1" />
              <div className="text-xl sm:text-2xl font-bold text-[#dae2f8]">5+</div>
              <div className="font-mono text-[9px] text-[#849495] uppercase tracking-wider">
                Tech Stacks
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-2 border-r border-[#3b494b]/20">
              <Star className="w-4 h-4 text-[#6ffbbe] mb-1" />
              <div className="text-xl sm:text-2xl font-bold text-[#dae2f8]">3+</div>
              <div className="font-mono text-[9px] text-[#849495] uppercase tracking-wider">
                Featured Units
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-2">
              <Rocket className="w-4 h-4 text-[#00dbe9] mb-1" />
              <div className="text-xl sm:text-2xl font-bold text-[#00f0ff]">100%</div>
              <div className="font-mono text-[9px] text-[#849495] uppercase tracking-wider">
                Passion Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
