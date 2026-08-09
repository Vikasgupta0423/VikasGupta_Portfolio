import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        onClick={() => setOpen(!open)}
        className="
          lg:hidden
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-white/5
          backdrop-blur-xl
          text-cyan-300
        "
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-md
                lg:hidden
              "
            />

            {/* Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.95,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed
                top-24
                left-4
                right-4
                z-50
                rounded-3xl
                border
                border-cyan-400/20
                bg-[#08111f]/95
                backdrop-blur-3xl
                p-6
                shadow-[0_0_40px_rgba(34,211,238,.18)]
                lg:hidden
              "
            >
              <ul className="space-y-3">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-transparent
                        bg-white/5
                        px-5
                        py-4
                        text-lg
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-cyan-400/20
                        hover:bg-cyan-500/10
                        hover:text-cyan-400
                      "
                    >
                      {item.title}

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-cyan-400
                          opacity-0
                          transition-all
                          group-hover:opacity-100
                        "
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Resume */}
              <a
                href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
                download
                className="
                  mt-6
                  flex
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  px-6
                  py-4
                  font-semibold
                  text-black
                  shadow-[0_0_25px_rgba(34,211,238,.35)]
                "
              >
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;