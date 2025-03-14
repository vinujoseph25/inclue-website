// src/components/resources/ResourcesHero/index.tsx
import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import intl from "react-intl-universal";
import { fadeInUp } from "../../../animations/pageTransitions";

const ResourcesHero: React.FC = () => {
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
          background: `url('/assets/images/resources/resources-bg-pattern.svg')`,
          opacity: 0.1,
          zIndex: 1,
        },
      }}
    >
      {/* Background floating elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: theme.palette.primary.light,
          opacity: 0.4,
          zIndex: 2,
        }}
        component={motion.div}
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: theme.palette.secondary.main,
          opacity: 0.4,
          zIndex: 2,
        }}
        component={motion.div}
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h2"
            component="h1"
            color="white"
            fontWeight="bold"
            textAlign="center"
          >
            {intl.get("resources.hero.title")}
          </Typography>

          <Typography
            variant="h5"
            color="white"
            sx={{
              mt: 2,
              opacity: 0.9,
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {intl.get("resources.hero.subtitle")}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ResourcesHero;
