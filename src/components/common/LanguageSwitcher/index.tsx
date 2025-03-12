import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLanguage } from "@/context/LanguageContext";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en-US", name: "English", flag: "🇺🇸" },
  { code: "de-DE", name: "Deutsch", flag: "🇩🇪" },
];

interface LanguageSwitcherProps {
  size?: "small" | "medium" | "large";
  tooltip?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  size = "medium",
  tooltip = true,
}) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    handleClose();
  };

  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === currentLanguage) || languages[0]
    );
  };

  const toggleButton = (
    <IconButton
      onClick={handleClick}
      size={size}
      color="inherit"
      aria-label="Change language"
      aria-controls={open ? "language-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
    >
      <TranslateIcon fontSize={size} />
    </IconButton>
  );

  return (
    <>
      {tooltip ? (
        <Tooltip title="Change language">{toggleButton}</Tooltip>
      ) : (
        toggleButton
      )}

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={currentLanguage === language.code}
          >
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ marginRight: 8 }}>{language.flag}</span>
              {language.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
