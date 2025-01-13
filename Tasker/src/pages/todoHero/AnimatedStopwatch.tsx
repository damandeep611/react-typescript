
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedStopwatch(){
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime + 1) % 60)
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return(
    <motion.div
    className="relative h-32 w-32 rounded-full bg-white shadow-lg flex items-center justify-center"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
  >
    <motion.div
      className="absolute top-0 left-1/2 h-1/2 w-1 bg-blue-500 origin-bottom"
      style={{ rotate: time * 6 }}
    />
    <motion.div
      className="absolute top-0 left-1/2 h-[45%] w-0.5 bg-gray-400 origin-bottom"
      style={{ rotate: time * 0.1 }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-2xl font-bold">{time.toString().padStart(2, '0')}</span>
    </div>
  </motion.div>
  )
}