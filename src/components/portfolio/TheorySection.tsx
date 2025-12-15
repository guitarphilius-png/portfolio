import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Theorist {
  id: number;
  name: string;
  period: string;
  influence: string;
  keyIdeas: string[];
  relevance: string;
}

const theorists: Theorist[] = [
  {
    id: 1,
    name: "Henri Lefebvre",
    period: "1960s-1990s",
    influence: "Urban Theory",
    keyIdeas: [
      "Production of space",
      "Right to the city",
      "Spatial practice"
    ],
    relevance: "Lefebvre's critique of how capitalism produces space guides my investigation of how digital technologies create new spatial logics and power relations in urban environments."
  },
  {
    id: 2,
    name: "Merleau-Ponty",
    period: "1940s–1960s",
    influence: "Phenomenology",
    keyIdeas: [
      "Embodied perception",
      "The primacy of lived experience",
      "The body as our primary way of being-in-the-world"
    ],
    relevance: "Merleau-Ponty's account of perception as an embodied, pre-reflective process grounds my belief that AI must model human experience through lived context—not abstraction. His work shapes my approach to proxemic intelligence and cultural life-world modeling."
  },
  {
    id: 3,
    name: "Edward T. Hall",
    period: "1950s–1970s",
    influence: "Cultural Anthropology / Proxemics",
    keyIdeas: [
      "Proxemics",
      "High-context vs. low-context cultures",
      "The silent language of space"
    ],
    relevance: "Hall's understanding of culturally mediated spatial behavior directly informs my research into cultural world models. His insights help me frame AI not as a spatial calculator but as a system that must interpret human distance, movement, and gesture through cultural meaning."
  },
  {
    id: 4,
    name: "Shannon Mattern",
    period: "2000s–Present",
    influence: "Urban Media Studies",
    keyIdeas: [
      "Urban infrastructures as knowledge systems",
      "Media and the built environment",
      "Maintenance, care, and epistemic design"
    ],
    relevance: "Mattern's framing of cities as cognitive infrastructures influences my study of how notifications, platforms, and spatial systems choreograph urban life. Her work inspires my prototypes that treat communities as distributed, thinking ecologies."
  },
  {
    id: 5,
    name: "Katherine McKittrick",
    period: "2000s–Present",
    influence: "Black Geographies",
    keyIdeas: [
      "Black spatial thought",
      "Geography as racialized experience",
      "Place, memory, and liberation"
    ],
    relevance: "McKittrick's articulation of Black spatial life reframes my observations of Harlem, proxemics, and platform-mediated environments. Her work grounds my belief that world models must account for histories of race, place, and inequity."
  }
];

export default function TheorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTheorist, setSelectedTheorist] = useState<Theorist | null>(null);

  return (
    <section ref={ref} id="theory" className="min-h-screen bg-white py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 sm:mb-8 leading-tight">
            Intellectual Lineage
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-charcoal/70 leading-[1.7] max-w-3xl">
            My work draws from critical traditions in phenomenology, cultural anthropology, 
            urban media studies, and Black geographies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-amber/30 hidden md:block" />

          <div className="space-y-12">
            {theorists.map((theorist, index) => (
              <motion.div
                key={theorist.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-amber border-4 border-white hidden md:block" />

                <div className="md:ml-24 bg-cream p-4 sm:p-6 md:p-8 rounded-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-400">
                  <div className="flex items-start justify-between gap-8 mb-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-2">
                        {theorist.name}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                        <span className="font-mono text-xs text-charcoal/60">
                          {theorist.period}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-amber">
                          {theorist.influence}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedTheorist(theorist)}
                      className="font-mono text-xs uppercase tracking-wider text-amber hover:text-charcoal transition-colors whitespace-nowrap mt-2 sm:mt-0"
                    >
                      View Details →
                    </button>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/60 mb-3">
                      Key Ideas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {theorist.keyIdeas.map((idea, i) => (
                        <span
                          key={i}
                          className="font-body text-sm text-charcoal/70 bg-white px-4 py-2 rounded-sm"
                        >
                          {idea}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pull Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto mt-24 border-l-4 border-amber pl-12 py-8"
        >
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal/90 leading-relaxed italic">
            "Theory without practice is empty; practice without theory is blind. 
            My work seeks to hold both in productive tension."
          </p>
        </motion.blockquote>
      </div>

      {/* Theorist Detail Modal */}
      <Dialog open={!!selectedTheorist} onOpenChange={() => setSelectedTheorist(null)}>
        <DialogContent className="max-w-2xl bg-cream">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl text-charcoal">
              {selectedTheorist?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedTheorist && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-charcoal/60">
                  {selectedTheorist.period}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-amber">
                  {selectedTheorist.influence}
                </span>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-3">
                  Key Ideas
                </h4>
                <ul className="space-y-2">
                  {selectedTheorist.keyIdeas.map((idea, i) => (
                    <li key={i} className="font-body text-charcoal/70 flex items-start gap-3">
                      <span className="text-amber mt-1">•</span>
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-sm">
                <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-3">
                  Influence on My Work
                </h4>
                <p className="font-body text-charcoal/70 leading-[1.7]">
                  {selectedTheorist.relevance}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
