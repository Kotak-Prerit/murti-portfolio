import { useRef } from "react";
import "./App.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  const brandingRef = useRef(null);
  const modelingRef = useRef(null);
  const posterRef = useRef(null);
  const typefaceRef = useRef(null);
  const photoRef = useRef(null);
  const storybookRef = useRef(null);
  const illustrationRef = useRef(null);

  const projectsRef = useRef(null);
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const sectionRefs = {
    Branding: brandingRef,
    "3D Modelling": modelingRef,
    "Poster Design": posterRef,
    "TypeFace Design": typefaceRef,
    Photography: photoRef,
    "Story Book": storybookRef,
    "Illustrations & Character Designing": illustrationRef,
  };

  return (
    <>
      <div className="app-wrapper">
        <div className="app-container">
          <Header projectsRef={projectsRef} />
          <About />
          <Projects
            refs={{
              brandingRef,
              modelingRef,
              posterRef,
              typefaceRef,
              photoRef,
              storybookRef,
              illustrationRef,
            }}
          />
          <Contact sectionRefs={sectionRefs} />
        </div>
      </div>
    </>
  );
}

export default App;
