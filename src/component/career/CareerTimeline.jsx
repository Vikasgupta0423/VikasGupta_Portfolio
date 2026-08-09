// import { motion } from "framer-motion";
// import { careerData } from "@/data/careerData";
// import CareerCard from "./CareerCard";
// import CareerLine from "./CareerLine";

// const CareerTimeline = () => {
//   return (
//     <div className="relative max-w-6xl mx-auto py-10">

//       {/* Timeline Line */}
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
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 0.2,
//                 }}
//                 className="
//                   hidden
//                   md:flex
//                   absolute
//                   left-1/2
//                   -translate-x-1/2
//                   w-6
//                   h-6
//                   rounded-full
//                   bg-cyan-400
//                   border-4
//                   border-[#070B1F]
//                   shadow-[0_0_25px_rgba(34,211,238,0.9)]
//                   z-20
//                 "
//               />

//               {/* Connector Line */}
//               <div
//                 className={`
//                   hidden
//                   md:block
//                   absolute
//                   top-1/2
//                   w-[80px]
//                   h-[2px]
//                   bg-cyan-400/40
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
    <div className="relative max-w-6xl mx-auto py-10">

      {/* Timeline */}
      <CareerLine />

      <div className="space-y-24">
        {careerData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`relative flex items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              {/* Timeline Dot */}
              <TimelineDot />

              {/* Connector Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className={`
                  hidden
                  md:block
                  absolute
                  top-1/2
                  h-[2px]
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  ${
                    isLeft
                      ? "left-[calc(50%-80px)]"
                      : "right-[calc(50%-80px)]"
                  }
                `}
              />

              {/* Card */}
              <div className="w-full md:w-[44%]">
                <CareerCard item={item} />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CareerTimeline;