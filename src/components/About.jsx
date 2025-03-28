// src/components/About.jsx
import { motion } from "framer-motion";
import Section from "./ui/Section";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", 
    "Tailwind CSS", "Framer Motion", "Vite", "Supabase"
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-full h-64 md:h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-lg"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Full Stack Developer</h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I'm a passionate full stack developer with 5 years of experience building modern web applications.
            I specialize in creating responsive, user-friendly interfaces with React and building robust
            backend systems. My goal is to deliver high-quality solutions that meet client needs and exceed expectations.
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Skills</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm
                           hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Experience</h4>
            <ul className="space-y-2 text-gray-600 text-left">
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>5+ years of professional web development experience</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Worked with startups and established companies</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Delivered 20+ successful projects from concept to deployment</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
