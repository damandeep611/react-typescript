import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router";

const navItems = [
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "#" },
  { label: "Experimental", href: "#" },
];

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 left-0 h-16 bg-white z-10  border-b border-gray-500"
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <div className=" flex items-center font-bold text-xl">
            <motion.div
              whileHover={{ rotate: 20 }}
              className="w-8 h-8 bg-indigo-600 rounded mr-4"
            />
            <NavLink to="/">Motion.co</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                key={item.label}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-4 py-2 font-medium"
          >
            Book a Demo
          </motion.button>
        </div>
        {/* mobile navigation here */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-gray-200">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};
