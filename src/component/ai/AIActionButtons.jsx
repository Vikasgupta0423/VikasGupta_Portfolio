import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  FolderOpen,
  Mail,
  Briefcase,
  UserCheck,
} from "lucide-react";

// ⭐ Update these once
const LINKS = {
  github: "https://github.com/vikasgupta0423",
  linkedin: "https://linkedin.com/in/vikas-gupta",
  resume: "/resume.pdf",
};

const AIActionButtons = ({ type }) => {
  const actions = {
    projects: [
      {
        label: "View Projects",
        icon: FolderOpen,
        action: () =>
          document
            .getElementById("projects")
            ?.scrollIntoView({
              behavior: "smooth",
            }),
      },
      {
        label: "GitHub",
        icon: Github,
        action: () =>
          window.open(LINKS.github, "_blank"),
      },
    ],

    resume: [
      {
        label: "Download Resume",
        icon: Download,
        action: () =>
          window.open(LINKS.resume, "_blank"),
      },
    ],

    experience: [
      {
        label: "View Experience",
        icon: Briefcase,
        action: () =>
          document
            .getElementById("career")
            ?.scrollIntoView({
              behavior: "smooth",
            }),
      },
    ],

    hire: [
      {
        label: "Why Hire Me",
        icon: UserCheck,
        action: () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({
              behavior: "smooth",
            }),
      },
    ],

    contact: [
      {
        label: "Contact Me",
        icon: Mail,
        action: () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({
              behavior: "smooth",
            }),
      },
      {
        label: "LinkedIn",
        icon: Linkedin,
        action: () =>
          window.open(LINKS.linkedin, "_blank"),
      },
    ],
  };

  const buttons = actions[type] || [];

  if (!buttons.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {buttons.map((item) => {
        const Icon = item.icon;

        return (
          <motion.button
            key={item.label}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={item.action}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-sky-500
              px-4
              py-2
              text-sm
              font-semibold
              text-black
              shadow-lg
              transition-all
              hover:shadow-cyan-500/40
            "
          >
            <Icon size={16} />

            {item.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default AIActionButtons;