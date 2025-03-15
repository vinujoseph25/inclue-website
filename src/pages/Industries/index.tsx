import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
  useTheme,
  useMediaQuery,
  CardMedia,
} from "@mui/material";

import IndustryCard from "@components/industries/IndustryCard";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { fetchIndustries } from "../redux/slices/industriesSlice";
import intl from "react-intl-universal";
import CallToAction from "@/components/home/CallToAction";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";
import SEO from "@/components/common/SEO";

import industryApproachImage from "@assets/svgs/industries/approach.svg";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};
// Animation variants for page sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Industries: React.FC = () => {
  // const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const { industries, loading, error } = {
    industries: [],
    loading: false,
    error: false,
  };
  // const { industries, loading, error } = useSelector(
  //   (state: RootState) => state.industries,
  // );

  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(fetchIndustries());
  // }, [dispatch]);

  // Mock data for development
  const mockIndustries = [
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Inclue Technologies delivers innovative IoT solutions to transform patient care, operational efficiency, and healthcare management.",
      shortDescription:
        "Revolutionizing healthcare with smart, connected solutions.",
      icon: "healthcare",
      image: "/assets/images/industries/healthcare.jpg",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "Our smart factory solutions enhance productivity, quality, and safety in manufacturing operations.",
      shortDescription:
        "Automating and optimizing manufacturing operations for Industry 4.0.",
      icon: "manufacturing",
      image: "/assets/images/industries/manufacturing.jpg",
    },
  ];

  // Use mock data if API data not available
  const industriesToShow =
    industries && industries.length > 0 ? industries : mockIndustries;

  return (
    <ErrorBoundary>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SEO
          title={intl.get("industries.metaTitle")}
          description={intl.get("industries.metaDescription")}
          // TODO SEO enhancement
          // schema={{
          //   "@type": "CollectionPage",
          //   name: intl.get("industries.metaTitle"),
          //   description: intl.get("industries.metaDescription"),
          //   isPartOf: {
          //     "@type": "WebSite",
          //     name: "Inclue Technologies Private Limited",
          //     url: "https://www.incluetech.com",
          //   },
          // }}
        />

        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            py: { xs: 6, md: 10 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 800 }}>
              <Typography
                variant={isMobile ? "h3" : "h2"}
                component="h1"
                fontWeight="bold"
                gutterBottom
              >
                {intl.get("industries.title")}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ mb: 4, maxWidth: "90%", opacity: 0.9 }}
              >
                {intl.get("industries.subtitle")}
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <motion.div variants={itemVariants}>
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
              sx={{ mb: 5 }}
            >
              {intl.get("industries.sectionTitle")}
            </Typography>

            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
                <CircularProgress sx={{ color: theme.palette.primary.main }} />
              </Box>
            ) : error ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography color="error" paragraph>
                  {intl.get("error.failedToLoadIndustries")}
                </Typography>
              </Box>
            ) : (
              <Grid
                container
                spacing={isMobile ? 3 : 4}
                justifyContent={"center"}
              >
                {industriesToShow.map((industry) => (
                  <Grid item xs={12} md={4} key={industry.id}>
                    <IndustryCard
                      id={industry.id}
                      title={industry.title}
                      description={
                        industry.shortDescription || industry.description
                      }
                      image={industry.image}
                      icon={industry.icon}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </motion.div>

        {/* Approach Section */}
        <motion.div variants={itemVariants}>
          <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    color="primary"
                    fontWeight="bold"
                  >
                    {intl.get("industries.approachTitle")}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {intl.get("industries.approachDescription1")}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {intl.get("industries.approachDescription2")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      borderLeft: `4px solid ${theme.palette.primary.main}`,
                      pl: 2,
                      py: 1,
                    }}
                  >
                    {intl.get("industries.quote")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      pt: "56.25%" /* 16:9 Aspect Ratio */,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={industryApproachImage}
                      alt={intl.get("industries.approachImageAltText")}
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
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </motion.div>

        {/* Contact CTA Section */}
        <CallToAction />
      </motion.div>
    </ErrorBoundary>
  );
};

export default Industries;
