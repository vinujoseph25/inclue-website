import React from "react";
import {
  Box,
  Container,
  Typography,
  // Button,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import intl from "react-intl-universal";
import Button from "@/components/common/Button";
import wordmark from "@/assets/images/logo/hero-logo.png";
import bannerMain from "@/assets/images/home/banner-main.jpg";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundImage:
    "linear-gradient(to right, rgba(4, 96, 233, 0.9), rgba(0, 27, 46, 0.9))",
  color: theme.palette.common.white,
  overflow: "hidden",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(/api/placeholder/1920/1080)", // Replace with actual background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    opacity: 0.15,
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  // marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 3),
  borderRadius: "50px",
  fontWeight: 600,
  boxShadow: theme.shadows[4],
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: theme.shadows[6],
  },
}));

const HeroGraphic = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  boxShadow: theme.shadows[10],
  borderRadius: theme.spacing(1),
  transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg) rotateZ(2deg)",
  transition: "transform 0.5s ease-in-out",
  "&:hover": {
    transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg) rotateZ(0deg)",
  },
}));

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroContainer component="section">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.75rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {intl.get("home.hero.title")}
              </Typography>

              <Typography
                variant="h5"
                sx={{ mb: 3, opacity: 0.9, fontWeight: 400 }}
              >
                {intl.get("home.hero.subtitle")}
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, maxWidth: "90%" }}>
                {intl.get("home.hero.description")}
              </Typography>

              <Box>
                <HeroButton
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/products"
                  customButton
                >
                  {intl.get("home.hero.primary_button")}
                </HeroButton>

                <HeroButton
                  variant="outlined"
                  sx={{
                    ml: { xs: 2, sm: 2 },
                    mt: { xs: 0, sm: 0 },
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  customButton
                >
                  {intl.get("home.hero.secondary_button")}
                </HeroButton>
              </Box>
            </motion.div>
          </Grid>

          {!isMobile && (
            <Grid item xs={12} md={5}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
              >
                <HeroGraphic src={wordmark} alt="Inclue Technologies" />
                {/* <HeroGraphic src={bannerMain} alt="Inclue Technologies" /> */}
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
