import Container from "../common/Container";
import CareerTimeline from "./CareerTimeline";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <section
      id="career"
      className="relative py-32 overflow-hidden bg-[#070B1F]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 text-sm tracking-widest uppercase">
            Career Roadmap
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white">
            Education & Experience
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Every milestone helped me become a better engineer. From my
            education to building enterprise applications, this roadmap shows
            my professional growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <CareerTimeline />
      </Container>
    </section>
  );
};

export default Career;