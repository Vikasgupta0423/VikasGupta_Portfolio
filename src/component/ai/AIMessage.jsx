import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

import AISuggestions from "./AISuggestions";
import AIActionButtons from "./AIActionButtons";

const AIMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[88%] gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            isUser
              ? "bg-cyan-500 text-black"
              : "bg-gradient-to-br from-cyan-500 to-sky-500 text-black"
          }`}
        >
          {isUser ? (
            <User size={18} />
          ) : (
            <Bot size={18} />
          )}
        </div>

        {/* Bubble */}
        <div
          className={`rounded-2xl px-5 py-4 leading-7 whitespace-pre-line ${
            isUser
              ? "bg-cyan-500 text-black"
              : "border border-slate-700 bg-slate-900 text-slate-200"
          }`}
        >
          {/* Assistant Title */}
          {!isUser && message.title && (
            <h4 className="mb-3 text-lg font-semibold text-cyan-400">
              {message.title}
            </h4>
          )}

          {/* Message */}
          <p>{message.text}</p>

          {/* Action Buttons */}
          {!isUser && message.action && (
            <AIActionButtons
              type={message.action}
            />
          )}

          {/* Suggestions */}
          {!isUser &&
            message.suggestions?.length > 0 && (
              <AISuggestions
                suggestions={message.suggestions}
                onSelect={message.onSelect}
              />
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default AIMessage;