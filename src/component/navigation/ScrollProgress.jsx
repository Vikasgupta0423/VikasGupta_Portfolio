// import { useEffect, useState } from "react";
// import ProgressDot from "./ProgressDot";
// import { sections } from "@/data/sections";

// const ScrollProgress = () => {
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const onScroll = () => {
//       sections.forEach((section) => {
//         const element = document.getElementById(section.id);

//         if (!element) return;

//         const top = element.offsetTop;
//         const height = element.offsetHeight;

//         if (
//           window.scrollY >= top - 200 &&
//           window.scrollY < top + height - 200
//         ) {
//           setActive(section.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", onScroll);

//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     document
//       .getElementById(id)
//       ?.scrollIntoView({
//         behavior: "smooth",
//       });
//   };

//   return (
//     <div
//       className="
//         hidden
//         lg:flex
//         fixed
//         left-10
//         top-1/2
//         -translate-y-1/2
//         z-50
//         flex-col
//         gap-8
//       "
//     >
//       {sections.map((section) => (
//         <ProgressDot
//           key={section.id}
//           label={section.label}
//           active={active === section.id}
//           onClick={() => scrollToSection(section.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default ScrollProgress;




// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ProgressDot from "./ProgressDot";
// import { sections } from "@/data/sections";

// const ScrollProgress = () => {
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const onScroll = () => {
//       sections.forEach((section) => {
//         const element = document.getElementById(section.id);

//         if (!element) return;

//         const top = element.offsetTop;
//         const height = element.offsetHeight;

//         if (
//           window.scrollY >= top - 250 &&
//           window.scrollY < top + height - 250
//         ) {
//           setActive(section.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   // Hero section par hone par progress bar hide rahega
//   const isHeroSection = active === "home" || active === "hero";

//   return (
//     <AnimatePresence>
//       {!isHeroSection && (
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -30 }}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//           className="
//             hidden
//             lg:flex
//             fixed
//             left-8
//             xl:left-10
//             top-1/2
//             -translate-y-1/2
//             z-40
//             flex-col
//             gap-6
//             select-none
//           "
//         >
//           {sections
//             .filter((s) => s.id !== "home" && s.id !== "hero")
//             .map((section) => (
//               <ProgressDot
//                 key={section.id}
//                 label={section.label}
//                 active={active === section.id}
//                 onClick={() => scrollToSection(section.id)}
//               />
//             ))}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ScrollProgress;



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressDot from "./ProgressDot";
import { sections } from "@/data/sections";

const ScrollProgress = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (
          window.scrollY >= top - 250 &&
          window.scrollY < top + height - 250
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Hero section par hone par progress rail hide rahegi
  const isHeroSection = active === "home" || active === "hero";

  return (
    <AnimatePresence>
      {!isHeroSection && (
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            hidden
            lg:flex
            fixed
            left-7
            xl:left-9
            top-1/2
            -translate-y-1/2
            z-40
            flex-col
            items-start
            select-none
          "
        >
          {/* Subtle Vertical Connector Rail */}
          <div className="absolute left-[5.5px] top-3 bottom-3 w-[1px] bg-white/10 -z-10" />

          {/* Dots Stack */}
          <div className="flex flex-col gap-4">
            {sections
              .filter((s) => s.id !== "home" && s.id !== "hero")
              .map((section) => (
                <ProgressDot
                  key={section.id}
                  label={section.label}
                  active={active === section.id}
                  onClick={() => scrollToSection(section.id)}
                />
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;