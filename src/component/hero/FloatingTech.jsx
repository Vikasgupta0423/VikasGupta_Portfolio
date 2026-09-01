// import {
//   FaJava,
//   FaReact,
//   FaDocker,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   SiSpringboot,
//   SiMysql,
// } from "react-icons/si";

// const techs = [
//   { icon: <FaJava />, top: "5%", left: "45%" },
//   { icon: <FaReact />, top: "25%", right: "0%" },
//   { icon: <SiSpringboot />, top: "70%", right: "5%" },
//   { icon: <SiMysql />, bottom: "15%", left: "5%" },
//   { icon: <FaDocker />, bottom: "0%", right: "40%" },
//   { icon: <FaGitAlt />, top: "40%", left: "-5%" },
// ];

// const FloatingTech = () => {
//   return (
//     <>
//       {techs.map((item, index) => (
//         <div
//           key={index}
//           className="absolute w-14 h-14 rounded-full
//           bg-white/10 backdrop-blur-xl
//           border border-cyan-500/20
//           flex justify-center items-center
//           text-cyan-400 text-2xl
//           animate-bounce"
//           style={item}
//         >
//           {item.icon}
//         </div>
//       ))}
//     </>
//   );
// };

// export default FloatingTech;




// import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
// import { SiSpringboot, SiMysql } from "react-icons/si";

// const techs = [
//   { icon: <FaJava />, style: { top: "2%", left: "45%" } },
//   { icon: <FaReact />, style: { top: "20%", right: "-2%" } },
//   { icon: <SiSpringboot />, style: { top: "65%", right: "2%" } },
//   { icon: <SiMysql />, style: { bottom: "10%", left: "2%" } },
//   { icon: <FaDocker />, style: { bottom: "-2%", right: "35%" } },
//   { icon: <FaGitAlt />, style: { top: "35%", left: "-4%" } },
// ];

// const FloatingTech = () => {
//   return (
//     <>
//       {techs.map((item, index) => (
//         <div
//           key={index}
//           className="
//             pointer-events-auto
//             absolute
//             w-13 h-13
//             rounded-full
//             bg-white/10
//             backdrop-blur-xl
//             border
//             border-cyan-500/30
//             flex justify-center items-center
//             text-cyan-400 text-2xl
//             shadow-lg shadow-cyan-500/10
//             animate-bounce
//           "
//           style={item.style}
//         >
//           {item.icon}
//         </div>
//       ))}
//     </>
//   );
// };

// export default FloatingTech;


// import { motion } from "framer-motion";
// import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
// import { SiSpringboot, SiMysql } from "react-icons/si";

// const techs = [
//   { icon: <FaJava />, position: "top-[2%] left-[45%]", delay: 0 },
//   { icon: <FaReact />, position: "top-[20%] -right-3 sm:-right-6", delay: 0.5 },
//   { icon: <SiSpringboot />, position: "bottom-[22%] -right-2 sm:-right-5", delay: 1 },
//   { icon: <SiMysql />, position: "bottom-[12%] -left-2 sm:-left-6", delay: 1.5 },
//   { icon: <FaDocker />, position: "-bottom-4 left-[40%]", delay: 2 },
//   { icon: <FaGitAlt />, position: "top-[32%] -left-4 sm:-left-8", delay: 2.5 },
// ];

// const FloatingTech = () => {
//   return (
//     <div className="absolute inset-0 pointer-events-none z-20">
//       {techs.map((item, index) => (
//         <motion.div
//           key={index}
//           className={`absolute ${item.position} pointer-events-auto`}
//           animate={{
//             y: [-6, 6, -6],
//             rotate: [-2, 2, -2],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: item.delay,
//           }}
//         >
//           <div className="
//             w-10 h-10 
//             sm:w-12 sm:h-12 
//             md:w-14 md:h-14 
//             rounded-2xl 
//             bg-[#0b1329]/80 
//             backdrop-blur-md 
//             border border-cyan-500/30 
//             flex justify-center items-center 
//             text-cyan-400 
//             text-lg sm:text-xl md:text-2xl 
//             shadow-[0_0_20px_rgba(6,182,212,0.15)]
//             hover:border-cyan-400 
//             hover:scale-110 
//             transition-all duration-300
//           ">
//             {item.icon}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default FloatingTech;



