import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, X, Menu, ChevronDown } from 'lucide-react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full bg-neutral-900 fixed top-0 left-0 z-50 px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-white font-semibold text-lg">TradeSim</span>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <ul className="flex items-center justify-between gap-4">
              {/* nav item  */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* ------- */}

              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              {/* -------- */}
              
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-white bg-gray-800 px-4 py-2 rounded-md">
              Sign in
            </button>
            <button className="hidden md:block text-white bg-green-600 px-4 py-2 rounded-md">
              Start your project
            </button>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-900 z-40 pt-16"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex flex-col p-4">
              <MobileNavItem text="Product" hasSubmenu />
              <MobileNavItem text="Developers" hasSubmenu />
              <MobileNavItem text="Pricing" />
              <MobileNavItem text="Docs" />
              <MobileNavItem text="Blog" />
              <div className="mt-auto">
                <button className="w-full text-white bg-gray-800 py-2 rounded-md mb-2">
                  Sign in
                </button>
                <button className="w-full text-white bg-green-600 py-2 rounded-md">
                  Start your project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



const MobileNavItem = ({ text, hasSubmenu = false }) => (
  <motion.div
    className="py-3 border-b border-gray-800 flex justify-between items-center"
    whileTap={{ scale: 0.98 }}
  >
    <span className="text-white">{text}</span>
    {hasSubmenu && <ChevronDown className="text-gray-500" />}
  </motion.div>
);

export default Navbar;