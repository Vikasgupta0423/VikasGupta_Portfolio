import { motion } from "framer-motion";

const SceneWrapper = ({
  id,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        ${className}
      `}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SceneWrapper;