import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useState, type FormEvent, type ReactElement } from "react";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

type InterestFeature = {
  readonly pill: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
};

type InterestAccent = {
  readonly title: string;
  readonly description: string;
  readonly bullets: readonly string[];
};

type InterestStory = {
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
};

const interestsHeading: string = "Interests, distilled";
const interestsSubheading: string = "A bento of the stuff that keeps the weekends interesting and the drives scenic.";
const philosophyHeading: string = "Analog philosophy";
const philosophySubheading: string = "A good drive taught me how good work feels: tactile, paced, and intentional.";
const contactFormId: string = "xandjynp";
const emailAddress: string = "muhdalizulfaqar@gmail.com";
const linkedInHref: string = "https://linkedin.com/in/muhdalizulfaqar";
const githubHref: string = "https://github.com/rekaali";

const featureTile: InterestFeature = {
  pill: "FEATURE",
  title: "Cars, Coffee & Trance",
  description:
    "I chase perfect engine notes, perfectly dialed espresso shots, and 138bpm trance sets. The same appreciation for mechanics and rhythm shows up in how I space content, pace motion, and design affordances.",
  tags: ["Car meets", "Local roasters", "Uplifting trance", "Weekend drives"],
};

const accentTile: InterestAccent = {
  title: "Weekend lab",
  description: "Small trips that feel like an adventure.",
  bullets: ["Morning coffee runs", "Curating trance playlists", "Appreciating automotive design", "Exploring new routes"],
};

const storyTile: InterestStory = {
  title: "From garage to cafe",
  description:
    "Appreciating the mechanics of a well-built car is a lot like appreciating a well-built interface. When you respect the engineering, you get clarity: fewer knobs, better defaults, and moments that land.",
  highlights: ["Engineering creates taste", "Flow beats features", "Texture over noise", "Readability is the groove"],
};

type PersonaMusicSet = NonNullable<typeof personaConfig.hobby.music>["sets"][number];

