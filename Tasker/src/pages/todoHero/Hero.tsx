import { Button } from "../../../../todo/src/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedStopwatch from "./AnimatedStopwatch";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* grid pattern background */}
      <motion.div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="dense-dots"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="5" cy="5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dense-dots)" />
        </svg>
      </motion.div>
      {/* decorative elements */}
      <div className="absolute left-16 top-20 hidden md:block">
        <div className="relative h-32 w-32 rotate-[5deg]">
          <div className="absolute inset-0 bg-yellow-100 shadow-lg transform-gpu">
            <div className="p-4 text-sm">
              <p className="text-gray-600">
                Take notes to keep track of your essential tasks
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* element 2 */}
      <div className="absolute right-10 top-28 hidden md:block">
        <div className="relative h-32 w-32 rotate-[5deg]">
          <div className="absolute inset-0 bg-white rounded-lg shadow">
            <div className="text-sm">
              <p>Reminders</p>
              <p>Today"s Meeting</p>
              <div className="mt-2 h-2 w-16 rounded bg-blue-400" />
            </div>
          </div>
        </div>
      </div>
      {/* animted stopwatch */}
      <motion.div
        className="absolute left-1/4 top-1/2 "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <AnimatedStopwatch />
      </motion.div>
      {/* element 3 */}
      <div className="absolute bottom-16 right-20 hidden md:block">
        <div className="relative h-32 w-48 rotate-[5deg]">
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4">
            <p className="font-medium mb-2">100+ Integrations</p>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded bg-red-100" />
              <div className="h-8 w-8 rounded bg-green-100" />
              <div className="h-8 w-8 rounded bg-blue-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-20 pt-32 text-center">
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {["Think, plan, and track", "all in one place"].map(
                (line, lineIndex) => (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: lineIndex * 0.5 }}
                    className={`block ${
                      lineIndex === 1 ? "text-gray-400" : ""
                    }`}
                  >
                    {line.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${line}-${charIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: lineIndex * 0.5 + charIndex * 0.03,
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                )
              )}
            </AnimatePresence>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Efficiently manage your tasks and boost productivity.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button size="lg" className="text-base">
              Get free demo
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
