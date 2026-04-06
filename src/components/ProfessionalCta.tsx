import { motion } from "framer-motion";
import type { ReactElement } from "react";

type ProfessionalCtaCopy = {
  readonly headline: ReactElement | string;
  readonly description: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta: { readonly label: string; readonly href: string };
};

const professionalCtaCopy: ProfessionalCtaCopy = {
  headline: <>Let's build something — <span className="text-primary">together</span></>,
  description: "Currently available for freelance projects and full-stack development work.",
  primaryCta: { label: "Start a Project", href: "#contact" },
  secondaryCta: { label: "View Process", href: "#process" },
};

const ProfessionalCta = (): ReactElement => {
  return (
    <section className="min-h-[100dvh] pt-24 md:pt-28 pb-16 overflow-hidden bg-background flex flex-col justify-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 sm:p-12 text-center shadow-floating relative overflow-hidden bg-surface border border-border"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <h2 className="type-display-hero text-foreground mb-5 relative z-10">{professionalCtaCopy.headline}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto relative z-10">
            {professionalCtaCopy.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-10">
            <a
              href={professionalCtaCopy.primaryCta.href}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              {professionalCtaCopy.primaryCta.label}
            </a>
            <a
              href={professionalCtaCopy.secondaryCta.href}
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              {professionalCtaCopy.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalCta;
