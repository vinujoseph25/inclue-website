// src/components/products/ProductSpecs/index.tsx
import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ComputerIcon from "@mui/icons-material/Computer";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

interface ProductSpecsProps {
  specs: {
    systemRequirements: string[];
    supportedProtocols: string[];
    security: string[];
    deployment: string[];
  };
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ specs }) => {
  const theme = useTheme();

  // Define spec sections
  const specSections = [
    {
      key: "systemRequirements",
      title: "products.specs.systemRequirements",
      icon: (
        <ComputerIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      items: specs.systemRequirements,
    },
    {
      key: "supportedProtocols",
      title: "products.specs.supportedProtocols",
      icon: (
        <DevicesIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      items: specs.supportedProtocols,
    },
    {
      key: "security",
      title: "products.specs.security",
      icon: (
        <SecurityIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      items: specs.security,
    },
    {
      key: "deployment",
      title: "products.specs.deployment",
      icon: (
        <CloudIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      items: specs.deployment,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        {intl.get("products.specs.title")}
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        {intl.get("products.specs.description")}
      </Typography>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={4}>
          {specSections.map((section) => (
            <Grid item xs={12} md={6} key={section.key}>
              <motion.div variants={fadeInUp}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {section.icon}
                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      sx={{ ml: 1 }}
                    >
                      {intl.get(section.title)}
                    </Typography>
                  </Box>

                  <List disablePadding>
                    {section.items.map((item, index) => (
                      <ListItem
                        key={index}
                        disablePadding
                        disableGutters
                        sx={{ mb: 1 }}
                      >
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleOutlineIcon
                            color="primary"
                            fontSize="small"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProductSpecs;
