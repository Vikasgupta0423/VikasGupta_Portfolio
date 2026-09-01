// const Logo = () => {
//   return (
//     <a href="/" className="select-none">
//       <h1 className="text-3xl font-extrabold tracking-wide">
//         <span className="text-cyan-400">V</span>
//         <span className="text-white">G</span>
//         <span className="text-cyan-400">.</span>
//       </h1>
//     </a>
//   );
// };

// export default Logo;


const Logo = () => {
  return (
    <a href="#home" className="group flex items-center select-none">
      <span className="text-xl sm:text-2xl font-black tracking-wider text-white transition-transform duration-300 group-hover:scale-105">
        <span className="text-cyan-400">V</span>G<span className="text-cyan-400">.</span>
      </span>
    </a>
  );
};

export default Logo;