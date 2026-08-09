// const HeroButtons = () => {
//   return (
//     <div className="flex flex-wrap gap-5 mt-10">

//       <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold duration-300">

//         Explore Projects

//       </button>

//       <a
//         href="/resume.pdf"
//         download
//         className="px-8 py-4 rounded-full border border-cyan-500 hover:bg-cyan-500/20"
//       >
//         Download Resume
//       </a>

//     </div>
//   );
// };

// export default HeroButtons;

import Button from "../common/Button";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-5">

      <Button>
        Hire Me
      </Button>

      <a
        href="/resume/VikasResume.pdf"
        download
        className="rounded-full border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
      >
        Download CV
      </a>

    </div>
  );
};

export default HeroButtons;