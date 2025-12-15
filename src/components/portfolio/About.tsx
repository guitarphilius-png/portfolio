import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-cream py-16 sm:py-24 md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 sm:mb-12 leading-tight">
              How Space, Narrative,
              <br />
              and Systems Shape Agency
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8 sm:mt-12 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-charcoal mb-6">
                Background
              </h3>

              <p className="font-body text-charcoal/70 leading-[1.7] mb-6">
                My work focuses on how environments — physical, digital, and
                social — become meaningful and actionable. I study how space,
                language, and computation shape what people can perceive,
                coordinate around, and ultimately do together.
              </p>

              <p className="font-body text-charcoal/70 leading-[1.7]">
                Rather than treating technology as a neutral tool or space as a
                passive backdrop, I approach both as active participants in
                meaning-making. Environments interpret us as much as we interpret
                them, shaping behavior, attention, and collective possibility.
                Across research, design, and prototyping, my work examines
                communities as sensing systems: groups that think, adapt, and
                imagine futures through shared spaces, narratives, and feedback
                loops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-charcoal mb-6">
                Approach
              </h3>

              <div className="space-y-6">
                <div className="border-l-2 border-amber pl-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-2">
                    Systems Thinking
                  </h4>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Understanding space and technology as coupled systems — where
                    perception, action, and meaning emerge through feedback
                    between people and their environments.
                  </p>
                </div>

                <div className="border-l-2 border-amber pl-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-2">
                    Structural Making
                  </h4>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Building artifacts, interfaces, and experiments that surface
                    hidden assumptions and make abstract systems perceptible at
                    human scale.
                  </p>
                </div>

                <div className="border-l-2 border-amber pl-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-2">
                    Narrative Infrastructure
                  </h4>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Treating language, stories, and shared frames as
                    infrastructure that coordinates action, legitimizes futures,
                    and shapes collective agency.
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
              “Environments are not passive backdrops. They participate in how
              meaning forms, how action becomes possible, and how futures are
              imagined.”
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
