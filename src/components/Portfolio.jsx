// src/components/Portfolio.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Abu Rusyd Coffee Shop",
      description: "A modern, responsive landing page for a local coffee shop, featuring an elegant design and seamless user experience.",
      fullDescription: "Abu Rusyd Coffee Shop is a comprehensive web solution designed to showcase the unique atmosphere and offerings of a local coffee shop. The project features a fully responsive design that works seamlessly across all devices, from mobile phones to desktop computers.\n\nKey features include:\n• Beautiful, modern UI with smooth animations\n• Integration with Strapi CMS for easy content management\n• Menu showcase with detailed product information\n• Location and contact information\n• Optimized performance and SEO\n• Mobile-first responsive design\n\nThe website was built using React and Vite for optimal performance, styled with Tailwind CSS for a modern look, and powered by Strapi CMS to allow the client to easily update content without technical knowledge.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
      link: "https://aburusyd.my",
      tags: ["React", "Vite", "Strapi CMS", "Tailwind CSS"],
      category: "client",
      challenges: "Creating a balance between aesthetic appeal and functionality while ensuring the site loads quickly and performs well on all devices.",
      outcome: "Successfully delivered a professional website that increased the coffee shop's online presence and customer engagement.",
    },
    {
      title: "QR Code Manager System",
      description: "Web-based QR code management system for creating, tracking, and analyzing QR codes with real-time analytics.",
      fullDescription: "The QR Code Manager System is a powerful web application designed to streamline QR code creation, management, and analytics. This system provides businesses and individuals with a comprehensive solution for generating and tracking QR codes.\n\nKey features include:\n• Dynamic QR code generation with customization options\n• Real-time analytics and tracking\n• User-friendly dashboard for managing multiple QR codes\n• Scan statistics and insights\n• Responsive design for mobile and desktop use\n• Export and download functionality\n\nBuilt with modern web technologies including React and Vite for a fast, responsive user experience, and styled with Tailwind CSS for a clean, professional interface. The system is designed to be intuitive and easy to use while providing powerful features for QR code management.",
      image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800&h=600&fit=crop",
      link: "https://dist-lime-ten.vercel.app/",
      tags: ["React", "Vite", "Tailwind CSS", "QR Management"],
      category: "personal",
      challenges: "Implementing real-time tracking and analytics while maintaining system performance and creating an intuitive user interface for complex functionality.",
      outcome: "Created a fully functional QR code management system that simplifies the process of creating and tracking QR codes with detailed analytics.",
    },
  ];

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Client Work", value: "client" },
    { label: "Personal", value: "personal" },
    { label: "Open Source", value: "opensource" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section id="portfolio" title="My Projects">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <motion.button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === filter.value
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span 
                    key={idx}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Click to view details hint */}
              <div className="flex items-center text-primary font-medium text-sm">
                <span>Click to view details</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </motion.div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Image */}
              <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                {/* Full Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">About This Project</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Challenges */}
                {selectedProject.challenges && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Challenges</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                {/* Outcome */}
                {selectedProject.outcome && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Outcome</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.outcome}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Live Site
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 inline-flex items-center justify-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </Section>
  );
};

export default Portfolio;
