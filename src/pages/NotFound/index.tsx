import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import intl from "react-intl-universal";
import {
  Container,
  Box,
  Typography,
  Button,
  useTheme,
  Paper,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PageContainer from "../../components/common/PageContainer";
import { pageTransitionVariants } from "../../animations/pageTransitions";

const NotFound: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Animation for the "404" text
  const numberVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation for the circuit lines
  const circuitVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  // Log the 404 error for analytics
  useEffect(() => {
    // This would normally use your analytics utility
    console.log("404 page visited:", window.location.pathname);
  }, []);

  // Suggested pages based on common destinations
  const suggestedPages = [
    { title: intl.get("notFound.links.products"), path: "/products" },
    { title: intl.get("notFound.links.services"), path: "/services" },
    { title: intl.get("notFound.links.contact"), path: "/contact" },
    { title: intl.get("notFound.links.about"), path: "/about" },
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>{intl.get("notFound.metaTitle")} | Inclue Technologies</title>
        <meta
          name="description"
          content={intl.get("notFound.metaDescription")}
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
      >
        <Container maxWidth="lg">
          <Box my={8}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <motion.div variants={numberVariants}>
                    <Typography
                      variant="h1"
                      component="h1"
                      sx={{
                        fontSize: { xs: "5rem", sm: "8rem", md: "10rem" },
                        fontWeight: 800,
                        color: theme.palette.primary.main,
                        lineHeight: 1,
                        mb: 2,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #58CBF9 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      404
                    </Typography>
                  </motion.div>

                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color:
                        theme.palette.mode === "dark" ? "#ffffff" : "#001B2E",
                    }}
                  >
                    {intl.get("notFound.title")}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph
                    sx={{ mb: 4, maxWidth: "600px", mx: { xs: "auto", md: 0 } }}
                  >
                    {intl.get("notFound.message")}
                  </Typography>

                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    gap={2}
                    mt={4}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<ArrowBackIcon />}
                      onClick={goBack}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 500,
                      }}
                    >
                      {intl.get("notFound.goBack")}
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<HomeIcon />}
                      onClick={goHome}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 500,
                        boxShadow: 3,
                      }}
                    >
                      {intl.get("notFound.goHome")}
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      maxWidth: "450px",
                      position: "relative",
                    }}
                  >
                    {/* SVG illustration that matches Inclue's technology focus */}
                    <svg
                      viewBox="0 0 800 600"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "100%", height: "auto" }}
                    >
                      {/* Background elements */}
                      <rect
                        width="800"
                        height="600"
                        fill={
                          theme.palette.mode === "dark" ? "#121212" : "#f8f9fa"
                        }
                        fillOpacity="0.1"
                        rx="20"
                      />

                      {/* Circuit board patterns */}
                      <motion.path
                        d="M200,50 L600,50 L600,550 L200,550 Z"
                        fill="none"
                        stroke={theme.palette.primary.main}
                        strokeWidth="2"
                        strokeDasharray="10,5"
                        opacity="0.3"
                        variants={circuitVariants}
                      />

                      <motion.path
                        d="M150,150 C150,80 650,80 650,150 L650,450 C650,520 150,520 150,450 Z"
                        fill="none"
                        stroke={theme.palette.primary.main}
                        strokeWidth="3"
                        strokeOpacity="0.4"
                        variants={circuitVariants}
                      />

                      {/* Connection points */}
                      <motion.g variants={circuitVariants}>
                        <circle
                          cx="150"
                          cy="150"
                          r="8"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="650"
                          cy="150"
                          r="8"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="150"
                          cy="450"
                          r="8"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="650"
                          cy="450"
                          r="8"
                          fill={theme.palette.primary.main}
                        />
                      </motion.g>

                      {/* Server/device elements */}
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 0.8, duration: 0.5 },
                        }}
                      >
                        {/* Central "disconnected" server */}
                        <rect
                          x="350"
                          y="250"
                          width="100"
                          height="150"
                          rx="5"
                          fill={
                            theme.palette.mode === "dark"
                              ? "#2a2a2a"
                              : "#e6e6e6"
                          }
                        />
                        <rect
                          x="360"
                          y="260"
                          width="80"
                          height="20"
                          rx="2"
                          fill={
                            theme.palette.mode === "dark"
                              ? "#3a3a3a"
                              : "#d6d6d6"
                          }
                        />
                        <rect
                          x="360"
                          y="290"
                          width="80"
                          height="20"
                          rx="2"
                          fill={
                            theme.palette.mode === "dark"
                              ? "#3a3a3a"
                              : "#d6d6d6"
                          }
                        />
                        <rect
                          x="360"
                          y="320"
                          width="80"
                          height="20"
                          rx="2"
                          fill={
                            theme.palette.mode === "dark"
                              ? "#3a3a3a"
                              : "#d6d6d6"
                          }
                        />
                        <rect
                          x="360"
                          y="350"
                          width="80"
                          height="20"
                          rx="2"
                          fill={
                            theme.palette.mode === "dark"
                              ? "#3a3a3a"
                              : "#d6d6d6"
                          }
                        />

                        {/* Warning symbol */}
                        <polygon
                          points="400,230 420,260 380,260"
                          fill="#FFD700"
                          stroke={
                            theme.palette.mode === "dark"
                              ? "#2a2a2a"
                              : "#333333"
                          }
                          strokeWidth="2"
                        />
                        <text
                          x="400"
                          y="255"
                          textAnchor="middle"
                          fill="#333333"
                          fontWeight="bold"
                          fontSize="20"
                        >
                          !
                        </text>

                        {/* Broken connection lines */}
                        <path
                          d="M300,300 L350,300"
                          stroke={theme.palette.error.main}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray="1,10"
                        />
                        <path
                          d="M450,300 L500,300"
                          stroke={theme.palette.error.main}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray="1,10"
                        />
                      </motion.g>

                      {/* Data flow animations */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          transition: {
                            repeat: Infinity,
                            duration: 3,
                            delay: 1.5,
                          },
                        }}
                      >
                        <circle
                          cx="275"
                          cy="300"
                          r="5"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="250"
                          cy="300"
                          r="5"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="225"
                          cy="300"
                          r="5"
                          fill={theme.palette.primary.main}
                        />

                        <circle
                          cx="525"
                          cy="300"
                          r="5"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="550"
                          cy="300"
                          r="5"
                          fill={theme.palette.primary.main}
                        />
                        <circle
                          cx="575"
                          cy="300"
                          r="5"
                          fill={theme.palette.primary.main}
                        />
                      </motion.g>

                      {/* Text labels */}
                      <text
                        x="400"
                        y="440"
                        textAnchor="middle"
                        fill={theme.palette.text.primary}
                        fontSize="18"
                      >
                        {intl.get("notFound.imageText.disconnected")}
                      </text>
                      <text
                        x="400"
                        y="470"
                        textAnchor="middle"
                        fill={theme.palette.text.secondary}
                        fontSize="14"
                      >
                        {intl.get("notFound.imageText.pageNotFound")}
                      </text>
                    </svg>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Suggested links section */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mt: 6,
                borderRadius: 4,
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                align="center"
                sx={{ mb: 3 }}
              >
                {intl.get("notFound.suggestedLinks")}
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {suggestedPages.map((page, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate(page.path)}
                      sx={{
                        textTransform: "none",
                        fontWeight: 500,
                        py: 1.5,
                        borderRadius: 2,
                        borderColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.1)",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? "rgba(4,96,233,0.1)"
                              : "rgba(4,96,233,0.05)",
                        },
                      }}
                    >
                      {page.title}
                    </Button>
                  </Grid>
                ))}
              </Grid>

              {/* Search suggestion */}
              {/* TODO */}
              {/* <Box
                mt={4}
                textAlign="center"
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  p: 2,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  {intl.get("notFound.searchPrompt")}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SearchIcon />}
                  onClick={() => navigate("/search")}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  {intl.get("notFound.search")}
                </Button>
              </Box> */}
            </Paper>
          </Box>
        </Container>
      </motion.div>
    </PageContainer>
  );
};

export default NotFound;
