import { motion } from "framer-motion";

import BackgroundGlow from "./BackgroundGlow";
import HeroParticles from "./HeroParticles";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#070B1F]
        pt-28
        pb-16
        lg:pt-32
      "
    >
      {/* Background */}
      <BackgroundGlow />
      <HeroParticles />

      {/* Premium Radial Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.08),transparent_60%)]
        "
      />

      {/* Gradient Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#070B1F]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;