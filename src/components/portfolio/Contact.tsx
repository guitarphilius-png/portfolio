import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, FileText, ArrowUp } from "lucide-react";

interface ContactProps {
  onNavigate: (section: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadPDF = () => {
    // In a real implementation, this would generate and download a PDF
    alert("PDF generation would be implemented here. This would create a comprehensive portfolio document for offline review.");
  };

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-charcoal py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-research-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60 mb-8">
            05 / Contact
          </p>
          
          <h2 className="font-display font-light text-5xl md:text-6xl text-cream mb-8 leading-tight">
            Let's Build Something
            <br />
            Meaningful Together
          </h2>
          
          <p className="font-body text-xl text-cream/70 leading-[1.7] mb-16">
            I'm seeking opportunities to collaborate on projects that use technology 
            to address social challenges and expand human understanding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="mailto:portfolio@example.com"
              className="group flex items-center gap-3 bg-amber text-white px-8 py-4 rounded-sm hover:bg-amber/90 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(212,165,116,0.3)]"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider">Get in Touch</span>
            </a>
            
            <button
              onClick={handleDownloadPDF}
              className="group flex items-center gap-3 bg-cream/10 text-cream px-8 py-4 rounded-sm hover:bg-cream/20 transition-all duration-300 border border-cream/20"
            >
              <FileText className="w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider">Download PDF</span>
            </button>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-12 text-left"
          >
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber mb-4">
                Research Interests
              </h3>
              <ul className="space-y-2 font-body text-sm text-cream/70">
                <li>Computational Media</li>
                <li>Urban Systems</li>
                <li>Critical Theory</li>
                <li>Algorithmic Justice</li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-2 font-body text-sm text-cream/70">
                <li>Machine Learning</li>
                <li>Data Visualization</li>
                <li>IoT Systems</li>
                <li>Web Development</li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber mb-4">
                Collaboration
              </h3>
              <ul className="space-y-2 font-body text-sm text-cream/70">
                <li>Research Projects</li>
                <li>Speaking Engagements</li>
                <li>Workshops</li>
                <li>Consulting</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          onClick={() => onNavigate('hero')}
          className="group flex items-center gap-3 mx-auto mt-24 text-cream/60 hover:text-cream transition-colors"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="font-mono text-sm uppercase tracking-wider">Back to Top</span>
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-cream/10"
        >
          <p className="font-mono text-xs text-cream/40">
            © 2024 Portfolio of Life — Designed for MIT Media Lab Critical Matter Application
          </p>
        </motion.div>
      </div>
    </section>
  );
}
