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
    title: "Frontend",
    description: "Responsive, editorial layouts crafted with React, TypeScript, and Tailwind.",
    tags: ["React", "Vite", "Bun", "TypeScript", "Tailwind", "shadcn"],
    accent: "primary",
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
    title: "Backend",
    description: "Robust APIs and data-driven systems built for performance and scale.",
    tags: ["Node.js", "Supabase", "PostgreSQL"],
    accent: "secondary",
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
    title: "Cloud & Infra",
    description: "Scalable cloud architecture focusing on predictable deployments and global availability.",
    tags: ["DigitalOcean", "AWS", "DO Apps"],
    accent: "primary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
        <path
          d="M17.5 19H5C2.79 19 1 17.21 1 15C1 12.98 2.49 11.31 4.44 11.05C5.19 7.6 8.27 5 11.5 5C15.17 5 18.23 7.82 18.47 11.43C20.52 11.66 22 13.43 22 15.5C22 17.43 20.43 19 18.5 19H17.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    description: "Leveraging advanced AI models and workflow automation to accelerate engineering.",
    tags: ["n8n", "Claude", "Gemini", "Claude Code", "Kimi", "Warp.dev"],
    accent: "secondary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
        <path
          d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"
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
    <section id="toolkit" className="min-h-[100dvh] pt-24 md:pt-28 pb-16 overflow-hidden bg-surface-container-low flex flex-col justify-center">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12 md:mb-16">
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
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 pb-6 w-full">
          {toolkitItems.map((item: ToolkitItem, index: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[22vw] snap-start shrink-0 bg-surface p-8 sm:p-10 rounded-xl shadow-ring relative overflow-hidden border border-border-subtle"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                  item.accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary-container/35 text-secondary"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">{item.description}</p>
              <div className="flex flex-wrap gap-3">
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
