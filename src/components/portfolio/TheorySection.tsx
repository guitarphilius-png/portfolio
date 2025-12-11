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
    name: "Marshall McLuhan",
    period: "1960s-1980s",
    influence: "Media Theory",
    keyIdeas: [
      "The medium is the message",
      "Hot and cool media",
      "Global village"
    ],
    relevance: "McLuhan's understanding of how media technologies reshape human consciousness and social organization informs my approach to computational systems as more than neutral tools—they fundamentally alter how we perceive and interact with reality."
  },
  {
    id: 2,
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
    id: 3,
    name: "Donna Haraway",
    period: "1980s-Present",
    influence: "Feminist Technoscience",
    keyIdeas: [
      "Cyborg theory",
      "Situated knowledges",
      "Staying with the trouble"
    ],
    relevance: "Haraway's insistence on partial perspectives and accountability in knowledge production shapes my commitment to reflexive, community-centered research methodologies."
  },
  {
    id: 4,
    name: "Langdon Winner",
    period: "1970s-Present",
    influence: "Philosophy of Technology",
    keyIdeas: [
      "Do artifacts have politics?",
      "Technological determinism",
      "Democratic technology"
    ],
    relevance: "Winner's argument that technologies embody political values drives my practice of interrogating the assumptions and power structures embedded in computational systems."
  },
  {
    id: 5,
    name: "Ruha Benjamin",
    period: "2010s-Present",
    influence: "Race & Technology",
    keyIdeas: [
      "The New Jim Code",
      "Discriminatory design",
      "Abolitionist tools"
    ],
    relevance: "Benjamin's analysis of how technology can encode and amplify racial inequity informs my focus on making algorithmic bias visible and developing more equitable technological practices."
  }
];

export default function TheorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTheorist, setSelectedTheorist] = useState<Theorist | null>(null);

  return (
    <section ref={ref} id="theory" className="min-h-screen bg-white py-32">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-8">
            04 / Theoretical Foundations
          </p>
          
          <h2 className="font-display font-light text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
            Intellectual Lineage
          </h2>
          
          <p className="font-body text-xl text-charcoal/70 leading-[1.7] max-w-3xl">
            My work draws from critical traditions in media theory, urban studies, 
            feminist technoscience, and philosophy of technology.
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

                <div className="md:ml-24 bg-cream p-8 rounded-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-400">
                  <div className="flex items-start justify-between gap-8 mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-charcoal mb-2">
                        {theorist.name}
                      </h3>
                      <div className="flex items-center gap-4">
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
                      className="font-mono text-xs uppercase tracking-wider text-amber hover:text-charcoal transition-colors whitespace-nowrap"
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
          <p className="font-display text-3xl text-charcoal/90 leading-relaxed italic">
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
