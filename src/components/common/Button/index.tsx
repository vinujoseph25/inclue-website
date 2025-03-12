import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface ButtonProps extends MuiButtonProps {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<ButtonProps>(({ theme, variant, size }) => ({
  borderRadius: "8px",
  textTransform: "none",
  transition: "all 0.3s ease",
  fontWeight: 500,
  boxShadow:
    variant === "outline" || variant === "text" ? "none" : theme.shadows[2],

  ...(size === "small" && {
    padding: "6px 16px",
    fontSize: "0.875rem",
  }),

  ...(size === "medium" && {
    padding: "10px 24px",
    fontSize: "1rem",
  }),

  ...(size === "large" && {
    padding: "12px 32px",
    fontSize: "1.125rem",
  }),

  "&:hover": {
    boxShadow:
      variant === "outline" || variant === "text" ? "none" : theme.shadows[4],
    transform: "translateY(-2px)",
  },
}));

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}) => {
  // Map our custom variants to Material UI variants
  const getMuiVariant = () => {
    switch (variant) {
      case "primary":
        return "contained";
      case "secondary":
        return "contained";
      case "outline":
        return "outlined";
      case "text":
        return "text";
      default:
        return "contained";
    }
  };

  // Map our custom colors to Material UI colors
  const getColor = () => {
    switch (variant) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      default:
        return "primary";
    }
  };

  return (
    <StyledButton
      variant={getMuiVariant()}
      color={getColor()}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
