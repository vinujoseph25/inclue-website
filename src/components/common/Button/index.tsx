import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { StyledButton } from "./styles";

// Define additional props beyond MUI Button props
export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  color?: "primary" | "secondary" | "white" | "black";
  to?: string;
  external?: boolean;
  rounded?: boolean;
  elevation?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  to,
  external = false,
  rounded = true,
  elevation = 2,
  size = "medium",
  ...props
}) => {
  // Map our custom colors to MUI colors
  const getMuiColor = (): "primary" | "secondary" | undefined => {
    if (color === "primary" || color === "secondary") {
      return color;
    }
    return undefined; // For 'white' and 'black', we handle those with styled components
  };

  // Set up link props if this is a navigation button
  const linkProps = to
    ? {
        component: external ? "a" : RouterLink,
        ...(external
          ? { href: to, target: "_blank", rel: "noopener noreferrer" }
          : { to }),
      }
    : {};

  return (
    <StyledButton
      color={getMuiColor()}
      variant={variant}
      rounded={rounded}
      elevation={elevation}
      customColor={color === "white" || color === "black" ? color : undefined}
      size={size}
      {...linkProps}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
