import React, { useState, useEffect } from 'react';
import { SideNavBar } from './components/SideNavBar';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { FooterCommandLine } from './components/FooterCommandLine';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SkillMatrixModal } from './components/SkillMatrixModal';
import { INITIAL_PROJECTS, Project } from './data/portfolioData';
import { filterProjects, formatHUDClock } from './utils/telemetryUtils';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero-section');
  const [currentTime, setCurrentTime] = useState(() => formatHUDClock(new Date()));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Projects filtering and search state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [skillMatrixOpen, setSkillMatrixOpen] = useState<boolean>(false);

  // Interactive Toast notification from CLI
  const [toastMessage, setToastMessage] = useState<{ text: string; isError?: boolean } | null>(null);

  // Live telemetry system clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatHUDClock(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer to track active section smoothly
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero-section', 'projects-section', 'skills-section', 'contact-section'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavigate = (targetSelector: string) => {
    const cleanId = targetSelector.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(cleanId);
    }
  };

  const handleShowToast = (text: string, isError = false) => {
    setToastMessage({ text, isError });
    setTimeout(() => {
      setToastMessage((prev) => (prev?.text === text ? null : prev));
    }, 4500);
  };

  const handleDownloadResume = () => {
    // Generate text/markdown dossier download
    const resumeText = `# KARTHIKEYAN
Full-Stack Developer & Software Architect
Email: karthikeyan.dev@gmail.com | Phone: +91 12345 67890 | Remote / Worldwide

## Core Capabilities
- Frontend: HTML5, CSS3, Tailwind CSS, TypeScript, React 19, Next.js
- Backend: Node.js, Express, REST APIs, GraphQL, Redis
- Systems: Docker, Git, CI/CD, Distributed Edge Computing

## Featured Projects
- NEXUS UI: Modern SaaS Cloud Telemetry Interface (Next.js, Tailwind, TypeScript)
- TASKFLOW: High-throughput Kanban Engine (React, Firebase, Chart.js)
- ECHO PORTFOLIO: Minimalist 3D Web Experience (Three.js, WebGL)
`;
    const blob = new Blob([resumeText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Karthikeyan_Developer_Resume.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    handleShowToast('> RESUME DOSSIER: Karthikeyan_Developer_Resume.md downloaded.');
  };

  // Filtered projects list
  const filteredProjects = filterProjects(INITIAL_PROJECTS, selectedCategory, searchQuery);
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-[#0a1322] text-[#dae2f8] font-body hud-grid relative selection:bg-[#00f0ff] selection:text-[#060e1d]">
      {/* 1. Left HUD Navigation Rail */}
      <SideNavBar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 2. Top HUD Telemetry Header */}
      <TopNavBar
        activeSection={activeSection}
        currentTime={currentTime}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Toast Notification for CLI feedback */}
      {toastMessage && (
        <div
          className={`fixed top-14 right-4 sm:right-8 z-50 px-4 py-2.5 rounded-lg border backdrop-blur-xl font-mono text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all max-w-md ${
            toastMessage.isError
              ? 'bg-[#93000a]/90 border-[#ffb4ab] text-[#ffdad6]'
              : 'bg-[#060e1d]/95 border-[#00f0ff] text-[#00f0ff]'
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-between space-x-2">
            <span>{toastMessage.text}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="text-[#849495] hover:text-[#dae2f8] text-xs ml-2 cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* 3. Main Cockpit Viewport Canvas */}
      <main className="ml-0 sm:ml-24 md:ml-28 pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] space-y-16">
        {/* Section 1: Hero & Persona Telemetry */}
        <HeroSection onNavigate={handleNavigate} onDownloadResume={handleDownloadResume} />

        {/* Section 2: Projects Grid */}
        <ProjectsSection
          projects={displayedProjects}
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(6);
          }}
          searchQuery={searchQuery}
          setSearchQuery={(q) => {
            setSearchQuery(q);
            setVisibleCount(6);
          }}
          onOpenProjectModal={(proj) => setSelectedProject(proj)}
          hasMoreProjects={hasMore}
          onLoadMore={handleLoadMore}
        />

        {/* Section 3: Skills & Telemetry Matrix */}
        <SkillsSection onOpenSkillMatrixModal={() => setSkillMatrixOpen(true)} />

        {/* Section 4: Contact & Dispatch Console */}
        <ContactSection currentTime={currentTime} />
      </main>

      {/* 4. Bottom Command Line Footer */}
      <FooterCommandLine
        onNavigate={handleNavigate}
        onShowTerminalToast={handleShowToast}
        onDownloadResume={handleDownloadResume}
      />

      {/* Interactive Modals */}
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <SkillMatrixModal isOpen={skillMatrixOpen} onClose={() => setSkillMatrixOpen(false)} />
    </div>
  );
}
