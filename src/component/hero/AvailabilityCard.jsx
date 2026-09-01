// const AvailabilityCard = () => {
//   return (
//     <div
//       className="
//       absolute
//       bottom-5
//       -left-10
//       bg-white/10
//       backdrop-blur-xl
//       rounded-2xl
//       border
//       border-cyan-500/20
//       px-5
//       py-4"
//     >
//       <div className="flex items-center gap-3">

//         <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

//         <div>

//           <h3 className="font-semibold">
//             Available for Work
//           </h3>

//           <p className="text-gray-400 text-sm">
//             Open to Full Stack Opportunities
//           </p>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AvailabilityCard;




// const AvailabilityCard = () => {
//   return (
//     <div
//       className="
//         absolute
//         bottom-4
//         -left-6
//         z-30
//         bg-slate-900/80
//         backdrop-blur-xl
//         rounded-2xl
//         border
//         border-cyan-500/30
//         px-4
//         py-3
//         shadow-xl
//         shadow-cyan-950/40
//       "
//     >
//       <div className="flex items-center gap-3">
//         <div className="relative flex h-3 w-3">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//         </div>

//         <div>
//           <h3 className="text-xs font-semibold text-white">
//             Available for Work
//           </h3>
//           <p className="text-[11px] text-gray-300">
//             Open to Full Stack Opportunities
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailabilityCard;


// import { motion } from "framer-motion";

// const AvailabilityCard = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.4 }}
//       className="
//         absolute
//         -bottom-4
//         -left-2
//         sm:-left-6
//         md:-left-10
//         z-30
//         bg-[#0b1329]/80
//         backdrop-blur-xl
//         rounded-2xl
//         border
//         border-cyan-500/30
//         px-3.5
//         py-2.5
//         sm:px-5
//         sm:py-3.5
//         shadow-[0_8px_32px_rgba(0,0,0,0.37)]
//       "
//     >
//       <div className="flex items-center gap-3">
//         <span className="relative flex h-3 w-3">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//           <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
//         </span>

//         <div>
//           <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
//             Available for Work
//           </h4>
//           <p className="text-gray-400 text-[10px] sm:text-xs">
//             Open to Full Stack Roles
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AvailabilityCard;



import { motion } from "framer-motion";

const AvailabilityCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="
        absolute
        bottom-2 
        -left-2
        sm:bottom-4
        sm:-left-6
        md:bottom-6
        md:-left-10
        z-40
        bg-[#0b1329]/90
        backdrop-blur-xl
        rounded-2xl
        border
        border-cyan-500/30
        px-3.5
        py-2
        sm:px-4.5
        sm:py-3
        shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        pointer-events-auto
        whitespace-nowrap
      "
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Pulse Dot */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500" />
        </span>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight">
            Available for Work
          </h4>
          <p className="text-gray-400 text-[10px] sm:text-xs leading-tight">
            Open to Full Stack Roles
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;