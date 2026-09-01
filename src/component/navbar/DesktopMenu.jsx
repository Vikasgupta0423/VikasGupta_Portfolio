// import { navigation } from "../../data/navigation";

// const DesktopMenu = () => {
//   return (
//     <ul className="hidden lg:flex items-center gap-2 rounded-full bg-white/[0.02] p-2">
//       {navigation.map((item) => (
//         <li key={item.id}>
//           <a
//             href={`#${item.id}`}
//             className="
//             group
//             relative
//             flex
//             items-center
//             gap-2
//             overflow-hidden
//             rounded-xl
//             px-5
//             py-3
//             text-sm
//             font-medium
//             transition-all
//             duration-500
//           "
//           >
//             {/* Glass Background */}
//             <span
//               className="
//               absolute
//               inset-0
//               rounded-xl
//               border
//               border-transparent
//               bg-white/[0.02]
//               opacity-0
//               backdrop-blur-xl
//               transition-all
//               duration-500
//               group-hover:border-cyan-400/20
//               group-hover:bg-cyan-500/10
//               group-hover:opacity-100
//             "
//             />

//             {/* Shine */}
//             <span
//               className="
//               absolute
//               left-[-120%]
//               top-0
//               h-full
//               w-1/2
//               -skew-x-12
//               bg-gradient-to-r
//               from-transparent
//               via-white/20
//               to-transparent
//               transition-all
//               duration-700
//               group-hover:left-[130%]
//             "
//             />

//             {/* Icon */}
//             <item.icon
//               size={17}
//               className="
//               relative
//               z-10
//               text-slate-500
//               transition-all
//               duration-300
//               group-hover:text-cyan-400
//               group-hover:scale-110
//             "
//             />

//             {/* Flip Text */}
//             <div className="relative h-5 overflow-hidden">
//               <span
//                 className="
//                 block
//                 text-slate-300
//                 transition-transform
//                 duration-500
//                 group-hover:-translate-y-full
//               "
//               >
//                 {item.title}
//               </span>

//               <span
//                 className="
//                 absolute
//                 left-0
//                 top-full
//                 text-cyan-400
//                 transition-transform
//                 duration-500
//                 group-hover:-translate-y-full
//               "
//               >
//                 {item.title}
//               </span>
//             </div>

//             {/* Bottom Line */}
//             <span
//               className="
//               absolute
//               bottom-0
//               left-1/2
//               h-[2px]
//               w-0
//               -translate-x-1/2
//               rounded-full
//               bg-gradient-to-r
//               from-cyan-400
//               via-sky-400
//               to-purple-500
//               transition-all
//               duration-500
//               group-hover:w-3/4
//             "
//             />
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default DesktopMenu;




// import { navigation } from "../../data/navigation";

// const DesktopMenu = () => {
//   return (
//     <ul className="hidden lg:flex items-center gap-2 rounded-full bg-white/[0.02] p-2">
//       {navigation.map((item) => (
//         <li key={item.id}>
//           <a
//             href={`#${item.id}`}
//             className="
//             group
//             relative
//             flex
//             items-center
//             gap-2
//             overflow-hidden
//             rounded-xl
//             px-5
//             py-3
//             text-sm
//             font-medium
//             transition-all
//             duration-500
//           "
//           >
//             {/* Glass Background */}
//             <span
//               className="
//               absolute
//               inset-0
//               rounded-xl
//               border
//               border-transparent
//               bg-white/[0.02]
//               opacity-0
//               backdrop-blur-xl
//               transition-all
//               duration-500
//               group-hover:border-cyan-400/20
//               group-hover:bg-cyan-500/10
//               group-hover:opacity-100
//             "
//             />

//             {/* Shine */}
//             <span
//               className="
//               absolute
//               left-[-120%]
//               top-0
//               h-full
//               w-1/2
//               -skew-x-12
//               bg-gradient-to-r
//               from-transparent
//               via-white/20
//               to-transparent
//               transition-all
//               duration-700
//               group-hover:left-[130%]
//             "
//             />

