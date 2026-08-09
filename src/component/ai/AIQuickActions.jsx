import { motion } from "framer-motion";
import {
  Code2,
  FolderGit2,
  Briefcase,
  Download,
  UserCheck,
  Mail,
  Trophy,
} from "lucide-react";

const actions = [
  {
    id: 1,
    icon: Code2,
    title: "Tech Stack",
    subtitle: "React • Spring Boot • MySQL",
    prompt: "tech",
    color: "from-cyan-500 to-sky-500",
  },
  {
    id: 2,
    icon: FolderGit2,
    title: "Projects",
    subtitle: "Quick Commerce & More",
    prompt: "projects",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Experience",
    subtitle: "2+ Years Full Stack",
    prompt: "experience",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    icon: Download,
    title: "Resume",
    subtitle: "Latest Resume",
    prompt: "resume",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 5,
    icon: UserCheck,
    title: "Why Hire Me?",
    subtitle: "Professional Summary",
    prompt: "hire",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    icon: Mail,
    title: "Contact",
    subtitle: "Let's Connect",
    prompt: "contact",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    id: 7,
    icon: Trophy,
    title: "Achievements",
    subtitle: "Professional Highlights",
    prompt: "achievements",
    color: "from-amber-500 to-orange-500",
  },
];

const AIQuickActions = ({ onSelect }) => {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Quick Questions
      </h4>

      <div className="space-y-3">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.id}
              whileHover={{
                scale: 1.02,
                x: 6,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => onSelect(item.prompt)}
              className="
                group
                flex
                w-full
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-700/40
                bg-slate-900/40
                p-4
                text-left
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-500/5
                hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
              "
            >
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  ${item.color}
                  text-white
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                `}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default AIQuickActions;