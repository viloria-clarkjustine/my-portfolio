// import standingImg from "../assets/standing_transparent_bg.png";
import sittingImg from "../assets/sitting_transparent_bg.png";

export default function Hero() {
  const ctaButtons = [
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SOCIALS", href: "#socials" },
    { label: "RESUME", href: "#resume" },
  ];

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden border border-red-500 p-4 sm:p-8 select-none"
    >
      {/* Top Row: Tagline / Subtitle */}
      <div className="flex items-start justify-between z-20">
        <div className="border border-red-500 p-3 rounded-lg max-w-xs sm:max-w-sm">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase leading-relaxed">
            JUNIOR FULL-STACK DEVELOPER
          </p>
          <p className="text-[11px] sm:text-xs font-mono tracking-wider opacity-80 mt-0.5">
            RIZAL, PHILIPPINES
          </p>
          <div className="w-8 h-0.5 bg-red-500 mt-2" />
        </div>

        {/* Status or subtle indicator */}
        <div className="hidden sm:flex items-center gap-2 border border-red-500 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>

      {/* Center Stage: Huge Stacked Typography + Overlapping Cutout Figure */}
      <div className="relative flex-1 flex items-center justify-center my-4 sm:my-0">
        {/* Massive Background Typography: CLARK over JUSTINE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
          <div className="flex flex-col items-center justify-center leading-none tracking-tighter font-black text-center text-[18vw] md:text-[13vw] lg:text-[18vw] border border-red-500/40 p-2 rounded-xl">
            <span className="leading-[0.82] block">CLARK</span>
            <span className="leading-[0.82] block">JUSTINE</span>
          </div>
        </div>

        {/* Center Foreground Cutout Image */}
        <div className="relative z-10 flex items-end justify-center h-full max-h-[65vh] sm:max-h-[70vh] border border-red-500 p-2 rounded-2xl pointer-events-none">
          <img
            src={sittingImg}
            alt="Clark Justine Viloria"
            className="h-auto max-h-[58vh] sm:max-h-[64vh] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Bottom Row: 4 Action Buttons (SKILLS, EXPERIENCE, SOCIALS, RESUME) */}
      <div className="flex items-center justify-center w-full z-20">
        {/* 4 Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border border-red-500 p-2 rounded-full">
          {ctaButtons.map((btn, idx) => (
            <a
              key={btn.label}
              href={btn.href}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider rounded-full border border-red-500 transition-colors ${
                idx === 3
                  ? "bg-red-500 text-white hover:bg-transparent hover:text-inherit"
                  : "hover:bg-red-500 hover:text-white"
              }`}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
