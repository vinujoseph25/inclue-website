import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  useTheme,
  Typography,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { intl } from "@/utils/i18n";

interface NavigationItem {
  name: string;
  path: string;
  translationKey: string;
  icon?: React.ReactNode;
  children?: Omit<NavigationItem, "children" | "icon">[];
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  navigationItems,
}) => {
  const theme = useTheme();
  const [openSubmenus, setOpenSubmenus] = React.useState<
    Record<string, boolean>
  >({});

  const handleSubmenuToggle = (name: string) => {
    setOpenSubmenus({
      ...openSubmenus,
      [name]: !openSubmenus[name],
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "80%",
          maxWidth: 300,
          background: theme.palette.background.default,
        },
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ px: 2, py: 3 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Menu
        </Typography>
        <List>
          {navigationItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isSubmenuOpen = openSubmenus[item.name] || false;

            return (
              <React.Fragment key={item.path}>
                <ListItem
                  button
                  component={hasChildren ? "div" : RouterLink}
                  to={hasChildren ? undefined : item.path}
                  onClick={
                    hasChildren ? () => handleSubmenuToggle(item.name) : onClose
                  }
                  sx={{
                    py: 1.5,
                    borderRadius: 1,
                    mb: 0.5,
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                >
                  {item.icon && (
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={intl.get(item.translationKey) || item.name}
                  />
                  {hasChildren &&
                    (isSubmenuOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>

                {hasChildren && (
                  <Collapse in={isSubmenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children!.map((child) => (
                        <ListItem
                          key={child.path}
                          button
                          component={RouterLink}
                          to={child.path}
                          onClick={onClose}
                          sx={{
                            pl: 4,
                            py: 1.25,
                            borderRadius: 1,
                            ml: 2,
                            mb: 0.5,
                            "&:hover": {
                              backgroundColor: alpha(
                                theme.palette.primary.main,
                                0.08,
                              ),
                            },
                          }}
                        >
                          <ListItemText
                            primary={
                              intl.get(child.translationKey) || child.name
                            }
                            primaryTypographyProps={{ variant: "body2" }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
