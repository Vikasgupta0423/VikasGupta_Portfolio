// import Container from "../common/Container";
// import CareerTimeline from "./CareerTimeline";
// import { motion } from "framer-motion";

// const Career = () => {
//   return (
//     <section
//       id="career"
//       className="relative py-32 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />

//       <Container>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-24"
//         >
//           <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 text-sm tracking-widest uppercase">
//             Career Roadmap
//           </span>

//           <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white">
//             Education & Experience
//           </h2>

//           <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
//             Every milestone helped me become a better engineer. From my
//             education to building enterprise applications, this roadmap shows
//             my professional growth.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <CareerTimeline />
//       </Container>
//     </section>
//   );
// };

// export default Career;


// import Container from "../common/Container";
// import CareerTimeline from "./CareerTimeline";
// import { motion } from "framer-motion";

// const Career = () => {
//   return (
//     <section
//       id="career"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute top-12 -left-20 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career Roadmap
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Education &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             A comprehensive roadmap detailing my academic foundation, hands-on engineering milestones, and enterprise software experience.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <CareerTimeline />
//       </Container>
//     </section>
//   );
// };

// export default Career;




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [activeTab, setActiveTab] = useState("experience");

//   // careerData me type: "experience" | "education" field hona chahiye
//   const filteredData = careerData.filter((item) =>
//     activeTab === "experience"
//       ? item.type === "experience" || !item.type
//       : item.type === "education"
//   );

//   return (
//     <section
//       id="career"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Ambient Glows */}
//       <div className="pointer-events-none absolute top-12 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Professional Path
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Career & <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Qualifications</span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             A structured breakdown of my full-stack engineering experience, production contributions, and academic background.
//           </p>

//           {/* HR-Friendly Filter Switcher */}
//           <div className="mt-8 inline-flex p-1.5 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             <button
//               onClick={() => setActiveTab("experience")}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
//                 activeTab === "experience"
//                   ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
//                   : "text-slate-400 hover:text-white"
//               }`}
//             >
//               <Briefcase size={16} />
//               <span>Experience</span>
//             </button>

//             <button
//               onClick={() => setActiveTab("education")}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
//                 activeTab === "education"
//                   ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
//                   : "text-slate-400 hover:text-white"
//               }`}
//             >
//               <GraduationCap size={17} />
//               <span>Education</span>
//             </button>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -15 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="grid grid-cols-1 gap-5 sm:gap-6"
//             >
//               {filteredData.map((item, index) => (
//                 <div
//                   key={item.id || index}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-2xl
//                     border
//                     border-slate-800/90
//                     bg-[#0B132B]/60
//                     p-5
//                     sm:p-6
//                     lg:p-7
//                     backdrop-blur-xl
//                     transition-all
//                     duration-300
//                     hover:border-cyan-500/40
//                     hover:bg-[#0B132B]/90
//                     hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
//                   "
//                 >
//                   {/* Subtle Gradient Hover Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

//                   {/* Top Bar: Role & Duration */}
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/60">
//                     <div className="space-y-1">
//                       <div className="flex items-center gap-3">
//                         <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-400">
//                           {activeTab === "experience" ? <Briefcase size={16} /> : <GraduationCap size={17} />}
//                         </span>
//                         <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
//                           {item.title}
//                         </h3>
//                       </div>
//                       <p className="text-xs sm:text-sm font-medium text-cyan-400/90 pl-11">
//                         {item.subtitle || item.company || item.institution}
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-3 self-start sm:self-center pl-11 sm:pl-0">
//                       {item.location && (
//                         <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 font-medium">
//                           <MapPin size={13} className="text-slate-500" />
//                           {item.location}
//                         </span>
//                       )}
//                       <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] sm:text-xs font-semibold text-slate-300">
//                         <Calendar size={12} className="text-cyan-400" />
//                         {item.year || item.period}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Description / Bullet Points */}
//                   {Array.isArray(item.highlights) ? (
//                     <ul className="space-y-2 mt-3">
//                       {item.highlights.map((point, idx) => (
//                         <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
//                           <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
//                       {item.description}
//                     </p>
//                   )}

