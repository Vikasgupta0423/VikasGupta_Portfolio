// import { portfolio } from "@/data/portfolioData";

// import AnimatedText from "./AnimatedText";
// import HeroButtons from "./HeroButtons";
// import HeroStats from "./HeroStats";
// import SocialLinks from "./SocialLinks";

// const HeroContent = () => {
//   return (
//     <div className="flex flex-col justify-center space-y-8">
//       {/* Availability Badge */}
//       <div>
//         <span
//           className="
//             inline-flex
//             items-center
//             gap-3
//             rounded-full
//             border
//             border-cyan-500/20
//             bg-cyan-500/5
//             px-5
//             py-2.5
//             text-sm
//             font-medium
//             text-slate-300
//             backdrop-blur-xl
//             transition-all
//             duration-300
//             hover:border-cyan-400/40
//             hover:bg-cyan-500/10
//           "
//         >
//           <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

//           Available for Full Stack Roles
//         </span>
//       </div>

//       {/* Name */}
//       <div>
//         <h1
//           className="
//             text-5xl
//             font-black
//             leading-[1.05]
//             tracking-tight
//             text-white
//             sm:text-6xl
//             md:text-7xl
//             lg:text-8xl
//           "
//         >
//           {portfolio.name.split(" ")[0]}{" "}

//           <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
//             {portfolio.name.split(" ")[1]}
//           </span>
//         </h1>

//         {/* Main Role */}
//         <h2
//           className="
//             mt-5
//             text-2xl
//             font-bold
//             text-white
//             md:text-3xl
//             lg:text-4xl
//           "
//         >
//           {portfolio.role}
//         </h2>

//         {/* Animated Skills */}
//         <div className="mt-3 text-lg font-semibold text-cyan-400 md:text-xl">
//           <AnimatedText />
//         </div>
//       </div>

//       {/* Description */}
//       {/* <p
//         className="
//           max-w-2xl
//           text-base
//           leading-6
//           text-justify
//           text-slate-400
//           md:text-lg
//         "
//       >
//         Full Stack Developer with{" "}
//         <strong className="font-semibold text-white">
//           2+ years of experience
//         </strong>{" "}
//         building scalable enterprise applications using Java,
//         Spring Boot, React, Angular, MySQL, and MongoDB.

//         Passionate about creating secure, high-performance,
//         user-friendly solutions while continuously exploring modern
//         technologies and AI-driven development.
//       </p> */}



//       <p
//   className="
//     w-full
//     max-w-full
//     text-sm
//     leading-6
//     text-left
//     text-slate-400
//     sm:text-base
//     sm:leading-7
//     md:max-w-2xl
//     md:text-lg
//     md:leading-8
//     md:text-justify
//     lg:max-w-3xl
//   "
// >
//   Full Stack Developer with{" "}
//   <strong className="font-semibold text-white">
//     2+ years of experience
//   </strong>{" "}
//   building scalable enterprise applications using Java, Spring Boot,
//   React, Angular, MySQL, and MongoDB.
  
//   <span className="block mt-3">
//     Passionate about creating secure, high-performance, user-friendly
//     solutions while continuously exploring modern technologies and
//     AI-driven development.
//   </span>
// </p>

//       {/* Buttons */}
//       <HeroButtons />

//       {/* Social Links */}
//       <SocialLinks />

//       {/* Stats */}
//       <HeroStats />
//     </div>
//   );
// };

// export default HeroContent;


// import { portfolio } from "@/data/portfolioData";

// import AnimatedText from "./AnimatedText";
// import HeroButtons from "./HeroButtons";
// import HeroStats from "./HeroStats";
// import SocialLinks from "./SocialLinks";

// const HeroContent = () => {
//   const nameParts = portfolio.name.split(" ");

//   return (
//     <div
//       className="
//         flex
//         w-full
//         min-w-0
//         flex-col
//         justify-center
//         space-y-6
//         sm:space-y-7
//         md:space-y-8
//       "
//     >
//       {/* Availability Badge */}
//       <div className="w-full">
//         <span
//           className="
//             inline-flex
//             max-w-full
//             items-center
//             gap-2
//             rounded-full
//             border
//             border-cyan-500/20
//             bg-cyan-500/5
//             px-3
//             py-2
//             text-xs
//             font-medium
//             text-slate-300
//             backdrop-blur-xl
//             transition-all
//             duration-300
//             hover:border-cyan-400/40
//             hover:bg-cyan-500/10
//             sm:gap-3
//             sm:px-5
//             sm:py-2.5
//             sm:text-sm
//           "
//         >
//           <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 animate-pulse sm:h-2.5 sm:w-2.5" />

