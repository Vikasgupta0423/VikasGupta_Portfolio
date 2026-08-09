// const HeroStats = () => {
//   return (
//     <div className="grid grid-cols-3 gap-6 mt-12">

//       <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
//         <h2 className="text-4xl font-bold text-cyan-400">2+</h2>
//         <p>Years</p>
//       </div>

//       <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
//         <h2 className="text-4xl font-bold text-cyan-400">12+</h2>
//         <p>Projects</p>
//       </div>

//       <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
//         <h2 className="text-4xl font-bold text-cyan-400">500+</h2>
//         <p>APIs</p>
//       </div>

//     </div>
//   );
// };

// export default HeroStats;

const HeroStats = () => {

  const stats = [
    {
      number: "2+",
      label: "Years Experience",
    },
    {
      number: "15+",
      label: "Projects",
    },
    {
      number: "10+",
      label: "Technologies",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 pt-8">

      {stats.map((item) => (

        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-cyan-400">
            {item.number}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {item.label}
          </p>

        </div>

      ))}

    </div>
  );
};

export default HeroStats;