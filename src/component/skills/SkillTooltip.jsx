import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const SkillTooltip = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <Html
      center
      distanceFactor={8}
      position={[0, 1, 0]}
    >
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.25 }}
        className="
          w-60
          rounded-2xl
          border
          border-cyan-400/20
          bg-[#091121]/90
          backdrop-blur-xl
          p-5
          shadow-[0_0_35px_rgba(34,211,238,.25)]
        "
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: `${skill.color}22`,
              color: skill.color,
            }}
          >
            {Icon && <Icon size={22} />}
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              {skill.name}
            </h3>

            <p className="text-xs text-cyan-300">
              {skill.level}
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-5">
          <p className="text-xs uppercase tracking-wider text-gray-400">
            Experience
          </p>

          <p className="mt-1 text-white font-medium">
            {skill.experience}
          </p>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Skill Level</span>
            <span>{skill.percentage}%</span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-gray-700 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${skill.percentage}%`,
              }}
              transition={{ duration: 0.6 }}
              className="h-full rounded-full bg-cyan-400"
            />
          </div>
        </div>
      </motion.div>
    </Html>
  );
};

export default SkillTooltip;