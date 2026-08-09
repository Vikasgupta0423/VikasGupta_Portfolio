import { motion } from "framer-motion";

const TimelineDot = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="
        hidden
        md:flex
        absolute
        left-1/2
        -translate-x-1/2
        items-center
        justify-center
        z-20
      "
    >
      {/* Outer Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          w-10
          h-10
          rounded-full
          bg-cyan-400/20
        "
      />

      {/* Middle Ring */}
      <div
        className="
          w-8
          h-8
          rounded-full
          border-2
          border-cyan-400
          bg-[#070B1F]
        "
      />

      {/* Inner Dot */}
      <div
        className="
          absolute
          w-3
          h-3
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_#22d3ee]
        "
      />
    </motion.div>
  );
};

export default TimelineDot;