import { motion } from "framer-motion";
import Section from "./ui/Section";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

const Process = () => {
  const { persona } = usePersona();
  const processCopy = personaConfig[persona].process;

  return (
    <Section id="process" title={processCopy.title} className="bg-background-subtle">
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-6 w-full">
        {processCopy.steps.map((step, index) => (
          <motion.div
            key={index}
            className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[30vw] snap-start shrink-0 relative bg-surface border border-border-subtle p-6 sm:p-8 rounded-xl shadow-ring group hover:border-border transition-colors"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <div className="absolute -top-4 -left-4 bg-blue-glow text-primary w-20 h-20 flex items-center justify-center text-2xl font-bold group-hover:bg-primary/20 transition-colors" style={{ borderBottomRightRadius: 'var(--fr-radius-2xl)' }}>
              {step.number}
            </div>
            <div className="ml-12 pt-2">
              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
