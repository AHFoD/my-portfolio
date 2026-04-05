import { motion, AnimatePresence } from "framer-motion";
import { type ReactElement, useState, useEffect } from "react";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

type WorkMetric = {
  readonly value: string;
  readonly label: string;
};

type WorkProject = {
  readonly title: string;
  readonly description: string;
  readonly fullDescription?: string;
  readonly image: string;
  readonly link: string;
  readonly tags: readonly string[];
  readonly sector?: string;
  readonly year?: string;
  readonly metrics?: readonly WorkMetric[];
  readonly challenges?: string;
  readonly outcome?: string;
};

const MAX_SELECTED_WORKS: number = 4;

const getWorkEyebrow = (project: WorkProject): string => {
  const sector: string = project.sector ?? "PROJECT";
  const year: string = project.year ?? "—";
  return `${sector} • ${year}`;
};

const ProfessionalSelectedWorks = (): ReactElement => {
  const { persona } = usePersona();
  const projects = personaConfig[persona].portfolio.projects as readonly WorkProject[];
  const selectedWorks = projects.slice(0, MAX_SELECTED_WORKS);
  
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <h2 className="type-display-section">Selected Works</h2>
          <div className="hidden sm:block flex-1 h-px bg-border-subtle" />
        </div>
        <div className="space-y-20 md:space-y-28">
          {selectedWorks.map((project: WorkProject, index: number) => {
            const metrics: readonly WorkMetric[] = project.metrics ?? [];
            const isReversed: boolean = index % 2 === 1;
            return (
              <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className={`lg:col-span-7 bg-surface rounded-xl p-3 sm:p-4 shadow-ring border border-border-subtle cursor-pointer ${
                    isReversed ? "order-2 lg:order-2" : "order-1 lg:order-1"
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`lg:col-span-5 px-1 sm:px-2 ${
                    isReversed ? "order-1 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <div className={`font-bold mb-4 tracking-[0.22em] text-xs uppercase ${isReversed ? "text-secondary" : "text-primary"}`}>
                    {getWorkEyebrow(project)}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="text-muted text-base sm:text-lg leading-relaxed mb-7">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.slice(0, 5).map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-surface-2 text-muted border border-border-subtle text-xs px-3 py-1 rounded-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {metrics.length > 0 && (
                    <div className="flex gap-8 border-t border-border-subtle pt-7">
                      {metrics.slice(0, 2).map((metric: WorkMetric) => (
                        <div key={metric.label}>
                          <span className="block text-2xl font-bold text-foreground">{metric.value}</span>
                          <span className="text-[10px] text-muted uppercase tracking-[0.22em]">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`mt-9 inline-flex items-center gap-2 font-semibold transition-all hover:gap-4 ${
                      isReversed ? "text-secondary" : "text-primary"
                    }`}
                  >
                    Explore Case Study <span aria-hidden="true">↗</span>
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 overflow-y-auto w-full max-w-2xl bg-surface-2 border-l border-border-subtle shadow-2xl"
            >
              <div className="relative min-h-full pb-20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-surface/80 backdrop-blur-md border border-border-subtle rounded-full shadow-floating flex items-center justify-center hover:bg-surface hover:scale-105 hover:-rotate-90 transition-all duration-300"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="h-64 sm:h-80 md:h-96 w-full relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-2 to-transparent" />
                </div>

                <div className="px-8 sm:px-12 -mt-16 relative z-10">
                  <div className="font-bold mb-3 tracking-[0.22em] text-xs uppercase text-primary">
                    {getWorkEyebrow(selectedProject)}
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 tracking-[-0.04em]">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-surface text-muted border border-border-subtle text-xs px-3 py-1 rounded-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted leading-relaxed">
                    {selectedProject.fullDescription?.split('\n').map((paragraph: string, idx: number) => (
                      paragraph.trim() ? <p key={idx} className="mb-4">{paragraph}</p> : <br key={idx} />
                    ))}
                    
                    {selectedProject.challenges && (
                      <>
                        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Challenge</h3>
                        <p>{selectedProject.challenges}</p>
                      </>
                    )}
                    
                    {selectedProject.outcome && (
                      <>
                        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Outcome</h3>
                        <p>{selectedProject.outcome}</p>
                      </>
                    )}
                  </div>

                  {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-8 border-y border-border-subtle my-12 py-8">
                      {selectedProject.metrics.map((metric: WorkMetric) => (
                        <div key={metric.label}>
                          <span className="block text-3xl font-bold text-foreground mb-1">{metric.value}</span>
                          <span className="text-[10px] text-muted uppercase tracking-[0.22em]">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-12">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto justify-center"
                    >
                      Visit Site ↗
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalSelectedWorks;
