import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import { intl } from "@/utils/i18n";

const Home: React.FC = () => {
  useEffect(() => {
    // For SEO
    document.title = `${intl.get("app.title")} - ${intl.get("nav.home")}`;
  }, []);

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Box
        sx={{
          pt: 10, // Space for the fixed header
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom>
            {intl.get("hero.title")}
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            {intl.get("hero.subtitle")}
          </Typography>

          {/* Add your hero section and other homepage components here */}
        </Container>
      </Box>
    </motion.div>
  );
};

export default Home;
