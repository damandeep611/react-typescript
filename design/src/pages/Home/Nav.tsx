import { motion } from "framer-motion";
export const Nav = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Careers", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto">
      <div className="font-bold text-xl">Team Virtual</div>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">Sign In</button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          Book a Demo
        </motion.button>
      </div>
    </nav>
  );
};
