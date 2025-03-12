import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme as useAppTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  size?: "small" | "medium" | "large";
  tooltip?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = "medium",
  tooltip = true,
}) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useAppTheme();

  const toggleButton = (
    <IconButton
      onClick={toggleTheme}
      size={size}
      color="inherit"
      aria-label={
        mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {mode === "dark" ? (
        <Brightness7 fontSize={size} />
      ) : (
        <Brightness4 fontSize={size} />
      )}
    </IconButton>
  );

  if (tooltip) {
    return (
      <Tooltip
        title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {toggleButton}
      </Tooltip>
    );
  }

  return toggleButton;
};

export default ThemeToggle;
