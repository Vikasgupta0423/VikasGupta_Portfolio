import { motion } from "framer-motion";

const ProgressDot = ({ active, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4"
    >
      <motion.div
        animate={{
          scale: active ? 1.4 : 1,
        }}
        className={`
          w-4
          h-4
          rounded-full
          transition-all
          duration-300
          ${
            active
              ? "bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
              : "bg-white/30"
          }
        `}
      />

      <span
        className={`
          text-sm
          transition-all
          duration-300
          ${
            active
              ? "text-cyan-400"
              : "text-gray-500 group-hover:text-white"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
};

export default ProgressDot;