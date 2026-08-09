import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const SocialLinks = () => {

  return (

    <div className="flex items-center gap-5 mt-8">

      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
      >
        <MdEmail size={22} />
      </a>

      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-white/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
      >
        <FaInstagram size={22} />
      </a>

    </div>

  );

};

export default SocialLinks;