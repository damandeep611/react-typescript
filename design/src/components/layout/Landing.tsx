import { motion } from "framer-motion";
import { NavLink } from "react-router";
export default function Landing() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center p-12">
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-10 right-10 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-200" />
            <div>
              <div className="font-semibold">Malik Grotsek</div>
              <div className="text-sm">Recruiter</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Agile recruitment for today's world of work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          An all-encompassing remote hiring solution to help modern businesses
          grow with Virtual Assistants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            <NavLink to="/components">UI Library</NavLink>
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Book a Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
}
