// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Download,
//   Github,
//   Linkedin,
// } from "lucide-react";

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "vikasgupta0423@gmail.com",
//     href: "mailto:vikasgupta0423@gmail.com",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+91 7309373587",
//     href: "tel:+917309373587",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "New Delhi, India",
//     href: "#",
//   },
// ];

// const socials = [
//   {
//     icon: Github,
//     href: "https://github.com/yourusername",
//   },
//   {
//     icon: Linkedin,
//     href: "https://linkedin.com/in/yourusername",
//   },
// ];

// const ContactCard = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//       className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8 backdrop-blur-2xl"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

//       <div className="relative z-10">
//         {/* Contact Items */}
//         <div className="space-y-5">
//           {contactInfo.map((item) => {
//             const Icon = item.icon;

//             return (
//               <motion.a
//                 key={item.title}
//                 href={item.href}
//                 whileHover={{ x: 8 }}
//                 className="group flex items-center gap-5 rounded-2xl border border-slate-700/40 bg-slate-800/30 p-5 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/5"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition-all group-hover:scale-110">
//                   <Icon size={24} />
//                 </div>

//                 <div>
//                   <p className="text-sm text-slate-400">{item.title}</p>
//                   <p className="text-lg font-medium text-white">
//                     {item.value}
//                   </p>
//                 </div>
//               </motion.a>
//             );
//           })}
//         </div>

//         {/* Divider */}
//         <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

//         {/* Bottom */}
//         <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <motion.a
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             href="/FSD_v2.1_Vikas_Gupta.pdf"
//             download
//             className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,.35)]"
//           >
//             <Download size={20} />
//             Download Resume
//           </motion.a>

//           <div className="flex gap-4">
//             {socials.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   whileHover={{ y: -5, scale: 1.1 }}
//                   className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800/40 text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
//                 >
//                   <Icon size={22} />
//                 </motion.a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactCard;



import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";

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
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
];

const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        border
        border-cyan-500/20
        bg-[#0B132B]/60
        p-4
        sm:p-6
        lg:p-8
        backdrop-blur-xl
        shadow-[0_10px_35px_rgba(0,0,0,0.4)]
      "
    >
      {/* Subtle Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

      <div className="relative z-10">
        {/* Contact Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  gap-3.5
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/40
                  p-3.5
                  sm:p-4
                  transition-all
                  duration-200
                  hover:border-cyan-500/40
                  hover:bg-cyan-500/5
                  hover:-translate-y-0.5
                "
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-transform group-hover:scale-110">
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] sm:text-xs font-medium text-slate-400">{item.title}</p>
                  <p className="truncate text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-5 sm:my-6 h-px bg-slate-800" />

        {/* Bottom CTA & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
            download
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-cyan-400
              px-6
              py-2.5
              text-xs
              sm:text-sm
              font-medium
              text-slate-950
              shadow-[0_0_20px_rgba(34,211,238,0.25)]
              hover:bg-cyan-300
              hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
              hover:-translate-y-0.5
              transition-all
              duration-200
            "
          >
            <Download size={15} />
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="
                    flex
                    h-9
                    w-9
                    sm:h-10
                    sm:w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-800
                    [bg-slate-900]/50
                    text-slate-300
                    transition-all
                    duration-200
                    
                    hover:border-cyan-500/40
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    hover:-translate-y-0.5
                  "
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;