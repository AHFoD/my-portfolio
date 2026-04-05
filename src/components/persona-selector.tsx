import { useId, useRef, type KeyboardEvent, type ReactElement } from "react";
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
  const rootClassName: string = joinClassNames(["inline-flex items-center gap-6", className]);
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
    <div className={rootClassName}>
      <div role="tablist" aria-label={ariaLabel} onKeyDown={handleKeyDown} className="flex items-center gap-6">
        {PERSONAS.map((key: Persona) => {
          const selected: boolean = persona === key;
          const tabId: string = `${baseId}-tab-${key}`;
          const panelId: string = `${baseId}-panel-${key}`;
          const buttonClassName: string = joinClassNames([
            "text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            selected ? "text-primary border-b-2 border-primary pb-1" : "text-muted hover:text-foreground pb-1 border-b-2 border-transparent"
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
              {personaConfig[key].label}
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
    </div>
  );
}
