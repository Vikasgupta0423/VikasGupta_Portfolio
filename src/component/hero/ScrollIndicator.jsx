// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const ScrollIndicator = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         y: [0, 8, 0],
//       }}
//       transition={{
//         opacity: {
//           duration: 1,
//           delay: 1.2,
//         },
//         y: {
//           repeat: Infinity,
//           duration: 2,
//           ease: "easeInOut",
//         },
//       }}
//       className="
//         absolute
//         bottom-8
//         left-1/2
//         z-20
//         -translate-x-1/2
//       "
//     >
//       <div className="flex flex-col items-center gap-3">
//         {/* Scroll Text */}
//         <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
//           Scroll
//         </span>

//         {/* Mouse */}
//         <div
//           className="
//             flex
//             h-12
//             w-7
//             items-start
//             justify-center
//             rounded-full
//             border
//             border-cyan-400/30
//             bg-white/5
//             backdrop-blur-xl
//             p-1
//           "
//         >
//           <motion.div
//             animate={{
//               y: [0, 10, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 1.6,
//               ease: "easeInOut",
//             }}
//             className="h-2.5 w-2.5 rounded-full bg-cyan-400"
//           />
//         </div>

//         {/* Arrow */}
//         <ChevronDown
//           size={20}
//           className="text-cyan-400 opacity-80"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default ScrollIndicator;


import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const handleScroll = () => {
    const nextSection =
      document.getElementById("about") ||
      document.querySelector("section:nth-of-type(2)");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      onClick={handleScroll}
      className="
        absolute
        bottom-4
        sm:bottom-6
        inset-x-0
        mx-auto
        w-fit
        z-30
        flex
        flex-col
        items-center
        cursor-pointer
        select-none
        group
      "
    >
      <div className="flex flex-col items-center gap-1.5 sm:gap-2">
        {/* Scroll Text */}
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 group-hover:text-cyan-300 transition-colors">
          Scroll
        </span>

        {/* Mouse Shell */}
        <div
          className="
            flex
            h-9
            w-5
            sm:h-10
            sm:w-6
            items-start
            justify-center
            rounded-full
            border
            border-cyan-500/30
            bg-[#0b1329]/60
            backdrop-blur-md
            p-1
            group-hover:border-cyan-400
            transition-colors
          "
        >
          {/* Wheel Dot Animation */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
        </div>

        {/* Animated Chevron Arrow */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown
            size={16}
            className="text-cyan-400/70 group-hover:text-cyan-300 transition-colors"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;