//             {/* Icon */}
//             <item.icon
//               size={17}
//               className="
//               relative
//               z-10
//               text-slate-500
//               transition-all
//               duration-300
//               group-hover:text-cyan-400
//               group-hover:scale-110
//             "
//             />

//             {/* Flip Text */}
//             <div className="relative h-5 overflow-hidden">
//               <span
//                 className="
//                 block
//                 text-slate-300
//                 transition-transform
//                 duration-500
//                 group-hover:-translate-y-full
//               "
//               >
//                 {item.title}
//               </span>

//               <span
//                 className="
//                 absolute
//                 left-0
//                 top-full
//                 text-cyan-400
//                 transition-transform
//                 duration-500
//                 group-hover:-translate-y-full
//               "
//               >
//                 {item.title}
//               </span>
//             </div>

//             {/* Bottom Line */}
//             <span
//               className="
//               absolute
//               bottom-0
//               left-1/2
//               h-[2px]
//               w-0
//               -translate-x-1/2
//               rounded-full
//               bg-gradient-to-r
//               from-cyan-400
//               via-sky-400
//               to-purple-500
//               transition-all
//               duration-500
//               group-hover:w-3/4
//             "
//             />
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default DesktopMenu;




// import { navigation } from "../../data/navigation";

// const DesktopMenu = ({ activeSection }) => {
//   return (
//     <ul className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/[0.03] p-1 border border-white/5">
//       {navigation.map((item) => {
//         const isActive = activeSection === item.id;

//         return (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               className={`
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 px-4
//                 py-2
//                 text-xs
//                 xl:text-sm
//                 font-medium
//                 transition-all
//                 duration-300
//                 ${
//                   isActive
//                     ? "text-cyan-300"
//                     : "text-slate-300 hover:text-cyan-300"
//                 }
//               `}
//             >
//               {/* Glass Hover/Active Highlight */}
//               <span
//                 className={`
//                   absolute
//                   inset-0
//                   rounded-full
//                   transition-all
//                   duration-300
//                   ${
//                     isActive
//                       ? "border border-cyan-400/25 bg-cyan-500/10 opacity-100"
//                       : "border border-transparent bg-white/[0.03] opacity-0 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/10 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               {/* Icon with 180° Rotation on Hover */}
//               <item.icon
//                 size={16}
//                 className={`
//                   relative
//                   z-10
//                   transition-all
//                   duration-500
//                   ease-in-out
//                   group-hover:rotate-180
//                   ${
//                     isActive
//                       ? "text-cyan-400 scale-110"
//                       : "text-slate-400 group-hover:text-cyan-400"
//                   }
//                 `}
//               />

//               {/* Text */}
//               <span className="relative z-10">{item.title}</span>

//               {/* Bottom Active / Hover Underline */}
//               <span
//                 className={`
//                   absolute
//                   bottom-1
//                   left-1/2
//                   h-[2px]
//                   -translate-x-1/2
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-400
//                   via-sky-400
//                   to-purple-500
//                   transition-all
//                   duration-300
//                   ${isActive ? "w-1/2 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"}
//                 `}
//               />
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DesktopMenu;



// import { navigation } from "../../data/navigation";

// const DesktopMenu = ({ activeSection }) => {
//   return (
//     <ul className="flex items-center gap-1.5 rounded-full bg-white/[0.02] p-1.5 border border-white/5">
//       {navigation.map((item) => {
//         const isActive = activeSection === item.id;

