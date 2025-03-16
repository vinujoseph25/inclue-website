import React, { useEffect, useState } from "react";
import {
  Box,
  // Button,
  Menu,
  // MenuItem,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import intl from "react-intl-universal";

// Import icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "../Button";
import StyledMenuItem from "../MenuItem";

// Styled components
const NavLink = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 1.5),
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "0.95rem",
  textTransform: "none",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 10,
    left: "50%",
    width: 0,
    height: 2,
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s ease, left 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover::after, &.active::after": {
    width: "70%",
  },
  "&.active": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
    boxShadow: theme.shadows[3],
    backgroundColor: alpha(theme.palette.background.paper, 0.98),
    backdropFilter: "blur(10px)",
    minWidth: 180,
  },
}));

// Custom link component to wrap RouterLink with MenuItem
const MenuItemLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
  <RouterLink to={props?.to} ref={ref} {...props} />
));

// Types
interface MenuItem {
  id: string;
  label: string;
  path: string;
  children?: MenuItem[];
}

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
  const theme = useTheme();
  const location = useLocation();

  // State for dropdown menus
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Handlers for dropdown
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    label: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleMenuClose = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    if (activeMenu === null) setAnchorEl(null);
  }, [activeMenu]);

  // Check if a path is active (exact match or partial for subpaths)
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <Box component="nav" display="flex" flexDirection="row" alignItems="center">
      {menuItems.map((item) => {
        // If menu item has children, render as dropdown
        if (item.children && item.children.length > 0) {
          return (
            <Box key={item.id}>
              <NavLink
                aria-haspopup="true"
                aria-expanded={activeMenu === item.label ? "true" : undefined}
                onClick={(e) => handleMenuOpen(e, item.label)}
                endIcon={
                  activeMenu === item.label ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                }
                className={isActive(item.path) ? "active" : ""}
              >
                {intl.get(`navigation.${item.id.toLowerCase()}`) || item.label}
              </NavLink>
              <StyledMenu
                anchorEl={anchorEl}
                open={activeMenu === item.label && anchorEl !== null}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": `${item.id.toLowerCase()}-menu`,
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
                {item.children.map((child) => (
                  <StyledMenuItem
                    key={child.label}
                    onClick={handleMenuClose}
                    className={isActive(child.path) ? "active" : ""}
                    component={MenuItemLink}
                    to={child.path}
                  >
                    <Typography variant="body2">
                      {intl.get(`navigation.${child.id.toLowerCase()}`) ||
                        child.label}
                    </Typography>
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            </Box>
          );
        }

        // Otherwise render as simple link
        return (
          <NavLink
            key={item.id}
            component={MenuItemLink}
            to={item.path}
            className={isActive(item.path) ? "active" : ""}
          >
            {intl.get(`navigation.${item.id.toLowerCase()}`) || item.label}
          </NavLink>
        );
      })}
    </Box>
  );
};

export default DesktopMenu;
