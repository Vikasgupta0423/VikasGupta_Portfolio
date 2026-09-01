// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Github,
//   ExternalLink,
//   Calendar,
//   Clock,
//   Briefcase,
//   CheckCircle2,
//   Layers,
//   Database,
//   Server,
//   Users,
// } from "lucide-react";

// const ProjectDetailsModal = ({ project, onClose }) => {
//   if (!project) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
//         {/* Backdrop */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="fixed inset-0 bg-black/75 backdrop-blur-md"
//         />

//         {/* Modal Window */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95, y: 15 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95, y: 15 }}
//           transition={{ duration: 0.25, ease: "easeOut" }}
//           className="
//             relative
//             w-full
//             max-w-3xl
//             max-h-[90vh]
//             overflow-y-auto
//             rounded-3xl
//             border
//             border-cyan-500/30
//             bg-[#081124]
//             p-5
//             sm:p-7
//             lg:p-8
//             shadow-[0_20px_50px_rgba(0,0,0,0.9)]
//             z-10
//           "
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
//           >
//             <X size={16} />
//           </button>

//           {/* Modal Header */}
//           <div className="flex flex-wrap items-center gap-2 mb-2">
//             <span
//               className="px-2.5 py-0.5 rounded-full text-xs font-semibold border border-cyan-400/30"
//               style={{
//                 backgroundColor: `${project.color || "#22d3ee"}20`,
//                 color: project.color || "#22d3ee",
//               }}
//             >
//               {project.category}
//             </span>
//             <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
//               {project.status}
//             </span>
//           </div>

//           <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
//             {project.title}
//           </h2>

//           <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
//             {project.description}
//           </p>

//           {/* Metadata Grid */}
//           <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 px-4 rounded-2xl bg-[#0B132B] border border-slate-800">
//             <div className="flex items-center gap-2">
//               <Calendar size={15} className="text-cyan-400" />
//               <div>
//                 <p className="text-[10px] text-slate-400">Timeline</p>
//                 <p className="text-xs font-semibold text-white">{project.year}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <Clock size={15} className="text-cyan-400" />
//               <div>
//                 <p className="text-[10px] text-slate-400">Duration</p>
//                 <p className="text-xs font-semibold text-white">{project.duration}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
//               <Briefcase size={15} className="text-cyan-400" />
//               <div>
//                 <p className="text-[10px] text-slate-400">Role</p>
//                 <p className="text-xs font-semibold text-white">{project.role}</p>
//               </div>
//             </div>
//           </div>

