import React from "react";
import { Box, Typography, Paper, Link, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

interface ContactLegalProps {
  title: string;
  description: string;
  email: string;
  address: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ContactLegal: React.FC<ContactLegalProps> = ({
  title,
  description,
  email,
  address,
}) => {
  const theme = useTheme();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mt: 6,
          mb: 2,
          borderRadius: 2,
          bgcolor: "rgba(4, 96, 233, 0.04)", // Light shade of primary color
          border: `1px solid ${theme.palette.primary.light}`,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          color="primary.main"
          fontWeight="medium"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>

        <Typography variant="body1" paragraph>
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <EmailIcon
            fontSize="small"
            sx={{
              color: theme.palette.primary.main,
              mr: 1.5,
            }}
          />
          <Link
            href={`mailto:${email}`}
            underline="hover"
            color="primary"
            sx={{ fontWeight: 500 }}
          >
            {email}
          </Link>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <LocationOnIcon
            fontSize="small"
            sx={{
              color: theme.palette.primary.main,
              mr: 1.5,
              mt: 0.5,
            }}
          />
          <Typography variant="body2">{address}</Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};
