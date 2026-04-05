import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="type-display-section mb-8 text-center relative"
          >
            <span className="relative z-10">{title}</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/40 rounded-full"
            />
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
