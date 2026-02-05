"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

interface JoinModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const JoinModalContext = createContext<JoinModalContextType | undefined>(
  undefined,
);

export function JoinModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen, openModal, closeModal],
  );

  return (
    <JoinModalContext.Provider value={value}>
      {children}
    </JoinModalContext.Provider>
  );
}

export function useJoinModal() {
  const context = useContext(JoinModalContext);
  if (!context) {
    throw new Error("useJoinModal must be used within JoinModalProvider");
  }
  return context;
}
