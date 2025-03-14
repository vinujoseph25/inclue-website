// src/components/services/CallToAction/index.tsx
import React from "react";
import { Box, Typography, Grid, Paper, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

const CallToAction: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ p: { xs: 4, md: 6 }, color: "white" }}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight="bold"
                  gutterBottom
                >
                  {intl.get("services.cta.title")}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  {intl.get("services.cta.subtitle")}
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
                    px: 4,
                    fontSize: "1.1rem",
                    mr: 2,
                    mb: { xs: 2, sm: 0 },
                  }}
                >
                  {intl.get("services.cta.contactButton")}
                </Button>

                <Button
                  component={Link}
                  to="/contact?schedule=true"
                  variant="outlined"
                  size="large"
                  sx={{
                    fontWeight: "bold",
                    py: 1.5,
                    px: 4,
                    fontSize: "1.1rem",
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {intl.get("services.cta.scheduleButton")}
                </Button>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                p: { xs: 4, md: 6 },
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                >
                  {intl.get("services.cta.directContact")}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                  <PhoneIcon sx={{ mr: 2 }} />
                  <Typography variant="body1">+91 94006 55235</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <Typography variant="body1">info@incluetech.com</Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default CallToAction;
