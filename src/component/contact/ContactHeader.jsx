// import { motion } from "framer-motion";

// const ContactHeader = () => {
//   return (
//     <div className="relative mx-auto max-w-5xl text-center">
//       {/* Badge */}
//       <motion.div
//         initial={{ opacity: 0, y: -25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-6 py-2 backdrop-blur-xl"
//       >
//         <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

//         <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-cyan-400">
//           Contact
//         </span>
//       </motion.div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 35 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2, duration: 0.7 }}
//         className="mt-8 text-5xl md:text-7xl font-black leading-tight"
//       >
//         Let's build something{" "}
//         <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
//           stellar
//         </span>
//       </motion.h2>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 35 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.4, duration: 0.7 }}
//         className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
//       >
//         Open to{" "}
//         <span className="font-medium text-white">
//           Full Stack opportunities
//         </span>
//         ,{" "}
//         <span className="font-medium text-white">
//           freelance collaborations
//         </span>
//         , and innovative software products.
//         <br />
//         Let's discuss your next project — I usually reply within 24 hours.
//       </motion.p>

//       {/* Decorative Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
//     </div>
//   );
// };

// export default ContactHeader;



import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <div className="relative mx-auto max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Get in touch
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
      >
        Let's build something{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          stellar
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400 max-w-2xl"
      >
        Open to <span className="font-medium text-slate-200">Full Stack roles</span>,{" "}
        <span className="font-medium text-slate-200">freelance work</span>, and innovative software solutions. Let's connect.
      </motion.p>
    </div>
  );
};

export default ContactHeader;