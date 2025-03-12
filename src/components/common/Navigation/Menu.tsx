import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { intl } from "@/utils/i18n";

interface MenuProps {
  direction?: "horizontal" | "vertical";
  onItemClick?: () => void;
  hideMenuItems?: boolean;
}

interface MenuItem {
  name: string;
  path: string;
  translationKey: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", path: "/", translationKey: "nav.home" },
  { name: "Products", path: "/products", translationKey: "nav.products" },
  { name: "Services", path: "/services", translationKey: "nav.services" },
  { name: "Industries", path: "/industries", translationKey: "nav.industries" },
  { name: "Resources", path: "/resources", translationKey: "nav.resources" },
  { name: "About", path: "/about", translationKey: "nav.about" },
];

const HorizontalMenu = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 0,
  margin: 0,
}));

const VerticalMenu = styled(List)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2, 0),
}));

const HorizontalMenuItem = styled(ListItem)(({ theme }) => ({
  width: "auto",
  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const VerticalMenuItem = styled(ListItem)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const ActiveIndicator = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "2px",
  backgroundColor: theme.palette.primary.main,
}));

const Menu: React.FC<MenuProps> = ({
  direction = "horizontal",
  onItemClick,
  hideMenuItems = false,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (hideMenuItems) {
    return null;
  }

  const MenuComponent =
    direction === "horizontal" ? HorizontalMenu : VerticalMenu;
  const MenuItemComponent =
    direction === "horizontal" ? HorizontalMenuItem : VerticalMenuItem;

  return (
    // TODO <MenuComponent component="nav">
    <MenuComponent>
      {menuItems.map((item) => {
        const isActive =
          location.pathname === item.path ||
          (item.path !== "/" && location.pathname.startsWith(item.path));

        return (
          <MenuItemComponent
            key={item.path}
            // TODO component={RouterLink}
            // TODO to={item.path}
            onClick={onItemClick}
            sx={{
              position: "relative",
              color: isActive ? "primary.main" : "text.primary",
              fontWeight: isActive ? 600 : 400,
              backgroundColor:
                direction === "vertical" && isActive
                  ? theme.palette.action.selected
                  : "transparent",
            }}
          >
            <Typography variant="body1">
              {intl.get(item.translationKey) || item.name}
            </Typography>

            {direction === "horizontal" && isActive && !isMobile && (
              <ActiveIndicator
                layoutId="activeMenuItem"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </MenuItemComponent>
        );
      })}
    </MenuComponent>
  );
};

export default Menu;
