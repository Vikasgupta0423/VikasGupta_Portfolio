import { motion } from "framer-motion";

const JourneyCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

      {/* Year Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
        }}
        className="
          inline-flex
          items-center
          px-4
          py-2
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-400/20
          text-cyan-400
          text-sm
          font-semibold
          mb-6
        "
      >
        {item.year}
      </motion.div>

      {/* Icon */}
      <div
        className="
          w-20
          h-20
          rounded-2xl
          flex
          items-center
          justify-center
          text-5xl
          bg-cyan-500/10
          border
          border-cyan-400/20
          shadow-[0_0_25px_rgba(34,211,238,0.25)]
          mb-6
        "
      >
        {item.icon}
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-white">
        {item.title}
      </h2>

      {/* Subtitle */}
      <h4 className="mt-2 text-cyan-400 font-medium">
        {item.subtitle}
      </h4>

      {/* Description */}
      <p className="mt-5 text-gray-400 leading-8">
        {item.description}
      </p>

      {/* Bottom Animation Line */}
      <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default JourneyCard;