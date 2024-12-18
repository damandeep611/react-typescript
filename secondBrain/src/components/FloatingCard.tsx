import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}

export default function FloatingCard({
  children,
  className = "",
  delay,
  x,
  y,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x, y }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-xl bg-white/90 backdrop-blur-sm shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
