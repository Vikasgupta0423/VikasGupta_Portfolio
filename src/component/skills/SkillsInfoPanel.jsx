import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SkillInfoPanel = ({ skill, onClose }) => {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          initial={{ x: 450 }}
          animate={{ x: 0 }}
          exit={{ x: 450 }}
          transition={{ duration: 0.4 }}
          className="
            absolute
            top-8
            right-8
            w-[380px]
            rounded-3xl
            border
            border-cyan-400/20
            bg-[#091121]/90
            backdrop-blur-xl
            p-8
            shadow-[0_0_30px_rgba(34,211,238,.2)]
            z-20
          "
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>

          <h2 className="text-3xl font-bold text-cyan-400">
            {skill.name}
          </h2>

          <div className="mt-6 space-y-3">
            <p>
              <span className="text-gray-400">
                Experience :
              </span>{" "}
              {skill.experience}
            </p>

            <p>
              <span className="text-gray-400">
                Level :
              </span>{" "}
              {skill.level}
            </p>
          </div>

          <h3 className="mt-8 font-semibold text-white">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2 mt-4">
            {skill.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="mt-8 font-semibold text-white">
            Projects
          </h3>

          <ul className="mt-4 space-y-2">
            {skill.projects.map((project) => (
              <li key={project}>✔ {project}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillInfoPanel;