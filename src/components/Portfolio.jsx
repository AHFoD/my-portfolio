// src/components/Portfolio.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import Card from "./ui/Card";

const Portfolio = () => {
  const featuredProject = {
    title: "Abu Rusyd Coffee Shop",
    description: "A modern, responsive landing page for a local coffee shop, featuring an elegant design and seamless user experience. This project showcases a perfect blend of aesthetics and functionality, built with React and powered by Strapi CMS for easy content management.",
    link: "https://aburusyd.my",
    tags: ["React", "Vite", "Strapi CMS", "Tailwind CSS", "Responsive Design"],
    category: "client",
  };

  return (
    <Section id="portfolio" title="Featured Project">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
      >
        {/* Live Preview */}
        <motion.div 
          className="mb-12 rounded-xl overflow-hidden shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-100 p-4 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-600 text-sm">{featuredProject.link}</span>
            </div>
          </div>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={featuredProject.link}
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Abu Rusyd Coffee Shop Website"
            />
          </div>
        </motion.div>

        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredProject.title}</h3>
          <p className="text-gray-700 mb-6">{featuredProject.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featuredProject.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition-all duration-300"
          >
            View Live Project
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Project Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl font-bold">100%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl font-bold">2 Weeks</div>
            <div className="text-gray-600 text-sm">Delivery Time</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl font-bold">Mobile First</div>
            <div className="text-gray-600 text-sm">Design Approach</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl font-bold">4.9/5</div>
            <div className="text-gray-600 text-sm">Performance Score</div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Portfolio;