//                   {/* Tech Stack / Skill Tags (HR Favorite) */}
//                   {item.skills && (
//                     <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-5 pt-4 border-t border-slate-800/40">
//                       {item.skills.map((skill, sIdx) => (
//                         <span
//                           key={sIdx}
//                           className="px-2.5 py-0.5 rounded-md bg-cyan-500/5 border border-cyan-400/20 text-[10px] sm:text-[11px] font-medium text-cyan-300"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   Calendar,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   Sparkles,
//   Terminal,
// } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredList = careerData.filter((item) =>
//     activeFilter === "all" ? true : item.type === activeFilter
//   );

//   const activeItem =
//     careerData.find((item) => item.id === selectedId) || filteredList[0];

//   return (
//     <section
//       id="career"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career & Credentials
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Work Experience &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
//           </p>

//           {/* Quick Filters */}
//           <div className="mt-8 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             {["all", "experience", "education"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter);
//                   const firstMatch = careerData.find(
//                     (i) => filter === "all" || i.type === filter
//                   );
//                   if (firstMatch) setSelectedId(firstMatch.id);
//                 }}
//                 className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
//                   activeFilter === filter
//                     ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               >
//                 {filter === "all" ? "All Milestones" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Master-Detail Split Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
//           {/* Left Column: Interactive Milestone List */}
//           <div className="lg:col-span-5 space-y-3">
//             {filteredList.map((item) => {
//               const isSelected = activeItem?.id === item.id;
//               const isWork = item.type === "experience";

//               return (
//                 <div
//                   key={item.id}
//                   onClick={() => setSelectedId(item.id)}
//                   className={`
//                     group
//                     relative
//                     flex
//                     items-center
//                     justify-between
//                     p-4
//                     sm:p-5
//                     rounded-2xl
//                     border
//                     cursor-pointer
//                     select-none
//                     transition-all
//                     duration-300
//                     ${
//                       isSelected
//                         ? "border-cyan-400 bg-[#0B132B] shadow-[0_8px_25px_rgba(6,182,212,0.2)] -translate-x-0 lg:translate-x-1"
//                         : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/80"
//                     }
//                   `}
//                 >
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div
//                       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
//                         isSelected
//                           ? "bg-cyan-400 text-slate-950 font-bold"
//                           : "bg-slate-900 border border-slate-700/60 text-slate-300"
//                       }`}
//                     >
//                       {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
//                     </div>

//                     <div className="min-w-0">
//                       <div className="flex items-center gap-2">
//                         <span className="text-[11px] font-semibold text-cyan-400">
//                           {item.year}
//                         </span>
//                         <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
//                           {item.type}
//                         </span>
//                       </div>

//                       <h4
//                         className={`truncate text-sm sm:text-base font-bold transition-colors ${
//                           isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
//                         }`}
//                       >
//                         {item.title}
//                       </h4>
//                       <p className="truncate text-xs text-slate-400">
//                         {item.subtitle}
//                       </p>
//                     </div>
//                   </div>

//                   <ChevronRight
//                     size={16}
//                     className={`shrink-0 transition-transform duration-300 ${
//                       isSelected
//                         ? "text-cyan-400 translate-x-1"
//                         : "text-slate-600 group-hover:text-slate-400"
//                     }`}
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Active Milestone Inspector (Console Deck) */}
//           <div className="lg:col-span-7">
//             <AnimatePresence mode="wait">
//               {activeItem && (
//                 <motion.div
//                   key={activeItem.id}
//                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -10, scale: 0.98 }}
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-cyan-500/30
//                     bg-[#0B132B]/90
//                     p-6
//                     sm:p-8
//                     backdrop-blur-2xl
//                     shadow-[0_15px_40px_rgba(0,0,0,0.6)]
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

//                   {/* Inspector Header */}
//                   <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
//                     <div className="space-y-1.5">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
//                           {activeItem.year}
//                         </span>
//                         {activeItem.location && (
//                           <span className="flex items-center gap-1 text-xs text-slate-400">
//                             <MapPin size={12} className="text-slate-500" />
//                             {activeItem.location}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="text-xl sm:text-2xl font-black text-white">
//                         {activeItem.title}
//                       </h3>
//                       <p className="text-sm font-semibold text-cyan-400">
//                         {activeItem.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
//                       {activeItem.icon || <Terminal size={22} />}
//                     </div>
//                   </div>

//                   {/* Summary */}
//                   <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-300">
//                     {activeItem.description}
//                   </p>

