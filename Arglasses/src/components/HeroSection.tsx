import { useRef } from "react";
import { Button } from "./ui/button";
import ParallaxProduct from "./ParallaxProduct";
import { useScroll, useTransform } from "framer-motion";

import glasses from "../assets/glasses.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <div className="flex flex-col h-screen relative overflow-hidden">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center py-12 text-center  relative">
          <div className="max-w-2xl mx-auto">
            <img
              src={glasses}
              alt="Designer Glasses"
              width={400}
              height={200}
              className="mx-auto mb-8 "
            />
            <h1 className="text-4xl font-bold mb-4">
              Make a fashion statement
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              From the runway to the subway, elevate your favorite designer
              frames with up to 50% off lenses. A makeover for a look that's as
              unique as you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                className="bg-[#2d3748] hover:bg-[#1a202c] text-white px-8"
              >
                DESIGNER STYLES
              </Button>
              <Button
                variant="outline"
                className="border-[#2d3748] text-[#2d3748] hover:bg-gray-100"
              >
                SHOP EYEWEAR
              </Button>
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="absolute bottom-20 left-0 w-full overflow-hidden">
          <h2 className="text-[8rem] md:text-[14rem] font-medium text-[#2d3748] text-center leading-none tracking-normal">
            GLASSES.COM
          </h2>
        </div>
      </div>

      {/* New Arrivals Banner with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -40 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ y }}
        className="bg-blue-500 text-white py-16 px-6 rounded-t-[3rem] relative z-10 -mt-32"
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <p>Product</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl leading-tight  uppercase font-medium mb-8 text-center"
          >
            New Arrivals
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Button
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3"
            >
              SHOP NOW
            </Button>
          </motion.div>
        </div>
        <ParallaxProduct />
      </motion.div>
    </div>
  );
}
