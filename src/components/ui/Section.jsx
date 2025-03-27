// src/components/ui/Section.jsx
import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container-custom">
        {title && (
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
