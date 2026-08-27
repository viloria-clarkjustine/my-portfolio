import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero id="home" />
                <Experience id="experience" />
                <Projects id="projects" />
              </>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
