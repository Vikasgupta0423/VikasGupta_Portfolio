// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const SkillInfoPanel = ({ skill, onClose }) => {
//   return (
//     <AnimatePresence>
//       {skill && (
//         <motion.div
//           initial={{ x: 450 }}
//           animate={{ x: 0 }}
//           exit={{ x: 450 }}
//           transition={{ duration: 0.4 }}
//           className="
//             absolute
//             top-8
//             right-8
//             w-[380px]
//             rounded-3xl
//             border
//             border-cyan-400/20
//             bg-[#091121]/90
//             backdrop-blur-xl
//             p-8
//             shadow-[0_0_30px_rgba(34,211,238,.2)]
//             z-20
//           "
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-5 right-5 text-gray-400 hover:text-white"
//           >
//             <X size={22} />
//           </button>

//           <h2 className="text-3xl font-bold text-cyan-400">
//             {skill.name}
//           </h2>

//           <div className="mt-6 space-y-3">
//             <p>
//               <span className="text-gray-400">
//                 Experience :
//               </span>{" "}
//               {skill.experience}
//             </p>

//             <p>
//               <span className="text-gray-400">
//                 Level :
//               </span>{" "}
//               {skill.level}
//             </p>
//           </div>

//           <h3 className="mt-8 font-semibold text-white">
//             Technologies
//           </h3>

//           <div className="flex flex-wrap gap-2 mt-4">
//             {skill.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           <h3 className="mt-8 font-semibold text-white">
//             Projects
//           </h3>

//           <ul className="mt-4 space-y-2">
//             {skill.projects.map((project) => (
//               <li key={project}>✔ {project}</li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default SkillInfoPanel;



import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

const SkillInfoPanel = ({ skill, onClose }) => {
  return (
    <AnimatePresence>
      {skill && (
        <>
          {/* Mobile Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm sm:hidden"
          />

          {/* Panel Container */}
          <motion.div
            initial={{
              opacity: 0,
              x: typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 40,
              y: typeof window !== "undefined" && window.innerWidth < 640 ? 50 : 0,
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              x: typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 40,
              y: typeof window !== "undefined" && window.innerWidth < 640 ? 50 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed sm:absolute
              bottom-4 sm:bottom-auto
              left-4 sm:left-auto
              right-4 sm:right-6
              top-auto sm:top-6
              z-40 sm:z-20
              max-w-sm sm:w-[340px]
              rounded-2xl sm:rounded-3xl
              border border-cyan-400/30
              bg-[#081124]/95 sm:bg-[#081124]/90
              p-5 sm:p-6
              backdrop-blur-2xl
              shadow-[0_15px_40px_rgba(0,0,0,0.8)]
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close panel"
              className="
                absolute top-4 right-4
                flex h-7 w-7 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                text-slate-400 hover:text-white hover:border-cyan-400/40
                transition-colors cursor-pointer
              "
            >
              <X size={15} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 pr-6">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold text-sm"
                style={{
                  background: `${skill.color || "#22d3ee"}20`,
                  color: skill.color || "#22d3ee",
                  border: `1px solid ${skill.color || "#22d3ee"}40`,
                }}
              >
                {skill.name?.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {skill.name}
                </h3>
                <p className="text-xs font-medium text-cyan-300">{skill.level}</p>
              </div>
            </div>

            {/* Experience & Proficiency */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-3.5 py-2 text-xs">
              <span className="text-slate-400">Experience</span>
              <span className="font-semibold text-white">{skill.experience}</span>
            </div>

            {/* Technologies */}
            {skill.technologies && (
              <div className="mt-4">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-400/20 text-[11px] font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Project Implementations */}
            {skill.projects && (
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Projects
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {skill.projects.map((project) => (
                    <li key={project} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                      <span className="truncate">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SkillInfoPanel;