//         return (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               className={`
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-2
//                 overflow-hidden
//                 rounded-xl
//                 px-4
//                 py-2.5
//                 text-xs
//                 xl:text-sm
//                 font-medium
//                 transition-all
//                 duration-500
//                 ${
//                   isActive
//                     ? "text-cyan-300"
//                     : "text-slate-300 hover:text-cyan-300"
//                 }
//               `}
//             >
//               {/* Glass Background */}
//               <span
//                 className={`
//                   absolute
//                   inset-0
//                   rounded-xl
//                   border
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "border-cyan-400/30 bg-cyan-500/10 opacity-100"
//                       : "border-transparent bg-white/[0.02] opacity-0 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/10 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               {/* Light Shine Effect */}
//               <span
//                 className="
//                   absolute
//                   left-[-120%]
//                   top-0
//                   h-full
//                   w-1/2
//                   -skew-x-12
//                   bg-gradient-to-r
//                   from-transparent
//                   via-white/20
//                   to-transparent
//                   transition-all
//                   duration-700
//                   group-hover:left-[130%]
//                 "
//               />

//               {/* Icon (180° Rotate on Hover) */}
//               <item.icon
//                 size={16}
//                 className={`
//                   relative
//                   z-10
//                   transition-transform
//                   duration-500
//                   ease-in-out
//                   group-hover:rotate-180
//                   ${
//                     isActive
//                       ? "text-cyan-400 scale-110"
//                       : "text-slate-400 group-hover:text-cyan-400"
//                   }
//                 `}
//               />

//               {/* Text Flip Effect */}
//               <div className="relative z-10 h-5 overflow-hidden">
//                 <span
//                   className={`
//                     block
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                     ${isActive ? "text-cyan-300 font-semibold" : "text-slate-300"}
//                   `}
//                 >
//                   {item.title}
//                 </span>

//                 <span
//                   className="
//                     absolute
//                     left-0
//                     top-full
//                     block
//                     text-cyan-400
//                     transition-transform
//                     duration-500
//                     group-hover:-translate-y-full
//                   "
//                 >
//                   {item.title}
//                 </span>
//               </div>

//               {/* Bottom Line (Active or Hover) */}
//               <span
//                 className={`
//                   absolute
//                   bottom-0
//                   left-1/2
//                   h-[2px]
//                   -translate-x-1/2
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-400
//                   via-sky-400
//                   to-purple-500
//                   transition-all
//                   duration-500
//                   ${
//                     isActive
//                       ? "w-3/4 opacity-100"
//                       : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
//                   }
//                 `}
//               />
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DesktopMenu;



import { navigation } from "../../data/navigation";

const DesktopMenu = ({ activeSection }) => {
  return (
    <ul className="flex items-center gap-1.5 rounded-full bg-white/[0.02] p-1.5 border border-white/5">
      {navigation.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                rounded-xl
                px-4
                py-2.5
                text-xs
                xl:text-sm
                font-medium
                transition-all
                duration-500
                ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300"
                }
              `}
            >
              {/* Glass Background */}
              <span
                className={`
                  absolute
                  inset-0
                  rounded-xl
                  
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "  opacity-100"
                      : "border-transparent bg-white/[0.02] opacity-0 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/10 group-hover:opacity-100"
                  }
                `}
              />

              {/* Light Shine Effect */}
              <span
                className="
                  absolute
                  left-[-120%]
                  top-0
                  h-full
                  w-1/2
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[130%]
                "
              />

              {/* Icon (180° Rotate on Hover) */}
              <item.icon
                size={16}
                className={`
                  relative
                  z-10
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:rotate-180
                  ${
                    isActive
                      ? "text-cyan-400 scale-110"
                      : "text-slate-400 group-hover:text-cyan-400"
                  }
                `}
              />

              {/* Text Flip Effect */}
              <div className="relative z-10 h-5 overflow-hidden">
                <span
                  className={`
                    block
                    transition-transform
                    duration-500
                    group-hover:-translate-y-full
                    ${isActive ? "text-cyan-300 font-semibold" : "text-slate-300"}
                  `}
                >
                  {item.title}
                </span>

                <span
                  className="
                    absolute
                    left-0
                    top-full
                    block
                    text-cyan-400
                    transition-transform
                    duration-500
                    group-hover:-translate-y-full
                  "
                >
                  {item.title}
                </span>
              </div>

              {/* Bottom Line (Active or Hover) */}
              <span
                className={`
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-purple-500
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "w-3/4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                  }
                `}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;