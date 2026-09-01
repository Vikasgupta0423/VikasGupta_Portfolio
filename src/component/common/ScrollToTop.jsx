// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUp } from "lucide-react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       // User 250px se zyada scroll karega tabhi show hoga
//       setIsVisible(window.scrollY > 250);
//     };

//     window.addEventListener("scroll", toggleVisibility, { passive: true });
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.6, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.6, y: 20 }}
//           transition={{ duration: 0.25, ease: "easeOut" }}
//           whileHover={{ y: -3, scale: 1.08 }}
//           whileTap={{ scale: 0.92 }}
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className="
//             fixed
//             bottom-6
//             right-6
//             z-[990]
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-2xl
//             border
//             border-cyan-400/40
//             bg-[#070B1F]/80
//             text-cyan-300
//             shadow-[0_8px_30px_rgba(0,0,0,0.6)]
//             backdrop-blur-xl
//             hover:border-cyan-300
//             hover:bg-cyan-500/20
//             hover:text-cyan-200
//             hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
//             transition-all
//             duration-300
//             cursor-pointer
//           "
//         >
//           <ArrowUp size={18} className="stroke-[2.5]" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ScrollToTop;



// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUp } from "lucide-react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       // Check scroll from both window and root element
//       const scrollTop =
//         window.pageYOffset ||
//         document.documentElement.scrollTop ||
//         document.body.scrollTop ||
//         0;

//       // 150px scroll karte hi button dikhega
//       setIsVisible(scrollTop > 150);
//     };

//     window.addEventListener("scroll", toggleVisibility, { passive: true });
//     // Initial check on mount
//     toggleVisibility();

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 15 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.5, y: 15 }}
//           transition={{ duration: 0.2 }}
//           whileHover={{ y: -3, scale: 1.08 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className="
//             fixed
//             bottom-6
//             right-6
//             z-[9999]
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-2xl
//             border
//             border-cyan-400/40
//             bg-[#070B1F]/90
//             text-cyan-400
//             shadow-[0_10px_30px_rgba(0,0,0,0.8)]
//             backdrop-blur-xl
//             hover:border-cyan-300
//             hover:bg-cyan-500/20
//             hover:text-cyan-200
//             hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
//             cursor-pointer
//           "
//         >
//           <ArrowUp size={18} className="stroke-[2.5]" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ScrollToTop;




// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUp } from "lucide-react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       const scrollTop =
//         window.pageYOffset ||
//         document.documentElement.scrollTop ||
//         document.body.scrollTop ||
//         0;

//       setIsVisible(scrollTop > 200);
//     };

//     window.addEventListener("scroll", toggleVisibility, { passive: true });
//     toggleVisibility();

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 15 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.5, y: 15 }}
//           transition={{ duration: 0.2 }}
//           whileHover={{ y: -3, scale: 1.08 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className="
//             fixed
//             bottom-24
//             right-6
//             sm:bottom-28
//             sm:right-8
//             z-[9998]
//             flex
//             h-10
//             w-10
//             sm:h-11
//             sm:w-11
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-cyan-400/40
//             bg-[#070B1F]/90
//             text-cyan-400
//             shadow-[0_10px_30px_rgba(0,0,0,0.8)]
//             backdrop-blur-xl
//             hover:border-cyan-300
//             hover:bg-cyan-500/20
//             hover:text-cyan-200
//             hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
//             cursor-pointer
//           "
//         >
//           <ArrowUp size={18} className="stroke-[2.5]" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ScrollToTop;


// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUp } from "lucide-react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       const scrollTop =
//         window.pageYOffset ||
//         document.documentElement.scrollTop ||
//         document.body.scrollTop ||
//         0;

//       setIsVisible(scrollTop > 200);
//     };

//     window.addEventListener("scroll", toggleVisibility, { passive: true });
//     toggleVisibility();

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.5, y: 10 }}
//           transition={{ duration: 0.2 }}
//           whileHover={{ y: -2, scale: 1.08 }}
//           whileTap={{ scale: 0.92 }}
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className="
//             relative
//             flex
//             h-10
//             w-10
//             sm:h-11
//             sm:w-11
//             items-center
//             justify-center
//             rounded-2xl
//             border
//             border-cyan-400/40
//             bg-[#070B1F]/90
//             text-cyan-400
//             shadow-[0_8px_25px_rgba(0,0,0,0.6)]
//             backdrop-blur-xl
//             hover:border-cyan-300
//             hover:bg-cyan-500/20
//             hover:text-cyan-200
//             hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
//             cursor-pointer
//           "
//         >
//           <ArrowUp size={18} className="stroke-[2.5]" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ScrollToTop;


import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) return;

      // Throttle scroll listener for 60fps performance
      timeoutId = setTimeout(() => {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;

        setIsVisible(scrollTop > 280);
        timeoutId = null;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Professional Eased Smooth Scroll to Top
  const smoothScrollToTop = () => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    const startPosition = window.pageYOffset;
    const duration = 750; // Smooth 0.75s travel
    let startTime = null;

    const easeOutCubic = (t) => --t * t * t + 1;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, 0);
        isScrollingRef.current = false;
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.85 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 22,
            mass: 0.8,
          }}
          whileHover={{
            y: -3,
            scale: 1.05,
            transition: { duration: 0.25, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.94,
            transition: { duration: 0.15 },
          }}
          onClick={smoothScrollToTop}
          aria-label="Scroll to top"
          className="
            group
            relative
            flex
            h-10
            w-10
            sm:h-11
            sm:w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-500/30
            bg-[#070B1F]/90
            text-cyan-400
            shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            backdrop-blur-xl
            hover:border-cyan-400
            hover:bg-cyan-500/15
            hover:text-cyan-300
            hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]
            transition-colors
            duration-300
            cursor-pointer
          "
        >
          {/* Subtle Hover Ring Glow */}
          <span className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

          <ArrowUp
            size={18}
            className="stroke-[2.2] transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;