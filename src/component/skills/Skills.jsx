import { useState } from "react";
import Container from "../common/Container";
import SkillsHeader from "./SkillsHeader.";
import SkillsCanvas from "./SkillsCanvas"; 
import SkillInfoPanel from "./SkillsInfoPanel";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative py-32 bg-[#040816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <Container>
        <SkillsHeader />

        <div className="relative mt-16">
          <SkillsCanvas
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />

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