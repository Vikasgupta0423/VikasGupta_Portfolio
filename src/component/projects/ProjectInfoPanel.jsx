import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Calendar,
  Briefcase,
  Clock3,
  CheckCircle2,
  Layers3,
  Database,
  Server,
  Users,
} from "lucide-react";

const StatCard = ({ icon: Icon, title, value }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.03 }}
    className="rounded-2xl border border-cyan-500/20 bg-white/5 p-4"
  >
    <Icon className="w-5 h-5 text-cyan-400 mb-2" />
    <p className="text-xs text-slate-400">{title}</p>
    <p className="text-white font-semibold">{value}</p>
  </motion.div>
);

const ProjectInfoPanel = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ x: 450, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 450, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute top-6 right-6 w-[420px] max-h-[92%] overflow-y-auto rounded-3xl border border-cyan-500/20 bg-[#07111f]/90 backdrop-blur-2xl p-6 shadow-[0_0_50px_rgba(34,211,238,.18)] scrollbar-hide"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs">
                {project.category}
              </span>

              <h2 className="text-3xl font-bold text-white mt-3">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <X className="text-white" size={20} />
            </button>
          </div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-2xl border border-cyan-500/20 mb-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <StatCard
              icon={Calendar}
              title="Year"
              value={project.year}
            />

            <StatCard
              icon={Clock3}
              title="Duration"
              value={project.duration}
            />

            <StatCard
              icon={Briefcase}
              title="Role"
              value={project.role}
            />

            <StatCard
              icon={CheckCircle2}
              title="Status"
              value={project.status}
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              About Project
            </h3>

            <p className="text-slate-300 leading-7">
              {project.description}
            </p>
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="mb-7">
              <h3 className="text-lg font-semibold text-white mb-4">
                Project Statistics
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <StatCard
                  icon={Layers3}
                  title="Modules"
                  value={project.stats.modules}
                />

                <StatCard
                  icon={Server}
                  title="APIs"
                  value={project.stats.apis}
                />

                <StatCard
                  icon={Users}
                  title="Users"
                  value={project.stats.users}
                />

                <StatCard
                  icon={Database}
                  title="Database"
                  value={project.stats.database}
                />
              </div>
            </div>
          )}

          {/* Tech */}
          <div className="mb-7">
            <h3 className="text-lg font-semibold text-white mb-4">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  key={tech}
                  className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Key Features
            </h3>

            <div className="space-y-3">
              {project.features.map((feature) => (
                <motion.div
                  whileHover={{ x: 6 }}
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

                  <span className="text-slate-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 py-4 text-white transition hover:bg-white/20"
            >
              <Github size={18} />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 py-4 font-semibold text-black"
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfoPanel;