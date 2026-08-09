import {
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const techs = [
  { icon: <FaJava />, top: "5%", left: "45%" },
  { icon: <FaReact />, top: "25%", right: "0%" },
  { icon: <SiSpringboot />, top: "70%", right: "5%" },
  { icon: <SiMysql />, bottom: "15%", left: "5%" },
  { icon: <FaDocker />, bottom: "0%", right: "40%" },
  { icon: <FaGitAlt />, top: "40%", left: "-5%" },
];

const FloatingTech = () => {
  return (
    <>
      {techs.map((item, index) => (
        <div
          key={index}
          className="absolute w-14 h-14 rounded-full
          bg-white/10 backdrop-blur-xl
          border border-cyan-500/20
          flex justify-center items-center
          text-cyan-400 text-2xl
          animate-bounce"
          style={item}
        >
          {item.icon}
        </div>
      ))}
    </>
  );
};

export default FloatingTech;