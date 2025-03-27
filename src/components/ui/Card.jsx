// src/components/ui/Card.jsx
import { motion } from "framer-motion";

const Card = ({ 
  title, 
  description, 
  image, 
  tags = [], 
  link,
  className = "" 
}) => {
  const isClientProject = link && link.includes('aburusyd.my');

  return (
    <motion.div 
      className={`${isClientProject ? 'bg-dark-light/80 scale-105 border-primary/20' : 'bg-dark-light border-dark-lighter/10'} 
        rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="relative h-56 overflow-hidden group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {isClientProject && (
            <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-full text-sm font-medium text-light shadow-lg">
              Featured Project
            </div>
          )}
        </div>
      )}
      
      <div className="p-8">
        <h3 className={`${isClientProject ? 'text-2xl' : 'text-xl'} font-bold mb-3 text-light`}>
          {title}
        </h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`${
                  isClientProject 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'bg-dark text-light/80'
                } text-xs px-3 py-1.5 rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className={`${isClientProject ? 'text-light/90' : 'text-light/70'} mb-6`}>
          {description}
        </p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center ${
              isClientProject 
                ? 'bg-primary text-light px-6 py-2 rounded-lg hover:bg-primary-light' 
                : 'text-primary hover:text-primary-light'
            } transition-all duration-300`}
          >
            {isClientProject ? 'View Live Project' : 'Visit Website'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ${isClientProject ? 'ml-2' : 'ml-1'}`}
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
