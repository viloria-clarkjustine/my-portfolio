import { experiencesData } from "../data/experienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience Section"
      className="relative w-full min-h-screen flex flex-col justify-start border border-red-500 p-4 sm:p-8 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center border border-red-500 p-4 rounded-xl mb-6">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
          CAREER & WORK HISTORY
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
          WORK EXPERIENCE
        </h2>
        <div className="w-12 h-0.5 bg-red-500 mt-3" />
      </div>

      {/* Experience List / Timeline Cards */}
      <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full flex-1">
        {experiencesData.map((exp, index) => (
          <article
            key={`${exp.company}-${index}`}
            className="flex flex-col border border-red-500 p-4 sm:p-6 rounded-xl relative"
          >
            {/* Top Meta Bar: Role, Company, Project & Badges */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border border-red-500 p-3 rounded-lg mb-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold tracking-wide">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono opacity-60">—</span>
                  <span className="font-semibold text-red-500 text-sm sm:text-base">
                    {exp.company}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono opacity-90 mt-0.5">
                  <span className="text-[10px] sm:text-xs font-mono border border-red-500 px-2 py-0.5 rounded uppercase">
                    {exp.type}
                  </span>
                  {exp.project && (
                    <>
                      <span>•</span>
                      <span className="border border-red-500/60 px-2 py-0.5 rounded text-[11px] sm:text-xs">
                        {exp.project}
                      </span>
                    </>
                  )}
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Period Badge */}
              <div className="border border-red-500 px-3 py-1 rounded-full text-xs font-mono font-semibold self-start sm:self-center shrink-0">
                {exp.period}
              </div>
            </div>

            {/* Optional Summary Description */}
            {exp.description && (
              <p className="text-xs sm:text-sm font-mono leading-relaxed mb-4 border border-red-500/60 p-3 rounded-lg">
                {exp.description}
              </p>
            )}

            {/* Key Contributions & Achievements */}
            <div className="border border-red-500/60 p-3 rounded-lg mb-4">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-red-500 mb-2">
                // KEY HIGHLIGHTS & DELIVERABLES
              </span>
              <ul className="flex flex-col gap-2">
                {exp.achievements.map((item, i) => (
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
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono border border-red-500/60 px-2.5 py-1 rounded-md hover:border-red-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Wireframe Footer / Note */}
      <div className="mt-8 flex items-center justify-between border border-red-500 p-3 rounded-lg text-xs font-mono max-w-5xl mx-auto w-full">
        <span>// CONSTANT LEARNING & DELIVERING VALUE</span>
        <span>WIREFRAME V1</span>
      </div>
    </section>
  );
}
