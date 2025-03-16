import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Define additional props beyond MUI Button props
export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  color?: "primary" | "secondary" | "white" | "black";
  to?: string;
  external?: boolean;
  rounded?: boolean;
  elevation?: number;
  customButton?: boolean;
}

interface StyledButtonProps {
  rounded?: boolean;
  elevation?: number;
  customColor?: string;
}

// Styled button component with custom styling options
export const StyledButton = styled(MuiButton)<StyledButtonProps>(() => ({}));

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  to,
  external = false,
  rounded = true,
  elevation = 2,
  size = "medium",
  customButton = false,
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

  const customButtonProps = customButton
    ? {
        color: getMuiColor(),
        variant,
        // borderRadius: rounded ? "24px" : "",
        elevation,
        customColor: color === "white" || color === "black" ? color : undefined,
        size,
      }
    : {};

  return (
    <StyledButton {...linkProps} {...props} {...customButtonProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
