import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const AIInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    onSend?.(text);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-cyan-500/20 bg-[#0b1220]/90 p-5 backdrop-blur-xl">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 px-4 py-3 transition-all focus-within:border-cyan-400">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about Vikas..."
          className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none"
        />

        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: -8,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={handleSend}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-sky-500
            text-black
            shadow-[0_0_20px_rgba(34,211,238,.35)]
          "
        >
          <SendHorizontal size={20} />
        </motion.button>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        Ask about skills, projects, experience, resume, or achievements.
      </p>
    </div>
  );
};

export default AIInput;