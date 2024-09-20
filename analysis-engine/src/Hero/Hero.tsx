import AnimatedButton from "../components/AnimatedButton"
import StockTile from "../components/StockTile"
import {motion} from 'framer-motion'
const Hero = () => {
  return(
    <main className="w-full h-screen relative bg-neutral-900 flex flex-col">
     
      {/* Stock chart background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <StockTile />
      </div>
      <div className="pointer-events-none relative flex flex-col gap-5 items-center justify-center z-10 h-full mb-10 font-poppins">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl text-neutral-100 font-semibold uppercase tracking-tight text-center"
        >
          Backtest like a <br />
          Team of hundreds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-white w-full max-w-2xl px-4 text-xl text-center tracking-wide"
        >
         your all-in-one platform for stock market backtesting. Powered by Supabase, we offer a robust infrastructure that seamlessly integrates with your trading strategies.
        </motion.p>
        <div className="flex gap-6">
          <AnimatedButton label="Learn More" variant="primary"/>
          <AnimatedButton label="Documentation" variant="gray" className="bg-neutral-900" />

        </div>
      </div>
     
    </main>
  )
}

export default Hero