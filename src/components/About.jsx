import { motion } from "framer-motion";
import Section from "./ui/Section";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

const About = () => {
  const { persona } = usePersona();
  const { about, skills, avatar } = personaConfig[persona];
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-floating border border-border-subtle">
              <img 
                src={avatar.src} 
                alt={avatar.alt} 
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground tracking-[-0.02em]">{about.role}</h3>
          <p className="text-base md:text-lg text-muted mb-6">
            {about.bio}
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground">Skills</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-frosted text-foreground border border-border-subtle px-3 py-1 rounded-pill text-sm hover:bg-frosted-hover transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Experience</h4>
            <ul className="space-y-2 text-muted text-left">
              {about.experience.map((item) => (
                <li key={item} className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
