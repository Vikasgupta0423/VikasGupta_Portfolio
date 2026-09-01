// import { Typewriter } from "react-simple-typewriter";

// const AnimatedText = () => {
//   return (
//     <h2 className="text-3xl font-bold text-cyan-400 mt-4">
//       <Typewriter
//         words={[
//           "Java Full Stack Developer",
//           "Spring Boot Developer",
//           "React Developer",
//           "Backend Engineer",
//         ]}
//         loop={0}
//         cursor
//         cursorStyle="|"
//         typeSpeed={70}
//         deleteSpeed={40}
//         delaySpeed={1500}
//       />
//     </h2>
//   );
// };

// export default AnimatedText;


import { Typewriter } from "react-simple-typewriter";

const AnimatedText = () => {
  return (
    <span className="inline-block text-cyan-400 font-semibold">
      <Typewriter
        words={[
          "Java Full Stack Developer",
          "Spring Boot Specialist",
          "React & Angular Developer",
          "Backend Engineer",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={35}
        delaySpeed={1800}
      />
    </span>
  );
};

export default AnimatedText;