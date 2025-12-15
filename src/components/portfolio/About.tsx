import { motion } from "framer-motion";

export default function StructuralOrientation() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light leading-tight"
        >
          How I Think
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed max-w-3xl"
        >
          I study and design how space becomes meaningful and actionable—how
          perception, narrative, and computation co-produce agency in shared
          environments.
        </motion.p>
      </section>

      {/* Diagram Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Trunk */}
        <div className="md:col-span-4 border-b pb-8">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">The Throughline</h2>
          <p className="mt-4 text-base">
            How places, stories, and systems shape what people can see, do, and become.
          </p>
        </div>

        {/* Pillars */}
        <div className="border-l pl-6">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500">
            Space
          </h3>
          <p className="mt-3 text-sm">
            Spatial phenomenology and the production of space. Environments are
            lived, produced, and unevenly distribute agency.
          </p>
        </div>

        <div className="border-l pl-6">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500">
            Narrative
          </h3>
          <p className="mt-3 text-sm">
            Language and narrative function as infrastructure, shaping
            coordination, legitimacy, and futures.
          </p>
        </div>

        <div className="border-l pl-6">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500">
            Computation
          </h3>
          <p className="mt-3 text-sm">
            Collective and metacognitive systems that allow communities to
            sense, reflect, and adapt.
          </p>
        </div>

        {/* Seams */}
        <div className="md:col-span-4 mt-16">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">
            Seams
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-medium">Perception ↔ Agency</h4>
              <p className="mt-2 text-sm">
                What must be perceptible for action to become possible?
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium">Space ↔ Power</h4>
              <p className="mt-2 text-sm">
                How environments and infrastructures authorize or constrain
                behavior.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium">Narrative ↔ Action</h4>
              <p className="mt-2 text-sm">
                How stories make futures thinkable or unthinkable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 pb-16 text-xs text-neutral-400">
        A quiet map for how the work fits together. Read the projects through it — or ignore it and wander.
      </footer>
    </div>
  );
}
