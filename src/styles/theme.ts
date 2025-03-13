import { createTheme, Theme, responsiveFontSizes } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// Colors from Inclue brand guidelines
const primaryBlue = "#0460E9";
const electricBlue = "#0099FF";
const midnightBlue = "#001B2E";
const crystal = "#58CBF9";
const morning = "#CCF1FF";
const pearl = "#ffffff";

// Create a theme instance for the given mode
export const createAppTheme = (mode: PaletteMode): Theme => {
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
        dark: "#3EAFD9", // Darker version of Crystal
        contrastText: midnightBlue,
      },
      background: {
        default: mode === "light" ? pearl : "#121212",
        paper: mode === "light" ? "#F5F9FC" : "#1E1E1E",
      },
      text: {
        primary: mode === "light" ? midnightBlue : pearl,
        secondary: mode === "light" ? "#555555" : "#BBBBBB",
      },
      error: {
        main: "#FF4D4F",
      },
      warning: {
        main: "#FAAD14",
      },
      info: {
        main: electricBlue,
      },
      success: {
        main: "#52C41A",
      },
    },
    typography: {
      fontFamily: '"Funnel Display", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
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
            padding: "8px 16px",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
          contained: {
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow:
              mode === "light"
                ? "0 4px 12px rgba(0, 27, 46, 0.08)"
                : "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
  });

  // Apply responsive typography
  theme = responsiveFontSizes(theme);

  return theme;
};

export default createAppTheme;
