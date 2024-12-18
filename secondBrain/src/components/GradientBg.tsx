import { motion } from "framer-motion"

export function GradientBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50"
  />
 
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    className="absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-200 opacity-20 blur-3xl"
  />
</div>
  )
}

