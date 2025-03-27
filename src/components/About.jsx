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
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
          <p className="text-gray-300 mb-6">
            I'm a passionate full stack developer with 5 years of experience building modern web applications.
            I specialize in creating responsive, user-friendly interfaces with React and building robust
            backend systems. My goal is to deliver high-quality solutions that meet client needs and exceed expectations.
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Experience</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• 5+ years of professional web development experience</li>
              <li>• Worked with startups and established companies</li>
              <li>• Delivered 20+ successful projects from concept to deployment</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
