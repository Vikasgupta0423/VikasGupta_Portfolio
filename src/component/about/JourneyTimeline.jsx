import { motion } from "framer-motion";
import JourneyCard from "./JourneyCard";
import { journeyData } from "../../data/journeyData";
import TimelineDot from "../career/TimelineDot";

const JourneyTimeline = () => {
  return (
    <div className="relative mt-24 max-w-6xl mx-auto">

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-cyan-500/20 hidden md:block" />

      <div className="space-y-24">
        {journeyData.map((item, index) => {
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

              {/* Connector */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`hidden md:block absolute top-1/2 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-sky-500
                  ${
                    isLeft
                      ? "left-[calc(50%-80px)]"
                      : "right-[calc(50%-80px)]"
                  }`}
              />

              {/* Card */}
              <div className="w-full md:w-[44%]">
                <JourneyCard item={item} index={index} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyTimeline;