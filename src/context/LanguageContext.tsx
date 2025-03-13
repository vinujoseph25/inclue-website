import React, { createContext, useState, useEffect, useMemo } from "react";
import intl from "react-intl-universal";

// Define supported locales
const SUPPORTED_LOCALES = [
  {
    name: "English",
    value: "en-US",
  },
  {
    name: "Deutsch",
    value: "de-DE",
  },
];

// Define context type
type LanguageContextType = {
  currentLocale: string;
  locales: typeof SUPPORTED_LOCALES;
  changeLocale: (locale: string) => void;
  isLoading: boolean;
};

// Create context
export const LanguageContext = createContext<LanguageContextType>({
  currentLocale: "en-US",
  locales: SUPPORTED_LOCALES,
  changeLocale: () => {},
  isLoading: true,
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Get saved locale from localStorage or use browser default
  const getInitialLocale = (): string => {
    const savedLocale = localStorage.getItem("locale");
    if (
      savedLocale &&
      SUPPORTED_LOCALES.some((locale) => locale.value === savedLocale)
    ) {
      return savedLocale;
    }

    // Check for browser language
    const browserLang = navigator.language;
    const closestLocale = SUPPORTED_LOCALES.find((locale) =>
      browserLang.startsWith(locale.value.split("-")[0]),
    );

    return closestLocale ? closestLocale.value : "en-US";
  };

  const [currentLocale, setCurrentLocale] = useState<string>(getInitialLocale);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize internationalization
  useEffect(() => {
    const loadLocales = async () => {
      setIsLoading(true);

      try {
        const localeData = {
          "en-US": await import("../locales/en-US.json"),
          "de-DE": await import("../locales/de-DE.json"),
        };

        await intl.init({
          currentLocale,
          locales: localeData,
        });

        console.log("Locale initialized successfully:", currentLocale);
      } catch (error) {
        console.error("Failed to initialize locales:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLocales();
  }, [currentLocale]);

  // Save locale preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("locale", currentLocale);
  }, [currentLocale]);

  // Change locale
  const changeLocale = (locale: string) => {
    if (SUPPORTED_LOCALES.some((l) => l.value === locale)) {
      setCurrentLocale(locale);
    }
  };

  // Context value
  const contextValue = useMemo(
    () => ({
      currentLocale,
      locales: SUPPORTED_LOCALES,
      changeLocale,
      isLoading,
    }),
    [currentLocale, isLoading],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguageContext = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider",
    );
  }
  return context;
};