// import { motion } from "framer-motion";
// import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
// import { SiSpringboot, SiMysql } from "react-icons/si";

// const techIcons = [
//   { icon: <FaJava />, color: "hover:text-orange-400" },
//   { icon: <FaReact />, color: "hover:text-cyan-400" },
//   { icon: <SiSpringboot />, color: "hover:text-emerald-400" },
//   { icon: <SiMysql />, color: "hover:text-blue-400" },
//   { icon: <FaDocker />, color: "hover:text-sky-400" },
//   { icon: <FaGitAlt />, color: "hover:text-red-400" },
// ];

// const FloatingTech = () => {
//   const total = techIcons.length;
//   // Radius percentage (orbit size)
//   const radius = 48; 

//   return (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//       {/* 1. Orbit Parent: Smooth Continuous Rotation */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="relative w-full h-full"
//       >
//         {techIcons.map((tech, index) => {
//           // Calculate angle for equidistant distribution (60 deg each for 6 items)
//           const angle = (index / total) * 2 * Math.PI;
//           const x = 50 + radius * Math.cos(angle);
//           const y = 50 + radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//               }}
//             >
//               {/* 2. Counter-Rotation: Keeps the icon upright */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="pointer-events-auto"
//               >
//                 <div
//                   className={`
//                     w-10 h-10 
//                     sm:w-12 sm:h-12 
//                     md:w-13 md:h-13 
//                     rounded-2xl 
//                     bg-[#0b1329]/85 
//                     backdrop-blur-md 
//                     border border-cyan-500/25 
//                     flex justify-center items-center 
//                     text-cyan-400/90 
//                     text-base sm:text-xl md:text-2xl 
//                     shadow-[0_4px_20px_rgba(0,0,0,0.35)]
//                     hover:border-cyan-400 
//                     hover:scale-125
//                     hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
//                     transition-all duration-300
//                     cursor-pointer
//                     ${tech.color}
//                   `}
//                 >
//                   {tech.icon}
//                 </div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default FloatingTech;




import { motion } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

const techIcons = [
  { icon: <FaJava />, color: "hover:text-orange-400" },
  { icon: <FaReact />, color: "hover:text-cyan-400" },
  { icon: <SiSpringboot />, color: "hover:text-emerald-400" },
  { icon: <SiMysql />, color: "hover:text-blue-400" },
  { icon: <FaDocker />, color: "hover:text-sky-400" },
  { icon: <FaGitAlt />, color: "hover:text-red-400" },
];

const FloatingTech = () => {
  const total = techIcons.length;
  // Radius percentage (orbit size)
  const radius = 48; 

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      {/* 1. Orbit Parent: Smooth Continuous Rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-full"
      >
        {techIcons.map((tech, index) => {
          // Calculate angle for equidistant distribution (60 deg each for 6 items)
          const angle = (index / total) * 2 * Math.PI;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {/* 2. Counter-Rotation: Keeps the icon upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-auto"
              >
                <div
                  className={`
                    w-10 h-10 
                    sm:w-12 sm:h-12 
                    md:w-13 md:h-13 
                    rounded-2xl 
                    bg-[#0b1329]/85 
                    backdrop-blur-md 
                    border border-cyan-500/25 
                    flex justify-center items-center 
                    text-cyan-400/90 
                    text-base sm:text-xl md:text-2xl 
                    shadow-[0_4px_20px_rgba(0,0,0,0.35)]
                    hover:border-cyan-400 
                    hover:scale-125
                    hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
                    transition-all duration-300
                    cursor-pointer
                    ${tech.color}
                  `}
                >
                  {tech.icon}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingTech;