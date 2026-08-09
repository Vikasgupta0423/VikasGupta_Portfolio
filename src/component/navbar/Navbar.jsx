import { useEffect, useState } from "react";

import Container from "../common/Container";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
        fixed
        top-5
        left-0
        z-[1000]
        w-full
        transition-all
        duration-500
      "
    >
      <Container>
        <div
          className={`
            relative
            flex
            items-center
            justify-between
            overflow-hidden
            rounded-full
            border
            transition-all
            duration-500

            ${
              scrolled
                ? "border-cyan-400/20 bg-[#08111f]/90 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-3xl"
                : "border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl"
            }
          `}
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-500/5
              via-transparent
              to-purple-500/5
            "
          />

          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="relative z-10">
            <DesktopMenu />
          </div>

          {/* Right Side */}
          <div className="relative z-10 flex items-center gap-3">
            <ResumeButton />

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;