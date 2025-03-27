// src/components/Process.jsx
import { motion } from "framer-motion";
import Section from "./ui/Section";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "I start by understanding your requirements, goals, and vision for the project."
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed plan including architecture, technologies, and project timeline."
    },
    {
      number: "03",
      title: "Design",
      description: "Designing user interfaces and experiences that are both beautiful and functional."
    },
    {
      number: "04",
      title: "Development",
      description: "Building the application with clean, maintainable code following best practices."
    },
    {
      number: "05",
      title: "Testing",
      description: "Thoroughly testing the application to ensure it works flawlessly across all devices."
    },
    {
      number: "06",
      title: "Deployment",
      description: "Deploying the application to production and ensuring everything runs smoothly."
    }
  ];

  return (
    <Section id="process" title="My Process" className="bg-gray-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm relative overflow-hidden 
                       border border-gray-100 hover:border-primary/20 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute -top-4 -left-4 bg-primary/10 text-primary w-20 h-20 
                          flex items-center justify-center text-2xl font-bold rounded-br-[2.5rem]
                          group-hover:bg-primary/20 transition-colors">
              {step.number}
            </div>
            <div className="ml-12 pt-2">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
