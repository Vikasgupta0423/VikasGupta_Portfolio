// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";

// import { MdEmail } from "react-icons/md";

// const SocialLinks = () => {

//   return (

//     <div className="flex items-center gap-5 mt-8">

//       <a
//         href="https://github.com/yourusername"
//         target="_blank"
//         rel="noreferrer"
//         className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
//       >
//         <FaGithub size={22} />
//       </a>

//       <a
//         href="https://linkedin.com/in/yourusername"
//         target="_blank"
//         rel="noreferrer"
//         className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
//       >
//         <FaLinkedin size={22} />
//       </a>

//       <a
//         href="mailto:yourmail@gmail.com"
//         className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
//       >
//         <MdEmail size={22} />
//       </a>

//       <a
//         href="https://instagram.com/yourusername"
//         target="_blank"
//         rel="noreferrer"
//         className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
//       >
//         <FaInstagram size={22} />
//       </a>

//     </div>

//   );

// };

// export default SocialLinks;


import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialData = [
  { icon: <FaGithub size={18} />, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <MdEmail size={19} />, href: "mailto:yourmail@gmail.com", label: "Email" },
  { icon: <FaInstagram size={18} />, href: "https://instagram.com/yourusername", label: "Instagram" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
      {socialData.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="
            w-9
            h-9
            sm:w-10
            sm:h-10
            rounded-xl
            bg-slate-800/60
            border
            border-slate-700/60
            text-slate-300
            flex
            items-center
            justify-center
            backdrop-blur-md
            hover:border-cyan-500/50
            hover:bg-cyan-500/10
            hover:text-cyan-400
            hover:-translate-y-0.5
            transition-all
            duration-200
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;