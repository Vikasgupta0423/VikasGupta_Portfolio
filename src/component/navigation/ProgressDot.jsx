// import { motion } from "framer-motion";

// const ProgressDot = ({ active, label, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="group flex items-center gap-4"
//     >
//       <motion.div
//         animate={{
//           scale: active ? 1.4 : 1,
//         }}
//         className={`
//           w-4
//           h-4
//           rounded-full
//           transition-all
//           duration-300
//           ${
//             active
//               ? "bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
//               : "bg-white/30"
//           }
//         `}
//       />

//       <span
//         className={`
//           text-sm
//           transition-all
//           duration-300
//           ${
//             active
//               ? "text-cyan-400"
//               : "text-gray-500 group-hover:text-white"
//           }
//         `}
//       >
//         {label}
//       </span>
//     </button>
//   );
// };

// export default ProgressDot;



import { motion } from "framer-motion";

const ProgressDot = ({ active, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center cursor-pointer py-1.5 focus:outline-none"
      aria-label={`Scroll to ${label}`}
    >
      {/* Outer Pulse Ring for Active State */}
      <div className="relative flex items-center justify-center">
        {active && (
          <motion.div
            layoutId="activeGlow"
            className="absolute -inset-1.5 rounded-full bg-cyan-400/20 blur-[3px]"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}

        {/* Core Dot (Original Color Logic) */}
        <motion.div
          animate={{
            scale: active ? 1.35 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={`
            h-3 w-3 rounded-full transition-all duration-300
            ${
              active
                ? "bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
                : "bg-white/30 group-hover:bg-white/80 group-hover:scale-110"
            }
          `}
        />
      </div>

      {/* Modern Label Pill */}
      <span
        className={`
          ml-3.5 rounded-md px-2.5 py-0.5 text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300
          ${
            active
              ? "bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 opacity-100 translate-x-0 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              : "opacity-0 -translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
};

export default ProgressDot;