const MusicSetRow = ({ set, index }: { readonly set: PersonaMusicSet; readonly index: number }): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const href = `https://www.youtube.com/watch?v=${set.youtubeId}${set.startAt ? `&t=${set.startAt}s` : ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col py-6 border-b border-border-subtle transition-colors px-4 -mx-4 rounded-xl sm:rounded-none sm:px-0 sm:mx-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 flex-grow">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-muted w-48 shrink-0 transition-colors">
            {set.event}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground transition-transform duration-300">
            {set.title}
          </h3>
        </div>
        <div className="shrink-0 flex items-center gap-4 sm:gap-6">
          {set.tracklist && set.tracklist.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-mono font-semibold uppercase tracking-widest text-muted hover:text-primary transition-colors flex items-center gap-2"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Hide Tracks" : "Tracklist"}</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 text-muted hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-widest hidden sm:inline-block">Listen</span>
            <svg className="w-5 h-5 transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && set.tracklist && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2">
              <div className="bg-surface-container-low rounded-xl border border-border-subtle p-4 sm:p-6 overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap sm:whitespace-normal min-w-[500px]">
                  <thead>
                    <tr className="text-muted border-b border-border-subtle">
                      <th className="pb-3 font-medium w-12 font-mono text-[10px] uppercase tracking-widest">#</th>
                      <th className="pb-3 font-medium w-20 sm:w-24 font-mono text-[10px] uppercase tracking-widest">Time</th>
                      <th className="pb-3 font-medium font-mono text-[10px] uppercase tracking-widest">Track</th>
                      <th className="pb-3 font-medium hidden sm:table-cell font-mono text-[10px] uppercase tracking-widest text-right">Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    {set.tracklist.map((track) => (
                      <tr key={track.number} className="border-b border-border-subtle/50 last:border-0 hover:bg-surface transition-colors group/track">
                        <td className="py-3 text-muted font-mono text-xs">{track.number}</td>
                        <td className="py-3 text-primary font-mono text-xs">{track.timestamp}</td>
                        <td className="py-3 pr-4 sm:pr-0 text-foreground font-medium group-hover/track:text-primary transition-colors">{track.title}</td>
                        <td className="py-3 text-muted hidden sm:table-cell text-right text-xs truncate max-w-[150px]">{track.label}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HobbyLanding = (): ReactElement => {
  const { persona } = usePersona();
  const heroCopy = personaConfig[persona].hero;
  const contactCopy = personaConfig[persona].contact;
  const musicCopy = personaConfig[persona].music;
  const [state, handleSubmit] = useForm(contactFormId);
  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    const result: unknown = await handleSubmit(event);
    if (result && typeof result === "object" && "errors" in result && !(result as { readonly errors?: unknown }).errors) {
      const form: EventTarget | null = event.target;
      if (form && form instanceof HTMLFormElement) {
        window.setTimeout((): void => {
          form.reset();
        }, 100);
      }
    }
  };
  const getSubmissionErrors = (): readonly { readonly field?: string | null }[] => {
    const errors: unknown = (state as { readonly errors?: unknown }).errors;
    return Array.isArray(errors) ? (errors as readonly { readonly field?: string | null }[]) : [];
  };
  const hasFieldError = (field: string): boolean =>
    getSubmissionErrors().some((error: { readonly field?: string | null }) => error.field === field);
  const reloadPage = (): void => {
    window.location.reload();
  };
  return (
    <>
      <section
        id="home"
        className="min-h-[100dvh] pt-24 md:pt-28 pb-16 bg-background flex flex-col justify-center"
      >
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="type-display-hero mt-4 mb-5"
            >
              {heroCopy.headline} <span className="text-primary">{heroCopy.highlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="type-body-lead max-w-2xl mb-6"
            >
              {heroCopy.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={heroCopy.primaryCta.href} className="btn-primary w-full sm:w-auto justify-center">
                {heroCopy.primaryCta.label}
              </a>
              <a
                href={heroCopy.secondaryCta.href}
                className="btn-ghost w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 text-foreground font-bold tracking-wider uppercase text-sm"
              >
                {heroCopy.secondaryCta.label}
                <span aria-hidden="true" className="text-primary">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="interests" className="section-padding bg-surface-container-low border-y border-border-subtle">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <span className="type-eyebrow text-primary mb-6 block">INTERESTS</span>
            <h2 className="type-display-section mb-6">{interestsHeading}</h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">{interestsSubheading}</p>
          </div>
          
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12">
              <div className="md:col-span-4">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-primary mb-2 block">{featureTile.pill}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{featureTile.title}</h3>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-muted text-lg sm:text-xl leading-relaxed">{featureTile.description}</p>
                <div className="flex flex-wrap gap-3">
                  {featureTile.tags.map((tag: string) => (
                    <span key={tag} className="text-xs font-mono uppercase tracking-widest text-foreground border-b border-border-subtle pb-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-border-subtle"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12">
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{accentTile.title}</h3>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-muted text-lg sm:text-xl leading-relaxed">{accentTile.description}</p>
                <ul className="flex flex-col gap-3">
                  {accentTile.bullets.map((bullet: string) => (
                    <li key={bullet} className="flex items-center gap-3 text-muted">
                      <span className="text-primary">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full h-px bg-border-subtle"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12">
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{storyTile.title}</h3>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-muted text-lg sm:text-xl leading-relaxed">{storyTile.description}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {storyTile.highlights.map((highlight: string) => (
                    <span key={highlight} className="text-sm font-medium text-foreground">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {musicCopy && (
        <section id="music" className="section-padding bg-background">
          <div className="container-custom">
            <div className="mb-14 md:mb-20 max-w-3xl">
              <span className="type-eyebrow text-primary mb-6 block">SOUNDTRACK</span>
              <h2 className="type-display-section mb-6">{musicCopy.title}</h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">{musicCopy.description}</p>
            </div>
            <div className="flex flex-col border-t border-border-subtle">
              {musicCopy.sets.map((set, index) => (
                <MusicSetRow key={set.youtubeId} set={set} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section id="philosophy" className="section-padding bg-surface-container-low">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="type-eyebrow text-primary mb-6 block">{philosophyHeading}</span>
              <h2 className="type-display-section mb-6">{philosophySubheading}</h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
                The goal is simple: make interfaces you can almost touch. Solid foundations, crisp type, and motion that feels like a well-tuned machine.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center">
                  Talk cars or UI
                </a>
                <a href="#home" className="btn-ghost w-full sm:w-auto justify-center sm:justify-start">
                  Back to top
                  <span aria-hidden="true" className="text-primary">
                    ↑
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="bg-surface rounded-xl border border-border-subtle shadow-ring p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Principle 01</p>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3">Respect the engineering</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    A good car has mechanical friction and limits. Good UI should too: predictable patterns, fewer surprises, and solid fundamentals.
                  </p>
                </div>
                <div className="bg-surface rounded-xl border border-border-subtle shadow-ring p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Principle 02</p>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3">Pace the journey</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Straightaways, curves, and pit stops. In layout: hierarchy, whitespace, and emphasis that guide attention naturally.
                  </p>
                </div>
                <div className="bg-surface rounded-xl border border-border-subtle shadow-ring p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Principle 03</p>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3">Details matter</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    A perfectly dialed espresso shot beats a complex drink. Simple surfaces, calm borders, and interactions that just work.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-xl border border-border-subtle shadow-ring p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Principle 04</p>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3">Make it feel human</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    A great drive is engaging and forgiving. So is a great interface: clear states, sane spacing, and compassionate error handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="type-display-section mb-4">{contactCopy.title}</h2>
              <p className="text-muted text-base sm:text-lg">{contactCopy.description}</p>
            </div>
            {state.succeeded ? (
              <div className="p-8 rounded-xl bg-surface border border-border-subtle shadow-ring text-center">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{contactCopy.successTitle}</h3>
                <p className="text-muted text-lg mb-6">{contactCopy.successDescription}</p>
                <button type="button" onClick={reloadPage} className="btn-secondary justify-center">
                  {contactCopy.successButtonLabel}
                </button>
              </div>
            ) : (
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
                  <input type="text" id="name" name="name" required className={`fr-input ${hasFieldError("name") ? "fr-input-error" : ""}`} />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="fr-error-text" />
                </div>
                <div>
                  <label htmlFor="email" className="fr-label">
                    Email
                  </label>
                  <input type="email" id="email" name="email" required className={`fr-input ${hasFieldError("email") ? "fr-input-error" : ""}`} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="fr-error-text" />
                </div>
                <div>
                  <label htmlFor="message" className="fr-label">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={5} className={`fr-input ${hasFieldError("message") ? "fr-input-error" : ""}`} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="fr-error-text" />
                </div>
                <ValidationError errors={state.errors} className="fr-alert-error" />
                {state.submitting ? (
                  <div className="fr-alert-info text-center">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="font-medium">Sending your message...</span>
                    </div>
                    <p className="text-sm">Please wait while we process your request.</p>
                  </div>
                ) : null}
                <button type="submit" disabled={state.submitting} className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            )}
            <div className="mt-12 text-center">
              <p className="mb-2 font-medium text-foreground">{contactCopy.directLabel}</p>
              <p className="text-muted">
                Email:{" "}
                <a href={`mailto:${emailAddress}`} className="text-primary font-medium">
                  {emailAddress}
                </a>
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-90 font-medium transition-opacity">
                  LinkedIn
                </a>
                <a href={githubHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-90 font-medium transition-opacity">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HobbyLanding;
