import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Diptych {
  id: number;
  leftImage: string;
  rightImage: string;
  leftCaption: string;
  rightCaption: string;
  description: string;
}

const diptychs: Diptych[] = [
  {
    id: 1,
    leftImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    rightImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    leftCaption: "Original Context",
    rightCaption: "Algorithmic Interpretation",
    description: "Exploring how computational systems reframe urban spaces through data collection and visualization"
  },
  {
    id: 2,
    leftImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    rightImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    leftCaption: "Physical Infrastructure",
    rightCaption: "Digital Layer",
    description: "Investigating the invisible computational networks that overlay our built environment"
  },
  {
    id: 3,
    leftImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    rightImage: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=800&q=80",
    leftCaption: "Natural Systems",
    rightCaption: "Technological Mediation",
    description: "Examining how digital interfaces reshape our relationship with natural environments"
  }
];

export default function DiptokSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSide, setHoveredSide] = useState<{ id: number; side: 'left' | 'right' } | null>(null);

  return (
    <section ref={ref} id="diptok" className="min-h-screen bg-white py-32">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-8">
            02 / Diptok
          </p>
          
          <h2 className="font-display font-light text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
            Visual Dialectics
          </h2>
          
          <p className="font-body text-xl text-charcoal/70 leading-[1.7] max-w-3xl">
            Diptok is a series of visual comparisons that juxtapose physical and digital realities, 
            revealing the tensions between human experience and computational mediation.
          </p>
        </motion.div>

        <div className="space-y-24">
          {diptychs.map((diptych, index) => (
            <motion.div
              key={diptych.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Left Image */}
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredSide({ id: diptych.id, side: 'left' })}
                  onMouseLeave={() => setHoveredSide(null)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-charcoal/5">
                    <img
                      src={diptych.leftImage}
                      alt={diptych.leftCaption}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredSide?.id === diptych.id && hoveredSide.side === 'left'
                          ? 'scale-105'
                          : hoveredSide?.id === diptych.id
                          ? 'scale-95 opacity-60'
                          : ''
                      }`}
                    />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-charcoal/60 mt-4">
                    {diptych.leftCaption}
                  </p>
                </div>

                {/* Right Image */}
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredSide({ id: diptych.id, side: 'right' })}
                  onMouseLeave={() => setHoveredSide(null)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-charcoal/5">
                    <img
                      src={diptych.rightImage}
                      alt={diptych.rightCaption}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredSide?.id === diptych.id && hoveredSide.side === 'right'
                          ? 'scale-105'
                          : hoveredSide?.id === diptych.id
                          ? 'scale-95 opacity-60'
                          : ''
                      }`}
                    />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-charcoal/60 mt-4">
                    {diptych.rightCaption}
                  </p>
                </div>
              </div>

              <p className="font-body text-charcoal/70 leading-[1.7] max-w-3xl">
                {diptych.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
