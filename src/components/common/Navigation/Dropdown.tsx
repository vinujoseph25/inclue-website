import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Menu as MuiMenu,
  MenuItem,
  useTheme,
  alpha,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { intl } from "@/utils/i18n";

interface DropdownItem {
  name: string;
  path: string;
  translationKey?: string;
}

interface DropdownProps {
  label: string;
  translationKey?: string;
  items: DropdownItem[];
  onItemClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  translationKey,
  items,
  onItemClick,
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = () => {
    handleClose();
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <>
      <Button
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "text.primary",
          textTransform: "none",
          fontWeight: 400,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography variant="body1">
          {translationKey ? intl.get(translationKey) : label}
        </Typography>
      </Button>
      <MuiMenu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            borderRadius: 2,
            minWidth: 180,
            overflow: "visible",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: "50%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) translateX(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.path}
            onClick={handleItemClick}
            component={RouterLink}
            to={item.path}
            sx={{
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              },
            }}
          >
            {item.translationKey ? intl.get(item.translationKey) : item.name}
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};

export default Dropdown;
