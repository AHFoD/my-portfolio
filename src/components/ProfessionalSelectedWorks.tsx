import { motion } from "framer-motion";
import type { ReactElement } from "react";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

type WorkMetric = {
  readonly value: string;
  readonly label: string;
};

type WorkProject = {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly link: string;
  readonly tags: readonly string[];
  readonly sector?: string;
  readonly year?: string;
  readonly metrics?: readonly WorkMetric[];
};

const MAX_SELECTED_WORKS: number = 4;

const isExternalHref = (href: string): boolean => /^https?:\/\//i.test(href);

const getWorkEyebrow = (project: WorkProject): string => {
  const sector: string = project.sector ?? "PROJECT";
  const year: string = project.year ?? "—";
  return `${sector} • ${year}`;
};

const ProfessionalSelectedWorks = (): ReactElement => {
  const { persona } = usePersona();
  const projects = personaConfig[persona].portfolio.projects as readonly WorkProject[];
  const selectedWorks = projects.slice(0, MAX_SELECTED_WORKS);
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <h2 className="type-display-section">Selected Works</h2>
          <div className="hidden sm:block flex-1 h-px bg-border-subtle" />
        </div>
        <div className="space-y-20 md:space-y-28">
          {selectedWorks.map((project: WorkProject, index: number) => {
            const hasExternalLink: boolean = isExternalHref(project.link);
            const metrics: readonly WorkMetric[] = project.metrics ?? [];
            const isReversed: boolean = index % 2 === 1;
            return (
              <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`lg:col-span-7 bg-surface rounded-xl p-3 sm:p-4 shadow-ring border border-border-subtle ${
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
                  <a
                    href={project.link}
                    target={hasExternalLink ? "_blank" : undefined}
                    rel={hasExternalLink ? "noopener noreferrer" : undefined}
                    className={`mt-9 inline-flex items-center gap-2 font-semibold transition-all hover:gap-4 ${
                      isReversed ? "text-secondary" : "text-primary"
                    }`}
                  >
                    Explore Case Study <span aria-hidden="true">↗</span>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSelectedWorks;
