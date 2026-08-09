import { motion } from "framer-motion";
import profile from "@/assets/images/vikasProfile.png";

import AvailabilityCard from "./AvailabilityCard";
import FloatingTech from "./FloatingTech";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Floating Tech Icons */}
      <FloatingTech />

      {/* Background Glow */}
      <div
        className="
          absolute
          h-[460px]
          w-[460px]
          rounded-full
          bg-cyan-500/15
          blur-[100px]
        "
      />

      {/* Outer Glow Ring */}
      <div
        className="
          absolute
          h-[480px]
          w-[480px]
          rounded-full
          border
          border-cyan-400/10
        "
      />

      {/* Profile */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 0.8,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="relative"
      >
        {/* Image Wrapper */}
        <div
          className="
            relative
            h-[360px]
            w-[360px]
            overflow-hidden
            rounded-full
            border-4
            border-white/10
            bg-[#070B1F]
            shadow-[0_0_70px_rgba(34,211,238,.25)]
            md:h-[430px]
            md:w-[430px]
          "
        >
          {/* Glass Overlay */}
          <div
            className="
              absolute
              inset-0
              z-20
              rounded-full
              bg-gradient-to-br
              from-white/8
              via-transparent
              to-cyan-500/5
            "
          />

          {/* Image */}
          <img
            src={profile}
            alt="Vikas Gupta"
            className="
              h-full
              w-full
              rounded-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />
        </div>

        {/* Soft Border Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            ring-1
            ring-cyan-400/20
          "
        />
      </motion.div>

      {/* Availability Card */}
      <AvailabilityCard />
    </div>
  );
};

export default HeroImage;