import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-8"
          >
            Portfolio of Life
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-light text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[1.1] mb-6"
          >
            Artist—Founder—
            <br />
            Researcher
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-body text-xl md:text-2xl text-charcoal/70 max-w-2xl leading-relaxed mb-12"
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
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
    </section>
  );
}
