import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    period: "1960s–1990s",
    influence: "Production of Space",
    keyIdeas: ["Production of space", "Spatial practice", "Everyday life as political"],
    relevance:
      "Lefebvre provides the foundation for my work on how space is produced rather than given. His insistence that space is socially constructed informs my analysis of how digital platforms, infrastructures, and interfaces generate new spatial logics and redistribute agency.",
  },
  {
    id: 2,
    name: "Maurice Merleau-Ponty",
    period: "1940s–1960s",
    influence: "Phenomenology",
    keyIdeas: ["Embodied perception", "Lived experience", "Body–world entanglement"],
    relevance:
      "Merleau-Ponty grounds my understanding of perception as embodied and situated. His work underpins my belief that meaning emerges through lived engagement with environments, shaping how I approach spatial interfaces, proxemics, and human–AI perception.",
  },
  {
    id: 3,
    name: "James J. Gibson",
    period: "1950s–1970s",
    influence: "Ecological Psychology",
    keyIdeas: ["Affordances", "Perception–action coupling", "Environment as active"],
    relevance:
      "Gibson’s concept of affordances directly informs my framework for how environments make action possible. His ecological view of perception supports my work on environments as active participants in cognition rather than passive backdrops.",
  },
  {
    id: 4,
    name: "Edward T. Hall",
    period: "1950s–1970s",
    influence: "Proxemics & Cultural Anthropology",
    keyIdeas: ["Proxemics", "Culturally mediated space", "The silent language"],
    relevance:
      "Hall’s work shapes my understanding of space as culturally encoded. His insights into distance, movement, and context inform my research on cultural world models and the limits of purely geometric or statistical approaches to spatial intelligence.",
  },
  {
    id: 5,
    name: "Gordon Pask",
    period: "1960s–1990s",
    influence: "Cybernetics & Systems Theory",
    keyIdeas: ["Conversation theory", "Cybernetic feedback", "Learning systems"],
    relevance:
      "Pask’s cybernetic view of learning and conversation underpins my treatment of communities as metacognitive systems. His work informs how I design feedback loops, participatory interfaces, and environments that adapt through interaction.",
  },
  {
    id: 6,
    name: "Katherine McKittrick",
    period: "2000s–Present",
    influence: "Black Geographies",
    keyIdeas: ["Black spatial thought", "Demonic grounds", "Geography as lived experience"],
    relevance:
      "McKittrick anchors my work in the realities of race, place, and history. Her articulation of Black spatial life ensures that my frameworks for space and computation remain accountable to lived experience rather than abstract universals.",
  },
];

export default function TheorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTheorist, setSelectedTheorist] = useState<Theorist | null>(null);

  return (
    <section
      ref={ref}
      id="theory"
      className="min-h-screen bg-white py-16 sm:py-24 md:py-32"
    >
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
