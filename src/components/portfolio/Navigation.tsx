import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'diptok', label: 'Diptok' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'theory', label: 'Theory' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between py-6">
          <button
            onClick={() => onNavigate('hero')}
            className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal hover:text-amber transition-colors"
          >
            Portfolio
          </button>
          
          <div className="flex items-center gap-8">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`font-body text-sm transition-colors duration-300 relative ${
                  activeSection === section.id
                    ? 'text-amber'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-amber"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
