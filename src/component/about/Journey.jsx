import { motion } from "framer-motion";
import Container from "../common/Container";
import JourneyTimeline from "./JourneyTimeline";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative py-32 overflow-hidden bg-[#070B1F]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              text-cyan-400
              uppercase
              tracking-[3px]
              text-sm
            "
          >
            My Journey
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            From Beginner to
            <br />

            <span className="text-cyan-400">
              Full Stack Developer
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              leading-8
              text-gray-400
            "
          >
            Every milestone in my journey has shaped my skills as a developer.
            From writing my first program to building enterprise applications
            with React and Spring Boot, every step has been an opportunity to
            learn, improve, and create impactful software.
          </p>
        </motion.div>

        {/* Timeline */}
        <JourneyTimeline />
      </Container>
    </section>
  );
};

export default Journey;