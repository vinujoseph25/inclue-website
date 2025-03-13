import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Box,
  Divider,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import intl from "react-intl-universal";

// Import icons
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Styled components
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "85%",
    maxWidth: 360,
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.background.paper,
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2, 2, 2),
  marginBottom: theme.spacing(2),
}));

const Logo = styled("img")({
  height: 40,
  width: "auto",
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  "&.active": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    borderRight: `4px solid ${theme.palette.primary.main}`,
    "& .MuiListItemText-primary": {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

const NestedListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 4),
  "&.active": {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    "& .MuiListItemText-primary": {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
}));

// Custom link component to wrap RouterLink
const ListItemLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
  <RouterLink ref={ref} to={props.to} {...props} />
));

// Types
interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  menuItems,
}) => {
  const theme = useTheme();
  const location = useLocation();

  // State for expanded menu items
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Logo source based on theme
  const logoSrc =
    theme.palette.mode === "dark"
      ? "/api/placeholder/160/40" // Replace with dark logo path
      : "/api/placeholder/160/40"; // Replace with light logo path

  // Toggle expansion of menu items with children
  const handleExpandClick = (label: string) => {
    setExpandedItems((prevExpanded) => {
      if (prevExpanded.includes(label)) {
        return prevExpanded.filter((item) => item !== label);
      } else {
        return [...prevExpanded, label];
      }
    });
  };

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Handle navigation and close drawer
  const handleNavigation = () => {
    onClose();
    setExpandedItems([]);
  };

  return (
    <StyledDrawer anchor="left" open={open} onClose={onClose}>
      <DrawerHeader>
        <Box component={RouterLink} to="/" onClick={handleNavigation}>
          <Logo src={logoSrc} alt="Inclue Technologies" />
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List component="nav" aria-label="main navigation">
        {menuItems.map((item) => {
          const isItemExpanded = expandedItems.includes(item.label);
          const hasChildren = item.children && item.children.length > 0;

          return (
            <React.Fragment key={item.label}>
              {hasChildren ? (
                // Menu item with children
                <StyledListItem
                  onClick={() => handleExpandClick(item.label)}
                  className={isActive(item.path) ? "active" : ""}
                >
                  <ListItemText
                    primary={
                      intl.get(`navigation.${item.label.toLowerCase()}`) ||
                      item.label
                    }
                  />
                  {isItemExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </StyledListItem>
              ) : (
                // Regular menu item
                <StyledListItem
                  onClick={handleNavigation}
                  className={isActive(item.path) ? "active" : ""}
                  // component={ListItemLink}
                  // to={item.path}
                >
                  <ListItemText
                    primary={
                      intl.get(`navigation.${item.label.toLowerCase()}`) ||
                      item.label
                    }
                  />
                </StyledListItem>
              )}

              {hasChildren && (
                <Collapse in={isItemExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children!.map((child) => (
                      <NestedListItem
                        key={child.label}
                        // component={ListItemLink}
                        // to={child.path}
                        onClick={handleNavigation}
                        className={isActive(child.path) ? "active" : ""}
                      >
                        <ListItemText
                          primary={
                            intl.get(
                              `navigation.${child.label.toLowerCase()}`,
                            ) || child.label
                          }
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </NestedListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>

      <Box p={3} mt={2}>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Inclue Technologies
        </Typography>
      </Box>
    </StyledDrawer>
  );
};

export default MobileMenu;
