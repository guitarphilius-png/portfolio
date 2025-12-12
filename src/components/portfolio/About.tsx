import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="min-h-screen bg-cream py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-8">
              01 / About
            </p>
            
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 sm:mb-12 leading-tight">
              Bridging Computational
              <br />
              Media & Urban Systems
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8 sm:mt-12 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-charcoal mb-6">Background</h3>
              <p className="font-body text-charcoal/70 leading-[1.7] mb-6">
                My work exists at the intersection of computational media, urban infrastructure, 
                and critical theory. Through a practice that spans artistic intervention, 
                technological development, and theoretical inquiry, I investigate how digital 
                systems reshape our understanding of space, identity, and collective experience.
              </p>
              <p className="font-body text-charcoal/70 leading-[1.7]">
                This portfolio documents experiments in computational aesthetics, urban sensing, 
                and media archaeology—each project asking how we might build more thoughtful, 
                equitable technological futures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-charcoal mb-6">Approach</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-amber pl-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-2">
                    Systems Thinking
                  </h4>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Understanding technology as embedded within social, political, and ecological networks
                  </p>
                </div>
                <div className="border-l-2 border-amber pl-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-2">
                    Critical Making
                  </h4>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Building prototypes that question assumptions and reveal hidden structures
                  </p>
                </div>
                <div className="border-l-2 border-amber pl-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-2">
                    Interdisciplinary Research
                  </h4>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Drawing from media theory, urban studies, and computational design
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pull Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 sm:mt-16 md:mt-24 border-l-4 border-amber pl-4 sm:pl-8 md:pl-12 py-6 sm:py-8"
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal/90 leading-relaxed italic">
              "Technology is never neutral—it carries the values, biases, and power structures 
              of its creators. My work seeks to make these invisible forces visible."
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
