import { motion } from "framer-motion";

const AIAccelerationSection = () => {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background spiral animation */}
      <motion.div
        className="absolute right-0 w-[800px] h-[800px] opacity-10"
        initial={{ rotate: 0 }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 0 C50 50 50 50 100 50 C50 50 50 50 50 100 C50 50 50 50 0 50 C50 50 50 50 50 0"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h1
            className="text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE AI
            <br />
            ACCELERATION
            <br />
            CLOUD
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-blue-500 text-4xl font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BUILT ON
            <br />
            LEADING AI
            <br />
            RESEARCH.
          </motion.p>
        </motion.div>
      </div>

      {/* Additional spiral animations */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute right-0 w-[800px] h-[800px] opacity-5"
          initial={{ rotate: 0 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 0 C50 50 50 50 100 50 C50 50 50 50 50 100 C50 50 50 50 0 50 C50 50 50 50 50 0"
              fill="none"
              stroke="black"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default AIAccelerationSection;
