import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

// Import icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import manufacturingImage from "@assets/images/industries/manufacturing.jpg";
import healthcareImage from "@assets/images/industries/healthcare.jpg";

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

const IndustryCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  overflow: "hidden",
  borderRadius: theme.spacing(1),
  position: "relative",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const CardOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(to top, ${alpha(theme.palette.common.black, 0.8)}, ${alpha(theme.palette.common.black, 0.2)})`,
  zIndex: 1,
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  marginTop: "auto",
  color: theme.palette.common.white,
}));

const IndustriesSection: React.FC = () => {
  const theme = useTheme();

  // Industry data
  const industries = [
    {
      id: "manufacturing",
      title: intl.get("industries.manufacturing.title"),
      description: intl.get("industries.manufacturing.short_description"),
      image: manufacturingImage,
    },
    {
      id: "healthcare",
      title: intl.get("industries.healthcare.title"),
      description: intl.get("industries.healthcare.short_description"),
      image: healthcareImage,
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
    <Box component="section" sx={{ py: 8 }}>
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
                {intl.get("home.industries.subtitle")}
              </SectionTitle>
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {intl.get("home.industries.title")}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                align="center"
                sx={{ mb: 3, maxWidth: "800px", mx: "auto" }}
              >
                {intl.get("home.industries.description")}
              </Typography>
            </motion.div>
          </Box>

          {/* Industries Grid */}
          <Grid container spacing={4}>
            {industries.map((industry, index) => (
              <Grid item xs={12} md={6} key={industry.id}>
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <IndustryCard>
                    <CardMedia
                      component="img"
                      height="300"
                      image={industry.image}
                      alt={industry.title}
                    />
                    <CardOverlay />
                    <CardContentStyled>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {industry.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        paragraph
                        sx={{ mb: 3, opacity: 0.9 }}
                      >
                        {industry.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to={`/industries/${industry.id}`}
                        variant="outlined"
                        color="secondary"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: "white",
                          borderColor: "white",
                          "&:hover": {
                            borderColor: "white",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        {intl.get("common.learn_more")}
                      </Button>
                    </CardContentStyled>
                  </IndustryCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* View All Industries Link */}
          <Box textAlign="center" mt={6}>
            <motion.div variants={itemVariants}>
              <Button
                component={RouterLink}
                to="/industries"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {intl.get("home.industries.explore_solutions")}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default IndustriesSection;
