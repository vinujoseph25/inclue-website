// TODO: Create a context for the currentLanguage and provide a way to change it
import React, { createContext, useState, useContext, ReactNode } from "react";

interface LanguageContextProps {
  currentLanguage: string;
  changeLanguage: (currentLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, changeLanguage] = useState<string>("en");

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
