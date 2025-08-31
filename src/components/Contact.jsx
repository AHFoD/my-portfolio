// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Section from "./ui/Section";
import Button from "./ui/Button";

const Contact = () => {
  const [state, handleSubmit] = useForm("xandjynp");

  // Debug logging for form state
  console.log('Form state:', state);
  
  const onSubmit = async (e) => {
    console.log('Form submission started');
    const result = await handleSubmit(e);
    console.log('Form submission result:', result);
    
    // Clear form fields on successful submission
    if (result && !result.errors) {
      const form = e.target;
      setTimeout(() => {
        form.reset();
      }, 100);
    }
    
    return result;
  };

  if (state.succeeded) {
    return (
      <Section id="contact" title="Let's Work Together">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-lg bg-green-50 border-2 border-green-200 mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Message Sent Successfully!</h3>
            <p className="text-green-700 text-lg mb-4">Thank you for reaching out. I'll get back to you within 24 hours.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
          <div className="mt-12">
            <p className="mb-2 font-medium text-gray-800">Or reach out directly:</p>
            <p className="text-gray-700">Email: muhdalizulfaqar@gmail.com</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-medium">
                LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-medium">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" title="Let's Work Together">
      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-10">
          Have a project in mind? Let's discuss how I can help you bring your ideas to life.
        </p>
        
        <motion.form 
          action="https://formspree.io/f/xandjynp"
          method="POST"
          onSubmit={onSubmit}
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
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <ValidationError 
              prefix="Name" 
              field="name" 
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
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
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>
          
          <ValidationError 
            errors={state.errors}
            className="p-4 rounded-lg bg-red-900 text-red-300"
          />
          
          {/* Success feedback during submission */}
          {state.submitting && (
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-blue-800 font-medium">Sending your message...</span>
              </div>
              <p className="text-blue-600 text-sm">Please wait while we process your request.</p>
            </div>
          )}
          
          {/* Debug info */}
          {process.env.NODE_ENV === 'development' && (
            <div className="p-2 bg-gray-100 text-gray-700 text-xs rounded border">
              <p>Debug: Form submitting: {state.submitting ? 'Yes' : 'No'}</p>
              <p>Debug: Form succeeded: {state.succeeded ? 'Yes' : 'No'}</p>
              <p>Debug: Errors: {state.errors?.length || 0}</p>
            </div>
          )}
          
          <Button type="submit" primary fullWidth disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
        
        <div className="mt-12 text-center">
          <p className="mb-2 font-medium text-gray-800">Or reach out directly:</p>
          <p className="text-gray-700">Email: muhdalizulfaqar@gmail.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-medium transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-medium transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
