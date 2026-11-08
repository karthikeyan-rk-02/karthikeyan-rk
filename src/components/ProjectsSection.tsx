import React from 'react';
import { Search, ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  projects: Project[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenProjectModal: (project: Project) => void;
  hasMoreProjects: boolean;
  onLoadMore: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onOpenProjectModal,
  hasMoreProjects,
  onLoadMore,
}) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web-apps', label: 'Web Apps' },
    { id: 'e-commerce', label: 'E-Commerce' },
    { id: 'portfolios', label: 'Portfolios' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section className="scroll-mt-20 space-y-6" id="projects-section" aria-label="Projects Section">
      {/* Section Title & Filter Cockpit */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#3b494b]/30">
        <div>
          <span className="font-mono text-[10px] text-[#00f0ff] tracking-widest font-semibold">
            // 02. MY PROJECTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#dae2f8] mt-1">
            Things I've built with <span className="text-[#00f0ff]">passion & code.</span>
          </h2>
          <p className="text-[14px] text-[#b9cacb] mt-1 max-w-2xl">
            A curated selection of high-performance interfaces, cloud engines, and interactive telemetry portals.
          </p>
        </div>

        {/* Filter Chips & Search Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#00f0ff] text-[#060e1d] shadow-[0_0_12px_rgba(0,240,255,0.5)] font-bold'
                    : 'border border-[#3b494b]/40 bg-[#17202f]/30 hover:border-[#00dbe9] text-[#b9cacb] hover:text-[#dae2f8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}

          {/* Search Input */}
          <div className="relative ml-0 sm:ml-2 w-full sm:w-auto mt-2 sm:mt-0">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#849495]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="bg-[#060e1d]/90 border border-[#3b494b]/40 rounded pl-8 pr-3 py-1 font-mono text-[10px] text-[#dae2f8] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] placeholder:text-[#849495] w-full sm:w-48 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-12 border border-[#3b494b]/30 rounded-lg bg-[#060e1d]/60 p-8">
          <p className="font-mono text-sm text-[#00f0ff] mb-2">&gt; NO TELEMETRY UNITS FOUND</p>
          <p className="text-xs text-[#b9cacb]">
            No projects matched category "{selectedCategory}" with query "{searchQuery}". Try resetting filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-1.5 rounded border border-[#00f0ff] bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-xs hover:bg-[#00f0ff] hover:text-[#060e1d] transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isFeatured = project.isFeatured;
            return (
              <div
                key={project.id}
                className={`group bg-[#060e1d]/80 rounded-lg p-5 backdrop-blur-xl relative reticle-corner transition-all flex flex-col justify-between hover:-translate-y-1 ${
                  isFeatured
                    ? 'border border-[#00f0ff]/40 cyan-glow hover:border-[#00f0ff] hover:shadow-[0_0_24px_rgba(0,240,255,0.3)]'
                    : 'border border-[#3b494b]/30 hover:border-[#00dbe9] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                }`}
              >
                <div>
                  {/* Banner / Screen Wireframe */}
                  <div
                    onClick={() => onOpenProjectModal(project)}
                    className="relative w-full h-44 rounded border border-[#3b494b]/30 bg-[#17202f]/50 overflow-hidden mb-4 flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-colors cursor-pointer select-none"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${
                        project.gradientTheme === 'blue'
                          ? 'from-[#060e1d] via-[#7bd0ff]/10 to-transparent'
                          : project.gradientTheme === 'emerald'
                          ? 'from-[#060e1d] via-[#65f2b5]/10 to-transparent'
                          : 'from-[#060e1d] via-[#00f0ff]/10 to-transparent'
                      }`}
                    ></div>

                    <div className="relative text-center p-4">
                      <span
                        className={`font-mono text-[14px] font-bold tracking-wider block mb-1 ${
                          project.gradientTheme === 'blue'
                            ? 'text-[#7bd0ff]'
                            : project.gradientTheme === 'emerald'
                            ? 'text-[#6ffbbe]'
                            : 'text-[#00f0ff]'
                        }`}
                      >
                        {project.bannerTitle}
                      </span>
                      <span className="font-mono text-[11px] text-[#849495] block">
                        {project.bannerSubtitle}
                      </span>
                    </div>

                    {isFeatured && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#00f0ff]/20 border border-[#00f0ff] font-mono text-[10px] text-[#00f0ff] font-bold">
                        Featured
                      </div>
                    )}

                    {project.stats && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#060e1d]/80 border border-[#3b494b]/40 font-mono text-[9px] text-[#4edea3]">
                        {project.stats}
                      </div>
                    )}
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[16px] font-bold text-[#dae2f8] group-hover:text-[#00f0ff] transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-[#849495]">// {project.code}</span>
                  </div>

                  <p className="text-[13px] text-[#b9cacb] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack tags & action links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#17202f] border border-[#3b494b]/30 font-mono text-[10px] text-[#c4e7ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#3b494b]/20 font-mono text-[11px]">
                    <button
                      onClick={() => onOpenProjectModal(project)}
                      className="text-[#00f0ff] hover:text-[#7df4ff] inline-flex items-center space-x-1 font-bold cursor-pointer"
                    >
                      <span>View Project</span>
                      {isFeatured ? <ExternalLink className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                    </button>

                    <button
                      onClick={() => onOpenProjectModal(project)}
                      className="text-[#849495] hover:text-[#dae2f8] inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Source</span>
                      <Code2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Load More Action Banner */}
      {hasMoreProjects && (
        <div className="flex justify-center pt-2">
          <button
            onClick={onLoadMore}
            className="px-6 py-2.5 rounded border border-[#00f0ff]/40 hover:border-[#00f0ff] bg-[#060e1d]/80 text-[#00f0ff] font-mono text-[11px] font-semibold tracking-wider hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer active:scale-95"
          >
            &gt; LOAD MORE PROJECTS
          </button>
        </div>
      )}
    </section>
  );
};
