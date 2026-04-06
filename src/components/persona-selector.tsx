import { useId, useRef, type KeyboardEvent, type ReactElement } from "react";
import { motion } from "framer-motion";
import personaConfig from "../persona/persona-config";
import type { Persona } from "../persona/persona";
import { isPersona, usePersona } from "../persona/persona-state";

type PersonaSelectorProps = {
  readonly ariaLabel?: string;
  readonly className?: string;
};

const PERSONAS = ["professional", "hobby"] as const satisfies readonly Persona[];
const PERSONA_COUNT: number = PERSONAS.length;

const getPersonaIndex = (persona: Persona): number => PERSONAS.indexOf(persona);

const wrapIndex = (index: number): number => {
  const wrappedIndex: number = ((index % PERSONA_COUNT) + PERSONA_COUNT) % PERSONA_COUNT;
  return wrappedIndex;
};

const getAdjacentPersona = (persona: Persona, step: number): Persona => {
  const currentIndex: number = getPersonaIndex(persona);
  const nextIndex: number = wrapIndex(currentIndex + step);
  return PERSONAS[nextIndex];
};

const getKeyStep = (key: string): number | null => {
  if (key === "ArrowLeft") {
    return -1;
  }
  if (key === "ArrowRight") {
    return 1;
  }
  return null;
};

const isActivationKey = (key: string): boolean => key === "Enter" || key === " ";

const resolveFocusedPersona = (eventTarget: EventTarget | null, fallbackPersona: Persona): Persona => {
  if (!(eventTarget instanceof HTMLButtonElement)) {
    return fallbackPersona;
  }
  const value: string = eventTarget.value;
  return isPersona(value) ? value : fallbackPersona;
};

const joinClassNames = (values: readonly string[]): string => values.filter((value: string) => value.length > 0).join(" ");

export default function PersonaSelector({ ariaLabel = "Persona selector", className = "" }: PersonaSelectorProps): ReactElement {
  const { persona, setPersona } = usePersona();
  const baseId: string = useId();
  const buttonRefByPersona = useRef<Record<Persona, HTMLButtonElement | null>>({ professional: null, hobby: null });
  const rootClassName: string = joinClassNames([
    "pointer-events-auto",
    "bg-background/80 backdrop-blur-md border border-border p-1.5 rounded-full shadow-2xl",
    className
  ]);
  const setPersonaAndFocus = (nextPersona: Persona): void => {
    setPersona(nextPersona);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const nextButton: HTMLButtonElement | null = buttonRefByPersona.current[nextPersona];
    if (nextButton !== null) {
      nextButton.focus();
    }
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    const step: number | null = getKeyStep(event.key);
    const focusedPersona: Persona = resolveFocusedPersona(event.target, persona);
    if (step !== null) {
      event.preventDefault();
      setPersonaAndFocus(getAdjacentPersona(focusedPersona, step));
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPersonaAndFocus(PERSONAS[0]);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      setPersonaAndFocus(PERSONAS[PERSONA_COUNT - 1]);
      return;
    }
    if (isActivationKey(event.key)) {
      event.preventDefault();
      setPersona(focusedPersona);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={rootClassName}
      >
        <div role="tablist" aria-label={ariaLabel} onKeyDown={handleKeyDown} className="flex items-center gap-2">
        {PERSONAS.map((key: Persona) => {
          const selected: boolean = persona === key;
          const tabId: string = `${baseId}-tab-${key}`;
          const panelId: string = `${baseId}-panel-${key}`;
          const buttonClassName: string = joinClassNames([
            "relative px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            selected ? "text-background" : "text-muted hover:text-foreground"
          ]);
          return (
            <button
              key={key}
              ref={(node: HTMLButtonElement | null) => { buttonRefByPersona.current[key] = node; }}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              value={key}
              onClick={() => {
                setPersona(key);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={buttonClassName}
            >
              {selected && (
                <motion.div
                  layoutId={`${baseId}-active-persona`}
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{personaConfig[key].label}</span>
            </button>
          );
        })}
      </div>
      <div className="sr-only">
        {PERSONAS.map((key: Persona) => {
          const selected: boolean = persona === key;
          const tabId: string = `${baseId}-tab-${key}`;
          const panelId: string = `${baseId}-panel-${key}`;
          return (
            <div key={key} role="tabpanel" id={panelId} aria-labelledby={tabId} hidden={!selected}>
              {personaConfig[key].label} persona selected
            </div>
          );
        })}
      </div>
    </motion.div>
  </div>
  );
}
