

// import { motion } from "framer-motion";
// import { careerData } from "@/data/careerData";
// import CareerCard from "./CareerCard";
// import CareerLine from "./CareerLine";
// import TimelineDot from "./TimelineDot";

// const CareerTimeline = () => {
//   return (
//     <div className="relative max-w-6xl mx-auto py-10">

//       {/* Timeline */}
//       <CareerLine />

//       <div className="space-y-24">
//         {careerData.map((item, index) => {
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

//               {/* Connector Line */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: 80 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.2,
//                 }}
//                 className={`
//                   hidden
//                   md:block
//                   absolute
//                   top-1/2
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-cyan-400
//                   to-sky-500
//                   ${
//                     isLeft
//                       ? "left-[calc(50%-80px)]"
//                       : "right-[calc(50%-80px)]"
//                   }
//                 `}
//               />

//               {/* Card */}
//               <div className="w-full md:w-[44%]">
//                 <CareerCard item={item} />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//     </div>
//   );
// };

// export default CareerTimeline;


import { motion } from "framer-motion";
import { careerData } from "@/data/careerData";
import CareerCard from "./CareerCard";
import CareerLine from "./CareerLine";
import TimelineDot from "./TimelineDot";

const CareerTimeline = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Central / Left Dynamic Spine */}
      <CareerLine />

      <div className="space-y-8 sm:space-y-12">
        {careerData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id || index}
              className={`relative flex items-center w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } pl-10 md:pl-0`}
            >
              {/* Timeline Center Dot */}
              <TimelineDot isActive={true} isPassed={true} />

              {/* Connector Pin (Desktop Only) */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 36, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className={`
                  hidden
                  md:block
                  absolute
                  top-1/2
                  h-px
                  bg-gradient-to-r
                  from-cyan-400/80
                  to-cyan-400/20
                  ${
                    isLeft
                      ? "left-[calc(50%-36px)] origin-right"
                      : "right-[calc(50%-36px)] origin-left bg-gradient-to-l"
                  }
                `}
              />

              {/* Card Container */}
              <div className="w-full md:w-[46%]">
                <CareerCard item={item} index={index} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerTimeline;