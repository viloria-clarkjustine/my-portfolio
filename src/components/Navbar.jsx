export default function Navbar() {
  const handleNavigation = (e) => {
    setTimeout(() => {
      window.history.replaceState(null, null, window.location.pathname);
    }, 0);
  };

  return (
    <nav className="sticky top-0 debug flex justify-center items-center py-2">
      <div className="flex justify-center items-center rounded-full p-1.5 gap-4 bg-card/20">
        <a
          href="#home"
          className="flex justify-center items-center rounded-full text-black p-2 bg-brand bg-card/90"
          onClick={handleNavigation}
          aria-label="Home"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 320"
          >
            <rect x="0" y="64" width="64" height="65" fill="currentColor" />
            <rect x="0" y="128" width="64" height="65" fill="currentColor" />
            <rect x="0" y="192" width="64" height="65" fill="currentColor" />
            <rect x="64" y="0" width="64" height="65" fill="currentColor" />
            <rect x="64" y="256" width="64" height="65" fill="currentColor" />
            <rect x="128" y="64" width="64" height="65" fill="currentColor" />
            <rect x="128" y="192" width="64" height="65" fill="currentColor" />
            <rect x="192" y="256" width="64" height="65" fill="currentColor" />
            <rect x="256" y="0" width="64" height="65" fill="currentColor" />
            <rect x="256" y="64" width="64" height="65" fill="currentColor" />
            <rect x="256" y="128" width="64" height="65" fill="currentColor" />
            <rect x="256" y="192" width="64" height="65" fill="currentColor" />
            <rect x="320" y="256" width="64" height="65" fill="currentColor" />
            <rect x="384" y="192" width="64" height="65" fill="currentColor" />
            <rect x="448" y="0" width="64" height="65" fill="currentColor" />
            <rect x="448" y="64" width="64" height="65" fill="currentColor" />
            <rect x="448" y="128" width="64" height="65" fill="currentColor" />
          </svg>
        </a>
        <a
          href="#experience"
          className="flex items-center p-3 rounded-full hover:bg-card/50 hover:text-black transition font-bold gap-2"
          onClick={handleNavigation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-briefcase-business-icon lucide-briefcase-business"
          >
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
          Experience
        </a>
        <a
          href="#projects"
          className="flex items-center p-3 rounded-full hover:bg-card/50 hover:text-black transition font-bold gap-2"
          onClick={handleNavigation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-folder-kanban-icon lucide-folder-kanban"
          >
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            <path d="M8 10v4" />
            <path d="M12 10v2" />
            <path d="M16 10v6" />
          </svg>
          Projects
        </a>
        <a
          href=""
          className="flex items-center p-3 rounded-full bg-card/90 text-black font-bold gap-2"
          onClick={handleNavigation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          viloria.clarkj@gmail.com
        </a>
      </div>
    </nav>
  );
}
