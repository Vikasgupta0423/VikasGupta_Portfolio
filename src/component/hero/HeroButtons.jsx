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











// import Button from "../common/Button";

// const HeroButtons = () => {
//   return (
//     <div className="flex flex-wrap gap-5">

//       <Button>
//         Hire Me
//       </Button>

//       <a
//         href="/resume/VikasResume.pdf"
//         download
//         className="rounded-full border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
//       >
//         Download CV
//       </a>

//     </div>
//   );
// };

// export default HeroButtons;


// import Button from "../common/Button";

// const HeroButtons = () => {
//   return (
//     <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
//       <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
//         Hire Me
//       </Button>

//       <a
//         href="/resume/VikasResume.pdf"
//         download
//         className="
//           inline-flex
//           items-center
//           justify-center
//           px-5
//           py-2.5
//           sm:px-6
//           sm:py-3
//           rounded-full
//           border
//           border-cyan-500/40
//           bg-cyan-500/5
//           text-cyan-300
//           font-medium
//           text-xs
//           sm:text-sm
//           backdrop-blur-sm
//           hover:bg-cyan-400/10
//           hover:border-cyan-400
//           hover:text-cyan-200
//           hover:-translate-y-0.5
//           active:translate-y-0
//           transition-all
//           duration-200
//         "
//       >
//         Download CV
//       </a>
//     </div>
//   );
// };

// export default HeroButtons;




import Button from "../common/Button";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
      <Button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Hire Me
      </Button>

      <a
        href={`${import.meta.env.BASE_URL}assets/vikas-gupta-cv.pdf`}
        download="Vikas-Gupta-CV.pdf"
        className="
          inline-flex
          items-center
          justify-center
          px-5
          py-2.5
          sm:px-6
          sm:py-3
          rounded-full
          border
          border-cyan-500/40
          bg-cyan-500/5
          text-cyan-300
          font-medium
          text-xs
          sm:text-sm
          backdrop-blur-sm
          hover:bg-cyan-400/10
          hover:border-cyan-400
          hover:text-cyan-200
          hover:-translate-y-0.5
          active:translate-y-0
          transition-all
          duration-200
        "
      >
        Download CV
      </a>
    </div>
  );
};

export default HeroButtons;