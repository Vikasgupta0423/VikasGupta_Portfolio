import AboutHeader from "./AboutHeader";
import JourneyTimeline from "./JourneyTimeline";
import Container from "../common/Container";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-[#070B1F]"
    >
      <Container>

        <AboutHeader />

        <JourneyTimeline />

      </Container>
    </section>
  );
};

export default About;