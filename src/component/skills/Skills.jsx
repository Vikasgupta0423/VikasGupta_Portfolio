// import { useState } from "react";
// import Container from "../common/Container";
// import SkillsHeader from "./SkillsHeader.";
// import SkillsCanvas from "./SkillsCanvas"; 
// import SkillInfoPanel from "./SkillsInfoPanel";

// const Skills = () => {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   return (
//     <section
//       id="skills"
//       className="relative py-32 bg-[#040816] overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

//       <Container>
//         <SkillsHeader />

//         <div className="relative mt-16">
//           <SkillsCanvas
//             selectedSkill={selectedSkill}
//             setSelectedSkill={setSelectedSkill}
//           />

//           <SkillInfoPanel
//             skill={selectedSkill}
//             onClose={() => setSelectedSkill(null)}
//           />
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Skills;



// import { useState } from "react";
// import Container from "../common/Container";
// import SkillsHeader from "./SkillsHeader.";
// import SkillsCanvas from "./SkillsCanvas";
// import SkillInfoPanel from "./SkillsInfoPanel";

// const Skills = () => {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   return (
//     <section
//       id="skills"
//       className="relative py-16 sm:py-20 lg:py-24 bg-[#070B1F] overflow-hidden"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute top-12 -left-20 h-64 w-64 sm:h-80 sm:w-80 bg-cyan-500/10 blur-[120px] rounded-full" />
//       <div className="pointer-events-none absolute bottom-10 -right-20 h-72 w-72 sm:h-96 sm:w-96 bg-purple-500/10 blur-[140px] rounded-full" />

//       <Container>
//         {/* Section Header */}
//         <SkillsHeader />

//         {/* 3D Interactive Solar System Canvas */}
//         <div className="relative mt-8 sm:mt-12 rounded-3xl border border-cyan-500/20 bg-[#050816]/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden">
//           <SkillsCanvas
//             selectedSkill={selectedSkill}
//             setSelectedSkill={setSelectedSkill}
//           />

//           {/* Responsive Skill Info Panel */}
//           <SkillInfoPanel
//             skill={selectedSkill}
//             onClose={() => setSelectedSkill(null)}
//           />
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Skills;



import { useState } from "react";
import Container from "../common/Container";
import SkillsHeader from "./SkillsHeader.";
import SkillsCanvas from "./SkillsCanvas";
import SkillInfoPanel from "./SkillsInfoPanel";
import { skills } from "@/data/skillsData";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#070B1F] overflow-hidden"
    >
      {/* Glows */}
      <div className="pointer-events-none absolute top-12 -left-20 h-64 w-64 sm:h-80 sm:w-80 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-72 w-72 sm:h-96 sm:w-96 bg-purple-500/10 blur-[140px] rounded-full" />

      <Container>
        <SkillsHeader />

        {/* Quick Clickable Skill Tags (User ko instant access deta hai) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {skills.map((s) => {
            const isActive = selectedSkill?.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSkill(s)}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold
                  transition-all duration-200 cursor-pointer border
                  ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105"
                      : "bg-[#0B132B]/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-white"
                  }
                `}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: s.color || "#22d3ee" }}
                />
                {s.name}
              </button>
            );
          })}
        </div>

        {/* 3D Canvas Box */}
        <div className="relative rounded-3xl border border-cyan-500/20 bg-[#050816]/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          <SkillsCanvas
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />

          {/* Quick-Open Detail Panel */}
          <SkillInfoPanel
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        </div>
      </Container>
    </section>
  );
};

export default Skills;