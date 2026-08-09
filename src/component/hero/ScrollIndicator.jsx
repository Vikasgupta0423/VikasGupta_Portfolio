import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 8, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
          delay: 1.2,
        },
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      }}
      className="
        absolute
        bottom-8
        left-1/2
        z-20
        -translate-x-1/2
      "
    >
      <div className="flex flex-col items-center gap-3">
        {/* Scroll Text */}
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          Scroll
        </span>

        {/* Mouse */}
        <div
          className="
            flex
            h-12
            w-7
            items-start
            justify-center
            rounded-full
            border
            border-cyan-400/30
            bg-white/5
            backdrop-blur-xl
            p-1
          "
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="h-2.5 w-2.5 rounded-full bg-cyan-400"
          />
        </div>

        {/* Arrow */}
        <ChevronDown
          size={20}
          className="text-cyan-400 opacity-80"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;