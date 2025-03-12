import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const NotFound: React.FC = () => {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: "4rem", md: "8rem" } }}
          >
            404
          </Typography>
          <Typography variant="h4" gutterBottom>
            Page Not Found
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Sorry! The page you are looking for doesn't exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            size="large"
          >
            Return to Home
          </Button>
        </Container>
      </Box>
    </motion.div>
  );
};

export default NotFound;
