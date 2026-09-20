import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="relative w-full min-h-screen flex flex-col justify-start border border-red-500 p-4 sm:p-8 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center border border-red-500 p-4 rounded-xl mb-6">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
          FEATURED WORK & CASE STUDIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
          PROJECTS
        </h2>
        <div className="w-12 h-0.5 bg-red-500 mt-3" />
      </div>

      {/* Projects List / Grid */}
      <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full flex-1">
        {projectsData.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="flex flex-col border border-red-500 p-4 sm:p-6 rounded-xl relative"
          >
            {/* Top Meta Bar: Title, Category & Status */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border border-red-500 p-3 rounded-lg mb-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-2xl font-black tracking-wide">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono opacity-60">—</span>
                  <span className="text-xs sm:text-sm font-mono text-red-500 font-semibold">
                    {project.tagline}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono opacity-90 mt-1">
                  <span className="text-[10px] sm:text-xs font-mono border border-red-500 px-2 py-0.5 rounded uppercase">
                    {project.category}
                  </span>
                  {project.period && (
                    <>
                      <span>•</span>
                      <span className="border border-red-500/60 px-2 py-0.5 rounded text-[11px] sm:text-xs">
                        {project.period}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Wireframe Action Slots / Demo Links */}
              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <span className="border border-red-500 px-3 py-1 rounded-full text-xs font-mono font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
                  [ DEMO / PREVIEW ]
                </span>
                <span className="border border-red-500 px-3 py-1 rounded-full text-xs font-mono font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
                  [ SOURCE CODE ]
                </span>
              </div>
            </div>

            {/* Key Impact & Metrics Wireframe Cards */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {project.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex flex-col justify-center border border-red-500/80 p-3 rounded-lg text-center"
                  >
                    <span className="text-base sm:text-lg font-black text-red-500 font-mono">
                      {metric.value}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider opacity-80 mt-1">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Visual Preview / Architecture Wireframe Placeholder */}
            <div className="border border-dashed border-red-500/70 p-6 rounded-lg mb-4 flex flex-col items-center justify-center text-center bg-red-500/5 min-h-[140px]">
              <div className="w-10 h-10 border border-red-500 rounded flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-500">
                // APPLICATION SCREENSHOT & ARCHITECTURE DIAGRAM SLOT
              </span>
              <span className="text-[11px] font-mono opacity-70 mt-0.5">
                ExaLyze Mobile Flow • Roboflow / YOLOv11 OMR Pipeline • Supabase DB Schema
              </span>
            </div>

            {/* Key Deliverables & Engineering Contributions */}
            <div className="border border-red-500/60 p-3 rounded-lg mb-4">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-red-500 mb-2">
                // CORE DELIVERABLES & TECHNICAL ACCOMPLISHMENTS
              </span>
              <ul className="flex flex-col gap-2">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm font-mono"
                  >
                    <span className="w-4 h-4 flex items-center justify-center border border-red-500 rounded text-[9px] font-bold text-red-500 shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider border border-red-500 px-2 py-1 rounded shrink-0">
                STACK
              </span>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono border border-red-500/60 px-2.5 py-1 rounded-md hover:border-red-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Wireframe Footer / Note */}

    </section>
  );
}
