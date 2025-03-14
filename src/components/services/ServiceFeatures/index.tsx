import React from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import SensorsIcon from "@mui/icons-material/Sensors";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StorageIcon from "@mui/icons-material/Storage";

interface ServiceFeaturesProps {
  title: string;
  description: string;
  icon?: string;
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  title,
  description,
  icon = "settings",
}) => {
  const theme = useTheme();

  // Map for different icons based on the service type
  const iconMap: Record<string, React.ReactNode> = {
    settings: <SettingsIcon color="primary" sx={{ fontSize: 40 }} />,
    sensors: <SensorsIcon color="primary" sx={{ fontSize: 40 }} />,
    touch: <TouchAppIcon color="primary" sx={{ fontSize: 40 }} />,
    code: <CodeIcon color="primary" sx={{ fontSize: 40 }} />,
    data: <DataObjectIcon color="primary" sx={{ fontSize: 40 }} />,
    server: <StorageIcon color="primary" sx={{ fontSize: 40 }} />,
  };

  const renderIcon = () => {
    return iconMap[icon] || iconMap.settings;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card
        elevation={1}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 4,
          },
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box
              sx={{
                p: 1.5,
                borderRadius: "50%",
                bgcolor: "rgba(4, 96, 233, 0.1)",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {renderIcon()}
            </Box>
            <Typography
              variant="h6"
              component="h3"
              textAlign="center"
              gutterBottom
              color="primary.main"
              fontWeight="medium"
            >
              {title}
            </Typography>
          </Box>
          <Typography variant="body2" textAlign="center">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
