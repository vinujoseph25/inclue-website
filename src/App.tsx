import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { store } from "./redux/store";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { createAppTheme } from "./styles/theme";
import AppRoutes from "./routes";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { initI18n } from "./utils/i18n";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

// Initialize internationalization
initI18n();

const AppContent: React.FC = () => {
  const { mode } = useTheme();
  const theme = createAppTheme(mode);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </MUIThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
