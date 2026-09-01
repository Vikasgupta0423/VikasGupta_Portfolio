// import { motion } from "framer-motion";

// const TimelineDot = () => {
//   return (
//     <motion.div
//       initial={{
//         scale: 0,
//         opacity: 0,
//       }}
//       whileInView={{
//         scale: 1,
//         opacity: 1,
//       }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.5,
//       }}
//       className="
//         hidden
//         md:flex
//         absolute
//         left-1/2
//         -translate-x-1/2
//         items-center
//         justify-center
//         z-20
//       "
//     >
//       {/* Outer Pulse */}
//       <motion.div
//         animate={{
//           scale: [1, 1.8, 1],
//           opacity: [0.8, 0, 0.8],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 2,
//         }}
//         className="
//           absolute
//           w-10
//           h-10
//           rounded-full
//           bg-cyan-400/20
//         "
//       />

//       {/* Middle Ring */}
//       <div
//         className="
//           w-8
//           h-8
//           rounded-full
//           border-2
//           border-cyan-400
//           bg-[#070B1F]
//         "
//       />

//       {/* Inner Dot */}
//       <div
//         className="
//           absolute
//           w-3
//           h-3
//           rounded-full
//           bg-cyan-400
//           shadow-[0_0_20px_#22d3ee]
//         "
//       />
//     </motion.div>
//   );
// };

// export default TimelineDot;













// import { motion } from "framer-motion";

// const TimelineDot = () => {
//   return (
//     <div
//       className="
//         absolute
//         left-4
//         md:left-1/2
//         -translate-x-1/2
//         flex
//         items-center
//         justify-center
//         z-20
//       "
//     >
//       {/* Outer Pulse Ring */}
//       <motion.div
//         animate={{
//           scale: [1, 1.6, 1],
//           opacity: [0.6, 0, 0.6],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 2.2,
//           ease: "easeInOut",
//         }}
//         className="absolute h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-cyan-400/25 pointer-events-none"
//       />

//       {/* Center Circle */}
//       <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-cyan-400 bg-[#070B1F] flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.6)]">
//         <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
//       </div>
//     </div>
//   );
// };

// export default TimelineDot;







// import { motion } from "framer-motion";

// const TimelineDot = ({ isActive, isPassed, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="
//         absolute
//         left-4
//         md:left-1/2
//         -translate-x-1/2
//         flex
//         items-center
//         justify-center
//         z-20
//         cursor-pointer
//       "
//     >
//       {/* Outer Glow Wave (Active Node Only) */}
//       {isActive && (
//         <motion.div
//           animate={{
//             scale: [1, 1.8, 1],
//             opacity: [0.7, 0, 0.7],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 2,
//             ease: "easeInOut",
//           }}
//           className="absolute h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-cyan-400/30 pointer-events-none"
//         />
//       )}

//       {/* Main Node Circle */}
//       <div
//         className={`
//           flex
//           items-center
//           justify-center
//           rounded-full
//           transition-all
//           duration-300
//           ${
//             isActive
//               ? "h-5 w-5 sm:h-6 sm:w-6 border-2 border-cyan-300 bg-[#070B1F] shadow-[0_0_18px_rgba(34,211,238,0.9)]"
//               : isPassed
//               ? "h-4 w-4 sm:h-4.5 sm:w-4.5 border-2 border-cyan-400 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
//               : "h-3.5 w-3.5 sm:h-4 sm:w-4 border-2 border-slate-700 bg-[#070B1F] hover:border-cyan-400/60"
//           }
//         `}
//       >
//         {/* Inner Core */}
//         {isActive && (
//           <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TimelineDot;



const TimelineDot = ({ isActive, isPassed, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        absolute
        left-4
        md:left-1/2
        -translate-x-1/2
        flex
        items-center
        justify-center
        z-20
        cursor-pointer
        w-6
        h-6
      "
    >
      {/* Outer Pulse */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />
      )}

      {/* Center Dot with constant 2px border */}
      <div
        className={`
          rounded-full
          border-2
          transition-all
          duration-300
          flex
          items-center
          justify-center
          ${
            isActive
              ? "h-5 w-5 border-cyan-300 bg-[#070B1F] shadow-[0_0_15px_rgba(34,211,238,0.9)]"
              : isPassed
              ? "h-4 w-4 border-cyan-400 bg-cyan-400"
              : "h-3.5 w-3.5 border-slate-700 bg-[#070B1F] hover:border-cyan-400"
          }
        `}
      >
        {isActive && <div className="h-2 w-2 rounded-full bg-cyan-400" />}
      </div>
    </div>
  );
};

export default TimelineDot;