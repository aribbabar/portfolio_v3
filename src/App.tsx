import { useEffect, useRef, useState } from "react";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const sliderRef = useRef<Glide | null>(null);
  const sliderElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = new Glide(sliderElementRef.current as HTMLElement, {
      type: "slider",
      perView: 1,
      rewind: false,
      gap: 0
    });

    slider.mount();

    slider.on("run", () => {
      setCurrentPageIndex(slider.index);
    });

    sliderRef.current = slider;
  }, []);

  return (
    <div className="App">
      <div ref={sliderElementRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <Home />
            </li>
            <li className="glide__slide">
              <About />
            </li>
            <li className="glide__slide">
              <Projects />
            </li>
            <li className="glide__slide">
              <WorkExperience />
            </li>
          </ul>
        </div>
      </div>
      <Navbar
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
        sliderRef={sliderRef}
      />
    </div>
  );
}

export default App;
