import { motion } from "framer-motion";
import Section from "./ui/Section";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

const Process = () => {
  const { persona } = usePersona();
  const processCopy = personaConfig[persona].process;

  return (
    <Section id="process" title={processCopy.title} className="bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {processCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-surface border border-border-subtle p-6 sm:p-8 rounded-xl shadow-ring group hover:border-border transition-colors h-full"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-glow text-primary w-16 h-16 flex items-center justify-center text-xl font-bold rounded-xl shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted leading-relaxed flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;