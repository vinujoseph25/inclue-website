import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  alpha,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLanguageContext } from "../../../context/LanguageContext";

// Import icons
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

// Styled components
const LanguageButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  padding: theme.spacing(0.5, 1.5),
  color: theme.palette.text.primary,
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.shape.borderRadius,
    minWidth: 180,
    boxShadow: theme.shadows[3],
    backgroundColor: alpha(theme.palette.background.paper, 0.98),
    backdropFilter: "blur(10px)",
  },
}));

const LanguageFlag = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: 24,
  height: 24,
  borderRadius: "50%",
  marginRight: theme.spacing(1),
  position: "relative",
  overflow: "hidden",
  border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  minHeight: 48,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
  "&.active": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

// Flag assets (replace with your actual flag assets)
const flags: Record<string, string> = {
  "en-US": "🇺🇸", // Replace with actual flag image path
  "de-DE": "🇩🇪", // Replace with actual flag image path
};

const LanguageSwitcher: React.FC = () => {
  const theme = useTheme();
  const { currentLocale, locales, changeLocale, isLoading } =
    useLanguageContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (locale: string) => {
    changeLocale(locale);
    handleClose();
  };

  // Get language name to display
  const getCurrentLanguageName = () => {
    const locale = locales.find((l) => l.value === currentLocale);
    return locale ? locale.name : "English";
  };

  // Even if it's loading, we should render the component in a loading state
  // instead of returning null, which might cause it to disappear
  const isReady = !isLoading;

  // For debugging, add a console log
  console.log("LanguageSwitcher render:", {
    currentLocale,
    isLoading,
    locales,
  });

  if (!isReady) {
    return (
      <LanguageButton disabled>
        <LanguageIcon fontSize="small" />
        Loading...
      </LanguageButton>
    );
  }

  return (
    <>
      <LanguageButton
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon fontSize="small" />}
        endIcon={<ExpandMoreIcon fontSize="small" />}
      >
        {getCurrentLanguageName()}
      </LanguageButton>

      <StyledMenu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {locales.map((locale) => (
          <StyledMenuItem
            key={locale.value}
            onClick={() => handleLanguageChange(locale.value)}
            className={currentLocale === locale.value ? "active" : ""}
          >
            <Box display="flex" alignItems="center" width="100%">
              <LanguageFlag>{flags[locale.value]}</LanguageFlag>
              <Typography variant="body2">{locale.name}</Typography>
              {currentLocale === locale.value && (
                <CheckIcon
                  fontSize="small"
                  sx={{ ml: "auto", color: "primary.main" }}
                />
              )}
            </Box>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default LanguageSwitcher;
