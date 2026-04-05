import { motion } from "framer-motion";
import type { ReactElement } from "react";

type ToolkitItem = {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly accent: "primary" | "secondary";
  readonly icon: ReactElement;
};

const stackLabelText: string = "STACK.04";

const toolkitItems: readonly ToolkitItem[] = [
  {
    title: "Backend",
    description: "Robust APIs and data-driven systems built for performance and scale.",
    tags: ["Node.js", "PostgreSQL", "Supabase"],
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
        <path
          d="M4 7.5h16M4 12h16M4 16.5h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Frontend",
    description: "Responsive, editorial layouts crafted with React, motion, and Tailwind.",
    tags: ["React", "Vite", "Tailwind"],
    accent: "secondary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
        <path
          d="M4 6.5h16M8 11.5h12M4 16.5h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Architecture",
    description: "System design with clear boundaries, predictable deployments, and observability.",
    tags: ["CI/CD", "Docker", "Vercel"],
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
        <path
          d="M12 3l8 5v8l-8 5-8-5V8l8-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    description: "Human-first UI with sharp hierarchy, soft depth, and strong readability.",
    tags: ["Figma", "Design Systems", "Accessibility"],
    accent: "secondary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
        <path
          d="M7 17l10-10M7 7h10v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const ProfessionalToolkit = (): ReactElement => {
  return (
    <section id="toolkit" className="section-padding bg-surface-container-low">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14 md:mb-20">
          <div>
            <h2 className="type-display-section mb-4">Digital Toolkit</h2>
            <p className="text-muted text-base sm:text-lg">My architectural foundation for scalable engineering.</p>
          </div>
          <div className="md:text-right">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground/5 font-headline tracking-[-0.06em]">
              {stackLabelText}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {toolkitItems.map((item: ToolkitItem, index: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-surface rounded-xl border border-border-subtle shadow-ring hover:shadow-floating transition-[box-shadow,transform] p-8"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 ${
                  item.accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary-container/35 text-secondary"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-surface-2 text-foreground/80 border border-border-subtle text-[10px] px-3 py-1 rounded-pill font-semibold uppercase tracking-[0.12em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalToolkit;