//           {/* System Statistics */}
//           {project.stats && (
//             <div className="mt-6">
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
//                 System & Architecture Scope
//               </h4>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                 <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                   <Layers size={14} className="text-cyan-400 mb-1" />
//                   <p className="text-[10px] text-slate-400">Modules</p>
//                   <p className="text-sm font-bold text-white">{project.stats.modules}</p>
//                 </div>
//                 <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                   <Server size={14} className="text-cyan-400 mb-1" />
//                   <p className="text-[10px] text-slate-400">REST APIs</p>
//                   <p className="text-sm font-bold text-white">{project.stats.apis}</p>
//                 </div>
//                 <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                   <Users size={14} className="text-cyan-400 mb-1" />
//                   <p className="text-[10px] text-slate-400">Scale / Users</p>
//                   <p className="text-sm font-bold text-cyan-300">{project.stats.users}</p>
//                 </div>
//                 <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                   <Database size={14} className="text-cyan-400 mb-1" />
//                   <p className="text-[10px] text-slate-400">Database</p>
//                   <p className="text-sm font-bold text-white">{project.stats.database}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Key Features */}
//           {project.features && (
//             <div className="mt-6">
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
//                 Key Features Delivered
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 {project.features.map((feat, i) => (
//                   <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
//                     <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
//                     <span>{feat}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Full Tech Stack */}
//           {project.tech && (
//             <div className="mt-6 pt-4 border-t border-slate-800">
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
//                 Applied Technologies
//               </h4>
//               <div className="flex flex-wrap gap-1.5">
//                 {project.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/20 text-xs font-medium text-cyan-300"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Action Links */}
//           <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
//             {project.demo && (
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors"
//               >
//                 <ExternalLink size={15} />
//                 <span>Launch Live Preview</span>
//               </a>
//             )}
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-slate-700 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
//               >
//                 <Github size={15} />
//                 <span>Inspect Repository</span>
//               </a>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default ProjectDetailsModal;


// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Github,
//   ExternalLink,
//   Calendar,
//   Clock,
//   Briefcase,
//   CheckCircle2,
//   Layers,
//   Database,
//   Server,
//   Users,
// } from "lucide-react";

// const ProjectDetailsModal = ({ project, onClose }) => {
//   // Modal open hone par background scroll lock karein
//   useEffect(() => {
//     if (project) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [project]);

//   return (
//     <AnimatePresence>
//       {project && (
//         <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
//           {/* Full Screen Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/80 backdrop-blur-md"
//           />

//           {/* Modal Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="
//               relative
//               w-full
//               max-w-3xl
//               max-h-[88vh]
//               overflow-y-auto
//               rounded-3xl
//               border
//               border-cyan-500/30
//               bg-[#081124]
//               p-5
//               sm:p-7
//               lg:p-8
//               shadow-[0_20px_60px_rgba(0,0,0,0.95)]
//               z-10
//             "
//           >
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               aria-label="Close modal"
//               className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
//             >
//               <X size={16} />
//             </button>

//             {/* Category & Status */}
//             <div className="flex flex-wrap items-center gap-2 mb-2">
//               <span
//                 className="px-2.5 py-0.5 rounded-full text-xs font-semibold border border-cyan-400/30"
//                 style={{
//                   backgroundColor: `${project.color || "#22d3ee"}20`,
//                   color: project.color || "#22d3ee",
//                 }}
//               >
//                 {project.category}
//               </span>
//               <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
//                 {project.status}
//               </span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl font-extrabold text-white pr-8">
//               {project.title}
//             </h2>

//             <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
//               {project.description}
//             </p>

//             {/* Metadata Grid */}
//             <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 px-4 rounded-2xl bg-[#0B132B] border border-slate-800">
//               <div className="flex items-center gap-2">
//                 <Calendar size={15} className="text-cyan-400 shrink-0" />
//                 <div>
//                   <p className="text-[10px] text-slate-400">Timeline</p>
//                   <p className="text-xs font-semibold text-white">{project.year}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Clock size={15} className="text-cyan-400 shrink-0" />
//                 <div>
//                   <p className="text-[10px] text-slate-400">Duration</p>
//                   <p className="text-xs font-semibold text-white">{project.duration}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
//                 <Briefcase size={15} className="text-cyan-400 shrink-0" />
//                 <div>
//                   <p className="text-[10px] text-slate-400">Role</p>
//                   <p className="text-xs font-semibold text-white">{project.role}</p>
//                 </div>
//               </div>
//             </div>

//             {/* System Statistics */}
//             {project.stats && (
//               <div className="mt-6">
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
//                   System Architecture Metrics
//                 </h4>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                   <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                     <Layers size={14} className="text-cyan-400 mb-1" />
//                     <p className="text-[10px] text-slate-400">Modules</p>
//                     <p className="text-sm font-bold text-white">{project.stats.modules}</p>
//                   </div>
//                   <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                     <Server size={14} className="text-cyan-400 mb-1" />
//                     <p className="text-[10px] text-slate-400">REST APIs</p>
//                     <p className="text-sm font-bold text-white">{project.stats.apis}</p>
//                   </div>
//                   <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                     <Users size={14} className="text-cyan-400 mb-1" />
//                     <p className="text-[10px] text-slate-400">Users</p>
//                     <p className="text-sm font-bold text-cyan-300">{project.stats.users}</p>
//                   </div>
//                   <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
//                     <Database size={14} className="text-cyan-400 mb-1" />
//                     <p className="text-[10px] text-slate-400">Database</p>
//                     <p className="text-sm font-bold text-white">{project.stats.database}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Key Features */}
//             {project.features && (
//               <div className="mt-6">
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
//                   Key Features & Deliverables
//                 </h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {project.features.map((feat, i) => (
//                     <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
//                       <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
//                       <span>{feat}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Applied Tech Stack */}
//             {project.tech && (
//               <div className="mt-6 pt-4 border-t border-slate-800">
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
//                   Applied Technologies
//                 </h4>
//                 <div className="flex flex-wrap gap-1.5">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/20 text-xs font-medium text-cyan-300"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* CTAs */}
//             <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
//               {project.demo && (
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors"
//                 >
//                   <ExternalLink size={15} />
//                   <span>Launch Live Preview</span>
//                 </a>
//               )}
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-slate-700 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
//                 >
//                   <Github size={15} />
//                   <span>Inspect Repository</span>
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProjectDetailsModal;



import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  Briefcase,
  CheckCircle2,
  Layers,
  Database,
  Server,
  Users,
} from "lucide-react";

const ProjectDetailsModal = ({ project, onClose }) => {
  const [mounted, setMounted] = useState(false);

  // Client-side DOM mount check
  useEffect(() => {
    setMounted(true);
  }, []);

  // Background scroll lock & Escape key support
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Full Screen High-Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              relative
              w-full
              max-w-3xl
              max-h-[90vh]
              overflow-y-auto
              rounded-3xl
              border
              border-cyan-500/30
              bg-[#081124]
              p-5
              sm:p-7
              lg:p-8
              shadow-[0_25px_70px_rgba(0,0,0,0.95)]
              z-10
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold border border-cyan-400/30"
                style={{
                  backgroundColor: `${project.color || "#22d3ee"}20`,
                  color: project.color || "#22d3ee",
                }}
              >
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                {project.status}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white pr-8">
              {project.title}
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Metadata Grid */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 px-4 rounded-2xl bg-[#0B132B] border border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-cyan-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Timeline</p>
                  <p className="text-xs font-semibold text-white">{project.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={15} className="text-cyan-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Duration</p>
                  <p className="text-xs font-semibold text-white">{project.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Briefcase size={15} className="text-cyan-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Role</p>
                  <p className="text-xs font-semibold text-white">{project.role}</p>
                </div>
              </div>
            </div>

            {/* System Statistics */}
            {project.stats && (
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  System Architecture Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <Layers size={14} className="text-cyan-400 mb-1" />
                    <p className="text-[10px] text-slate-400">Modules</p>
                    <p className="text-sm font-bold text-white">{project.stats.modules}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <Server size={14} className="text-cyan-400 mb-1" />
                    <p className="text-[10px] text-slate-400">REST APIs</p>
                    <p className="text-sm font-bold text-white">{project.stats.apis}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <Users size={14} className="text-cyan-400 mb-1" />
                    <p className="text-[10px] text-slate-400">Users</p>
                    <p className="text-sm font-bold text-cyan-300">{project.stats.users}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <Database size={14} className="text-cyan-400 mb-1" />
                    <p className="text-[10px] text-slate-400">Database</p>
                    <p className="text-sm font-bold text-white">{project.stats.database}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.features && (
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Features & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applied Tech Stack */}
            {project.tech && (
              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Applied Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/20 text-xs font-medium text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors"
                >
                  <ExternalLink size={15} />
                  <span>Launch Live Preview</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-slate-700 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
                >
                  <Github size={15} />
                  <span>Inspect Repository</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectDetailsModal;