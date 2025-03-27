// src/components/Hero.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Add more floating elements with varied patterns
  const floatingElements = [
    { x: '10%', y: '20%', size: 'w-3 h-3', delay: 0 },
    { x: '90%', y: '60%', size: 'w-2 h-2', delay: 0.2 },
    { x: '50%', y: '80%', size: 'w-4 h-4', delay: 0.4 },
    { x: '80%', y: '30%', size: 'w-3 h-3', delay: 0.6 },
    { x: '20%', y: '70%', size: 'w-2 h-2', delay: 0.8 },
    // Add more floating elements
    { x: '15%', y: '40%', size: 'w-5 h-5', delay: 1 },
    { x: '75%', y: '25%', size: 'w-4 h-4', delay: 1.2 },
    { x: '85%', y: '85%', size: 'w-3 h-3', delay: 1.4 },
    { x: '40%', y: '15%', size: 'w-6 h-6', delay: 1.6 }
  ];

  // Update the techStack array
  const techStack = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#61DAFB]">
          <path fill="currentColor" d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/>
        </svg>
      ),
      delay: 0
    },
    {
      name: 'Vite',
      icon: (
        <svg viewBox="0 0 32 32" className="h-12 w-12 text-[#646CFF]">
          <path fill="currentColor" d="M29.884 6.146l-13.142 23.5a.714.714 0 01-1.244.005L2.096 6.148a.714.714 0 01.746-1.057l13.156 2.352a.714.714 0 00.253 0l13.135-2.35a.714.714 0 01.746 1.057z"/>
        </svg>
      ),
      delay: 0.2
    },
    {
      name: 'Supabase',
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#3ECF8E]">
          <path fill="currentColor" d="M21.362 9.354H12V.396a.396.396 0 0 0-.396-.396H3.396A.396.396 0 0 0 3 .396v8.958H.396A.396.396 0 0 0 0 9.75v11.854a.396.396 0 0 0 .396.396h19.208a.396.396 0 0 0 .396-.396V9.75a.396.396 0 0 0-.396-.396zM12 15.333H3v-3.583h9v3.583z"/>
        </svg>
      ),
      delay: 0.4
    },
    {
      name: 'Tailwind',
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#38B2AC]">
          <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
      delay: 0.6
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#3178C6]">
          <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      delay: 0.8
    }
  ];
  
  return (
    <section ref={containerRef} className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Add decorative circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-primary/10 rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-32 h-32 border border-primary/10 rounded-full" />
      </div>

      {/* Add animated lines */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
      </div>

      {/* Enhanced floating elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.size} ${
            el.type === 'square' ? 'rounded-lg border-2 border-primary/20' :
            el.type === 'triangle' ? 'clip-triangle border-2 border-primary/20' :
            'rounded-full bg-primary/10'
          }`}
          initial={{ x: el.x, y: el.y, opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            y: [el.y, `calc(${el.y} - 40px)`, el.y],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ left: el.x, top: el.y }}
        />
      ))}

      {/* Main content with parallax effect */}
      <motion.div style={{ y, opacity }} className="container-custom text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gray-900">Full Stack Developer</span>
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary inline-block"
          >
            with 5 Years of Experience
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-xl mb-12 max-w-3xl mx-auto"
        >
          Turning ideas into scalable, user-friendly web applications using React,
          Vite, and Supabase.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="#portfolio" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>

        {/* Tech stack section */}
        <motion.div 
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: tech.delay }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative">
                  {tech.icon}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-full -z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-sm text-gray-600 mt-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech badges */}
        <div className="absolute -left-4 top-1/4 transform -rotate-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="px-4 py-2 bg-primary/5 rounded-lg border border-primary/20"
          >
            <span className="text-sm text-gray-600">React Expert</span>
          </motion.div>
        </div>

        <div className="absolute -right-4 bottom-1/4 transform rotate-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="px-4 py-2 bg-primary/5 rounded-lg border border-primary/20"
          >
            <span className="text-sm text-gray-600">Full Stack Dev</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
