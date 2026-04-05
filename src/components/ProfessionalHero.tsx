import { motion } from "framer-motion";
import type { ReactElement } from "react";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";
import TypewriterText from "./ui/TypewriterText";

type ProfessionalHeroCopy = {
  readonly eyebrow: string;
  readonly headline: readonly [string, string, string];
  readonly description: string;
};

const professionalHeroCopy: ProfessionalHeroCopy = {
  eyebrow: "FULL-STACK DEVELOPER & ARCHITECT",
  headline: ["Building digital products with ", "technical precision", " and design soul."],
  description:
    "I bridge complex backend architecture and intuitive interfaces, delivering clean systems and tactile, readable UI.",
};

const ProfessionalHero = (): ReactElement => {
  const { persona } = usePersona();
  const heroCopy = personaConfig[persona].hero;
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 pb-20 overflow-hidden bg-background-subtle bg-[radial-gradient(ellipse_at_50%_0%,var(--fr-color-hero-glow)_0%,transparent_60%)]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="type-eyebrow text-primary mb-6 block"
            >
              {professionalHeroCopy.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="type-display-hero mb-7"
            >
              {professionalHeroCopy.headline[0]}
              <TypewriterText text={professionalHeroCopy.headline[1]} className="text-primary" />
              {professionalHeroCopy.headline[2]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="type-body-lead max-w-2xl mb-10"
            >
              {professionalHeroCopy.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center"
            >
              <a href={heroCopy.primaryCta.href} className="btn-primary w-full sm:w-auto justify-center">
                {heroCopy.primaryCta.label}
              </a>
              <a href={heroCopy.secondaryCta.href} className="btn-ghost w-full sm:w-auto justify-center sm:justify-start group flex items-center gap-2">
                {heroCopy.secondaryCta.label}
                <span aria-hidden="true" className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-surface rounded-xl overflow-hidden shadow-floating border border-border-subtle relative"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <span className="type-eyebrow text-muted block">Blueprint</span>
                    <p className="text-xl sm:text-2xl font-bold text-foreground tracking-[-0.04em] mt-3">
                      Systems, UI, and craft
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
                      <path
                        d="M7 7h10M7 12h10M7 17h10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-surface-2 border border-border-subtle rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Backend</p>
                    <p className="text-foreground font-semibold mt-2">APIs that stay boring in production</p>
                  </div>
                  <div className="bg-surface-2 border border-border-subtle rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Frontend</p>
                    <p className="text-foreground font-semibold mt-2">Editorial UI with motion as feedback</p>
                  </div>
                  <div className="bg-surface-2 border border-border-subtle rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Delivery</p>
                    <p className="text-foreground font-semibold mt-2">Clean PRs, stable deploys, crisp defaults</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-6 -left-6 w-44 h-44 sm:w-48 sm:h-48 bg-secondary-container/35 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;
