import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experiment {
  id: number;
  title: string;
  category: string;
  year: string;
  domain: string;
  summary: string;
  methodology: string;
  findings: string;
  relevance: string;
}

const experiments: Experiment[] = [
  {
    id: 1,
    title: "When a City Thinks Together: Food, Constraints, and Collective Agency (Corbin Hill Food Project)",
    category: "Systems",
    year: "Ongoing",
    domain: "Community Infrastructure",
    summary:
      "A community-run food distribution system operating at the intersection of public health, urban logistics, and mutual aid. This project examines how constraints, space, and platform infrastructures co-produce collective intelligence in everyday operations.",
    methodology:
      "Embedded field observation through volunteer participation in last-mile food distribution. Attention was placed on constraint negotiation (materials, time, labor), spatial organization, platform coordination (DoorDash/Uber), and the emergence of tacit logistical knowledge during live operations.\n\nKey signals:\n\n“Embedded”\n\n“Constraint negotiation”\n\n“Emergence”\n\n“Live operations”",
    findings:
      "• Collective agency emerges through constraint-aware improvisation rather than centralized optimization.\n• Urban platforms function as environmental actors, shaping cognition and workflow without direct control.\n• Tacit, embodied knowledge (folding, packing, routing) operates as a distributed intelligence layer rarely captured by formal systems.",
    relevance:
      "This project frames community infrastructure as a thinking system, where space, tools, and platforms co-produce action. It aligns with Critical Matter’s focus on how power, computation, and material conditions shape lived environments.",
  },
  {
    id: 2,
    title: "Architecting Narrative Infrastructure for Communities",
    category: "Media",
    year: "2025",
    domain: "Pollen8 Storythinking Lab",
    summary:
      "Pollen8 Storythinking Lab explores how communities make meaning together across digital and physical spaces. We asked: how might environments invite stories to emerge through participation, lived experience, and reflection rather than top-down messaging?",
    methodology:
      "We partnered with community builders as design collaborators and studied how conversations, rituals, spatial practices, and digital tools shape collective understanding over time. The work blended observation of everyday practices, lightweight prototypes, and participatory design experiments.",
    findings:
      "• Communities need shared frames to orient meaning-making.\n• Meaning emerges from patterns of interaction rather than single broadcasts.\n• Tools shape behavior subtly through defaults, visibility, and timing.\n• Small design decisions can flatten stories or help them grow.\nWe learned narrative is not something you broadcast—it is something you host.",
    relevance:
      "Treating narrative as infrastructure aligns with Critical Matter’s attention to how material, digital, and social systems shape experience. The project surfaces questions about who defines meaning, whose stories persist, and how computation can support community sense-making.",
  },
  {
    id: 3,
    title: "Adipisicing elit sed",
    category: "Urban",
    year: "2025",
    domain: "Placeholder",
    summary:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
    methodology:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    findings:
      "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    relevance:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
];

const categories = ["All", "Systems", "Urban", "Media"];

export default function ExperimentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExperiments =
    activeCategory === "All"
      ? experiments
      : experiments.filter((exp) => exp.category === activeCategory);

  return (
    <section ref={ref} id="experiments" className="min-h-screen bg-cream py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 sm:mb-8 leading-tight">
            Selected Work
          </h2>

          <p className="font-body text-lg sm:text-xl text-charcoal/70 leading-[1.7] max-w-3xl mb-8 sm:mb-12">
            A selection of experimental projects investigating computational
            systems, urban infrastructure, and media technologies.
          </p>

          {/* Category Filter */}
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs uppercase tracking-wider px-4 sm:px-6 py-2 sm:py-3 rounded-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-amber text-white"
                    : "bg-white text-charcoal/60 hover:bg-charcoal/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {filteredExperiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              className="bg-white rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.12)] transition-all duration-400"
            >
              <button
                onClick={() =>
                  setExpandedId(
                    expandedId === experiment.id ? null : experiment.id,
                  )
                }
                className="w-full p-4 sm:p-6 md:p-8 text-left"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-amber">
                        {experiment.category}
                      </span>
                      <span className="font-mono text-xs text-charcoal/40">
                        {experiment.year}
                      </span>
                      <span className="font-mono text-xs text-charcoal/40">
                        {experiment.domain}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-3 sm:mb-4">
                      {experiment.title}
                    </h3>
                    <p className="font-body text-charcoal/70 leading-[1.7]">
                      {experiment.summary}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    {expandedId === experiment.id ? (
                      <ChevronUp className="w-6 h-6 text-amber" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-charcoal/40" />
                    )}
                  </div>
                </div>
              </button>

              {expandedId === experiment.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 space-y-6 sm:space-y-8"
                >
                  <div className="border-t border-charcoal/10 pt-8">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-4">
                      Methodology
                    </h4>
                    <p className="font-body text-charcoal/70 leading-[1.7]">
                      {experiment.methodology}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-4">
                      Key Findings
                    </h4>
                    <p className="font-body text-charcoal/70 leading-[1.7]">
                      {experiment.findings}
                    </p>
                  </div>

                  <div className="bg-amber/5 p-6 rounded-sm">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal mb-4">
                      Critical Matter Relevance
                    </h4>
                    <p className="font-body text-charcoal/70 leading-[1.7]">
                      {experiment.relevance}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
