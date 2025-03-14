import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ErrorBoundary from "@components/common/ErrorBoundary/ErrorBoundary";
import SEO from "@components/common/SEO";
import IndustryChallenges from "@components/industries/IndustryChallenges";
import IndustrySolutions from "@components/industries/IndustrySolutions";
import IndustryBenefits from "@components/industries/IndustryBenefits";
import ContactForm from "@/components/contact/ContactForm";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { fetchIndustryById } from "../redux/slices/industriesSlice";
import intl from "react-intl-universal";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
  const [industry, setIndustry] = useState<any>(null);

  // useEffect(() => {
  //   if (id) {
  //     // @ts-ignore
  //     dispatch(fetchIndustryById(id));
  //   }
  // }, [id, dispatch]);

  // Mock data for development (representing healthcare industry)
  const mockIndustry = {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Inclue Technologies delivers innovative IoT solutions to transform patient care, operational efficiency, and healthcare management.",
    longDescription:
      "Healthcare is being integrated with technology to make lives simpler, efficient, and effective. Modern medicine primarily utilizes the knowledge of IoT (Internet of Things) in healthcare to make it more competent, easily available, and smooth. Modern medicine has unleashed a whole new level of innovative treatment in healthcare.",
    challenges: [
      {
        title: "Data Exchange Limitations",
        description:
          "As an astronomical amount of data is produced and archived, it is increasingly difficult to log real-time patient monitoring information to healthcare repositories.",
      },
      {
        title: "Integration Complexity",
        description:
          "Though modern medicine has made equal efforts in becoming as tech-savvy as its peers, it has still not succeeded in managing big data and data exchange.",
      },
      {
        title: "Real-time Monitoring",
        description:
          "Regular monitoring devices can evaluate an abnormal condition, but often lack capabilities to upload this information in real-time.",
      },
      {
        title: "Extended Patient Care",
        description:
          "Monitoring patients remotely over extended periods of time to collect comprehensive, granular data remains a challenge.",
      },
    ],
    solutions: [
      {
        title: "Babble Health Connect",
        description:
          "Our product Babble has a unique Health Connect module with the HL7® FHIR® integration standard that regulates how information is exchanged safely and securely.",
        icon: "server",
      },
      {
        title: "FHIR Integration",
        description:
          "FHIR enables wearable IoT devices to interact with EHR in real-time and offer immediate decision support, acting as a real-time interoperability tool.",
        icon: "data",
      },
      {
        title: "Wearable Technology Support",
        description:
          "We support wearables that detect various health metrics and help in monitoring patients remotely over extended periods, providing comprehensive data collection.",
        icon: "sensors",
      },
    ],
    benefits: [
      {
        title: "Real-time Data Access",
        description:
          "Healthcare providers gain instant access to patient data, enabling faster and more informed decisions.",
      },
      {
        title: "Enhanced Patient Monitoring",
        description:
          "Continuous remote monitoring allows for earlier intervention and improved patient outcomes.",
      },
      {
        title: "Streamlined Workflows",
        description:
          "Automated data collection and integration reduces administrative burden and improves staff efficiency.",
      },
      {
        title: "Improved Patient Engagement",
        description:
          "Patients feel more connected since they are able to manage their vitals always and have greater insight into their care.",
      },
      {
        title: "Better Data Management",
        description:
          "Our solutions help eliminate barriers to healthcare data exchange, manage and organize big data, and increase patient care through smart wearables.",
      },
    ],
    image: "/assets/images/industries/healthcare.jpg",
    bgImage: "/assets/images/industries/healthcare-bg.jpg",
  };

  const mockManufacturingIndustry = {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Inclue Technologies provides cutting-edge IoT solutions to enhance manufacturing processes, improve efficiency, and ensure quality control.",
    longDescription:
      "Manufacturing is evolving with the integration of IoT technologies, enabling smarter factories, real-time monitoring, and data-driven decision-making. Our solutions help manufacturers optimize operations, reduce downtime, and increase productivity.",
    challenges: [
      {
        title: "Operational Efficiency",
        description:
          "Maintaining high levels of operational efficiency while managing complex manufacturing processes is a significant challenge.",
      },
      {
        title: "Quality Control",
        description:
          "Ensuring consistent quality control across all stages of production requires advanced monitoring and data analysis.",
      },
      {
        title: "Downtime Reduction",
        description:
          "Minimizing downtime and preventing unexpected equipment failures are critical for maintaining productivity.",
      },
      {
        title: "Supply Chain Management",
        description:
          "Managing the supply chain effectively to ensure timely delivery of materials and products is a complex task.",
      },
    ],
    solutions: [
      {
        title: "Smart Factory Solutions",
        description:
          "Our IoT solutions enable real-time monitoring and control of manufacturing processes, enhancing operational efficiency.",
        icon: "factory",
      },
      {
        title: "Predictive Maintenance",
        description:
          "Predictive maintenance solutions help prevent equipment failures by analyzing data and predicting potential issues.",
        icon: "maintenance",
      },
      {
        title: "Quality Assurance",
        description:
          "Advanced quality assurance systems ensure consistent product quality through real-time data analysis and monitoring.",
        icon: "quality",
      },
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        description:
          "Optimize manufacturing processes and reduce operational costs through real-time monitoring and data-driven insights.",
      },
      {
        title: "Enhanced Quality Control",
        description:
          "Ensure consistent product quality and reduce defects with advanced quality assurance systems.",
      },
      {
        title: "Reduced Downtime",
        description:
          "Minimize downtime and prevent unexpected equipment failures with predictive maintenance solutions.",
      },
      {
        title: "Improved Supply Chain Management",
        description:
          "Enhance supply chain visibility and ensure timely delivery of materials and products.",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Leverage real-time data to make informed decisions and continuously improve manufacturing processes.",
      },
    ],
    image: "/assets/images/industries/manufacturing.jpg",
    bgImage: "/assets/images/industries/manufacturing-bg.jpg",
  };

  useEffect(() => {
    const currentIndustry = [mockIndustry, mockManufacturingIndustry].find(
      (i: any) => i.id === id,
    );
    setIndustry(currentIndustry);
  }, [id]);

  // Use mock data while waiting for API integration
  const industryData = industry || mockIndustry;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom color="error">
          {intl.get("error.failedToLoadIndustry")}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/industries")}
          sx={{ mt: 2 }}
        >
          {intl.get("common.backToIndustries")}
        </Button>
      </Box>
    );
  }

  if (!industryData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          {intl.get("error.industryNotFound")}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/industries")}
          sx={{ mt: 2 }}
        >
          {intl.get("common.backToIndustries")}
        </Button>
      </Box>
    );
  }

  return (
    <ErrorBoundary>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <SEO
          title={`${industryData.title} | Inclue Technologies`}
          description={industryData.description}
          // schema={{
          //   "@type": "Service",
          //   name: `${industryData.title} Solutions`,
          //   description: industryData.description,
          //   provider: {
          //     "@type": "Organization",
          //     name: "Inclue Technologies Private Limited",
          //     logo: "https://www.incluetech.com/logo.png",
          //   },
          // }}
        />

        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            py: { xs: 6, md: 12 },
            position: "relative",
            overflow: "hidden",
            backgroundImage: industryData.bgImage
              ? `url(${industryData.bgImage})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 27, 46, 0.85)", // Using Midnight Blue with opacity
              zIndex: 1,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant={isMobile ? "h3" : "h2"}
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                >
                  {intl.get("industries.solutions")} {industryData.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ mb: 4, maxWidth: "90%" }}
                >
                  {industryData.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    bgcolor: theme.palette.secondary.main,
                    "&:hover": {
                      bgcolor: theme.palette.secondary.dark,
                    },
                  }}
                  onClick={() => {
                    const contactFormElement =
                      document.getElementById("contact-form");
                    if (contactFormElement) {
                      contactFormElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {intl.get("common.getStarted")}
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Overview Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            {intl.get("industries.overview")}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "1.1rem", maxWidth: "90%" }}
          >
            {/* {industryData.longDescription} */}
            "Healthcare is being integrated with technology to make lives
            simpler, efficient, and effective. Modern medicine primarily
            utilizes the knowledge of IoT (Internet of Things) in healthcare to
            make it more competent, easily available, and smooth. Modern
            medicine has unleashed a whole new level of innovative treatment in
            healthcare."
          </Typography>
        </Container>

        {/* Challenges Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
              sx={{ mb: 5 }}
            >
              {intl.get("industries.challenges")}
            </Typography>
            <IndustryChallenges challenges={industryData.challenges} />
          </Container>
        </Box>

        {/* Solutions Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            fontWeight="bold"
            sx={{ mb: 5 }}
          >
            {intl.get("industries.ourSolutions")}
          </Typography>
          <IndustrySolutions solutions={industryData.solutions} />
        </Container>

        {/* Benefits Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
              sx={{ mb: 5 }}
            >
              {intl.get("industries.benefits")}
            </Typography>
            <IndustryBenefits benefits={industryData.benefits} />
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Container
          id="contact-form"
          maxWidth="md"
          sx={{ py: { xs: 6, md: 10 } }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
            >
              {intl.get("industries.getInTouch")}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto" }}>
              {intl.get("industries.contactDescription")}
            </Typography>
          </Box>
          <ContactForm type={industryData.title} />
        </Container>
      </motion.div>
    </ErrorBoundary>
  );
};

export default IndustryDetail;
