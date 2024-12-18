import {
  Bell,
 
  BellPlusIcon,
 
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Settings,
  User,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedSmartphone() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="relative mx-auto w-[280px] h-[580px] border-[8px] border-black rounded-[45px] overflow-hidden shadow-2xl"
    >
      {/* notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-4 bg-black rounded-b-xl z-40" />

      {/* phone content  */}
      <div className="relative h-full pt-4 px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 " />
            <span className=" font-semibold">Brain.ai</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5" />
            <Bell className="w-5 h-5 " />
          </div>
        </div>
        {/* text content */}
        <h1 className="text-xl font-bold mb-6">Today's Bookmark's</h1>
        <div className="flex items-center gap-2 mb-4">
          <button className="bg-zinc-800 text-white rounded-full text-sm py-1.5 px-4">
            Ava's  log
          </button>
          <button className="bg-zinc-800 text-white rounded-full w-8 h-8 flex items-center justify-center ">
            +
          </button>
          <button className="bg-zinc-900 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ⇋
          </button>
        </div>
        {/* task cards  */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay: 0.2}}
          className="bg-neutral-600 text-white rounded-3xl p-4 mb-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Reading list</span>
            <BookmarkCheck/>
          </div>
          <p className="text-zinc-400 text-sm"></p>

          
        </motion.div>
        {/* notes card */}
        <motion.div initial={{x: 50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.3}} className=" rounded-xl h-32 p-4 mb-3" style={{backgroundImage: "url('https://cambridge-intelligence.com/wp-content/uploads/2022/08/graph-visualization-714x300-1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
          <span className="font-medium">Graph links</span>
         
        </motion.div>
        {/* Action Buttons */}
        <div className="flex gap-2 mb-3">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-orange-500 w-1/2 h-10 rounded-3xl flex items-center justify-center"
          >
            <BellPlusIcon className="w-4 h-4 text-white" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-green-500 w-1/2 h-10 rounded-3xl flex items-center justify-center"
          >
            <Users2 className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        {/* Reminder Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-purple-500 rounded-3xl p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-white">Alerts</span>
            <div className="flex gap-1">
              <ChevronLeft className="w-4 h-4 text-white" />
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="font-semibold text-sm text-white mb-2">
           Two articles with same content found
          </h3>
          <span className="text-sm text-white">1 of 3</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
