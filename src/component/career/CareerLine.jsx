import { motion } from "framer-motion";

const CareerLine = () => {
  return (
    <>
      {/* Main Timeline Line */}
      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[3px]
          h-full
          bg-white/10
        "
      />

      {/* Animated Glow Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[3px]
          rounded-full
          bg-gradient-to-b
          from-cyan-400
          via-sky-500
          to-purple-500
          shadow-[0_0_30px_rgba(34,211,238,0.8)]
        "
      />
    </>
  );
};

export default CareerLine;