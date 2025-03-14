import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import intl from "react-intl-universal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface RelatedServicesProps {
  currentServiceId: string;
  relatedServiceIds: string[];
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentServiceId,
  relatedServiceIds,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  //   const { services, loading } = useSelector(
  //     (state: RootState) => state.services,
  //   );
  const { services, loading } = { services: [], loading: false };
  const [relatedServices, setRelatedServices] = useState<any[]>([]);

  useEffect(() => {
    if (services && services.length > 0) {
      const filtered = services.filter(
        (service: any) =>
          relatedServiceIds.includes(service.id) &&
          service.id !== currentServiceId,
      );
      setRelatedServices(filtered);
    }
  }, [services, relatedServiceIds, currentServiceId]);

  // Mock data for development
  const mockRelatedServices = [
    {
      id: "custom-iot",
      title: "Custom IoT",
      description:
        "Tailored IoT solutions that connect and optimize your operations with real-time monitoring and data analytics.",
      image: "/assets/images/services/custom-iot.jpg",
      icon: "data",
    },
    {
      id: "plc-solutions",
      title: "PLC Solutions",
      description:
        "Advanced programmable logic controllers for precise industrial control and automation of manufacturing processes.",
      image: "/assets/images/services/plc-solutions.jpg",
      icon: "settings",
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom web solutions that elevate your digital presence with responsive design and optimized performance.",
      image: "/assets/images/services/web-development.jpg",
      icon: "code",
    },
  ];

  // Use mock data if API data not available
  const servicesToShow =
    relatedServices.length > 0 ? relatedServices : mockRelatedServices;

  // Limit to 3 services to display
  const displayServices = servicesToShow.slice(0, 3);

  if (loading) {
    return (
      <Grid container spacing={4}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Card>
              <Skeleton variant="rectangular" height={140} />
              <CardContent>
                <Skeleton variant="text" height={32} width="80%" />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={20} width="60%" />
                <Box sx={{ mt: 2 }}>
                  <Skeleton variant="rectangular" height={36} width={120} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (displayServices.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Grid container spacing={isMobile ? 3 : 4}>
        {displayServices.map((service) => (
          <Grid item xs={12} md={4} key={service.id}>
            <motion.div variants={itemVariants}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 140,
                    backgroundColor: "rgba(4, 96, 233, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {service.title} Image
                  </Typography>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="primary.main"
                    fontWeight="medium"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/services/${service.id}`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      fontWeight: 500,
                      mt: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.primary.dark,
                      },
                    }}
                  >
                    {intl.get("common.learnMore")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default RelatedServices;