//           <span className="truncate">
//             Available for Full Stack Roles
//           </span>
//         </span>
//       </div>

//       {/* Name & Role */}
//       <div className="w-full">
//         <h1
//           className="
//             break-words
//             text-2xl
//             font-black
//             leading-[1.05]
//             tracking-tight
//             text-white
//             xs:text-3xl
//             sm:text-4xl
//             md:text-5xl
//             lg:text-6xl
//             xl:text-7xl
//           "
//         >
//           {nameParts[0]}{" "}

//           {nameParts[1] && (
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
//               {nameParts[1]}
//             </span>
//           )}
//         </h1>

//         {/* Main Role */}
//         <h2
//           className="
//             mt-3
//             text-xl
//             font-bold
//             leading-tight
//             text-white
//             sm:mt-4
//             sm:text-2xl
//             md:mt-5
//             md:text-3xl
//             lg:text-4xl
//           "
//         >
//           {portfolio.role}
//         </h2>

//         {/* Animated Skills */}
//         <div
//           className="
//             mt-2
//             text-base
//             font-semibold
//             text-cyan-400
//             sm:mt-3
//             sm:text-lg
//             md:text-xl
//           "
//         >
//           <AnimatedText />
//         </div>
//       </div>

//       {/* Description */}
//       <p
//         className="
//           w-full
//           max-w-full
//           text-sm
//           leading-6
//           text-left
//           text-slate-400
//           sm:text-base
//           sm:leading-7
//           md:max-w-2xl
//           md:text-lg
//           md:leading-8
//           md:text-left
//           lg:max-w-3xl
//         "
//       >
//         Full Stack Developer with{" "}
//         <strong className="font-semibold text-white">
//           2+ years of experience
//         </strong>{" "}
//         building scalable enterprise applications using Java, Spring Boot,
//         React, Angular, MySQL, and MongoDB.

//         <span className="mt-3 block">
//           Passionate about creating secure, high-performance, user-friendly
//           solutions while continuously exploring modern technologies and
//           AI-driven development.
//         </span>
//       </p>

//       {/* Buttons */}
//       <HeroButtons />

//       {/* Social Links */}
//       <SocialLinks />

//       {/* Stats */}
//       <HeroStats />
//     </div>
//   );
// };

// export default HeroContent;


import { portfolio } from "@/data/portfolioData";
import AnimatedText from "./AnimatedText";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import SocialLinks from "./SocialLinks";

const HeroContent = () => {
  const nameParts = portfolio.name.split(" ");

  return (
    <div className="flex w-full flex-col justify-center space-y-4 sm:space-y-5">
      
      {/* 1. Status Pill */}
      <div>
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-500/25
            bg-cyan-500/5
            px-3
            py-1
            sm:px-3.5
            sm:py-1.5
            text-[11px]
            sm:text-xs
            font-medium
            text-cyan-300
            backdrop-blur-md
          "
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 animate-pulse" />
          <span>Available for Full Stack Roles</span>
        </span>
      </div>

      {/* 2. Headings & Role */}
      <div className="space-y-1 sm:space-y-1.5">
        <h1
          className="
            text-3xl
            xs:text-4xl
            sm:text-5xl
            lg:text-5xl
            xl:text-6xl
            font-extrabold
            tracking-tight
            text-white
            leading-tight
          "
        >
          {nameParts[0]}{" "}
          {nameParts[1] && (
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {nameParts[1]}
            </span>
          )}
        </h1>

        <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-medium text-slate-200">
          I am a <AnimatedText />
        </div>
      </div>

      {/* 3. Description */}
      <p
        className="
          text-xs
          xs:text-sm
          sm:text-base
          leading-relaxed
          text-slate-400
          max-w-xl
          text-justify
        "
      >
        Full Stack Developer with{" "}
        <strong className="font-semibold text-slate-200">
          2+ years of experience
        </strong>{" "}
        building scalable web applications using Java, Spring Boot, React, and
        cloud ecosystems. Focused on performance, clean architecture, and modern UX.
      </p>

      {/* 4. Action Buttons */}
      <HeroButtons />

      {/* 5. Social Bar */}
      <SocialLinks />

      {/* 6. Metrics Grid */}
      <HeroStats />
    </div>
  );
};

export default HeroContent;