// src/components/services/ServicesHero/index.tsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import intl from "react-intl-universal";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "../../../animations/pageTransitions";

const ServicesHero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}CC, ${theme.palette.primary.main}CC)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url('/assets/images/services/services-bg-pattern.svg')`,
          opacity: 0.1,
          zIndex: 1,
        },
      }}
    >
      {/* Animated elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: { xs: 100, md: 180 },
          height: { xs: 100, md: 180 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: { xs: 80, md: 150 },
          height: { xs: 80, md: 150 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h2"
                component="h1"
                color="white"
                fontWeight="bold"
                gutterBottom
              >
                {intl.get("services.hero.title")}
              </Typography>

              <Typography
                variant="h5"
                color="white"
                sx={{
                  mt: 2,
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                {intl.get("services.hero.subtitle")}
              </Typography>

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  fontWeight: "bold",
                  py: 1.5,
                  px: 3,
                }}
              >
                {intl.get("services.hero.ctaButton")}
              </Button>
            </motion.div>
          </Grid>

          {/* TODO */}
          {/* <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                zIndex: 3,
              }}
            >
              <Box
                component="img"
                src="/assets/images/services/services-hero-illustration.png"
                alt="Inclue services illustration"
                sx={{
                  maxWidth: "90%",
                  height: "auto",
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.2))",
                }}
              />
            </motion.div>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesHero;
