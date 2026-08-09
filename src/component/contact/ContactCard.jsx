import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "vikasgupta0423@gmail.com",
    href: "mailto:vikasgupta0423@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7309373587",
    href: "tel:+917309373587",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "New Delhi, India",
    href: "#",
  },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
  },
];

const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8 backdrop-blur-2xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

      <div className="relative z-10">
        {/* Contact Items */}
        <div className="space-y-5">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-5 rounded-2xl border border-slate-700/40 bg-slate-800/30 p-5 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition-all group-hover:scale-110">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <p className="text-lg font-medium text-white">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="/FSD_v2.1_Vikas_Gupta.pdf"
            download
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,.35)]"
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <div className="flex gap-4">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800/40 text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;