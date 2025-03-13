import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

// Import icons
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedIcon from "@mui/icons-material/Verified";
import SavingsIcon from "@mui/icons-material/Savings";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginBottom: theme.spacing(1),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: "calc(50% - 40px)",
    width: 80,
    height: 4,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1),
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  width: 70,
  height: 70,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  border: `3px solid ${theme.palette.secondary.main}`,
  boxShadow: theme.shadows[3],
}));

const BenefitsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Benefits data
  const benefits = [
    {
      title: intl.get("home.benefits.productivity.title"),
      description: intl.get("home.benefits.productivity.description"),
      icon: <SpeedIcon fontSize="large" />,
    },
    {
      title: intl.get("home.benefits.quality.title"),
      description: intl.get("home.benefits.quality.description"),
      icon: <VerifiedIcon fontSize="large" />,
    },
    {
      title: intl.get("home.benefits.cost.title"),
      description: intl.get("home.benefits.cost.description"),
      icon: <SavingsIcon fontSize="large" />,
    },
    {
      title: intl.get("home.benefits.safety.title"),
      description: intl.get("home.benefits.safety.description"),
      icon: <SecurityIcon fontSize="large" />,
    },
    {
      title: intl.get("home.benefits.data.title"),
      description: intl.get("home.benefits.data.description"),
      icon: <BarChartIcon fontSize="large" />,
    },
  ];

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
                gutterBottom
                align="center"
                color="secondary"
              >
                {intl.get("home.benefits.subtitle")}
              </SectionTitle>
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {intl.get("home.benefits.title")}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ mb: 3, maxWidth: "800px", mx: "auto", opacity: 0.9 }}
              >
                {intl.get("home.benefits.description")}
              </Typography>
            </motion.div>
          </Box>

          {/* Benefits Grid */}
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={isMobile ? 12 : benefits.length === 5 && index > 2 ? 6 : 4}
                key={index}
              >
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <BenefitCard elevation={4}>
                    <IconWrapper>{benefit.icon}</IconWrapper>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      color="primary"
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </BenefitCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default BenefitsSection;
