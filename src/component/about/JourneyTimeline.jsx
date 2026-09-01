// import { motion } from "framer-motion";
// import JourneyCard from "./JourneyCard";
// import { journeyData } from "../../data/journeyData";
// import TimelineDot from "../career/TimelineDot";

// const JourneyTimeline = () => {
//   return (
//     <div className="relative mt-24 max-w-6xl mx-auto">

//       {/* Timeline Line */}
//       <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-cyan-500/20 hidden md:block" />

//       <div className="space-y-24">
//         {journeyData.map((item, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={item.id}
//               className={`relative flex items-center ${
//                 isLeft ? "md:justify-start" : "md:justify-end"
//               } justify-center`}
//             >
//               {/* Timeline Dot */}
//               <TimelineDot />

//               {/* Connector */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: 80 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className={`hidden md:block absolute top-1/2 h-[2px]
//                   bg-gradient-to-r from-cyan-400 to-sky-500
//                   ${
//                     isLeft
//                       ? "left-[calc(50%-80px)]"
//                       : "right-[calc(50%-80px)]"
//                   }`}
//               />

//               {/* Card */}
//               <div className="w-full md:w-[44%]">
//                 <JourneyCard item={item} index={index} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default JourneyTimeline;













// import JourneyCard from "./JourneyCard";
// import { journeyData } from "../../data/journeyData";
// import TimelineDot from "../career/TimelineDot";

// const JourneyTimeline = () => {
//   return (
//     <div className="relative max-w-5xl mx-auto">
//       {/* Central Timeline Line for Desktop / Left-Aligned for Mobile */}
//       <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/10 via-cyan-500/30 to-cyan-500/10" />

//       <div className="space-y-8 sm:space-y-12">
//         {journeyData.map((item, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={item.id || index}
//               className={`relative flex items-center w-full ${
//                 isLeft ? "md:justify-start" : "md:justify-end"
//               } pl-10 md:pl-0`}
//             >
//               {/* Timeline Indicator Dot */}
//               <TimelineDot />

//               {/* Card Container */}
//               <div className="w-full md:w-[46%]">
//                 <JourneyCard item={item} index={index} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default JourneyTimeline;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import JourneyCard from "./JourneyCard";
// import { journeyData } from "../../data/journeyData";
// import TimelineDot from "../career/TimelineDot";

// const JourneyTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   // Calculate percentage for the active glowing progress beam
//   const totalItems = journeyData.length;
//   const progressPercent = totalItems > 1 ? (activeStep / (totalItems - 1)) * 100 : 100;

//   const handleSelectStep = (index) => {
//     setActiveStep(index);
//     const cardElem = document.getElementById(`journey-card-${index}`);
//     if (cardElem) {
//       cardElem.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

//   return (
//     <div className="relative max-w-5xl mx-auto">
//       {/* 1. Base Inactive Track */}
//       <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-slate-800/80" />

//       {/* 2. Interactive Glowing Progress Beam (Laser Line) */}
//       <motion.div
//         className="absolute left-4 md:left-1/2 top-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
//         initial={{ height: "0%" }}
//         animate={{ height: `${progressPercent}%` }}
//         transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//       />

//       <div className="space-y-10 sm:space-y-14">
//         {journeyData.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           const isActive = activeStep === index;
//           const isPassed = index <= activeStep;

//           return (
//             <div
//               id={`journey-card-${index}`}
//               key={item.id || index}
//               className={`relative flex items-center w-full ${
//                 isLeft ? "md:justify-start" : "md:justify-end"
//               } pl-10 md:pl-0`}
//             >
//               {/* Interactive Node Dot */}
//               <TimelineDot
//                 isActive={isActive}
//                 isPassed={isPassed}
//                 onClick={() => handleSelectStep(index)}
//               />

//               {/* Card Container */}
//               <div className="w-full md:w-[46%]">
//                 <JourneyCard
//                   item={item}
//                   index={index}
//                   isActive={isActive}
//                   onClick={() => handleSelectStep(index)}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default JourneyTimeline;



// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import JourneyCard from "./JourneyCard";
// import { journeyData } from "../../data/journeyData";
// import TimelineDot from "../career/TimelineDot";

// const JourneyTimeline = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { amount: 0.3 });

//   const totalItems = journeyData.length;
//   const progressPercent =
//     totalItems > 1 ? (activeStep / (totalItems - 1)) * 100 : 100;

//   // 1. Automatic Step-by-Step Transition when Section is in View
//   useEffect(() => {
//     if (!isInView || isPaused) return;

//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % totalItems);
//     }, 3500); // Transitions every 3.5 seconds

//     return () => clearInterval(interval);
//   }, [isInView, isPaused, totalItems]);

//   // 2. Handle Manual Selection by Click
//   const handleSelectStep = (index) => {
//     setActiveStep(index);
//     const cardElem = document.getElementById(`journey-card-${index}`);
//     if (cardElem) {
//       cardElem.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       className="relative max-w-5xl mx-auto"
//     >
//       {/* Base Inactive Track */}
//       <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-slate-800/80" />

//       {/* Auto-Growing Laser Line Beam */}
//       <motion.div
//         className="absolute left-4 md:left-1/2 top-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.9)]"
//         initial={{ height: "0%" }}
//         animate={{ height: `${progressPercent}%` }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//       />

//       <div className="space-y-10 sm:space-y-14">
//         {journeyData.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           const isActive = activeStep === index;
//           const isPassed = index <= activeStep;

//           return (
//             <div
//               id={`journey-card-${index}`}
//               key={item.id || index}
//               className={`relative flex items-center w-full ${
//                 isLeft ? "md:justify-start" : "md:justify-end"
//               } pl-10 md:pl-0`}
//             >
//               {/* Interactive Node Dot */}
//               <TimelineDot
//                 isActive={isActive}
//                 isPassed={isPassed}
//                 onClick={() => handleSelectStep(index)}
//               />

//               {/* Card Container */}
//               <div className="w-full md:w-[46%]">
//                 <JourneyCard
//                   item={item}
//                   index={index}
//                   isActive={isActive}
//                   onClick={() => handleSelectStep(index)}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default JourneyTimeline;



import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import JourneyCard from "./JourneyCard";
import { journeyData } from "../../data/journeyData";
import TimelineDot from "../career/TimelineDot";

const JourneyTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  const totalItems = journeyData.length;
  const progressPercent =
    totalItems > 1 ? (activeStep / (totalItems - 1)) * 100 : 100;

  // Auto progression that gracefully pauses at the end instead of snapping
  useEffect(() => {
    if (!isInView || isManual) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < totalItems - 1) {
          return prev + 1;
        }
        // Last card par pahuche toh wahi complete hold rahega
        return prev;
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [isInView, isManual, totalItems]);

  const handleSelectStep = (index) => {
    setIsManual(true);
    setActiveStep(index);

    const cardElem = document.getElementById(`journey-card-${index}`);
    if (cardElem) {
      cardElem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsManual(true)}
      className="relative max-w-5xl mx-auto"
    >
      {/* Static Base Track */}
      <div className="absolute left-4 md:left-1/2 top-5 bottom-5 w-[2px] -translate-x-1/2 bg-slate-800/80 pointer-events-none" />

      {/* Smooth Laser Beam Progression */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-5 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.9)] pointer-events-none"
        initial={{ height: "0%" }}
        animate={{ height: `${progressPercent}%` }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      />

      <div className="space-y-8 sm:space-y-12">
        {journeyData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeStep === index;
          const isPassed = index <= activeStep;

          return (
            <div
              id={`journey-card-${index}`}
              key={item.id || index}
              className={`relative flex items-center w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } pl-10 md:pl-0`}
            >
              {/* Dot */}
              <TimelineDot
                isActive={isActive}
                isPassed={isPassed}
                onClick={() => handleSelectStep(index)}
              />

              {/* Card */}
              <div className="w-full md:w-[46%]">
                <JourneyCard
                  item={item}
                  index={index}
                  isActive={isActive}
                  onClick={() => handleSelectStep(index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyTimeline;