import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen border border-red-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
