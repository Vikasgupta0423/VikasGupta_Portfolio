// import { motion } from "framer-motion";
// import profile from "@/assets/images/vikasProfile.png";

// import AvailabilityCard from "./AvailabilityCard";
// import FloatingTech from "./FloatingTech";

// const HeroImage = () => {
//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Floating Tech Icons */}
//       <FloatingTech />

//       {/* Background Glow */}
//       <div
//         className="
//           absolute
//           h-[460px]
//           w-[460px]
//           rounded-full
//           bg-cyan-500/15
//           blur-[100px]
//         "
//       />

//       {/* Outer Glow Ring */}
//       <div
//         className="
//           absolute
//           h-[480px]
//           w-[480px]
//           rounded-full
//           border
//           border-cyan-400/10
//         "
//       />

//       {/* Profile */}
//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.9,
//           y: 30,
//         }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//           y: [0, -8, 0],
//         }}
//         transition={{
//           opacity: {
//             duration: 0.8,
//           },
//           scale: {
//             duration: 0.8,
//           },
//           y: {
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//         whileHover={{
//           scale: 1.03,
//         }}
//         className="relative"
//       >
//         {/* Image Wrapper */}
//         <div
//           className="
//             relative
//             h-[360px]
//             w-[360px]
//             overflow-hidden
//             rounded-full
//             border-4
//             border-white/10
//             bg-[#070B1F]
//             shadow-[0_0_70px_rgba(34,211,238,.25)]
//             md:h-[430px]
//             md:w-[430px]
//           "
//         >
//           {/* Glass Overlay */}
//           <div
//             className="
//               absolute
//               inset-0
//               z-20
//               rounded-full
//               bg-gradient-to-br
//               from-white/8
//               via-transparent
//               to-cyan-500/5
//             "
//           />

//           {/* Image */}
//           <img
//             src={profile}
//             alt="Vikas Gupta"
//             className="
//               h-full
//               w-full
//               rounded-full
//               object-cover
//               transition-transform
//               duration-700
//               hover:scale-105
//             "
//           />
//         </div>

//         {/* Soft Border Glow */}
//         <div
//           className="
//             absolute
//             inset-0
//             rounded-full
//             ring-1
//             ring-cyan-400/20
//           "
//         />
//       </motion.div>

//       {/* Availability Card */}
//       <AvailabilityCard />
//     </div>
//   );
// };

// export default HeroImage;


// import { motion } from "framer-motion";
// import profile from "@/assets/images/vikasProfile.png";

// import AvailabilityCard from "./AvailabilityCard";
// import FloatingTech from "./FloatingTech";

// const HeroImage = () => {
//   return (
//     <div className="relative flex items-center justify-center p-8">
//       {/* Background Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           h-[460px]
//           w-[460px]
//           rounded-full
//           bg-cyan-500/15
//           blur-[100px]
//           z-0
//         "
//       />

//       {/* Outer Border Ring (Background Line) */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           h-[480px]
//           w-[480px]
//           rounded-full
//           border
//           border-cyan-400/20
//           z-0
//         "
//       />

//       {/* Profile Container */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//           y: [0, -8, 0],
//         }}
//         transition={{
//           opacity: { duration: 0.8 },
//           scale: { duration: 0.8 },
//           y: {
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//         whileHover={{ scale: 1.03 }}
//         className="relative z-10"
//       >
//         {/* Image Wrapper */}
//         <div
//           className="
//             relative
//             h-[360px]
//             w-[360px]
//             overflow-hidden
//             rounded-full
//             border-4
//             border-white/10
//             bg-[#070B1F]
//             shadow-[0_0_70px_rgba(34,211,238,0.25)]
//             md:h-[430px]
//             md:w-[430px]
//           "
//         >
//           {/* Glass Overlay */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               z-20
//               rounded-full
//               bg-gradient-to-br
//               from-white/10
//               via-transparent
//               to-cyan-500/10
//             "
//           />

//           {/* Image */}
//           <img
//             src={profile}
//             alt="Vikas Gupta"
//             className="
//               h-full
//               w-full
//               rounded-full
//               object-cover
//               transition-transform
//               duration-700
//               hover:scale-105
//             "
//           />
//         </div>

//         {/* Soft Border Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             rounded-full
//             ring-1
//             ring-cyan-400/30
//           "
//         />
//       </motion.div>

//       {/* Floating Tech Icons (Always on top) */}
//       <div className="absolute inset-0 z-20 pointer-events-none">
//         <FloatingTech />
//       </div>

//       {/* Availability Card (Always on top) */}
//       <div className="z-20">
//         <AvailabilityCard />
//       </div>
//     </div>
//   );
// };

// export default HeroImage;

// import { motion } from "framer-motion";
// import profile from "@/assets/images/vikasProfile.png";
// import AvailabilityCard from "./AvailabilityCard";
// import FloatingTech from "./FloatingTech";

// const HeroImage = () => {
//   return (
//     <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[500px] aspect-square flex items-center justify-center mx-auto my-8">
//       {/* Background Ambient Glow */}
//       <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-cyan-500/20 blur-[90px] pointer-events-none z-0" />

//       {/* Decorative Outer Rings */}
//       <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-cyan-400/15 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none z-0" />
//       <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full border border-cyan-400/20 pointer-events-none z-0" />

//       {/* Floating Tech Badges */}
//       <FloatingTech />

//       {/* Profile Container */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 w-[72%] h-[72%]"
//       >
//         {/* Floating Animation Wrapper */}
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="relative w-full h-full"
//         >
//           {/* Main Image Mask */}
//           <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-b from-cyan-400/40 via-cyan-500/10 to-transparent shadow-[0_0_50px_rgba(6,182,212,0.25)]">
//             <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070B1F]">
//               {/* Glass Glare Overlay */}
//               <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/10 pointer-events-none" />

//               {/* Profile Image */}
//               <img
//                 src={profile}
//                 alt="Profile"
//                 className="w-full h-full object-cover object-center rounded-full transition-transform duration-700 hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Availability Status Badge */}
//           <AvailabilityCard />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroImage;


import { motion } from "framer-motion";
import profile from "@/assets/images/vikasProfile.png";
import AvailabilityCard from "./AvailabilityCard";
import FloatingTech from "./FloatingTech";

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[480px] aspect-square flex items-center justify-center mx-auto my-6 select-none">
      
      {/* 1. Ambient Background Glow (Z-0) */}
      <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none z-0" />

      {/* 2. Outer Decorative Dashed Ring (Z-0) */}
      <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-cyan-400/20 border-dashed animate-[spin_50s_linear_infinite] pointer-events-none z-0" />
      
      {/* 3. Rotating Tech Icons (Z-20) */}
      <FloatingTech />

      {/* 4. Profile Main Frame (Z-10) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[70%] h-[70%]"
      >
        {/* Floating Y-Axis Animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          {/* Border Ring Glow */}
          <div className="w-full h-full rounded-full p-1 bg-gradient-to-b from-cyan-400/50 via-cyan-500/15 to-transparent shadow-[0_0_40px_rgba(6,182,212,0.25)]">
            
            {/* Image Mask (Only this has overflow-hidden) */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070B1F]">
              <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/10 pointer-events-none" />
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>

          </div>

          {/* 5. Availability Card (Attached directly to float with profile) */}
          <AvailabilityCard />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default HeroImage;