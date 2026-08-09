import { Typewriter } from "react-simple-typewriter";

const AnimatedText = () => {
  return (
    <h2 className="text-3xl font-bold text-cyan-400 mt-4">
      <Typewriter
        words={[
          "Java Full Stack Developer",
          "Spring Boot Developer",
          "React Developer",
          "Backend Engineer",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </h2>
  );
};

export default AnimatedText;