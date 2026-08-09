import { motion } from "framer-motion";

const AISuggestions = ({
  suggestions = [],
  onSelect,
}) => {
  if (!suggestions.length) return null;

  return (
    <div className="mt-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        Suggested Questions
      </p>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <motion.button
            key={item}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onSelect?.(item)}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/20
              hover:text-white
            "
          >
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;