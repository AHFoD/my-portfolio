// src/components/ui/Button.jsx
import { motion } from "framer-motion";

const Button = ({ children, href, primary, className = "", onClick, type, disabled, fullWidth, ...props }) => {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-all";
  const primaryClasses = "bg-primary text-white hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";
  const secondaryClasses = "bg-white text-primary border border-primary hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed";
  const widthClasses = fullWidth ? "w-full" : "inline-block";
  
  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${widthClasses} ${className}`;
  
  // If href is provided, render as anchor
  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
