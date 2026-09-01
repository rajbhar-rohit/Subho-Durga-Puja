'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

interface FlowerShowerContextValue {
  trigger: number;
  triggerShower: () => void;
}

const FlowerShowerContext = createContext<FlowerShowerContextValue | undefined>(undefined);

export function FlowerShowerProvider({ children }: { children: ReactNode }) {
  const [trigger, setTrigger] = useState(0);
  const triggerShower = useCallback(() => setTrigger((n) => n + 1), []);

  return (
    <FlowerShowerContext.Provider value={{ trigger, triggerShower }}>
      {children}
    </FlowerShowerContext.Provider>
  );
}

export function useFlowerShower() {
  const ctx = useContext(FlowerShowerContext);
  if (!ctx) {
    throw new Error('useFlowerShower must be used within a FlowerShowerProvider');
  }
  return ctx;
}
