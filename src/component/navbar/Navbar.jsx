// import { useEffect, useState } from "react";

// import Container from "../common/Container";
// import DesktopMenu from "./DesktopMenu";
// import Logo from "./Logo";
// import MobileMenu from "./MobileMenu";
// import ResumeButton from "./ResumeButton";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () =>
//       window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className="
//         fixed
//         top-5
//         left-0
//         z-[1000]
//         w-full
//         transition-all
//         duration-500
//       "
//     >
//       <Container>
//         <div
//           className={`
//             relative
//             flex
//             items-center
//             justify-between
//             overflow-hidden
//             rounded-full
//             border
//             transition-all
//             duration-500

//             ${
//               scrolled
//                 ? "border-cyan-400/20 bg-[#08111f]/90 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-3xl"
//                 : "border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl"
//             }
//           `}
//         >
//           {/* Glow */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               bg-gradient-to-r
//               from-cyan-500/5
//               via-transparent
//               to-purple-500/5
//             "
//           />

//           {/* Logo */}
//           <div className="relative z-10">
//             <Logo />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="relative z-10">
//             <DesktopMenu />
//           </div>

//           {/* Right Side */}
//           <div className="relative z-10 flex items-center gap-3">
//             <ResumeButton />

//             <MobileMenu />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;



// import { useEffect, useState } from "react";
// import Container from "../common/Container";
// import DesktopMenu from "./DesktopMenu";
// import Logo from "./Logo";
// import MobileMenu from "./MobileMenu";
// import ResumeButton from "./ResumeButton";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       // 1. Navbar glass background change
//       setScrolled(window.scrollY > 20);

//       // 2. Active Section Spy
//       const sections = ["home", "about", "skills", "projects", "experience", "contact"];
//       const scrollPosition = window.scrollY + 120;

//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const top = element.offsetTop;
//           const height = element.offsetHeight;
//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-3 sm:top-5 left-0 z-[1000] w-full transition-all duration-300">
//       <Container>
//         <div
//           className={`
//             relative
//             flex
//             items-center
//             justify-between
//             rounded-full
//             border
//             px-4
//             py-2.5
//             sm:px-6
//             sm:py-3
//             transition-all
//             duration-300
//             ${
//               scrolled
//                 ? "border-cyan-400/25 bg-[#08111f]/90 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
//                 : "border-white/10 bg-[#08111f]/40 backdrop-blur-xl"
//             }
//           `}
//         >
//           {/* Ambient Glow */}
//           <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

//           {/* Left: Logo */}
//           <div className="relative z-10 flex items-center">
//             <Logo />
//           </div>

//           {/* Center: Desktop Navigation */}
//           <div className="relative z-10 hidden lg:block">
//             <DesktopMenu activeSection={activeSection} />
//           </div>

//           {/* Right: Actions */}
//           <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
//             <ResumeButton />
//             <MobileMenu activeSection={activeSection} />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;





// import { useEffect, useState } from "react";
// import Container from "../common/Container";
// import DesktopMenu from "./DesktopMenu";
// import Logo from "./Logo";
// import MobileMenu from "./MobileMenu";
// import ResumeButton from "./ResumeButton";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       // 1. Navbar glass background change
//       setScrolled(window.scrollY > 20);

//       // 2. Active Section Spy
//       const sections = ["home", "about", "skills", "projects", "experience", "contact", "journey"];
//       const scrollPosition = window.scrollY + 120;

//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const top = element.offsetTop;
//           const height = element.offsetHeight;
//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-3 sm:top-5 left-0 z-[1000] w-full transition-all duration-300">
//       <Container>
//         <div
//           className={`
//             relative
//             flex
//             items-center
//             justify-between
//             rounded-full
//             border
//             px-4
//             py-2.5
//             sm:px-6
//             sm:py-3
//             transition-all
//             duration-300
//             ${
//               scrolled
//                 ? "border-cyan-400/25 bg-[#08111f]/90 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
//                 : "border-white/10 bg-[#08111f]/40 backdrop-blur-xl"
//             }
//           `}
//         >
//           {/* Ambient Glow */}
//           <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

//           {/* Left: Logo */}
//           <div className="relative z-10 flex items-center">
//             <Logo />
//           </div>

//           {/* Center: Desktop Navigation */}
//           <div className="relative z-10 hidden lg:block">
//             <DesktopMenu activeSection={activeSection} />
//           </div>

//           {/* Right: Actions */}
//           <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
//             <ResumeButton />
//             <MobileMenu activeSection={activeSection} />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;







import { useEffect, useState } from "react";
import Container from "../common/Container";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar glass background change
      setScrolled(window.scrollY > 20);

      // 2. Active Section Spy
      const sections = ["home", "about", "skills", "projects", "experience", "contact", "journey"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 left-0 z-[1000] w-full transition-all duration-300">
      <Container>
        <div
          className={`
            relative
            flex
            items-center
            justify-between
            rounded-full
            border
            px-4
            py-2.5
            sm:px-6
            sm:py-3
            transition-all
            duration-300
            ${
              scrolled
                ? "border-cyan-400/25 bg-[#08111f]/90 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                : "border-white/10 bg-[#08111f]/40 backdrop-blur-xl"
            }
          `}
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

          {/* Left: Logo */}
          <div className="relative z-10 flex items-center">
            <Logo />
          </div>

          {/* Center: Desktop Navigation */}
          <div className="relative z-10 hidden lg:block">
            <DesktopMenu activeSection={activeSection} />
          </div>

          {/* Right: Actions */}
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
            <ResumeButton />
            <MobileMenu activeSection={activeSection} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;