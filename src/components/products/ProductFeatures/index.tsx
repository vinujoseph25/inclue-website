// src/components/products/ProductFeatures/index.tsx
import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  useTheme,
} from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

interface Feature {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
  benefits: Benefit[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  features,
  benefits,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        {intl.get("products.features.title")}
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        {intl.get("products.features.description")}
      </Typography>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      color="primary"
                      gutterBottom
                    >
                      {feature.title}
                    </Typography>

                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        {intl.get("products.benefits.title")}
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        {intl.get("products.benefits.description")}
      </Typography>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    background: `linear-gradient(45deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
                    height: "100%",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                      borderColor: theme.palette.primary.light,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {benefit.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProductFeatures;
