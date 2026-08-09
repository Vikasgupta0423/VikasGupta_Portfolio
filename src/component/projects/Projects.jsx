import Container from "../common/Container";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsCanvas from "./ProjectsCanvas";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      <Container>

        <ProjectsHeader />

        <ProjectsCanvas />

      </Container>
    </section>
  );
};

export default Projects;