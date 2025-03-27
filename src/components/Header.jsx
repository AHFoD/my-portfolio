import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-gray-900 relative group"
        >
          <span className="relative z-10">Portfolio</span>
          <motion.div
            className="absolute -inset-1 bg-primary/10 rounded-lg -z-0"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>

        <ul className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Services", "Portfolio", "Process", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button with animation */}
        <motion.button 
          className="md:hidden relative group p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-gray-600 group-hover:text-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;
