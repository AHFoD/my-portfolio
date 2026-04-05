import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { Persona } from "./persona";
import { PersonaContext, defaultPersona, readStoredPersona, writeStoredPersona } from "./persona-state";

type PersonaProviderProps = {
  readonly children: ReactNode;
};

export const PersonaProvider = ({ children }: PersonaProviderProps) => {
  const [persona, setPersona] = useState<Persona>(() => readStoredPersona() ?? defaultPersona);
  useEffect(() => {
    writeStoredPersona(persona);
  }, [persona]);
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const root: HTMLElement = document.documentElement;
    root.dataset.personaTheme = persona === "hobby" ? "hobby" : "professional";
    root.style.colorScheme = "light";
  }, [persona]);
  const contextValue = useMemo(() => ({ persona, setPersona }), [persona]);
  return <PersonaContext.Provider value={contextValue}>{children}</PersonaContext.Provider>;
};
