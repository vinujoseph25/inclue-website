import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

// Import components
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeToggle from "../ThemeToggle";

// Import contexts
import { useTheme as useThemeContext } from "../../../context/ThemeContext";
import { useLanguageContext } from "../../../context/LanguageContext";

// Import icons
import MenuIcon from "@mui/icons-material/Menu";

import logo from "@assets/svgs/logo/logo.svg";
import wordmarkDark from "../../../assets/images/logo/wordmark-dark.png";

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.95),
  backdropFilter: "blur(10px)",
  boxShadow: theme.shadows[2],
  transition: "all 0.3s ease-in-out",
  "&.transparent": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&.transparent.scrolled": {
    backgroundColor: alpha(theme.palette.background.default, 0.95),
    backdropFilter: "blur(10px)",
    boxShadow: theme.shadows[2],
  },
  "&.transparent .MuiToolbar-root": {
    height: 80,
  },
  "&.transparent.scrolled .MuiToolbar-root": {
    height: 70,
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  height: "100%",
  display: "flex",
  alignItems: "center",
}));

const Logo = styled("img")({
  height: 30,
  width: "auto",
});

// Interface for header props
interface HeaderProps {
  transparent?: boolean;
  showProgressBar?: boolean;
}

// Hidden on scroll function
function HideOnScroll(props: {
  children: React.ReactElement;
  disabled: boolean;
}) {
  const { children, disabled } = props;
  const trigger = useScrollTrigger();

  return disabled ? (
    <>{children}</>
  ) : (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC<HeaderProps> = ({
  transparent = false,
  showProgressBar = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode } = useThemeContext();
  const { currentLocale } = useLanguageContext();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Menu items for navigation
  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Products",
      path: "/products",
      children: [
        { label: "Babble", path: "/products/babble" },
        { label: "Babble Lite", path: "/products/babble-lite" },
      ],
    },
    {
      label: "Services",
      path: "/services",
      children: [
        {
          label: "Industrial Automation",
          path: "/services/industrial-automation",
        },
        { label: "Custom IOT", path: "/services/custom-iot" },
        { label: "PLC Solutions", path: "/services/plc-solutions" },
        { label: "SCADA Integration", path: "/services/scada-integration" },
        { label: "Web Development", path: "/services/web-development" },
      ],
    },
    {
      label: "Industries",
      path: "/industries",
      children: [
        { label: "Manufacturing", path: "/industries/manufacturing" },
        { label: "HealthCare", path: "/industries/healthcare" },
      ],
    },
    { label: "About", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logo source based on theme
  // TODO
  const logoSrc =
    mode === "dark"
      ? logo // Replace with dark logo path
      : logo; // Replace with light logo path

  // Determine app bar class names based on props and state
  const appBarClassName = [
    transparent ? "transparent" : "",
    scrolled && transparent ? "scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* TODO hide on scoll disabled */}
      <HideOnScroll disabled>
        <StyledAppBar
          position="fixed"
          color="default"
          className={appBarClassName}
        >
          <Container maxWidth="lg">
            <Toolbar>
              {/* Logo */}
              <LogoContainer>
                <RouterLink to="/">
                  <Logo src={logoSrc} alt="Inclue Technologies" />
                </RouterLink>
              </LogoContainer>

              {/* Desktop Navigation */}
              {!isMobile && <DesktopMenu menuItems={menuItems} />}

              <Box sx={{ flexGrow: 1 }} />

              {/* TODO */}
              {/* Language Switcher */}
              {/* <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                <LanguageSwitcher />
              </Box> */}

              {/* TODO */}
              {/* Theme Toggle */}
              {/* <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                <ThemeToggle />
              </Box> */}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <MobileMenu
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          menuItems={menuItems}
        />
      )}

      {/* Spacer div to push content below the fixed header */}
      {/* TODO */}
      <Toolbar
        sx={{
          height: isMobile ? 50 : 60,
          transition: "height 0.3s ease-in-out",
        }}
      />
    </>
  );
};

export default Header;
