import React from 'react';
import { Terminal, Code, Tag, User, Radio, ExternalLink, Mail, Rss, Box } from 'lucide-react';

interface SideNavBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero-section', label: 'HOME', icon: Terminal },
    { id: 'projects-section', label: 'PROJECTS', icon: Code },
    { id: 'skills-section', label: 'SKILLS', icon: Tag },
    { id: 'contact-section', label: 'CONTACT', icon: User },
  ];

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-24 md:w-28 hidden sm:flex flex-col items-center py-4 z-40 bg-[#060e1d]/90 border-r border-[#3b494b]/30 backdrop-blur-xl shadow-[4px_0_24px_rgba(0,0,0,0.5)] select-none"
      aria-label="HUD Side Navigation Rail"
    >
      {/* Header Logo & Holographic Cube Reticle */}
      <div className="flex flex-col items-center mb-6">
        <button
          onClick={() => onNavigate('#hero-section')}
          className="relative w-14 h-14 rounded-lg border border-[#00f0ff]/60 bg-[#060e1d]/80 flex items-center justify-center p-2 mb-2 cyan-glow group cursor-pointer transition-transform hover:scale-105 active:scale-95"
          aria-label="Karthikeyan Dev Home Logo"
        >
          {/* 4-corner targeting brackets */}
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff]"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00f0ff]"></span>
          <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#00f0ff]"></span>
          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00f0ff]"></span>
          
          <Box className="w-8 h-8 text-[#00f0ff] animate-pulse" />
        </button>
        <span className="font-mono text-[13px] font-bold text-[#00f0ff] tracking-wider">K.DEV</span>
        <span className="font-mono text-[#849495] tracking-widest text-[9px] mt-0.5">V2.0.4</span>
      </div>

      {/* Main Navigation Icons */}
      <nav className="flex flex-col space-y-3.5 w-full items-center my-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(`#${item.id}`)}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded transition-all cursor-pointer ${
                isActive
                  ? 'border border-[#00f0ff] bg-[#17202f]/70 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.4),inset_0_0_10px_rgba(0,240,255,0.2)]'
                  : 'border border-[#3b494b]/20 bg-transparent text-[#b9cacb] hover:text-[#dae2f8] hover:border-[#00dbe9] hover:bg-[#222a3a]/40 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]'
              }`}
              title={item.label}
              aria-label={`Navigate to ${item.label}`}
            >
              <Icon className="w-6 h-6" />
              <span className={`font-mono text-[10px] mt-1 ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Side Mini-Terminal Preview Box */}
      <div className="hidden md:flex flex-col w-[88%] mx-auto bg-[#060e1d]/90 border border-[#3b494b]/40 rounded p-1.5 mb-4 font-mono text-[9px] leading-tight">
        <div className="flex items-center justify-between border-b border-[#3b494b]/30 pb-1 mb-1 text-[#849495]">
          <span className="uppercase text-[8px] text-[#00f0ff] font-semibold">TERMINAL</span>
          <span className="tracking-tighter text-[9px] opacity-70">- □ ×</span>
        </div>
        <div className="space-y-1 text-[8.5px]">
          <p className="text-[#4edea3] leading-none">&gt; Sys: OK 200</p>
          <p className="text-[#00dbe9] truncate leading-none">&gt; Net: Live</p>
          <p className="text-[#b9cacb] animate-pulse leading-none">&gt; Shell active_</p>
        </div>
      </div>

      {/* Social / Dispatch External Links */}
      <div className="flex items-center justify-center space-x-2 pt-2 border-t border-[#3b494b]/20 w-full text-[#849495]">
        <button
          onClick={() => onNavigate('#projects-section')}
          className="hover:text-[#00f0ff] transition-colors p-1"
          title="CODE // Projects"
          aria-label="View Code Projects"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={() => onNavigate('#contact-section')}
          className="hover:text-[#00f0ff] transition-colors p-1"
          title="FEED // RSS Feed"
          aria-label="View Live Feed"
        >
          <Rss className="w-4 h-4" />
        </button>
        <button
          onClick={() => onNavigate('#skills-section')}
          className="hover:text-[#00f0ff] transition-colors p-1"
          title="BROADCAST // Skills"
          aria-label="View Skills Broadcast"
        >
          <Radio className="w-4 h-4" />
        </button>
        <button
          onClick={() => onNavigate('#contact-section')}
          className="hover:text-[#00f0ff] transition-colors p-1"
          title="MAIL // Dispatch"
          aria-label="Send Dispatch Mail"
        >
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
