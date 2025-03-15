import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import intl from "react-intl-universal";
import SocialLinks from "../SocialLinks";
import NewsletterForm from "../NewsletterForm";
import contactInfo from "../../../utils/contactInfo";

import logo from "@assets/svgs/logo/logo-footer.svg";

// Import footer styles
import footerStyles from "./styles";

// Custom styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.primary.dark : "#001B2E",
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1),
  "&:hover": {
    color: theme.palette.secondary.light,
    textDecoration: "none",
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(2),
}));

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  // Apply footer styles
  const styles = footerStyles(theme);

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={2}>
              <img
                src={logo}
                alt="Inclue Technologies Logo"
                style={{
                  height: isMobile ? "40px" : "50px",
                  marginBottom: theme.spacing(2),
                }}
              />
            </Box>
            <Typography variant="body2" color="inherit" paragraph>
              {intl.get("footer.companyDescription")}
            </Typography>
            <Box mt={2}>
              <SocialLinks variant="footer" />
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">
              {intl.get("footer.quickLinks")}
            </FooterHeading>
            <FooterLink href="/">{intl.get("navigation.home")}</FooterLink>
            <FooterLink href="/products">
              {intl.get("navigation.products")}
            </FooterLink>
            <FooterLink href="/services">
              {intl.get("navigation.services")}
            </FooterLink>
            <FooterLink href="/industries">
              {intl.get("navigation.industries")}
            </FooterLink>
            <FooterLink href="/about">
              {intl.get("navigation.about")}
            </FooterLink>
            <FooterLink href="/contact">
              {intl.get("navigation.contact")}
            </FooterLink>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">
              {intl.get("footer.contactUs")}
            </FooterHeading>
            <ContactItem>
              <LocationOnIcon
                style={{ marginRight: theme.spacing(1), marginTop: "4px" }}
              />
              <Typography variant="body2">
                {contactInfo.address.full}
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon
                style={{ marginRight: theme.spacing(1), marginTop: "4px" }}
              />
              <Typography variant="body2">
                {contactInfo.contact.phone}
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon
                style={{ marginRight: theme.spacing(1), marginTop: "4px" }}
              />
              <Typography variant="body2">
                {contactInfo.contact.email}
              </Typography>
            </ContactItem>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">
              {intl.get("footer.newsletter")}
            </FooterHeading>
            <Typography variant="body2" paragraph>
              {intl.get("footer.newsletterDesc")}
            </Typography>
            <NewsletterForm variant="dark" />
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          mt={6}
          pt={3}
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="inherit">
                &copy; {currentYear} Inclue Technologies.{" "}
                {intl.get("footer.allRightsReserved")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent={isMobile ? "center" : "flex-end"}
                flexWrap="wrap"
              >
                <FooterLink
                  href="/privacy-policy"
                  style={{ marginRight: theme.spacing(2) }}
                >
                  {intl.get("footer.privacyPolicy")}
                </FooterLink>
                <FooterLink
                  href="/terms-of-service"
                  style={{ marginRight: theme.spacing(2) }}
                >
                  {intl.get("footer.termsOfService")}
                </FooterLink>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
