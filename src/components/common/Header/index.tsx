import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme as useMuiTheme,
  Switch,
  FormControlLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@/context/ThemeContext";
import { intl } from "@/utils/i18n";
import logo from "@/assets/images/logo.png"; // Replace with actual logo path

const Header: React.FC = () => {
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(
    null,
  );
  const [currentLang, setCurrentLang] = useState("en-US");
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { name: intl.get("nav.home"), path: "/" },
    { name: intl.get("nav.products"), path: "/products" },
    { name: intl.get("nav.services"), path: "/services" },
    { name: intl.get("nav.industries"), path: "/industries" },
    { name: intl.get("nav.about"), path: "/about" },
    { name: intl.get("nav.resources"), path: "/resources" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangMenuAnchor(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangMenuAnchor(null);
  };

  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    // Here you would typically reinitialize the internationalization
    // initI18n(lang);
    handleLangMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={scrolled ? 4 : 0}
      sx={{
        transition: "all 0.3s ease",
        backgroundColor: scrolled
          ? mode === "light"
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(0, 27, 46, 0.95)"
          : "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="Inclue Technologies" height="40" />
            </Link>
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    mx: 1,
                    borderBottom:
                      location.pathname === item.path
                        ? `2px solid ${muiTheme.palette.primary.main}`
                        : "none",
                    borderRadius: 0,
                    "&:hover": {
                      borderBottom: `2px solid ${muiTheme.palette.primary.main}`,
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                {intl.get("nav.contact")}
              </Button>

              <IconButton
                color="inherit"
                onClick={handleLangMenuOpen}
                sx={{ ml: 1 }}
              >
                <TranslateIcon />
              </IconButton>

              <Menu
                anchorEl={langMenuAnchor}
                open={Boolean(langMenuAnchor)}
                onClose={handleLangMenuClose}
              >
                <MenuItem
                  onClick={() => handleLangChange("en-US")}
                  selected={currentLang === "en-US"}
                >
                  English
                </MenuItem>
                <MenuItem
                  onClick={() => handleLangChange("de-DE")}
                  selected={currentLang === "de-DE"}
                >
                  Deutsch
                </MenuItem>
              </Menu>

              <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                onClick={handleLangMenuOpen}
                sx={{ ml: 1 }}
              >
                <TranslateIcon />
              </IconButton>

              <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navigationItems.map((item) => (
              <ListItem
                button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  backgroundColor:
                    location.pathname === item.path
                      ? muiTheme.palette.action.selected
                      : "transparent",
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
            <ListItem
              button
              component={Link}
              to="/contact"
              sx={{
                backgroundColor:
                  location.pathname === "/contact"
                    ? muiTheme.palette.action.selected
                    : "transparent",
              }}
            >
              <ListItemText primary={intl.get("nav.contact")} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
