import { motion } from "framer-motion";
import Section from "./ui/Section";
import Button from "./ui/Button";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

const getServiceIcon = (icon) => {
  if (icon === "stack") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (icon === "layout") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  if (icon === "server") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    );
  }
  if (icon === "database") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (icon === "vinyl") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h.01" />
      </svg>
    );
  }
  if (icon === "mixer") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 6v12m5-12v12m5-12v12M6 18h2m5 0h2m5 0h2" />
      </svg>
    );
  }
  if (icon === "playlist") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 10h13M8 14h9M3 6h.01M3 10h.01M3 14h.01M3 18h.01M8 18h13" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l1.2 3.6L17 7l-3.8 1.4L12 12l-1.2-3.6L7 7l3.8-1.4L12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12l.9 2.7L23 16l-3.1 1.3L19 20l-.9-2.7L15 16l3.1-1.3L19 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14l.7 2.1L8 17l-2.3.9L5 20l-.7-2.1L2 17l2.3-.9L5 14z" />
    </svg>
  );
};

const Services = () => {
  const { persona } = usePersona();
  const servicesCopy = personaConfig[persona].services;

  return (
    <Section id="services" title={servicesCopy.title} className="bg-background-subtle">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {servicesCopy.items.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 rounded-lg bg-surface border border-border-subtle shadow-ring hover:shadow-floating transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ y: -8 }}
          >
            {/* Icon */}
            <motion.div 
              className="mb-4 text-primary group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 5 }}
            >
              {getServiceIcon(service.icon)}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed">
              {service.description}
            </p>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-blue-glow rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-muted mb-6">
          {servicesCopy.ctaText}
        </p>
        <Button
          href={servicesCopy.ctaHref}
          variant="blue"
        >
          {servicesCopy.ctaButtonLabel}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </motion.div>
    </Section>
  );
};

export default Services;
