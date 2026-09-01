// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { navigation } from "../../data/navigation";

// const MobileMenu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Menu Button */}
//       <motion.button
//         whileTap={{ scale: 0.9 }}
//         whileHover={{ scale: 1.08 }}
//         onClick={() => setOpen(!open)}
//         className="
//           lg:hidden
//           relative
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-cyan-400/20
//           bg-white/5
//           backdrop-blur-xl
//           text-cyan-300
//         "
//       >
//         <AnimatePresence mode="wait">
//           {open ? (
//             <motion.div
//               key="close"
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//             >
//               <X size={22} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="menu"
//               initial={{ rotate: 90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: -90, opacity: 0 }}
//             >
//               <Menu size={22} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="
//                 fixed
//                 inset-0
//                 z-40
//                 bg-black/60
//                 backdrop-blur-md
//                 lg:hidden
//               "
//             />

//             {/* Menu */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: -30,
//                 scale: 0.95,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -30,
//                 scale: 0.95,
//               }}
//               transition={{
//                 duration: 0.35,
//               }}
//               className="
//                 fixed
//                 top-24
//                 left-4
//                 right-4
//                 z-50
//                 rounded-3xl
//                 border
//                 border-cyan-400/20
//                 bg-[#08111f]/95
//                 backdrop-blur-3xl
//                 p-6
//                 shadow-[0_0_40px_rgba(34,211,238,.18)]
//                 lg:hidden
//               "
//             >
//               <ul className="space-y-3">
//                 {navigation.map((item, index) => (
//                   <motion.li
//                     key={item.id}
//                     initial={{
//                       opacity: 0,
//                       x: -30,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     transition={{
//                       delay: index * 0.06,
//                     }}
//                   >
//                     <a
//                       href={`#${item.id}`}
//                       onClick={() => setOpen(false)}
//                       className="
//                         group
//                         flex
//                         items-center
//                         justify-between
//                         rounded-2xl
//                         border
//                         border-transparent
//                         bg-white/5
//                         px-5
//                         py-4
//                         text-lg
//                         text-slate-300
//                         transition-all
//                         duration-300
//                         hover:border-cyan-400/20
//                         hover:bg-cyan-500/10
//                         hover:text-cyan-400
//                       "
//                     >
//                       {item.title}

//                       <span
//                         className="
//                           h-2
//                           w-2
//                           rounded-full
//                           bg-cyan-400
//                           opacity-0
//                           transition-all
//                           group-hover:opacity-100
//                         "
//                       />
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>

//               {/* Resume */}
//               <a
//                 href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//                 download
//                 className="
//                   mt-6
//                   flex
//                   justify-center
//                   rounded-full
//                   bg-gradient-to-r
//                   from-cyan-400
//                   to-sky-500
//                   px-6
//                   py-4
//                   font-semibold
//                   text-black
//                   shadow-[0_0_25px_rgba(34,211,238,.35)]
//                 "
//               >
//                 Download Resume
//               </a>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MobileMenu;



// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, Download } from "lucide-react";
// import { navigation } from "../../data/navigation";

// const MobileMenu = ({ activeSection }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="lg:hidden">
//       {/* Trigger Toggle Button */}
//       <motion.button
//         whileTap={{ scale: 0.92 }}
//         onClick={() => setOpen(!open)}
//         aria-label="Toggle Navigation"
//         className="
//           relative
//           flex
//           h-9
//           w-9
//           sm:h-10
//           sm:w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-cyan-400/30
//           bg-cyan-500/10
//           text-cyan-300
//           backdrop-blur-md
//         "
//       >
//         <AnimatePresence mode="wait">
//           {open ? (
//             <motion.div
//               key="close"
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <X size={18} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="menu"
//               initial={{ rotate: 90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: -90, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Menu size={18} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* Modal & Backdrop */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
//             />

//             {/* Slide Down Dropdown Menu */}
//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.96 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="
//                 fixed
//                 top-20
//                 left-4
//                 right-4
//                 z-50
//                 max-w-md
//                 mx-auto
//                 rounded-2xl
//                 border
//                 border-cyan-500/20
//                 bg-[#08111f]/95
//                 p-4
//                 shadow-[0_10px_40px_rgba(0,0,0,0.7)]
//                 backdrop-blur-3xl
//                 lg:hidden
//               "
//             >
//               <ul className="space-y-1.5">
//                 {navigation.map((item) => {
//                   const isActive = activeSection === item.id;
//                   return (
//                     <li key={item.id}>
//                       <a
//                         href={`#${item.id}`}
//                         onClick={() => setOpen(false)}
//                         className={`
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           rounded-xl
//                           px-4
//                           py-3
//                           text-sm
//                           font-medium
//                           transition-all
//                           duration-200
//                           ${
//                             isActive
//                               ? "border border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
//                               : "border border-transparent bg-white/[0.03] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-cyan-300"
//                           }
//                         `}
//                       >
//                         <div className="flex items-center gap-3">
//                           <item.icon
//                             size={18}
//                             className={`transition-transform duration-300 group-hover:rotate-180 ${
//                               isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
//                             }`}
//                           />
//                           <span>{item.title}</span>
//                         </div>

//                         <span
//                           className={`h-2 w-2 rounded-full bg-cyan-400 transition-opacity ${
//                             isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                           }`}
//                         />
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>

//               {/* Mobile Resume Link */}
//               <a
//                 href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//                 download
//                 onClick={() => setOpen(false)}
//                 className="
//                   mt-3
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-cyan-400
//                   py-3
//                   text-xs
//                   font-semibold
//                   text-slate-950
//                   shadow-[0_0_20px_rgba(34,211,238,0.25)]
//                   hover:bg-cyan-300
//                   transition-all
//                 "
//               >
//                 <Download size={15} />
//                 <span>Download Resume</span>
//               </a>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileMenu;


// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, Download } from "lucide-react";
// import { navigation } from "../../data/navigation";

// const MobileMenu = ({ activeSection }) => {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);

//   return (
//     <div className="lg:hidden">
//       {/* Navbar Toggle Trigger */}
//       <motion.button
//         whileTap={{ scale: 0.92 }}
//         onClick={() => setOpen(true)}
//         aria-label="Open Navigation"
//         className="
//           relative
//           flex
//           h-9
//           w-9
//           sm:h-10
//           sm:w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-cyan-400/30
//           bg-cyan-500/10
//           text-cyan-300
//           backdrop-blur-md
//         "
//       >
//         <Menu size={18} />
//       </motion.button>

//       {/* Drawer Overlay & Popup */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Backdrop: Clicking outside closes the drawer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeMenu}
//               className="fixed inset-0 z-[1100] bg-black/75 backdrop-blur-md"
//             />

//             {/* Modal Container */}
//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.96 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="
//                 fixed
//                 top-5
//                 left-4
//                 right-4
//                 z-[1110]
//                 max-w-md
//                 mx-auto
//                 rounded-3xl
//                 border
//                 border-cyan-500/30
//                 bg-[#08111f]/95
//                 p-5
//                 shadow-[0_20px_50px_rgba(0,0,0,0.8)]
//                 backdrop-blur-3xl
//               "
//             >
//               {/* Modal Top Bar with Explicit Close Button */}
//               <div className="flex items-center justify-between pb-4 mb-3 border-b border-white/10">
//                 <div className="text-sm font-bold tracking-wide text-white">
//                   Navigation
//                 </div>

//                 <button
//                   onClick={closeMenu}
//                   aria-label="Close Navigation"
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/5
//                     text-slate-300
//                     hover:border-cyan-400/40
//                     hover:bg-cyan-500/10
//                     hover:text-cyan-300
//                     transition-colors
//                   "
//                 >
//                   <X size={16} />
//                 </button>
//               </div>

//               {/* Navigation Links */}
//               <ul className="space-y-1.5">
//                 {navigation.map((item, index) => {
//                   const isActive = activeSection === item.id;
//                   return (
//                     <motion.li
//                       key={item.id}
//                       initial={{ opacity: 0, x: -15 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.04 }}
//                     >
//                       <a
//                         href={`#${item.id}`}
//                         onClick={closeMenu}
//                         className={`
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           rounded-xl
//                           px-4
//                           py-2.5
//                           text-sm
//                           font-medium
//                           transition-all
//                           duration-200
//                           ${
//                             isActive
//                               ? "border border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
//                               : "border border-transparent bg-white/[0.03] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-cyan-300"
//                           }
//                         `}
//                       >
//                         <div className="flex items-center gap-3">
//                           <item.icon
//                             size={16}
//                             className={`transition-transform duration-300 group-hover:rotate-180 ${
//                               isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
//                             }`}
//                           />
//                           <span>{item.title}</span>
//                         </div>

//                         <span
//                           className={`h-1.5 w-1.5 rounded-full bg-cyan-400 transition-opacity ${
//                             isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                           }`}
//                         />
//                       </a>
//                     </motion.li>
//                   );
//                 })}
//               </ul>

//               {/* Resume CTA */}
//               <a
//                 href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
//                 download
//                 onClick={closeMenu}
//                 className="
//                   mt-4
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-cyan-400
//                   py-2.5
//                   text-xs
//                   font-semibold
//                   text-slate-950
//                   shadow-[0_0_20px_rgba(34,211,238,0.25)]
//                   hover:bg-cyan-300
//                   transition-all
//                 "
//               >
//                 <Download size={14} />
//                 <span>Download Resume</span>
//               </a>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileMenu;



import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navigation } from "../../data/navigation";
import Logo from "./Logo";

const MobileMenu = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="lg:hidden">
      {/* Navbar Toggle Trigger */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(true)}
        aria-label="Open Navigation"
        className="
          relative
          flex
          h-9
          w-9
          sm:h-10
          sm:w-10
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-500/10
          text-cyan-300
          backdrop-blur-md
        "
      >
        <Menu size={18} />
      </motion.button>

      {/* Drawer Overlay & Popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop: Clicking outside closes the drawer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[1100] bg-black/75 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed
                top-5
                left-4
                right-4
                z-[1110]
                max-w-md
                mx-auto
                rounded-3xl
                border
                border-cyan-500/30
                bg-[#08111f]/95
                p-5
                shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                backdrop-blur-3xl
              "
            >
              {/* Modal Top Bar with Brand Logo and Close Button */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10">
                <div onClick={closeMenu}>
                  <Logo />
                </div>

                <button
                  onClick={closeMenu}
                  aria-label="Close Navigation"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-slate-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-500/10
                    hover:text-cyan-300
                    transition-colors
                  "
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="space-y-1.5">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        className={`
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? "border border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
                              : "border border-transparent bg-white/[0.03] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-cyan-300"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon
                            size={16}
                            className={`transition-transform duration-300 group-hover:rotate-180 ${
                              isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
                            }`}
                          />
                          <span>{item.title}</span>
                        </div>

                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-cyan-400 transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Resume CTA */}
              <a
                href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
                download
                onClick={closeMenu}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  py-2.5
                  text-xs
                  font-semibold
                  text-slate-950
                  shadow-[0_0_20px_rgba(34,211,238,0.25)]
                  hover:bg-cyan-300
                  transition-all
                "
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;