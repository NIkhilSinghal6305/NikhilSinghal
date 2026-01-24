import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

const LandingPage = () => {
  const location = useLocation();
  const NAVBAR_HEIGHT = 80; // same height used in navbar logic

  useEffect(() => {
    const id = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(id);

    if (el) {
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col gap-20">
      <section id="home" className="scroll-mt-[72px] md:scroll-mt-[80px]"
>
        <Home />
      </section>

      <section id="about" className="scroll-mt-[72px] md:scroll-mt-[80px]">
        <About />
      </section>

      <section id="skills" className="scroll-mt-[72px] md:scroll-mt-[80px]">
        <Skills />
      </section>

      <section id="project" className="scroll-mt-[72px] md:scroll-mt-[80px]">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-[72px] md:scroll-mt-[80px]">
        <Contact />
      </section>
    </div>
  );
};

export default LandingPage;
