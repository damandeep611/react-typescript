import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SmartphoneProps {
  children?: ReactNode
}

export function SmartPhone({ children }:SmartphoneProps ) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-64 h-[500px] mx-auto"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0px rgba(59, 130, 246, 0.5)",
            "0 0 0 20px rgba(59, 130, 246, 0)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute inset-0 rounded-[3rem]"
      />
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-xl" />
      <div className="absolute inset-2 bg-gray-800 rounded-[2.5rem]" />
      <div className="absolute inset-4 bg-gray-100 rounded-[2rem] overflow-hidden">
        <AnimatedContent />
      </div>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full" />
      {children}
    </motion.div>
  )
}

function AnimatedContent() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 space-y-4">
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-3/4 h-8 bg-blue-500 rounded-md"
    />
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      className="w-full h-4 bg-green-500 rounded-md"
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, delay: 1, repeat: Infinity }}
      className="w-2/3 h-12 bg-yellow-500 rounded-md"
    />
  </div>
  )
}


