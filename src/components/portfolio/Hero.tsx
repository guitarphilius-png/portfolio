import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-[1.1] mb-6"
              >
                Artist—Founder—
                <br />
                Researcher
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-body text-lg sm:text-xl md:text-2xl text-charcoal/70 max-w-2xl leading-relaxed mb-8 sm:mb-12"
              >
                A research portfolio exploring the intersections of computational media, 
                urban systems, and critical theory for MIT Media Lab Critical Matter.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                onClick={() => onNavigate('about')}
                className="group flex items-center gap-3 text-charcoal hover:text-amber transition-colors duration-300"
              >
                <span className="font-mono text-sm uppercase tracking-wider">Explore Work</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Right Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full h-full max-h-[600px] overflow-hidden rounded-sm bg-charcoal/5">
                {!imageError ? (
                  <img
                    src="/hero-photo.jpg"
                    alt="Jean Philius"
                    className="w-full h-full object-cover object-center"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <p className="font-mono text-xs text-charcoal/40 text-center">
                      Add your photo as<br />
                      <span className="text-amber/60">/public/hero-photo.jpg</span>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
    </section>
  );
}
