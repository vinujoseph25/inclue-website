import { styled } from "@mui/material/styles";
import { Button as MuiButton, alpha } from "@mui/material";

// Interface for additional styling props
interface StyledButtonProps {
  rounded?: boolean;
  elevation?: number;
  customColor?: string;
}

// Styled button component with custom styling options
export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    !["rounded", "elevation", "customColor"].includes(prop.toString()),
})<StyledButtonProps>(
  ({ theme, rounded, elevation, customColor, variant, size }) => ({
    // Basic styling
    borderRadius: rounded ? "50px" : theme.shape.borderRadius,
    boxShadow: elevation ? theme.shadows[elevation] : "none",
    padding: theme.spacing(1, 3),
    fontWeight: 600,
    transition:
      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
    textTransform: "none",

    // Hover effects
    "&:hover": {
      transform: elevation ? "translateY(-3px)" : "none",
      boxShadow: elevation ? theme.shadows[elevation + 1] : "none",
    },

    // Active/focus effects
    "&:active, &:focus": {
      transform: "translateY(0)",
    },

    // Disabled state
    "&.Mui-disabled": {
      backgroundColor:
        variant === "contained" ? theme.palette.grey[300] : "transparent",
      color: theme.palette.grey[500],
      boxShadow: "none",
    },

    // Custom color handling for 'white'
    ...(customColor === "white" &&
      variant === "contained" && {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.9),
          transform: elevation ? "translateY(-3px)" : "none",
          boxShadow: elevation ? theme.shadows[elevation + 1] : "none",
        },
      }),

    ...(customColor === "white" &&
      variant === "outlined" && {
        borderColor: theme.palette.common.white,
        color: theme.palette.common.white,
        "&:hover": {
          borderColor: theme.palette.common.white,
          backgroundColor: alpha(theme.palette.common.white, 0.1),
          transform: elevation ? "translateY(-3px)" : "none",
          boxShadow: elevation ? theme.shadows[elevation + 1] : "none",
        },
      }),

    // Custom color handling for 'black'
    ...(customColor === "black" &&
      variant === "contained" && {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.black, 0.9),
          transform: elevation ? "translateY(-3px)" : "none",
          boxShadow: elevation ? theme.shadows[elevation + 1] : "none",
        },
      }),

    ...(customColor === "black" &&
      variant === "outlined" && {
        borderColor: theme.palette.common.black,
        color: theme.palette.common.black,
        "&:hover": {
          borderColor: theme.palette.common.black,
          backgroundColor: alpha(theme.palette.common.black, 0.05),
          transform: elevation ? "translateY(-3px)" : "none",
          boxShadow: elevation ? theme.shadows[elevation + 1] : "none",
        },
      }),

    // Size variations overrides
    ...(size === "small" && {
      padding: theme.spacing(0.5, 2),
      fontSize: "0.875rem",
    }),

    ...(size === "large" && {
      padding: theme.spacing(1.5, 4),
      fontSize: "1.125rem",
    }),
  }),
);
