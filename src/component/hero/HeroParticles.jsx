import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  size: Math.random() * 5 + 3,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 6 + 6,
}));

const HeroParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
            y: [0, -25, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.45)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticles;