// ModeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export const useModeContext = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useModeContext must be used within a ModeProvider");
  }
  return context;
};

export const ModeProvider = ({ children }) => {
  // Sprawdź, czy w localStorage istnieje zapisany tryb
  const storedMode = localStorage.getItem("mode");
  const initialMode = storedMode || "light";
  const [mode, setMode] = useState(initialMode);

  // Efekt, który zapisuje aktualny tryb do localStorage
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
