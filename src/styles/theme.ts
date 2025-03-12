import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// Brand colors from style guide
const primaryBlue = "#0460E9";
const electricBlue = "#0099FF";
const midnightBlue = "#001B2E";
const crystal = "#58CBF9";
const morning = "#CCF1FF";
const pearl = "#FFFFFF";

// Create a theme instance
export const createAppTheme = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: primaryBlue,
        light: electricBlue,
        dark: midnightBlue,
        contrastText: pearl,
      },
      secondary: {
        main: crystal,
        light: morning,
        dark: midnightBlue,
        contrastText: midnightBlue,
      },
      background: {
        default: mode === "light" ? pearl : midnightBlue,
        paper: mode === "light" ? morning : "#051726", // Slightly lighter than midnight blue
      },
      text: {
        primary: mode === "light" ? midnightBlue : pearl,
        secondary: mode === "light" ? "#596B78" : crystal,
      },
    },
    typography: {
      fontFamily:
        '"Funnel Display", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.8rem",
      },
      h3: {
        fontWeight: 700,
        fontSize: "2.2rem",
      },
      h4: {
        fontWeight: 500,
        fontSize: "1.8rem",
      },
      h5: {
        fontWeight: 500,
        fontSize: "1.4rem",
      },
      h6: {
        fontWeight: 500,
        fontSize: "1.2rem",
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
      button: {
        fontWeight: 500,
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "10px 24px",
            fontWeight: 500,
          },
          containedPrimary: {
            backgroundColor: primaryBlue,
            "&:hover": {
              backgroundColor: midnightBlue,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? pearl : midnightBlue,
            boxShadow: "none",
            borderBottom: `1px solid ${mode === "light" ? "#f0f0f0" : "#0c2c43"}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          },
        },
      },
    },
  });

  // Make fonts responsive
  theme = responsiveFontSizes(theme);

  return theme;
};
