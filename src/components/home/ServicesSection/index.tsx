import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

// Import icons
import SettingsIcon from "@mui/icons-material/Settings";
import DevicesIcon from "@mui/icons-material/Devices";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.secondary.light,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginBottom: theme.spacing(1),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[6],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  width: 60,
  height: 60,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Service data
  const services = [
    {
      id: "industrial-automation",
      title: intl.get("services.industrial_automation.title"),
      description: intl.get("services.industrial_automation.short_description"),
      icon: <SettingsIcon fontSize="large" />,
    },
    {
      id: "iot-services",
      title: intl.get("services.iot_services.title"),
      description: intl.get("services.iot_services.short_description"),
      icon: <DevicesIcon fontSize="large" />,
    },
    {
      id: "plc-solutions",
      title: intl.get("services.plc_solutions.title"),
      description: intl.get("services.plc_solutions.short_description"),
      icon: <StorageIcon fontSize="large" />,
    },
    {
      id: "scada-integration",
      title: intl.get("services.scada_integration.title"),
      description: intl.get("services.scada_integration.short_description"),
      icon: <SettingsIcon fontSize="large" />,
    },
    {
      id: "web-development",
      title: intl.get("services.web_development.title"),
      description: intl.get("services.web_development.short_description"),
      icon: <CodeIcon fontSize="large" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper component="section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <motion.div variants={itemVariants}>
              <SectionTitle
                variant="h6"
                color="primary"
                gutterBottom
                align="center"
              >
                {intl.get("home.services.subtitle")}
              </SectionTitle>
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {intl.get("home.services.title")}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                align="center"
                sx={{ mb: 3, maxWidth: "800px", mx: "auto" }}
              >
                {intl.get("home.services.description")}
              </Typography>
            </motion.div>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={service.id}
                display="flex"
                justifyContent="center"
              >
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard elevation={2}>
                    <CardContent
                      sx={{
                        p: 3,
                        textAlign: "center",
                        alignContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <IconWrapper>{service.icon}</IconWrapper>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 3 }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to={`/services/${service.id}`}
                        variant="outlined"
                        color="primary"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                      >
                        {intl.get("common.learn_more")}
                      </Button>
                    </CardContent>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* View All Services Link */}
          <Box textAlign="center" mt={6}>
            <motion.div variants={itemVariants}>
              <Button
                component={RouterLink}
                to="/services"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {intl.get("home.services.view_all")}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default ServicesSection;
