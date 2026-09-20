import standingImg from "../assets/standing_transparent_bg.png";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative w-full min-h-screen flex flex-col justify-start border border-red-500 p-4 sm:p-8 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center border border-red-500 p-4 rounded-xl mb-6">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
          BACKGROUND & PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
          ABOUT ME
        </h2>
        <div className="w-12 h-0.5 bg-red-500 mt-3" />
      </div>

      {/* Main Content Grid: Image Left, Info Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto w-full flex-1 items-stretch">
        {/* Left Column: Standing Cutout Image */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center border border-red-500 sm:p-6 rounded-xl relative overflow-hidden bg-red-500/5">
          {/* Subtle Tag */}
          <div className="absolute top-3 left-3 border border-red-500 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider">
            FIGURE // STANDING
          </div>

          <div className="relative z-10 flex items-center justify-center w-full h-full max-h-137.5 pt-10">
            <img
              src={standingImg}
              alt="Clark Justine Viloria Standing"
              className="h-auto max-h-1250 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right Column: 1-Sentence Summary + Education */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          {/* Top Card: Summary */}
          <div className="flex flex-col border border-red-500 p-6 sm:p-8 rounded-xl flex-1 justify-center">
            <div className="flex items-center justify-between border-b border-red-500 pb-3 mb-5">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-red-500">
                // SUMMARY
              </span>
              <span className="text-[10px] font-mono border border-red-500 px-2 py-0.5 rounded uppercase">
                FULL-STACK & UI/UX
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-mono leading-relaxed text-neutral-800">
              “A self-driven full-stack developer who learns by building real
              projects—from early desktop apps to production mobile
              backends—with an emphasis on thoughtful UI/UX and practical
              problem-solving.”
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-red-500/40">
              <span className="text-[10px] font-mono border border-red-500/60 px-2.5 py-1 rounded">
                REACT NATIVE
              </span>
              <span className="text-[10px] font-mono border border-red-500/60 px-2.5 py-1 rounded">
                SUPABASE
              </span>
              <span className="text-[10px] font-mono border border-red-500/60 px-2.5 py-1 rounded">
                FLUTTER
              </span>
              <span className="text-[10px] font-mono border border-red-500/60 px-2.5 py-1 rounded">
                PHP
              </span>
              <span className="text-[10px] font-mono border border-red-500/60 px-2.5 py-1 rounded">
                UI / UX
              </span>
            </div>
          </div>

          {/* Bottom Card: Education */}
          <div className="flex flex-col border border-red-500 p-6 sm:p-8 rounded-xl">
            <div className="flex items-center justify-between border-b border-red-500 pb-3 mb-5">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-red-500">
                // EDUCATION
              </span>
              <span className="text-[10px] font-mono border border-red-500 px-2 py-0.5 rounded uppercase">
                DEGREE
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  University of Rizal System
                </h3>
                <p className="text-sm sm:text-base font-mono opacity-90">
                  Bachelor of Science in Computer Engineering
                </p>
              </div>

              <div className="border border-red-500 px-3 py-1 rounded-full text-xs font-mono font-bold self-start sm:self-center shrink-0">
                June 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
