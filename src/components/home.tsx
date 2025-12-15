import { useState, useEffect } from "react";
import Navigation from "./portfolio/Navigation";
import About from "./portfolio/About";
import DiptokSection from "./portfolio/DiptokSection";
import ExperimentsSection from "./portfolio/ExperimentsSection";
import TheorySection from "./portfolio/TheorySection";
import Contact from "./portfolio/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "hero" || sectionId === "about") {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "diptok", "experiments", "theory", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        } else if (sectionId === "about" && window.scrollY < 100) {
          setActiveSection("about");
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
      <About />
      <DiptokSection />
      <ExperimentsSection />
      <TheorySection />
      <Contact onNavigate={handleNavigate} />
    </div>
  );
}
