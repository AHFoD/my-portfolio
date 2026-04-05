import { motion } from "framer-motion";

const VARIANT_CLASS_BY_KEY = {
  default: "bg-surface border border-border-subtle shadow-ring",
  elevated: "bg-surface-2 border border-border shadow-floating",
};

const Card = ({
  title,
  description,
  image,
  tags = [],
  link,
  featured = false,
  variant = "default",
  className = "",
}) => {
  const variantClasses = VARIANT_CLASS_BY_KEY[variant] ?? VARIANT_CLASS_BY_KEY.default;
  return (
    <motion.div 
      className={`${variantClasses} rounded-lg overflow-hidden transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      {image && (
        <div className="relative h-56 overflow-hidden group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-frosted backdrop-blur-xl border border-border-subtle px-4 py-2 rounded-pill text-sm font-medium text-foreground">
              Featured
            </div>
          )}
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-background-subtle text-muted border border-border-subtle text-xs px-3 py-1.5 rounded-pill"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-muted mb-6">{description}</p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:opacity-90 transition-opacity duration-300"
          >
            Visit Website
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
