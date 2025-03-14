import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "./context/ThemeContext";
import {} from "./styles/theme";
import AppRoutes from "./routes";
import { initI18n } from "./utils/i18n";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
import { LanguageProvider } from "./context/LanguageContext";

// Initialize internationalization
initI18n();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Provider store={store}>
          <ThemeProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
