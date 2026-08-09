import { Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import AIQuickActions from "./AIQuickActions";
import AIMessage from "./AIMessage";
import TypingIndicator from "./TypingIndicator";

const AIChat = ({
  messages,
  typing,
  onSelect,
}) => {
  const bottomRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      {/* Welcome Screen */}
      {messages.length === 0 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            {/* Avatar */}
            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              to-sky-500
              text-black
              shadow-[0_0_20px_rgba(34,211,238,.35)]
            "
            >
              <Bot size={22} />
            </div>

            {/* Welcome Bubble */}
            <div
              className="
              max-w-[300px]
              rounded-3xl
              rounded-tl-md
              border
              border-cyan-500/20
              bg-slate-900/40
              p-5
              backdrop-blur-xl
            "
            >
              <h3 className="text-lg font-semibold text-white">
                Hello 👋
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                I'm{" "}
                <span className="text-cyan-400">
                  Portfolio AI
                </span>
                .
                <br />
                Ask me anything about{" "}
                <span className="text-white">
                  Vikas Gupta
                </span>
                .
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>🚀 Projects</li>
                <li>💼 Experience</li>
                <li>⚡ Skills</li>
                <li>📄 Resume</li>
                <li>📞 Contact</li>
              </ul>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="mt-8">
            <AIQuickActions
              onSelect={onSelect}
            />
          </div>
        </>
      )}

      {/* Conversation */}
      <div className="mt-8 space-y-5">
        {messages.map((message, index) => (
          <AIMessage
            key={index}
            message={message}
          />
        ))}

        {typing && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default AIChat;