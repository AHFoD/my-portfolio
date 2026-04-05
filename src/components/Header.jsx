import { motion } from "framer-motion";
import PersonaSelector from "./persona-selector";
import Button from "./ui/Button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-8 sm:pt-12 px-6 sm:px-12 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-[1400px] mx-auto flex items-center justify-between">
        <PersonaSelector ariaLabel="Select persona" />
        <Button 
          href="#contact" 
          variant="ghost" 
          size="sm" 
          className="whitespace-nowrap hidden sm:flex text-sm tracking-widest font-medium uppercase hover:opacity-50 transition-opacity"
        >
          Say Hello
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
