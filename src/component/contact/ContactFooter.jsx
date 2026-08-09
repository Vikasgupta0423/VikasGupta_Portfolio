import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:vikasgupta0423@gmail.com",
    label: "Email",
  },
];

const ContactFooter = () => {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative mt-28 border-t border-slate-800 pt-12">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.h3
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-black tracking-wider"
        >
          <span className="text-white">Vikas</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Gupta
          </span>
        </motion.h3>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Vikas Gupta • Crafted with{" "}
          <Heart
            size={14}
            className="mx-1 inline text-red-400"
            fill="currentColor"
          />{" "}
          using React, Three.js & Spring Boot.  Version 1.01
        </p>
      </div>

      {/* Back to Top */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollTop}
        className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 backdrop-blur-xl hover:bg-cyan-500/20"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default ContactFooter;
