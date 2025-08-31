// src/components/Services.jsx
import { motion } from "framer-motion";
import Section from "./ui/Section";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, fast, and user-friendly websites and web applications using modern technologies.",
      price: "Starting from RM 8,000",
      features: [
        "Custom website design and development",
        "Responsive design for all devices",
        "SEO optimization",
        "Performance optimization",
        "3 rounds of revisions",
        "2 months of support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Frontend Development",
      description: "Creating beautiful, interactive UIs with React, Tailwind CSS, and other modern frontend technologies.",
      price: "Starting from RM 6,500",
      features: [
        "Modern React.js implementation",
        "Custom component development",
        "State management setup",
        "Responsive UI/UX design",
        "Performance optimization",
        "1 month of support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Backend Development",
      description: "Building robust, scalable APIs and server-side applications with Node.js and modern database solutions.",
      price: "Starting from RM 9,000",
      features: [
        "RESTful API development",
        "Database architecture",
        "Authentication & authorization",
        "API documentation",
        "Security implementation",
        "3 months of support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Database Design",
      description: "Designing efficient, secure, and scalable database structures for web applications.",
      price: "Starting from RM 5,000",
      features: [
        "Database schema design",
        "Data migration planning",
        "Performance optimization",
        "Backup & recovery setup",
        "Security implementation",
        "1 month of support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Hosting & Maintenance",
      description: "Professional website hosting and maintenance services to keep your site running smoothly.",
      price: "Starting from RM 100/month",
      features: [
        "Domain registration and setup",
        "SSL certificate installation",
        "Cloud hosting setup",
        "Regular backups",
        "Security monitoring",
        "Monthly maintenance",
        "24/7 uptime monitoring",
        "Technical support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  // In the return statement, update the card rendering:
  return (
    <Section id="services" title="Services" className="bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all 
                           border border-gray-100 hover:border-primary/20 group
                           flex flex-col h-full" // Added flex and height control
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              <div className="text-primary/80 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{service.description}</p>
            <div className="mt-auto"> {/* Push features and price to bottom */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 mt-1 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold text-lg">{service.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
