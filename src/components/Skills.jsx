import { skillCategories } from "../data/skillsData";

export default function Skills() {

  return (
    <section
      id="skills"
      aria-label="Skills Section"
      className="relative w-full min-h-screen flex flex-col justify-start border border-red-500 p-4 sm:p-8 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center border border-red-500 p-4 rounded-xl mb-6">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
          TECH STACK & COMPETENCIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
          SKILLS & EXPERTISE
        </h2>
        <div className="w-12 h-0.5 bg-red-500 mt-3" />
      </div>

      {/* Skills Grid / Categorized Cards: Supports nth items, max 4 per row, centered when odd/leftover */}
      <div className="flex flex-wrap justify-center gap-4 flex-1">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className="flex flex-col border border-red-500 p-4 rounded-xl w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] xl:w-[calc(25%-0.75rem)] max-w-sm self-stretch"
          >
            {/* Card Header */}
            <div className="border border-red-500 px-3 py-2 rounded-lg mb-4 text-center">
              <h3 className="text-xs sm:text-sm font-bold tracking-wider">
                {group.title}
              </h3>
            </div>

            {/* Skill Items List: Shows all skills with uniform spacing */}
            <div className="flex flex-col gap-2 flex-1">
              {group.skills.map((skill) => (
                <div
                  key={typeof skill === "string" ? skill : skill.name}
                  className="flex items-center justify-between border border-red-500/60 p-2.5 rounded-lg text-xs sm:text-sm font-mono hover:border-red-500 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {/* Icon Slot / Wireframe Placeholder */}
                    <span
                      title={typeof skill === "object" ? skill.icon : "icon"}
                      className="w-5 h-5 flex items-center justify-center border border-red-500 rounded text-[9px] font-bold text-red-500 uppercase shrink-0"
                    >
                      {typeof skill === "object" && skill.icon
                        ? skill.icon.slice(0, 2)
                        : "</>"}
                    </span>
                    <span>{typeof skill === "string" ? skill : skill.name}</span>
                  </div>

                  {/* Tag / indicator placeholder */}
                  <span className="text-[10px] tracking-widest border border-red-500 px-1.5 py-0.5 rounded shrink-0">
                    STACK
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Wireframe Footer / Note */}
      <div className="mt-8 flex items-center justify-between border border-red-500 p-3 rounded-lg text-xs font-mono">
        <span>// CONTINUOUSLY EXPANDING TECH STACK</span>
        <span>WIREFRAME V1</span>
      </div>
    </section>
  );
}
