import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

const ProjectsHeader = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-20">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md"
      >
        <FolderKanban className="w-5 h-5 text-cyan-400" />

        <span className="text-cyan-300 font-medium tracking-wide">
          Featured Projects
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-white"
      >
        Explore My
        <span className="block text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">
          Project Universe
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-6 text-lg text-slate-300 leading-8 max-w-3xl mx-auto"
      >
        Every project represents a milestone in my development journey.
        Click on a planet to discover the technologies, features, challenges,
        and solutions behind each application.
      </motion.p>
    </div>
  );
};

export default ProjectsHeader;