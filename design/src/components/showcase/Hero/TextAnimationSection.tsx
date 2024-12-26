import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
export default function TextAnimationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const element = containerRef.current;
      element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const repeatingText = "HIKE EXPLORE REPEAT";
  const repeatedText = repeatingText.repeat(4);
  return (
    <section className="relative h-screen bg-stone-100 overflow-hidden ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-0 text-[150px]  whitespace-nowrap text-stone-200"
      >
        {repeatedText}
      </motion.div>

      <div className=" relative container mx-auto  lg:px-4 z-10 pt-32 flex flex-col justify-center items-start gap-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-xl font-semibold text-green-800"
        >
          Book your trail
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl tracking-wide font-bold uppercase"
        >
          Expert guided hiking adventures
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-medium text-gray-500 capitalize"
        >
          Embark on unforgettable journeys with our seasoned trail guides. From
          scenic day hikes to challenging multi-day treks, we offer experiences
          for every skill level.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 h-2 bg-green-600"
        />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-800 text-white p-2 px-8 rounded-xl max-w-fit hover:bg-green-950 transition-colors duration-200"
        >
          Reserve
        </motion.button>
      </div>
      {/* Animated Mountain Background */}
      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 w-full h-64 overflow-hidden"
      >
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="#4B5563"
            fillOpacity="0.2"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ y: 100 }}
            animate={{
              y: [100, 80, 100],
              transition: {
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              },
            }}
          />
          <motion.path
            fill="#4B5563"
            fillOpacity="0.4"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ y: 100 }}
            animate={{
              y: [100, 70, 100],
              transition: {
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              },
            }}
          />
        </svg>
      </div>
    </section>
  );
}
