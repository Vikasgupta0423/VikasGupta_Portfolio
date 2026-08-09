import { useEffect, useState } from "react";
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
          window.scrollY >= top - 200 &&
          window.scrollY < top + height - 200
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
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      className="
        hidden
        lg:flex
        fixed
        left-10
        top-1/2
        -translate-y-1/2
        z-50
        flex-col
        gap-8
      "
    >
      {sections.map((section) => (
        <ProgressDot
          key={section.id}
          label={section.label}
          active={active === section.id}
          onClick={() => scrollToSection(section.id)}
        />
      ))}
    </div>
  );
};

export default ScrollProgress;