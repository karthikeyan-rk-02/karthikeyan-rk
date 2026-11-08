import React from 'react';
import { Clock, Menu, X, Terminal, Code, Tag, User, Radio } from 'lucide-react';

interface TopNavBarProps {
  activeSection: string;
  currentTime: string;
  onNavigate: (sectionId: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeSection,
  currentTime,
  onNavigate,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const navItems = [
    { id: 'hero-section', label: 'HOME' },
    { id: 'projects-section', label: 'PROJECTS' },
    { id: 'skills-section', label: 'SKILLS' },
    { id: 'contact-section', label: 'CONTACT' },
  ];

  return (
    <>
      <header className="fixed top-0 right-0 left-0 sm:left-24 md:left-28 h-12 bg-[#060e1d]/85 border-b border-[#3b494b]/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,240,255,0.05)] flex items-center justify-between px-4 sm:px-6 z-30 select-none">
        {/* Brand Path & Breadcrumb */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 rounded border border-[#3b494b]/40 text-[#00f0ff] hover:bg-[#17202f] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onNavigate('#hero-section')}
            className="text-left flex items-center space-x-2"
          >
            <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-widest text-[#00dbe9]">
              KARTHIKEYAN.DEV
            </span>
          </button>
          <span className="text-[#3b494b] font-mono hidden xs:inline">|</span>
          <div className="hidden md:flex items-center space-x-1.5 font-mono text-[11px] text-[#00f0ff]">
            <span className="text-[#3b494b]">&gt;</span>
            <span className="font-bold tracking-wider">FULL-STACK DEVELOPER</span>
          </div>
        </div>

        {/* Top Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-6" aria-label="Desktop Top Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(`#${item.id}`)}
                className={`font-mono text-[11px] tracking-wider transition-all cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#7df4ff] font-bold border-b-2 border-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]'
                    : 'text-[#b9cacb] font-medium hover:text-[#7df4ff] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Live Telemetry Status & System Clock */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Status Badge */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#65f2b5]/10 border border-[#4edea3]/40 shadow-[0_0_10px_rgba(101,242,181,0.2)]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] pulse-dot"></span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#6ffbbe] font-bold tracking-wider whitespace-nowrap">
              AVAILABLE FOR WORK
            </span>
          </div>
          <span className="text-[#3b494b] font-mono hidden sm:inline">|</span>

          {/* System Clock */}
          <div className="hidden sm:flex items-center space-x-1.5 font-mono text-[11px] text-[#00dbe9]">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-medium">{currentTime}</span>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 sm:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 bottom-0 w-72 bg-[#060e1d] border-r border-[#00f0ff]/30 p-6 flex flex-col justify-between shadow-[8px_0_30px_rgba(0,240,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#3b494b]/40 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded border border-[#00f0ff] bg-[#17202f] flex items-center justify-center text-[#00f0ff]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono font-bold text-[#00f0ff] text-sm block">K.DEV HUD</span>
                    <span className="font-mono text-[9px] text-[#849495] block">V2.0.4 // REMOTE</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-[#b9cacb] hover:text-[#00f0ff]"
                  aria-label="Close menu drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-3">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(`#${item.id}`);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded border text-left font-mono text-xs tracking-wider transition-all ${
                        isActive
                          ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-[#00f0ff] font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                          : 'border-[#3b494b]/30 bg-[#17202f]/40 text-[#b9cacb] hover:text-[#dae2f8] hover:border-[#00dbe9]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[#00f0ff] text-[10px]">&gt;</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Status */}
            <div className="pt-4 border-t border-[#3b494b]/30 font-mono text-[10px] text-[#849495] space-y-2">
              <div className="flex items-center justify-between">
                <span>SYSTEM CLOCK:</span>
                <span className="text-[#00f0ff]">{currentTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>STATUS:</span>
                <span className="text-[#6ffbbe]">● ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
