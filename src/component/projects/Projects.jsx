// import Container from "../common/Container";
// import ProjectsHeader from "./ProjectsHeader";
// import ProjectsCanvas from "./ProjectsCanvas";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative py-32 bg-[#050816] overflow-hidden"
//     >
//       <Container>

//         <ProjectsHeader />

//         <ProjectsCanvas />

//       </Container>
//     </section>
//   );
// };

// export default Projects;





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../common/Container";
// import ProjectsHeader from "./ProjectsHeader";
// import ProjectCard from "./ProjectCard";
// import ProjectDetailsModal from "./ProjectDetailsModal";
// import { projects } from "../../data/projectsData";

// const categories = ["All", "Full Stack", "Backend", "Frontend"];

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filteredProjects = projects.filter((project) =>
//     activeCategory === "All" ? true : project.category === activeCategory
//   );

//   return (
//     <section
//       id="projects"
//       className="relative py-16 sm:py-20 lg:py-24 bg-[#070B1F] overflow-hidden"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         <ProjectsHeader />

//         {/* Category Filter Tabs */}
//         <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
//           {categories.map((cat) => {
//             const isActive = activeCategory === cat;
//             return (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`
//                   px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold
//                   transition-all duration-200 cursor-pointer border
//                   ${
//                     isActive
//                       ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
//                       : "bg-[#0B132B]/70 text-slate-400 border-slate-800 hover:border-cyan-500/40 hover:text-white"
//                   }
//                 `}
//               >
//                 {cat}
//               </button>
//             );
//           })}
//         </div>

//         {/* Responsive Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
//         >
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 onSelect={() => setSelectedProject(project)}
//               />
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Detailed Case-Study Modal */}
//         <ProjectDetailsModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       </Container>
//     </section>
//   );
// };

// export default Projects;



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "../common/Container";
import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { projects } from "../../data/projectsData";

const categories = ["All", "Full Stack", "Backend", "Frontend"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [limit, setLimit] = useState(6);

  // 1. Dynamic Limit: Mobile (3) vs Desktop (6)
  useEffect(() => {
    const updateLimit = () => {
      setLimit(window.innerWidth < 768 ? 3 : 6);
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  // Filter List
  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  // Apply Responsive Slice
  const visibleProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, limit);

  const hasMore = filteredProjects.length > limit;

  // Category switch hone par expansion reset karein
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setIsExpanded(false);
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#070B1F] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

      <Container>
        <ProjectsHeader />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`
                  px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold
                  transition-all duration-200 cursor-pointer border
                  ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                      : "bg-[#0B132B]/70 text-slate-400 border-slate-800 hover:border-cyan-500/40 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Read More / View Less Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="
                group
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-cyan-500/30
                bg-[#0B132B]/80
                px-6
                py-3
                text-xs
                sm:text-sm
                font-semibold
                text-cyan-300
                backdrop-blur-xl
                shadow-[0_8px_25px_rgba(0,0,0,0.5)]
                hover:border-cyan-400
                hover:bg-cyan-500/15
                hover:text-white
                hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <span>{isExpanded ? "Show Less" : "View All Projects"}</span>
              {isExpanded ? (
                <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Modal Window */}
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};

export default Projects;