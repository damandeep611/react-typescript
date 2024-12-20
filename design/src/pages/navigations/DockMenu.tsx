import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: BookOpen, label: "Blog", href: "/blog" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Contact", href: "mailto:example@email.com" },
];

const DockMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleKeyPress = (e) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      width: "auto",
      height: "48px",
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      width: "auto",
      height: "48px",
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: (index) => ({
      opacity: 0,
      scale: 0,
      x: 0,
      transition: {
        duration: 0.4,
      },
    }),
    open: (index) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }),
  };

  const iconVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 90,
    },
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      onKeyDown={handleKeyPress}
    >
      <motion.div
        className={`
          relative flex items-center justify-center
          ${
            isOpen ? "bg-white dark:bg-gray-800 shadow-lg rounded-full p-2" : ""
          }
        `}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex space-x-4 mx-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  tabIndex={isOpen ? 0 : -1}
                >
                  <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                tabIndex={isOpen ? 0 : -1}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-3 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${isOpen ? "absolute" : ""}
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
            transition={{ duration: 0.4 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DockMenu;