//                   {/* Key Contributions & Highlights */}
//                   {activeItem.highlights && (
//                     <div className="mt-6 space-y-3">
//                       <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                         <Sparkles size={14} className="text-cyan-400" />
//                         Key Engineering Impact
//                       </h4>
//                       <ul className="space-y-2.5">
//                         {activeItem.highlights.map((point, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="text-cyan-400 shrink-0 mt-0.5"
//                             />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Tech Stack Chips */}
//                   {activeItem.skills && (
//                     <div className="mt-8 pt-5 border-t border-slate-800/80">
//                       <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                         Technologies & Tools
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {activeItem.skills.map((skill, sIdx) => (
//                           <span
//                             key={sIdx}
//                             className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   ChevronDown,
//   Sparkles,
//   Terminal,
// } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredList = careerData.filter((item) =>
//     activeFilter === "all" ? true : item.type === activeFilter
//   );

//   const activeItem =
//     careerData.find((item) => item.id === selectedId) || filteredList[0];

//   const handleCardClick = (id) => {
//     setSelectedId(id);
//   };

//   return (
//     <section
//       id="career"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career & Credentials
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Work Experience &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
//           </p>

//           {/* Quick Filters */}
//           <div className="mt-7 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             {["all", "experience", "education"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter);
//                   const firstMatch = careerData.find(
//                     (i) => filter === "all" || i.type === filter
//                   );
//                   if (firstMatch) setSelectedId(firstMatch.id);
//                 }}
//                 className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
//                   activeFilter === filter
//                     ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               >
//                 {filter === "all" ? "All Milestones" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Master-Detail Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
//           {/* Left Column: Interactive Milestone List */}
//           <div className="lg:col-span-5 space-y-3">
//             {filteredList.map((item) => {
//               const isSelected = selectedId === item.id;
//               const isWork = item.type === "experience";

//               return (
//                 <div key={item.id} className="flex flex-col">
//                   {/* Selector Card */}
//                   <div
//                     onClick={() => handleCardClick(item.id)}
//                     className={`
//                       group
//                       relative
//                       flex
//                       items-center
//                       justify-between
//                       p-4
//                       sm:p-5
//                       rounded-2xl
//                       border
//                       cursor-pointer
//                       select-none
//                       transition-all
//                       duration-300
//                       ${
//                         isSelected
//                           ? "border-cyan-400 bg-[#0B132B] shadow-[0_8px_25px_rgba(6,182,212,0.2)]"
//                           : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/80"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center gap-3.5 min-w-0">
//                       <div
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
//                           isSelected
//                             ? "bg-cyan-400 text-slate-950 font-bold"
//                             : "bg-slate-900 border border-slate-700/60 text-slate-300"
//                         }`}
//                       >
//                         {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
//                       </div>

//                       <div className="min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="text-[11px] font-semibold text-cyan-400">
//                             {item.year}
//                           </span>
//                           <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
//                             {item.type}
//                           </span>
//                         </div>

//                         <h4
//                           className={`truncate text-sm sm:text-base font-bold transition-colors ${
//                             isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
//                           }`}
//                         >
//                           {item.title}
//                         </h4>
//                         <p className="truncate text-xs text-slate-400">
//                           {item.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Mobile: Chevron Down for Accordion, Desktop: Chevron Right */}
//                     <div className="shrink-0 text-slate-500">
//                       <div className="hidden lg:block">
//                         <ChevronRight
//                           size={16}
//                           className={`transition-transform duration-300 ${
//                             isSelected ? "text-cyan-400 translate-x-1" : "group-hover:text-slate-400"
//                           }`}
//                         />
//                       </div>
//                       <div className="lg:hidden">
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-300 ${
//                             isSelected ? "rotate-180 text-cyan-400" : ""
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* MOBILE ONLY: Inline Accordion Detail View */}
//                   <div className="lg:hidden">
//                     <AnimatePresence>
//                       {isSelected && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="overflow-hidden"
//                         >
//                           <div className="mt-2 rounded-2xl border border-cyan-500/30 bg-[#081124] p-5 shadow-xl">
//                             {/* Summary */}
//                             <p className="text-xs leading-relaxed text-slate-300">
//                               {item.description}
//                             </p>

//                             {/* Key Highlights */}
//                             {item.highlights && (
//                               <div className="mt-4 space-y-2">
//                                 <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
//                                   <Sparkles size={12} />
//                                   Key Contributions
//                                 </h5>
//                                 <ul className="space-y-2">
//                                   {item.highlights.map((point, pIdx) => (
//                                     <li
//                                       key={pIdx}
//                                       className="flex items-start gap-2 text-xs text-slate-300"
//                                     >
//                                       <CheckCircle2
//                                         size={14}
//                                         className="text-cyan-400 shrink-0 mt-0.5"
//                                       />
//                                       <span>{point}</span>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}

//                             {/* Tech Stack Chips */}
//                             {item.skills && (
//                               <div className="mt-4 pt-3 border-t border-slate-800">
//                                 <div className="flex flex-wrap gap-1.5">
//                                   {item.skills.map((skill, sIdx) => (
//                                     <span
//                                       key={sIdx}
//                                       className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-medium text-cyan-300"
//                                     >
//                                       {skill}
//                                     </span>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Desktop Detail Inspector (Hidden on Mobile) */}
//           <div className="hidden lg:block lg:col-span-7 sticky top-28">
//             <AnimatePresence mode="wait">
//               {activeItem && (
//                 <motion.div
//                   key={activeItem.id}
//                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -10, scale: 0.98 }}
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-cyan-500/30
//                     bg-[#0B132B]/90
//                     p-7
//                     xl:p-8
//                     backdrop-blur-2xl
//                     shadow-[0_15px_40px_rgba(0,0,0,0.6)]
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

//                   {/* Inspector Header */}
//                   <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
//                     <div className="space-y-1.5">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
//                           {activeItem.year}
//                         </span>
//                         {activeItem.location && (
//                           <span className="flex items-center gap-1 text-xs text-slate-400">
//                             <MapPin size={12} className="text-slate-500" />
//                             {activeItem.location}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="text-xl sm:text-2xl font-black text-white">
//                         {activeItem.title}
//                       </h3>
//                       <p className="text-sm font-semibold text-cyan-400">
//                         {activeItem.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
//                       {activeItem.icon || <Terminal size={22} />}
//                     </div>
//                   </div>

//                   {/* Summary */}
//                   <p className="mt-5 text-sm leading-relaxed text-slate-300">
//                     {activeItem.description}
//                   </p>

//                   {/* Key Contributions & Highlights */}
//                   {activeItem.highlights && (
//                     <div className="mt-6 space-y-3">
//                       <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                         <Sparkles size={14} className="text-cyan-400" />
//                         Key Engineering Impact
//                       </h4>
//                       <ul className="space-y-2.5">
//                         {activeItem.highlights.map((point, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="text-cyan-400 shrink-0 mt-0.5"
//                             />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Tech Stack Chips */}
//                   {activeItem.skills && (
//                     <div className="mt-8 pt-5 border-t border-slate-800/80">
//                       <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                         Technologies & Tools
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {activeItem.skills.map((skill, sIdx) => (
//                           <span
//                             key={sIdx}
//                             className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   ChevronDown,
//   Sparkles,
//   Terminal,
//   X,
// } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredList = careerData.filter((item) =>
//     activeFilter === "all" ? true : item.type === activeFilter
//   );

//   const activeItem = careerData.find((item) => item.id === selectedId);

//   // Toggle Function: If same card clicked -> close it (set null), else open clicked card
//   const handleCardClick = (id) => {
//     setSelectedId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <section
//       id="career"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career & Credentials
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Work Experience &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
//           </p>

//           {/* Quick Filters */}
//           <div className="mt-7 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             {["all", "experience", "education"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter);
//                   const firstMatch = careerData.find(
//                     (i) => filter === "all" || i.type === filter
//                   );
//                   if (firstMatch) setSelectedId(firstMatch.id);
//                 }}
//                 className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
//                   activeFilter === filter
//                     ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               >
//                 {filter === "all" ? "All Milestones" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Master-Detail Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
//           {/* Left Column: Interactive Milestone List */}
//           <div className="lg:col-span-5 space-y-3">
//             {filteredList.map((item) => {
//               const isSelected = selectedId === item.id;
//               const isWork = item.type === "experience";

//               return (
//                 <div key={item.id} className="flex flex-col">
//                   {/* Selector Card */}
//                   <div
//                     onClick={() => handleCardClick(item.id)}
//                     className={`
//                       group
//                       relative
//                       flex
//                       items-center
//                       justify-between
//                       p-4
//                       sm:p-5
//                       rounded-2xl
//                       border
//                       cursor-pointer
//                       select-none
//                       transition-all
//                       duration-300
//                       ${
//                         isSelected
//                           ? "border-cyan-400 bg-[#0B132B] shadow-[0_8px_25px_rgba(6,182,212,0.2)]"
//                           : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/80"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center gap-3.5 min-w-0">
//                       <div
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
//                           isSelected
//                             ? "bg-cyan-400 text-slate-950 font-bold"
//                             : "bg-slate-900 border border-slate-700/60 text-slate-300"
//                         }`}
//                       >
//                         {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
//                       </div>

//                       <div className="min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="text-[11px] font-semibold text-cyan-400">
//                             {item.year}
//                           </span>
//                           <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
//                             {item.type}
//                           </span>
//                         </div>

//                         <h4
//                           className={`truncate text-sm sm:text-base font-bold transition-colors ${
//                             isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
//                           }`}
//                         >
//                           {item.title}
//                         </h4>
//                         <p className="truncate text-xs text-slate-400">
//                           {item.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Mobile: Chevron Down for Accordion, Desktop: Chevron Right */}
//                     <div className="shrink-0 text-slate-500">
//                       <div className="hidden lg:block">
//                         <ChevronRight
//                           size={16}
//                           className={`transition-transform duration-300 ${
//                             isSelected ? "text-cyan-400 translate-x-1" : "group-hover:text-slate-400"
//                           }`}
//                         />
//                       </div>
//                       <div className="lg:hidden">
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-300 ${
//                             isSelected ? "rotate-180 text-cyan-400" : ""
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* MOBILE ONLY: Inline Accordion Detail View (Closable) */}
//                   <div className="lg:hidden">
//                     <AnimatePresence>
//                       {isSelected && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="overflow-hidden"
//                         >
//                           <div className="mt-2 rounded-2xl border border-cyan-500/30 bg-[#081124] p-5 shadow-xl">
//                             {/* Summary */}
//                             <p className="text-xs leading-relaxed text-slate-300">
//                               {item.description}
//                             </p>

//                             {/* Key Highlights */}
//                             {item.highlights && (
//                               <div className="mt-4 space-y-2">
//                                 <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
//                                   <Sparkles size={12} />
//                                   Key Contributions
//                                 </h5>
//                                 <ul className="space-y-2">
//                                   {item.highlights.map((point, pIdx) => (
//                                     <li
//                                       key={pIdx}
//                                       className="flex items-start gap-2 text-xs text-slate-300"
//                                     >
//                                       <CheckCircle2
//                                         size={14}
//                                         className="text-cyan-400 shrink-0 mt-0.5"
//                                       />
//                                       <span>{point}</span>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}

//                             {/* Tech Stack Chips */}
//                             {item.skills && (
//                               <div className="mt-4 pt-3 border-t border-slate-800">
//                                 <div className="flex flex-wrap gap-1.5">
//                                   {item.skills.map((skill, sIdx) => (
//                                     <span
//                                       key={sIdx}
//                                       className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-medium text-cyan-300"
//                                     >
//                                       {skill}
//                                     </span>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}

//                             {/* Explicit Close Button for Mobile */}
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 setSelectedId(null);
//                               }}
//                               className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
//                             >
//                               <X size={14} />
//                               <span>Close Details</span>
//                             </button>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Desktop Detail Inspector (Hidden on Mobile) */}
//           <div className="hidden lg:block lg:col-span-7 sticky top-28">
//             <AnimatePresence mode="wait">
//               {activeItem ? (
//                 <motion.div
//                   key={activeItem.id}
//                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -10, scale: 0.98 }}
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-cyan-500/30
//                     bg-[#0B132B]/90
//                     p-7
//                     xl:p-8
//                     backdrop-blur-2xl
//                     shadow-[0_15px_40px_rgba(0,0,0,0.6)]
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

//                   {/* Inspector Header */}
//                   <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
//                     <div className="space-y-1.5">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
//                           {activeItem.year}
//                         </span>
//                         {activeItem.location && (
//                           <span className="flex items-center gap-1 text-xs text-slate-400">
//                             <MapPin size={12} className="text-slate-500" />
//                             {activeItem.location}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="text-xl sm:text-2xl font-black text-white">
//                         {activeItem.title}
//                       </h3>
//                       <p className="text-sm font-semibold text-cyan-400">
//                         {activeItem.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
//                       {activeItem.icon || <Terminal size={22} />}
//                     </div>
//                   </div>

//                   {/* Summary */}
//                   <p className="mt-5 text-sm leading-relaxed text-slate-300">
//                     {activeItem.description}
//                   </p>

//                   {/* Key Contributions & Highlights */}
//                   {activeItem.highlights && (
//                     <div className="mt-6 space-y-3">
//                       <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                         <Sparkles size={14} className="text-cyan-400" />
//                         Key Engineering Impact
//                       </h4>
//                       <ul className="space-y-2.5">
//                         {activeItem.highlights.map((point, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="text-cyan-400 shrink-0 mt-0.5"
//                             />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Tech Stack Chips */}
//                   {activeItem.skills && (
//                     <div className="mt-8 pt-5 border-t border-slate-800/80">
//                       <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                         Technologies & Tools
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {activeItem.skills.map((skill, sIdx) => (
//                           <span
//                             key={sIdx}
//                             className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               ) : (
//                 <div className="rounded-3xl border border-slate-800/80 bg-[#0B132B]/40 p-12 text-center text-slate-500">
//                   Select a milestone from the list to view full engineering details.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   ChevronDown,
//   Sparkles,
//   Terminal,
//   X,
// } from "lucide-react";
// import Container from "../common/Container";
// import { careerData } from "@/data/careerData";

// const Career = () => {
//   const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredList = careerData.filter((item) =>
//     activeFilter === "all" ? true : item.type === activeFilter
//   );

//   const activeItem = careerData.find((item) => item.id === selectedId);

//   // Smooth toggle handler
//   const handleCardClick = (id) => {
//     setSelectedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section
//       id="career"
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Career & Credentials
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Work Experience &{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
//           </p>

//           {/* Quick Filters */}
//           <div className="mt-7 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
//             {["all", "experience", "education"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter);
//                   const firstMatch = careerData.find(
//                     (i) => filter === "all" || i.type === filter
//                   );
//                   if (firstMatch) setSelectedId(firstMatch.id);
//                 }}
//                 className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
//                   activeFilter === filter
//                     ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               >
//                 {filter === "all" ? "All Milestones" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Master-Detail Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
//           {/* Left Column: Interactive Milestone List */}
//           <div className="lg:col-span-5 space-y-3">
//             {filteredList.map((item) => {
//               const isSelected = selectedId === item.id;
//               const isWork = item.type === "experience";

//               return (
//                 <div key={item.id} className="flex flex-col">
//                   {/* Selector Card */}
//                   <div
//                     onClick={() => handleCardClick(item.id)}
//                     className={`
//                       group
//                       relative
//                       flex
//                       items-center
//                       justify-between
//                       p-4
//                       sm:p-5
//                       rounded-2xl
//                       border
//                       cursor-pointer
//                       select-none
//                       transform-gpu
//                       transition-colors
//                       duration-200
//                       ${
//                         isSelected
//                           ? "border-cyan-400 bg-[#0B132B] shadow-[0_4px_20px_rgba(6,182,212,0.2)]"
//                           : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/75"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center gap-3.5 min-w-0">
//                       <div
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
//                           isSelected
//                             ? "bg-cyan-400 text-slate-950 font-bold"
//                             : "bg-slate-900 border border-slate-700/60 text-slate-300"
//                         }`}
//                       >
//                         {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
//                       </div>

//                       <div className="min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="text-[11px] font-semibold text-cyan-400">
//                             {item.year}
//                           </span>
//                           <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
//                             {item.type}
//                           </span>
//                         </div>

//                         <h4
//                           className={`truncate text-sm sm:text-base font-bold transition-colors ${
//                             isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
//                           }`}
//                         >
//                           {item.title}
//                         </h4>
//                         <p className="truncate text-xs text-slate-400">
//                           {item.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Desktop Icon vs Mobile Icon */}
//                     <div className="shrink-0 text-slate-500 pl-2">
//                       <div className="hidden lg:block">
//                         <ChevronRight
//                           size={16}
//                           className={`transition-transform duration-200 ${
//                             isSelected ? "text-cyan-400 translate-x-0.5" : "group-hover:text-slate-400"
//                           }`}
//                         />
//                       </div>
//                       <div className="lg:hidden">
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-200 ${
//                             isSelected ? "rotate-180 text-cyan-400" : ""
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* MOBILE ONLY: Smooth Hardware-Accelerated Accordion */}
//                   <div
//                     className={`
//                       lg:hidden
//                       grid
//                       transition-all
//                       duration-300
//                       ease-in-out
//                       ${
//                         isSelected
//                           ? "grid-rows-[1fr] opacity-100 mt-2"
//                           : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
//                       }
//                     `}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="rounded-2xl border border-cyan-500/30 bg-[#081124] p-4 sm:p-5 shadow-lg space-y-4">
//                         {/* Summary */}
//                         <p className="text-xs leading-relaxed text-slate-300">
//                           {item.description}
//                         </p>

//                         {/* Key Highlights */}
//                         {item.highlights && (
//                           <div className="space-y-2">
//                             <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
//                               <Sparkles size={12} />
//                               Key Contributions
//                             </h5>
//                             <ul className="space-y-2">
//                               {item.highlights.map((point, pIdx) => (
//                                 <li
//                                   key={pIdx}
//                                   className="flex items-start gap-2 text-xs text-slate-300"
//                                 >
//                                   <CheckCircle2
//                                     size={14}
//                                     className="text-cyan-400 shrink-0 mt-0.5"
//                                   />
//                                   <span>{point}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}

//                         {/* Tech Stack Chips */}
//                         {item.skills && (
//                           <div className="pt-3 border-t border-slate-800/80">
//                             <div className="flex flex-wrap gap-1.5">
//                               {item.skills.map((skill, sIdx) => (
//                                 <span
//                                   key={sIdx}
//                                   className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-medium text-cyan-300"
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         )}

//                         {/* Direct Close Button */}
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setSelectedId(null);
//                           }}
//                           className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
//                         >
//                           <X size={14} />
//                           <span>Close Details</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Desktop Detail Inspector (Hidden on Mobile) */}
//           <div className="hidden lg:block lg:col-span-7 sticky top-28">
//             <AnimatePresence mode="wait">
//               {activeItem ? (
//                 <motion.div
//                   key={activeItem.id}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-cyan-500/30
//                     bg-[#0B132B]/90
//                     p-7
//                     xl:p-8
//                     backdrop-blur-2xl
//                     shadow-[0_15px_40px_rgba(0,0,0,0.6)]
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

//                   {/* Inspector Header */}
//                   <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
//                     <div className="space-y-1.5">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
//                           {activeItem.year}
//                         </span>
//                         {activeItem.location && (
//                           <span className="flex items-center gap-1 text-xs text-slate-400">
//                             <MapPin size={12} className="text-slate-500" />
//                             {activeItem.location}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="text-xl sm:text-2xl font-black text-white">
//                         {activeItem.title}
//                       </h3>
//                       <p className="text-sm font-semibold text-cyan-400">
//                         {activeItem.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
//                       {activeItem.icon || <Terminal size={22} />}
//                     </div>
//                   </div>

//                   {/* Summary */}
//                   <p className="mt-5 text-sm leading-relaxed text-slate-300">
//                     {activeItem.description}
//                   </p>

//                   {/* Key Contributions & Highlights */}
//                   {activeItem.highlights && (
//                     <div className="mt-6 space-y-3">
//                       <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                         <Sparkles size={14} className="text-cyan-400" />
//                         Key Engineering Impact
//                       </h4>
//                       <ul className="space-y-2.5">
//                         {activeItem.highlights.map((point, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="text-cyan-400 shrink-0 mt-0.5"
//                             />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Tech Stack Chips */}
//                   {activeItem.skills && (
//                     <div className="mt-8 pt-5 border-t border-slate-800/80">
//                       <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                         Technologies & Tools
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {activeItem.skills.map((skill, sIdx) => (
//                           <span
//                             key={sIdx}
//                             className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               ) : (
//                 <div className="rounded-3xl border border-slate-800/80 bg-[#0B132B]/40 p-12 text-center text-slate-500">
//                   Select a milestone from the list to view full engineering details.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Career;





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import Container from "../common/Container";
import { careerData } from "@/data/careerData";

const Career = () => {
  const [selectedId, setSelectedId] = useState(careerData[0]?.id || 5);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredList = careerData.filter((item) =>
    activeFilter === "all" ? true : item.type === activeFilter
  );

  const activeItem = careerData.find((item) => item.id === selectedId);

  // Smooth toggle handler
  const handleCardClick = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070B1F]"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Career & Credentials
            </span>
          </div>

          <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Work Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
            Select any milestone to inspect technical responsibilities, architecture impact, and specialized toolsets.
          </p>

          {/* Quick Filters */}
          <div className="mt-7 inline-flex p-1 rounded-2xl border border-slate-800 bg-[#0B132B]/80 backdrop-blur-xl">
            {["all", "experience", "education"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  const firstMatch = careerData.find(
                    (i) => filter === "all" || i.type === filter
                  );
                  if (firstMatch) setSelectedId(firstMatch.id);
                }}
                className={`capitalize px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {filter === "all" ? "All Milestones" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Master-Detail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Milestone List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredList.map((item) => {
              const isSelected = selectedId === item.id;
              const isWork = item.type === "experience";

              return (
                <div key={item.id} className="flex flex-col">
                  {/* Selector Card */}
                  <div
                    onClick={() => handleCardClick(item.id)}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      p-4
                      sm:p-5
                      rounded-2xl
                      border
                      cursor-pointer
                      select-none
                      transform-gpu
                      transition-colors
                      duration-200
                      ${
                        isSelected
                          ? "border-cyan-400 bg-[#0B132B] shadow-[0_4px_20px_rgba(6,182,212,0.2)]"
                          : "border-slate-800/80 bg-[#0B132B]/40 hover:border-slate-700 hover:bg-[#0B132B]/75"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-colors ${
                          isSelected
                            ? "bg-cyan-400 text-slate-950 font-bold"
                            : "bg-slate-900 border border-slate-700/60 text-slate-300"
                        }`}
                      >
                        {item.icon || (isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />)}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-cyan-400">
                            {item.year}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                            {item.type}
                          </span>
                        </div>

                        <h4
                          className={`truncate text-sm sm:text-base font-bold transition-colors ${
                            isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="truncate text-xs text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Icon vs Mobile Icon */}
                    <div className="shrink-0 text-slate-500 pl-2">
                      <div className="hidden lg:block">
                        <ChevronRight
                          size={16}
                          className={`transition-transform duration-200 ${
                            isSelected ? "text-cyan-400 translate-x-0.5" : "group-hover:text-slate-400"
                          }`}
                        />
                      </div>
                      <div className="lg:hidden">
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isSelected ? "rotate-180 text-cyan-400" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE ONLY: Smooth Hardware-Accelerated Accordion */}
                  <div
                    className={`
                      lg:hidden
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isSelected
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-2xl border border-cyan-500/30 bg-[#081124] p-4 sm:p-5 shadow-lg space-y-4">
                        {/* Summary */}
                        <p className="text-xs leading-relaxed text-slate-300">
                          {item.description}
                        </p>

                        {/* Key Highlights */}
                        {item.highlights && (
                          <div className="space-y-2">
                            <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                              <Sparkles size={12} />
                              Key Contributions
                            </h5>
                            <ul className="space-y-2">
                              {item.highlights.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-2 text-xs text-slate-300"
                                >
                                  <CheckCircle2
                                    size={14}
                                    className="text-cyan-400 shrink-0 mt-0.5"
                                  />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Stack Chips */}
                        {item.skills && (
                          <div className="pt-3 border-t border-slate-800/80">
                            <div className="flex flex-wrap gap-1.5">
                              {item.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-medium text-cyan-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Direct Close Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedId(null);
                          }}
                          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <X size={14} />
                          <span>Close Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Detail Inspector (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-cyan-500/30
                    bg-[#0B132B]/90
                    p-7
                    xl:p-8
                    backdrop-blur-2xl
                    shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                  "
                >
                  {/* Decorative Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

                  {/* Inspector Header */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300">
                          {activeItem.year}
                        </span>
                        {activeItem.location && (
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin size={12} className="text-slate-500" />
                            {activeItem.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {activeItem.title}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400">
                        {activeItem.subtitle}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-2xl">
                      {activeItem.icon || <Terminal size={22} />}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-5 text-sm leading-relaxed text-slate-300">
                    {activeItem.description}
                  </p>

                  {/* Key Contributions & Highlights */}
                  {activeItem.highlights && (
                    <div className="mt-6 space-y-3">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        <Sparkles size={14} className="text-cyan-400" />
                        Key Engineering Impact
                      </h4>
                      <ul className="space-y-2.5">
                        {activeItem.highlights.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-cyan-400 shrink-0 mt-0.5"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  {activeItem.skills && (
                    <div className="mt-8 pt-5 border-t border-slate-800/80">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeItem.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-[#070B1F] border border-cyan-500/20 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="rounded-3xl border border-slate-800/80 bg-[#0B132B]/40 p-12 text-center text-slate-500">
                  Select a milestone from the list to view full engineering details.
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Career;