import {
  Bot,
  X,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";

const AIHeader = ({
  onClose,
  onNewChat,
}) => {
  return (
    <div className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-slate-900 to-purple-500/5 px-6 py-5">
      {/* Glow */}
      <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-10 bottom-0 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              to-sky-500
              text-black
              shadow-[0_0_25px_rgba(34,211,238,.45)]
            "
          >
            <Bot size={28} />

            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-[#08111f] bg-green-400 animate-pulse" />
          </motion.div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Portfolio AI
            </h3>

            <p className="mt-1 flex items-center gap-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Online
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onNewChat}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-700
              bg-slate-900/40
              text-slate-400
              hover:border-cyan-400
              hover:text-cyan-300
            "
            title="New Chat"
          >
            <Trash2 size={18} />
          </motion.button>

          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-700
              bg-slate-900/40
              text-slate-400
              hover:border-cyan-400
              hover:text-cyan-300
            "
            title="Close"
          >
            <X size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AIHeader;