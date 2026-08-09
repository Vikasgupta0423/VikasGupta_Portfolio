import { motion } from "framer-motion";

const Dot = ({ delay }) => (
  <motion.span
    animate={{
      y: [0, -5, 0],
      opacity: [0.4, 1, 0.4],
    }}
    transition={{
      repeat: Infinity,
      duration: 0.8,
      delay,
    }}
    className="h-2 w-2 rounded-full bg-cyan-400"
  />
);

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4">
        <div className="flex gap-2">
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;