// src/components/About.jsx
import { motion } from "framer-motion";
import Section from "./ui/Section";
import profileImage from "../assets/my-profile-picture.jpg";

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
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={profileImage} 
                alt="Muhd Ali Zulfaqar - Full Stack Developer" 
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
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm
                           hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
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
