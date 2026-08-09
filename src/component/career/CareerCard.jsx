import { motion } from "framer-motion";

const CareerCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-cyan-400/20
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
      "
    >
      {/* Glow Background */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

      {/* Year Badge */}
      <div className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold mb-6">
        {item.year}
      </div>

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
      <p className="mt-2 text-cyan-400 font-medium">
        {item.subtitle}
      </p>

      {/* Description */}
      <p className="mt-5 text-gray-400 leading-8">
        {item.description}
      </p>

      {/* Bottom Line */}
      <div className="mt-8 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default CareerCard;