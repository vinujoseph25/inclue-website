import React from "react";
import { IconButton, Tooltip, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

// Import icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// Styled components
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1),
  color:
    theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.grey[800],
  backgroundColor: alpha(
    theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.common.black,
    0.05,
  ),
  "&:hover": {
    backgroundColor: alpha(
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,
      0.1,
    ),
  },
}));

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  // Animation variants for the icon
  const iconVariants = {
    initial: {
      scale: 0.6,
      rotate: -180,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      scale: 0.6,
      rotate: 180,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <Tooltip
      title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <StyledIconButton
        onClick={toggleTheme}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        <motion.div
          key={mode}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={iconVariants}
        >
          {mode === "dark" ? (
            <LightModeIcon fontSize="small" />
          ) : (
            <DarkModeIcon fontSize="small" />
          )}
        </motion.div>
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
