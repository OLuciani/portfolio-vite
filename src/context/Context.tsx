import React, { createContext, useState, ReactNode } from "react";

interface ContextProps {
  showLanguage: string;
  setShowLanguage: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps>({
  showLanguage: "spanish",
  setShowLanguage: () => {},
  theme: "dark",
  setTheme: () => {},
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [showLanguage, setShowLanguage] = useState<string>("spanish");
  const [theme, setTheme] = useState<string>("dark");
  

  return (
    <Context.Provider
      value={{
        showLanguage, setShowLanguage, theme, setTheme
        
      }}
    >
      {children}
    </Context.Provider>
  );
}