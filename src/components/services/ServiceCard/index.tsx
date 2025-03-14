// src/components/services/ServiceCard/index.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FactoryIcon from "@mui/icons-material/Factory";
import DevicesIcon from "@mui/icons-material/Devices";
import MemoryIcon from "@mui/icons-material/Memory";
import CodeIcon from "@mui/icons-material/Code";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const theme = useTheme();

  // Get the right icon based on service.icon string
  const getIcon = () => {
    switch (service.icon) {
      case "factory":
        return <FactoryIcon fontSize="large" color="primary" />;
      case "devices":
        return <DevicesIcon fontSize="large" color="primary" />;
      case "memory":
        return <MemoryIcon fontSize="large" color="primary" />;
      case "code":
        return <CodeIcon fontSize="large" color="primary" />;
      default:
        return <FactoryIcon fontSize="large" color="primary" />;
    }
  };

  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <Box sx={{ position: "relative", pt: "56.25%" /* 16:9 Aspect Ratio */ }}>
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            width: 60,
            height: 60,
            backgroundColor: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {getIcon()}
        </Box>
      </Box>

      <CardContent
        sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          {service.title}
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 3, flexGrow: 1 }}>
          {service.description}
        </Typography>

        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {intl.get("services.keyFeatures")}:
        </Typography>

        <List dense disablePadding sx={{ mb: 3 }}>
          {service.features.slice(0, 3).map((feature, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{ variant: "body2" }}
              />
            </ListItem>
          ))}
        </List>

        <Button
          component={Link}
          to={`/services/${service.id}`}
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{ fontWeight: "medium", mt: "auto" }}
        >
          {intl.get("services.viewDetails")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
