import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen border border-red-500">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}
