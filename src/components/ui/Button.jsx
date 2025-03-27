// src/components/ui/Button.jsx
import { motion } from "framer-motion";

const Button = ({ children, href, primary, className = "", onClick }) => {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-all inline-block";
  const primaryClasses = "bg-primary text-white hover:bg-opacity-90";
  const secondaryClasses = "bg-white text-primary border border-primary hover:bg-gray-50";
  
  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default Button;
