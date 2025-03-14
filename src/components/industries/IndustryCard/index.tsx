import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FactoryIcon from "@mui/icons-material/Factory";
import MemoryIcon from "@mui/icons-material/Memory";
import intl from "react-intl-universal";

interface IndustryCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
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

const IndustryCard: React.FC<IndustryCardProps> = ({
  id,
  title,
  description,
  image,
  icon,
}) => {
  const theme = useTheme();

  // Map of industry icons
  const iconMap: Record<string, React.ReactNode> = {
    healthcare: <LocalHospitalIcon color="primary" sx={{ fontSize: 40 }} />,
    manufacturing: <FactoryIcon color="primary" sx={{ fontSize: 40 }} />,
    semiconductor: <MemoryIcon color="primary" sx={{ fontSize: 40 }} />,
  };

  // Get icon or default to manufacturing
  const industryIcon =
    icon && iconMap[icon] ? iconMap[icon] : iconMap.manufacturing;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Card
        elevation={1}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: 6,
          },
        }}
      >
        {/* Card header with icon */}
        <Box
          sx={{
            position: "relative",
            height: 180,
            bgcolor: "primary.dark",
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 27, 46, 0.7)", // Using Midnight Blue with opacity
              zIndex: 1,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              textAlign: "center",
              width: "100%",
              p: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: "50%",
                width: 70,
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              {industryIcon}
            </Box>
            <Typography
              variant="h5"
              component="h3"
              color="white"
              fontWeight="bold"
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <CardContent
          sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, flexGrow: 1 }}
          >
            {description}
          </Typography>

          <Button
            component={Link}
            to={`/industries/${id}`}
            endIcon={<ArrowForwardIcon />}
            sx={{
              alignSelf: "flex-start",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.primary.dark,
              },
            }}
          >
            {intl.get("industries.learnMore")}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default IndustryCard;
