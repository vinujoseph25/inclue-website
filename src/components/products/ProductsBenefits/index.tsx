// src/components/products/ProductBenefits/index.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";
import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

// Benefit icons (imported from Material UI icons or custom SVGs)
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudIcon from "@mui/icons-material/Cloud";

const benefits = [
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "products.benefits.performance.title",
    description: "products.benefits.performance.description",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "products.benefits.analytics.title",
    description: "products.benefits.analytics.description",
  },
  {
    icon: <SettingsIcon fontSize="large" />,
    title: "products.benefits.customization.title",
    description: "products.benefits.customization.description",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "products.benefits.security.title",
    description: "products.benefits.security.description",
  },
  {
    icon: <AccessTimeIcon fontSize="large" />,
    title: "products.benefits.efficiency.title",
    description: "products.benefits.efficiency.description",
  },
  {
    icon: <CloudIcon fontSize="large" />,
    title: "products.benefits.scalability.title",
    description: "products.benefits.scalability.description",
  },
];

const ProductBenefits: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <SectionTitle
        title={intl.get("products.benefits.title")}
        subtitle={intl.get("products.benefits.subtitle")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    },
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: theme.palette.primary.main,
                      zIndex: 1,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {benefit.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {intl.get(benefit.title)}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {intl.get(benefit.description)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProductBenefits;
