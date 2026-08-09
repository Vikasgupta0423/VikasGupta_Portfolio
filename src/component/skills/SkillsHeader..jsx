import { motion } from "framer-motion";

const SkillsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      {/* Badge */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 uppercase tracking-[4px] text-sm font-semibold"
      >
        My Skills
      </motion.span>

      {/* Heading */}
      <h2 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
        Skills{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
          Galaxy
        </span>
      </h2>

      {/* Description */}
      <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
        Explore the technologies I use to design and build scalable,
        enterprise-grade applications with clean architecture, modern UI, and
        high-performance backend systems.
      </p>
    </motion.div>
  );
};

export default SkillsHeader;