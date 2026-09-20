import { useState, useEffect } from "react";
import logo from "../assets/pattern_square.png";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const email = "viloria.clarkj@gmail.com";

  useEffect(() => {
    const heroElement = document.getElementById("home");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide navbar whenever any part of hero section is visible
        // Only show navbar once the view has completely scrolled beyond the hero section
        setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 border border-red-500 p-2 bg-white/80 backdrop-blur-md transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* 1. Logo Container (Left) */}
      <div className="flex items-center justify-center border border-red-500 p-2 rounded-full">
        <a
          href="#home"
          aria-label="Home"
          title="Home"
          className="flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
        >
          <img
            src={logo}
            alt="Site Logo"
            className="w-6 h-6 object-contain"
          />
        </a>
      </div>

      {/* 2. Navigation Container (Center - Icons) */}
      <ul className="flex items-center gap-4 border border-red-500 p-2 rounded-full">
        <li>
          <a
            href="#about"
            aria-label="About Me"
            title="About Me"
            className="inline-flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
          >
            {/* About Me / User Profile Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            aria-label="Skills"
            title="Skills"
            className="inline-flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
          >
            {/* Skills / Code & Terminal Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            aria-label="Experience"
            title="Experience"
            className="inline-flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
          >
            {/* Experience / Briefcase Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            aria-label="Projects"
            title="Projects"
            className="inline-flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
          >
            {/* Projects / Folder or Code Window Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#socials"
            aria-label="Socials"
            title="Socials"
            className="inline-flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
          >
            {/* Socials / Network Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </a>
        </li>
      </ul>

      {/* 3. Quick Access Container (Right) */}
      <div className="flex items-center gap-3 border border-red-500 p-2 rounded-full">
        <button
          type="button"
          onClick={handleCopyEmail}
          title="Click to copy email"
          aria-label="Copy email to clipboard"
          className="inline-flex items-center gap-2 border border-red-500 px-4 py-2 rounded-full text-sm cursor-pointer"
        >
          <span>{copied ? "Copied!" : email}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {copied ? (
              <polyline points="20 6 9 17 4 12" />
            ) : (
              <>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </>
            )}
          </svg>
        </button>
        <a
          href="#resume"
          aria-label="Resume"
          title="Resume"
          className="inline-flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
        >
          {/* Resume Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
