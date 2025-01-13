import { useEffect, useState } from "react";
import { Button } from "../../../../todo/src/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-6 w-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
          </div>
          <span className="text-xl font-semibold">ChronoTask</span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Resources", "Pricing"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            )
          )}
        </nav>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="hidden md:inline-block text-sm text-gray-600 hover:text-gray-900"
          >
            Sign in
          </a>
          <NavLink to="/dashboard">
            <Button>Get demo</Button>
          </NavLink>
        </motion.div>
      </div>
    </header>
  );
}
