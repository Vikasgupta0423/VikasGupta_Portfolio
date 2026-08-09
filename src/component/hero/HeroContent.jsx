import { portfolio } from "@/data/portfolioData";

import AnimatedText from "./AnimatedText";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import SocialLinks from "./SocialLinks";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-8">
      {/* Availability Badge */}
      <div>
        <span
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/5
            px-5
            py-2.5
            text-sm
            font-medium
            text-slate-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

          Available for Full Stack Roles
        </span>
      </div>

      {/* Name */}
      <div>
        <h1
          className="
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          {portfolio.name.split(" ")[0]}{" "}

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            {portfolio.name.split(" ")[1]}
          </span>
        </h1>

        {/* Main Role */}
        <h2
          className="
            mt-5
            text-2xl
            font-bold
            text-white
            md:text-3xl
            lg:text-4xl
          "
        >
          {portfolio.role}
        </h2>

        {/* Animated Skills */}
        <div className="mt-3 text-lg font-semibold text-cyan-400 md:text-xl">
          <AnimatedText />
        </div>
      </div>

      {/* Description */}
      <p
        className="
          max-w-2xl
          text-base
          leading-8
          text-slate-400
          md:text-lg
        "
      >
        Full Stack Developer with{" "}
        <strong className="font-semibold text-white">
          2+ years of experience
        </strong>{" "}
        building scalable enterprise applications using Java,
        Spring Boot, React, Angular, MySQL, and MongoDB.

        Passionate about creating secure, high-performance,
        user-friendly solutions while continuously exploring modern
        technologies and AI-driven development.
      </p>

      {/* Buttons */}
      <HeroButtons />

      {/* Social Links */}
      <SocialLinks />

      {/* Stats */}
      <HeroStats />
    </div>
  );
};

export default HeroContent;