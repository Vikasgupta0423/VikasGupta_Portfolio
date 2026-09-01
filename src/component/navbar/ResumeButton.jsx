// import { Download } from "lucide-react";

// const ResumeButton = () => {
//   return (
//     <a
//       href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//       download
//       className="
//         group
//         relative
//         hidden
//         overflow-hidden
//         rounded-full
//         border
//         border-cyan-400/20
//         bg-cyan-500/10
//         px-8
//         py-3
//         backdrop-blur-xl
//         lg:flex
//         items-center
//         justify-center
//         transition-all
//         duration-300
//         hover:border-cyan-400/40
//         hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
//       "
//     >
//       {/* Glass Background */}
//       <span
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-r
//           from-cyan-500/10
//           via-sky-500/10
//           to-purple-500/10
//           opacity-0
//           transition-opacity
//           duration-300
//           group-hover:opacity-100
//         "
//       />

//       {/* Flip Text */}
//       <span className="relative h-6 overflow-hidden">
//         {/* Default */}
//         <span
//           className="
//             flex
//             items-center
//             gap-2
//             text-white
//             font-semibold
//             transition-transform
//             duration-500
//             ease-in-out
//             group-hover:-translate-y-full
//           "
//         >
//           <Download size={18} />
//           Resume
//         </span>

//         {/* Hover */}
//         <span
//           className="
//             absolute
//             inset-0
//             flex
//             items-center
//             justify-center
//             gap-2
//             translate-y-full
//             text-cyan-400
//             font-semibold
//             transition-transform
//             duration-500
//             ease-in-out
//             group-hover:translate-y-0
//           "
//         >
//           <Download size={18} />
//           Download
//         </span>
//       </span>
//     </a>
//   );
// };

// export default ResumeButton;










// import { Download } from "lucide-react";

// const ResumeButton = () => {
//   return (
//     <a
//       href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//       download
//       className="
//         group
//         relative
//         hidden
//         overflow-hidden
//         rounded-full
//         border
//         border-cyan-400/30
//         bg-cyan-500/10
//         px-5
//         py-2
//         backdrop-blur-xl
//         lg:inline-flex
//         items-center
//         justify-center
//         transition-all
//         duration-300
//         hover:border-cyan-400
//         hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
//         hover:-translate-y-0.5
//       "
//     >
//       <span className="relative h-5 overflow-hidden text-xs font-semibold">
//         {/* Default View */}
//         <span className="flex items-center gap-1.5 text-slate-100 transition-transform duration-300 group-hover:-translate-y-full">
//           <Download size={14} className="text-cyan-400" />
//           Resume
//         </span>

//         {/* Hover View */}
//         <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-y-full text-cyan-300 transition-transform duration-300 group-hover:translate-y-0">
//           <Download size={14} className="text-cyan-300" />
//           Download
//         </span>
//       </span>
//     </a>
//   );
// };

// export default ResumeButton;


// import { Download } from "lucide-react";

// const ResumeButton = () => {
//   return (
//     <a
//       href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//       download
//       className="
//         group
//         relative
//         hidden
//         overflow-hidden
//         rounded-full
//         border
//         border-cyan-400/30
//         bg-cyan-500/10
//         px-6
//         py-2.5
//         backdrop-blur-xl
//         lg:inline-flex
//         items-center
//         justify-center
//         transition-all
//         duration-300
//         hover:border-cyan-400
//         hover:bg-cyan-500/20
//         hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
//         hover:-translate-y-0.5
//         active:translate-y-0
//       "
//     >
//       {/* Background Ambient Glow on Hover */}
//       <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       {/* Flip Text Container */}
//       <span className="relative h-6 overflow-hidden text-sm font-semibold tracking-wide">
//         {/* Default State */}
//         <span className="flex items-center gap-2 text-slate-100 transition-transform duration-500 ease-out group-hover:-translate-y-full">
//           <Download size={16} className="text-cyan-400" />
//           Resume
//         </span>

//         {/* Hover State */}
//         <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full text-cyan-300 transition-transform duration-500 ease-out group-hover:translate-y-0">
//           <Download size={16} className="text-cyan-300" />
//           Download
//         </span>
//       </span>
//     </a>
//   );
// };

// export default ResumeButton;




import { Download } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href={`${import.meta.env.BASE_URL}assets/vikas-gupta-resume.pdf`}
      download="Vikas-Gupta-Resume.pdf"
      className="
        group
        relative
        hidden
        overflow-hidden
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-500/10
        px-6
        py-2.5
        backdrop-blur-xl
        lg:inline-flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500/20
        hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
        hover:-translate-y-0.5
        active:translate-y-0
      "
    >
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative h-6 overflow-hidden text-sm font-semibold tracking-wide">
        <span className="flex items-center gap-2 text-slate-100 transition-transform duration-500 ease-out group-hover:-translate-y-full">
          <Download size={16} className="text-cyan-400" />
          Resume
        </span>

        <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full text-cyan-300 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <Download size={16} className="text-cyan-300" />
          Download
        </span>
      </span>
    </a>
  );
};

export default ResumeButton;