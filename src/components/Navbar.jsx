import logo from "../assets/pattern_square.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center border border-red-500 p-2">
      <ul className="flex items-center gap-4 border border-red-500 p-2 rounded-full">
        <li>
          <a
            href="#home"
            aria-label="Home"
            className="flex items-center justify-center w-10 h-10 border border-red-500 rounded-full"
          >
            <img
              src={logo}
              alt="Site Logo"
              className="w-6 h-6 object-contain"
            />
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="inline-flex items-center justify-center border border-red-500 px-4 py-2 rounded-full"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="inline-flex items-center justify-center border border-red-500 px-4 py-2 rounded-full"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#socials"
            className="inline-flex items-center justify-center border border-red-500 px-4 py-2 rounded-full"
          >
            Socials
          </a>
        </li>
      </ul>
    </nav>
  );
}
