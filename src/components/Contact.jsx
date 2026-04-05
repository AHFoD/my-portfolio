import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Section from "./ui/Section";
import Button from "./ui/Button";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

const Contact = () => {
  const [state, handleSubmit] = useForm("xandjynp");
  const { persona } = usePersona();
  const contactCopy = personaConfig[persona].contact;

  const onSubmit = async (e) => {
    const result = await handleSubmit(e);
    if (result && !result.errors) {
      const form = e.target;
      setTimeout(() => {
        form.reset();
      }, 100);
    }
    return result;
  };

  const hasFieldError = (field) => state.errors?.some((error) => error.field === field) ?? false;

  if (state.succeeded) {
    return (
      <Section id="contact" title={contactCopy.title}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-lg bg-surface border border-border shadow-ring mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{contactCopy.successTitle}</h3>
            <p className="text-muted text-lg mb-4">{contactCopy.successDescription}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="blue"
              size="sm"
            >
              {contactCopy.successButtonLabel}
            </Button>
          </div>
          <div className="mt-12">
            <p className="mb-2 font-medium text-foreground">{contactCopy.directLabel}</p>
            <p className="text-muted">Email: muhdalizulfaqar@gmail.com</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://linkedin.com/in/muhdalizulfaqar" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-90 font-medium transition-opacity">
                LinkedIn
              </a>
              <a href="https://github.com/rekaali" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-90 font-medium transition-opacity">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" title={contactCopy.title}>
      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-10">
          {contactCopy.description}
        </p>
        
        <motion.form 
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="fr-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`fr-input ${hasFieldError("name") ? "fr-input-error" : ""}`}
            />
            <ValidationError 
              prefix="Name" 
              field="name" 
              errors={state.errors}
              className="fr-error-text"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="fr-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`fr-input ${hasFieldError("email") ? "fr-input-error" : ""}`}
            />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors}
              className="fr-error-text"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="fr-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className={`fr-input ${hasFieldError("message") ? "fr-input-error" : ""}`}
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors}
              className="fr-error-text"
            />
          </div>
          
          <ValidationError 
            errors={state.errors}
            className="fr-alert-error"
          />
          
          {state.submitting && (
            <div className="fr-alert-info text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="font-medium">Sending your message...</span>
              </div>
              <p className="text-sm">Please wait while we process your request.</p>
            </div>
          )}
          <Button type="submit" primary fullWidth disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
        
        <div className="mt-12 text-center">
          <p className="mb-2 font-medium text-foreground">{contactCopy.directLabel}</p>
          <p className="text-muted">Email: muhdalizulfaqar@gmail.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://linkedin.com/in/muhdalizulfaqar" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-90 font-medium transition-opacity">
              LinkedIn
            </a>
            <a href="https://github.com/rekaali" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-90 font-medium transition-opacity">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
