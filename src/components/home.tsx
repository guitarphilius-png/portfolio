import { useState, useEffect } from "react";
import Hero from "./portfolio/Hero";
import Navigation from "./portfolio/Navigation";
import About from "./portfolio/About";
import DiptokSection from "./portfolio/DiptokSection";
import ExperimentsSection from "./portfolio/ExperimentsSection";
import TheorySection from "./portfolio/TheorySection";
import Contact from "./portfolio/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "diptok", "experiments", "theory", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        } else if (sectionId === "hero" && window.scrollY < 100) {
          setActiveSection("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-cream">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <About />
      <DiptokSection />
      <ExperimentsSection />
      <TheorySection />
      <Contact onNavigate={handleNavigate} />
    </div>
  );
}
