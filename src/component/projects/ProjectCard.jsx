// import { motion } from "framer-motion";
// import { ExternalLink, Github, ArrowUpRight, Server, Database, Users } from "lucide-react";

// const ProjectCard = ({ project, onSelect }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       className="
//         group
//         flex
//         flex-col
//         justify-between
//         overflow-hidden
//         rounded-2xl
//         border
//         border-slate-800/90
//         bg-[#0B132B]/60
//         backdrop-blur-xl
//         transition-all
//         duration-300
//         hover:border-cyan-500/40
//         hover:bg-[#0B132B]/95
//         hover:-translate-y-1.5
//         hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)]
//       "
//     >
//       <div>
//         {/* Card Banner / Header Image */}
//         <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
//           <img
//             src={project.image}
//             alt={project.title}
//             onError={(e) => {
//               e.currentTarget.style.display = "none";
//             }}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-90" />

//           {/* Category & Status Pill */}
//           <div className="absolute top-3 left-3 flex items-center gap-2">
//             <span
//               className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-md border border-cyan-400/30"
//               style={{
//                 backgroundColor: `${project.color || "#22d3ee"}20`,
//                 color: project.color || "#22d3ee",
//               }}
//             >
//               {project.category}
//             </span>

//             <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
//               {project.year}
//             </span>
//           </div>
//         </div>

//         {/* Content Body */}
//         <div className="p-5 sm:p-6">
//           <div className="flex items-center justify-between gap-2">
//             <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
//               {project.title}
//             </h3>
//             <button
//               onClick={onSelect}
//               className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-cyan-500/20 cursor-pointer"
//               title="View Case Study"
//             >
//               <ArrowUpRight size={16} />
//             </button>
//           </div>

//           <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           {/* Quick Metrics Bar */}
//           {project.stats && (
//             <div className="mt-4 grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
//               <div>
//                 <p className="text-[10px] text-slate-500">APIs</p>
//                 <p className="text-xs font-semibold text-slate-200">{project.stats.apis}</p>
//               </div>
//               <div>
//                 <p className="text-[10px] text-slate-500">Users</p>
//                 <p className="text-xs font-semibold text-cyan-400">{project.stats.users}</p>
//               </div>
//               <div>
//                 <p className="text-[10px] text-slate-500">DB</p>
//                 <p className="text-xs font-semibold text-slate-200">{project.stats.database}</p>
//               </div>
//             </div>
//           )}

//           {/* Tech Stack Pills */}
//           <div className="mt-4 flex flex-wrap gap-1.5">
//             {project.tech.slice(0, 4).map((t) => (
//               <span
//                 key={t}
//                 className="px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-400/20 text-[10px] sm:text-[11px] font-medium text-cyan-300"
//               >
//                 {t}
//               </span>
//             ))}
//             {project.tech.length > 4 && (
//               <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400">
//                 +{project.tech.length - 4}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Footer Actions */}
//       <div className="flex items-center justify-between gap-3 p-5 sm:p-6 pt-0 border-t border-slate-800/40 mt-2">
//         <button
//           onClick={onSelect}
//           className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
//         >
//           View Case Study →
//         </button>

//         <div className="flex items-center gap-2">
//           {project.github && project.github !== "#" && (
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noreferrer"
//               className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all"
//             >
//               <Github size={14} />
//             </a>
//           )}
//           {project.demo && project.demo !== "#" && (
//             <a
//               href={project.demo}
//               target="_blank"
//               rel="noreferrer"
//               className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all"
//             >
//               <ExternalLink size={14} />
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;



import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onSelect}
      className="
        group
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-slate-800/90
        bg-[#0B132B]/60
        backdrop-blur-xl
        cursor-pointer
        select-none
        transform-gpu
        transition-all
        duration-300
        hover:border-cyan-400/50
        hover:bg-[#0B132B]/95
        hover:-translate-y-1.5
        hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)]
      "
    >
      <div>
        {/* Card Banner Image */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-90" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-md border border-cyan-400/30"
              style={{
                backgroundColor: `${project.color || "#22d3ee"}20`,
                color: project.color || "#22d3ee",
              }}
            >
              {project.category}
            </span>

            <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-all group-hover:bg-cyan-400 group-hover:text-slate-950">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics */}
          {project.stats && (
            <div className="mt-4 grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div>
                <p className="text-[10px] text-slate-500">APIs</p>
                <p className="text-xs font-semibold text-slate-200">{project.stats.apis}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">Users</p>
                <p className="text-xs font-semibold text-cyan-400">{project.stats.users}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">DB</p>
                <p className="text-xs font-semibold text-slate-200">{project.stats.database}</p>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-400/20 text-[10px] sm:text-[11px] font-medium text-cyan-300"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bar with stopPropagation */}
      <div className="flex items-center justify-between gap-3 p-5 sm:p-6 pt-0 border-t border-slate-800/40 mt-2">
        <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
          View Case Study →
        </span>

        <div className="flex items-center gap-2">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
            >
              <Github size={14} />
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all cursor-pointer"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;