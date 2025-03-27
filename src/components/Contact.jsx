// src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import Section from "./ui/Section";
import Button from "./ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("contacts")
        .insert([formData]);
        
      if (error) throw error;
      
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error sending your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Let's Work Together">
      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-10">
          Have a project in mind? Let's discuss how I can help you bring your ideas to life.
        </p>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            ></textarea>
          </div>
          
          {status.message && (
            <div className={`p-4 rounded-lg ${status.type === "success" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}>
              {status.message}
            </div>
          )}
          
          <Button type="submit" primary fullWidth disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
        
        <div className="mt-12 text-center">
          <p className="mb-2 font-medium">Or reach out directly:</p>
          <p>Email: your.email@example.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
