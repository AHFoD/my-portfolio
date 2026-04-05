import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import VinylPlayer from "./VinylPlayer";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVinylPlayer, setShowVinylPlayer] = useState(false);
  const { persona } = usePersona();
  const portfolioCopy = personaConfig[persona].portfolio;
  const projects = portfolioCopy.projects;
  const filters = portfolioCopy.filters;

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section id="portfolio" title={portfolioCopy.title}>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <motion.button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-pill font-medium transition-all border focus-visible:outline-none focus-visible:shadow-ring ${
              activeFilter === filter.value
                ? "bg-primary text-white shadow-ring border-transparent"
                : "bg-frosted text-foreground border-border-subtle backdrop-blur-xl hover:bg-frosted-hover"
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
            onClick={() => {
              if (project.isInternal) {
                setShowVinylPlayer(true);
              } else {
                setSelectedProject(project);
              }
            }}
            className={`bg-surface rounded-lg overflow-hidden shadow-ring hover:shadow-floating border border-border-subtle transition-all group cursor-pointer ${
              project.featured ? 'ring-1 ring-primary/40 ring-offset-0' : ''
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-3 right-3 bg-primary text-white px-3 py-1.5 rounded-pill text-xs font-bold shadow-ring flex items-center gap-1"
                >
                  <span className="animate-pulse">●</span>
                  NEW
                </motion.div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span 
                    key={idx}
                    className="bg-background-subtle text-muted border border-border-subtle px-3 py-1 rounded-pill text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-ghost text-xs px-2 py-1">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Click to view details hint */}
              <div className="flex items-center font-medium text-sm text-primary">
                <span>{project.isInternal ? '🎵 Click to play music' : 'Click to view details'}</span>
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
          <p className="text-muted text-lg">No projects found in this category.</p>
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
              className="bg-surface-2 border border-border-subtle rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-floating"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-frosted backdrop-blur-xl border border-border-subtle rounded-full shadow-contained flex items-center justify-center hover:bg-frosted-hover transition-colors z-10 focus-visible:outline-none focus-visible:shadow-ring"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <h3 className="text-xl font-bold text-foreground mb-3">About This Project</h3>
                  <p className="text-muted leading-relaxed whitespace-pre-line">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Challenges */}
                {selectedProject.challenges && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Challenges</h3>
                    <p className="text-muted leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                {/* Outcome */}
                {selectedProject.outcome && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Outcome</h3>
                    <p className="text-muted leading-relaxed">
                      {selectedProject.outcome}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border-subtle">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Live Site
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Vinyl Player Modal */}
      {showVinylPlayer && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowVinylPlayer(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 300,
              duration: 0.5 
            }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="relative">
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setShowVinylPlayer(false)}
                className="fixed top-6 right-6 z-[60] w-14 h-14 bg-frosted backdrop-blur-xl border border-border-subtle rounded-full shadow-floating flex items-center justify-center hover:bg-frosted-hover hover:rotate-90 transition-all duration-300 group"
                aria-label="Close vinyl player"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <VinylPlayer />
            </div>
          </motion.div>
        </>
      )}
    </Section>
  );
};

export default Portfolio;
