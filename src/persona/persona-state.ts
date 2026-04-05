import { createContext, useContext } from "react";
import type { Persona } from "./persona";

export type PersonaState = {
  readonly persona: Persona;
  readonly setPersona: (persona: Persona) => void;
};

export const PERSONA_STORAGE_KEY = "portfolio.persona";

export const defaultPersona: Persona = "professional";

export const isPersona = (value: unknown): value is Persona => value === "professional" || value === "hobby";

export const readStoredPersona = (): Persona | null => {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const storedValue: string | null = window.localStorage.getItem(PERSONA_STORAGE_KEY);
    if (storedValue === null) {
      return null;
    }
    return isPersona(storedValue) ? storedValue : null;
  } catch {
    return null;
  }
};

export const writeStoredPersona = (persona: Persona): void => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(PERSONA_STORAGE_KEY, persona);
  } catch {
    return;
  }
};

export const PersonaContext = createContext<PersonaState | null>(null);

export const usePersona = (): PersonaState => {
  const contextValue: PersonaState | null = useContext(PersonaContext);
  if (contextValue === null) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return contextValue;
};
