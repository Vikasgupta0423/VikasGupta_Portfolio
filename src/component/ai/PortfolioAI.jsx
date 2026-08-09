import { useState } from "react";
import { Bot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { portfolioKnowledge } from "../../data/aiData";
import { commands } from "./aiCommands";

import AIHeader from "./AIHeader";
import AIChat from "./AIChat";
import AIInput from "./AIInput";

const PortfolioAI = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const lower = text.toLowerCase();

    // User Message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    // Navigation Commands
    for (const cmd of commands) {
      const matched = cmd.keywords.some((word) =>
        lower.includes(word.toLowerCase())
      );

      if (matched) {
        cmd.action();
        break;
      }
    }

    setTyping(true);

    setTimeout(() => {
      let title = "🤖 Portfolio AI";
      let answer =
        "Sorry 😅 I couldn't understand that.\n\nTry asking about:\n\n• Skills\n• Projects\n• Experience\n• Resume\n• Contact";

      let action = null;
      let suggestions = [];
      let matchedCategory = null;

      for (const key of Object.keys(portfolioKnowledge)) {
        if (lower.includes(key.toLowerCase())) {
          matchedCategory = key;

          title = portfolioKnowledge[key].title;
          answer = portfolioKnowledge[key].text;
          action = portfolioKnowledge[key].action;
          suggestions =
            portfolioKnowledge[key].suggestions || [];

          break;
        }
      }

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          title,
          text: answer,
          action,
          category: matchedCategory,
          suggestions,
          onSelect: handleSend,
        },
      ]);
    }, 800);
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      {!open && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setOpen(true)}
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-sky-500
            text-black
            shadow-[0_0_35px_rgba(34,211,238,.45)]
          "
        >
          <Bot size={30} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              absolute
              bottom-20
              right-0
              flex
              h-[min(650px,75vh)]
              w-[420px]
              max-w-[calc(100vw-2rem)]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-cyan-500/20
              bg-[#08111f]/95
              backdrop-blur-3xl
              shadow-[0_0_60px_rgba(34,211,238,.18)]
            "
          >
            <AIHeader
              onClose={() => setOpen(false)}
              onNewChat={() => setMessages([])}
            />

            <AIChat
              messages={messages}
              typing={typing}
              onSelect={handleSend}
            />

            <AIInput onSend={handleSend} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioAI;