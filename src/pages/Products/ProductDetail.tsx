// src/pages/Products/ProductDetail.tsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Button,
  Paper,
  Divider,
  Tabs,
  Tab,
  Breadcrumbs,
  Skeleton,
  Alert,
} from "@mui/material";
import { Link, useParams, Navigate } from "react-router-dom";
import intl from "react-intl-universal";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import PageContainer from "../../components/common/PageContainer";
import ProductFeatures from "../../components/products/ProductFeatures";
import ProductSpecs from "../../components/products/ProductSpecs";
import ProductFaq from "../../components/products/ProductFaq";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "../../animations/pageTransitions";
import SEO from "@/components/common/SEO";

// Mock product data
// In a real app, this would come from your API or Redux store
const products = [
  {
    id: "babble",
    name: "Babble",
    slug: "babble",
    shortDescription: "Smart Factory Management System",
    description:
      "A next-generation intelligent end-to-end IIOT platform focused on Industry 4.0. Babble monitors every detail of your production process in real-time, increasing productivity and efficiency.",
    longDescription:
      "Babble is a smart factory management system designed to transform your manufacturing operations. As a next-generation intelligent end-to-end IIOT platform focused on Industry 4.0, Babble provides comprehensive visibility and control over your entire production process. By monitoring the smallest details in real-time around the clock, Babble helps increase productivity, enhance efficiency, and eliminate unnecessary downtime by identifying production and service issues before they become major problems.",
    image: "/assets/images/products/babble.jpg",
    detailImages: [
      "/assets/images/products/babble-detail-1.jpg",
      "/assets/images/products/babble-detail-2.jpg",
      "/assets/images/products/babble-detail-3.jpg",
    ],
    features: [
      {
        title: "Continuous Monitoring",
        description:
          "Connect all devices to Babble and monitor them 24/7. Real-time and historical visualization of device status and data.",
      },
      {
        title: "User-Friendly Reports",
        description:
          "Aggregate data into presentable reports for analysis and decision-making.",
      },
      {
        title: "Smart Data Visualizations",
        description:
          "Powerful data visualization techniques enable effective system understanding using modern charts with custom dashboards.",
      },
      {
        title: "Integrates Multiple Data Sources",
        description:
          "Babble supports several industry protocols and other popular data sources. Supports scheduled data collection and data extraction, transformation, and loading methods.",
      },
      {
        title: "Intelligent Alarm Service",
        description:
          "Intelligent and custom alarms to detect and notify anomalies. Combined techniques are provided to filter critical alerts.",
      },
      {
        title: "Optimize Workflow",
        description:
          "Benchmarks operational performance against others yields specific data that determines whether the needed ROI was achieved and identifies the methods to enhance the performance.",
      },
    ],
    benefits: [
      {
        title: "Overall Process Monitoring and Control",
        description:
          "Monitor the entire plant process in a single window and initiate control sequences as needed for efficient workflow management.",
      },
      {
        title: "Process Benchmarking",
        description:
          "Calculate equipment efficiency, usage, and time to optimally allocate resources, set priorities, and gain a critical competitive advantage.",
      },
      {
        title: "Accurate and Timely Alarm",
        description:
          "Analyze and monitor production processes to effectively detect abnormalities and notify them on time.",
      },
      {
        title: "Efficient Raw Material Management",
        description:
          "Efficiently manage raw materials to streamline production and avoid unnecessary waste. As a result, the return on investment can be increased.",
      },
    ],
    specs: {
      systemRequirements: [
        "Server: 64-bit Windows Server 2019 or newer",
        "Processor: Intel Xeon or AMD EPYC (8+ cores recommended)",
        "Memory: 16GB RAM minimum (32GB+ recommended)",
        "Storage: 500GB SSD minimum",
        "Network: Gigabit Ethernet",
      ],
      supportedProtocols: [
        "OPC UA",
        "MQTT",
        "Modbus TCP/IP",
        "EtherNet/IP",
        "PROFINET",
        "BACnet",
        "REST API",
      ],
      security: [
        "Role-based access control",
        "SSL/TLS encryption",
        "Data encryption at rest",
        "Audit trail logging",
        "Single Sign-On (SSO) support",
      ],
      deployment: ["On-premises", "Cloud-based", "Hybrid"],
    },
    faqs: [
      {
        question: "How long does it take to implement Babble?",
        answer:
          "The implementation timeline for Babble typically ranges from 4-8 weeks depending on the complexity of your operations, the number of devices to be connected, and your specific customization requirements. Our implementation team works closely with your staff to ensure a smooth deployment with minimal disruption to your ongoing operations.",
      },
      {
        question: "Can Babble integrate with my existing systems?",
        answer:
          "Yes, Babble is designed with interoperability in mind and supports a wide range of industry-standard protocols and interfaces. It can integrate with your existing ERP, MES, SCADA, and other business systems to provide a unified view of your operations. Our team conducts a thorough assessment of your current infrastructure to determine the best integration approach.",
      },
      {
        question:
          "What kind of support does Inclue provide after implementation?",
        answer:
          "We offer comprehensive support including 24/7 technical assistance, regular software updates, preventive maintenance, and ongoing training. Our service level agreements (SLAs) are tailored to your needs, ensuring you receive the right level of support. We also provide a customer success manager who serves as your dedicated point of contact and advocates for your organization.",
      },
      {
        question: "Is Babble scalable as my business grows?",
        answer:
          "Absolutely! Babble is built on a modular, scalable architecture that can grow with your business. You can start with core functionality and add modules as needed. The platform supports everything from small production lines to multiple plants across different geographical locations. As you expand, Babble's performance remains consistent, ensuring you maintain visibility and control over your growing operations.",
      },
    ],
  },
  {
    id: "babble-lite",
    name: "Babble Lite",
    slug: "babble-lite",
    shortDescription: "Streamlined IoT Platform for Small to Medium Businesses",
    description:
      "A simplified version of our flagship Babble platform, designed specifically for small to medium-sized operations that need essential monitoring and data management capabilities.",
    longDescription:
      "Babble Lite is a streamlined IoT platform designed specifically for small to medium-sized businesses that want to leverage the power of industrial IoT without the complexity and cost of a full-scale implementation. Building on the core technologies of our flagship Babble platform, Babble Lite offers essential monitoring and data management capabilities that provide immediate value while maintaining an upgrade path as your operations grow and your requirements become more sophisticated.",
    image: "/assets/images/products/babble-lite.jpg",
    detailImages: [
      "/assets/images/products/babble-lite-detail-1.jpg",
      "/assets/images/products/babble-lite-detail-2.jpg",
      "/assets/images/products/babble-lite-detail-3.jpg",
    ],
    features: [
      {
        title: "Essential Monitoring Tools",
        description:
          "Monitor critical equipment and processes with straightforward setup and configuration, providing visibility into your operation's performance.",
      },
      {
        title: "Basic Reporting",
        description:
          "Generate standard reports on key performance indicators with export options for further analysis.",
      },
      {
        title: "Custom Dashboards",
        description:
          "Create simple, focused dashboards that display the most important metrics for your operation.",
      },
      {
        title: "Standard Protocol Support",
        description:
          "Connect to devices using common industrial protocols like Modbus, OPC UA, and MQTT.",
      },
      {
        title: "Alert Notifications",
        description:
          "Receive notifications when monitored parameters exceed defined thresholds via email or SMS.",
      },
      {
        title: "Cloud Storage",
        description:
          "Store historical data securely in the cloud with basic retention policies.",
      },
    ],
    benefits: [
      {
        title: "Affordable Entry Point",
        description:
          "Get started with industrial IoT at a price point designed for smaller operations with growth potential.",
      },
      {
        title: "Simplified Implementation",
        description:
          "Quick setup and configuration with minimal IT resource requirements.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Easily upgrade to the full Babble platform as your operations and requirements grow.",
      },
      {
        title: "Core Efficiency Improvements",
        description:
          "Focus on the most important aspects of production monitoring to achieve immediate ROI.",
      },
    ],
    specs: {
      systemRequirements: [
        "Server: Windows 10/11 or Windows Server 2019+",
        "Processor: 4+ core modern CPU",
        "Memory: 8GB RAM minimum",
        "Storage: 250GB SSD minimum",
        "Network: 100Mbps+ connection",
      ],
      supportedProtocols: ["Modbus TCP/IP", "OPC UA", "MQTT", "REST API"],
      security: [
        "Basic user authentication",
        "HTTPS encryption",
        "Data backup and recovery",
        "Access control lists",
      ],
      deployment: ["Cloud-based", "On-premises (limited)"],
    },
    faqs: [
      {
        question: "What's the difference between Babble and Babble Lite?",
        answer:
          "Babble Lite offers core monitoring and reporting functionality at a more accessible price point, while the full Babble platform provides advanced analytics, broader protocol support, extensive customization options, and enterprise-grade scalability. Babble Lite is ideal for smaller operations with focused needs, while Babble is designed for complex environments requiring comprehensive capabilities.",
      },
      {
        question:
          "Can I upgrade from Babble Lite to the full Babble platform later?",
        answer:
          "Yes, we've designed Babble Lite with a clear upgrade path to the full Babble platform. Your data, configurations, and integrations will transfer smoothly, allowing you to expand your capabilities as your business needs evolve without losing your initial investment.",
      },
      {
        question: "How quickly can Babble Lite be implemented?",
        answer:
          "Babble Lite typically can be implemented in 2-4 weeks, with many basic configurations ready in as little as one week. The streamlined design and focused feature set allow for faster deployment compared to the full Babble platform.",
      },
      {
        question: "What support options are available for Babble Lite?",
        answer:
          "Babble Lite comes with standard business-hours support, including email and phone assistance, online knowledge base access, and regular software updates. Premium support packages with extended hours and faster response times are available as add-ons.",
      },
    ],
  },
];

// Tab panel component
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 4 }}>{children}</Box>}
    </div>
  );
};

// A11y props for tabs
function a11yProps(index: number) {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  };
}

const ProductDetailPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [tabValue, setTabValue] = useState(0);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // In a real app, you would fetch from API
        // const response = await fetch(`/api/products/${slug}`);
        // const data = await response.json();

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundProduct = products.find((p) => p.id === id);
        setProduct(foundProduct || null);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // If product not found
  if (!loading && !product && !error) {
    return <Navigate to="/products" replace />;
  }

  return (
    <PageContainer>
      <SEO title={product ? product.name : intl.get("products.title")} />
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mt: 2, mb: 4 }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            {intl.get("common.home")}
          </Link>
          <Link
            to="/products"
            style={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <InventoryIcon sx={{ mr: 0.5 }} fontSize="small" />
            {intl.get("products.breadcrumb")}
          </Link>
          {product && (
            <Typography
              color="text.primary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {product.name}
            </Typography>
          )}
        </Breadcrumbs>

        {/* Loading state */}
        {loading && (
          <Box sx={{ my: 4 }}>
            <Skeleton
              variant="rectangular"
              height={400}
              sx={{ borderRadius: 2, mb: 4 }}
            />
            <Skeleton variant="text" height={60} width="50%" sx={{ mb: 2 }} />
            <Skeleton variant="text" height={20} width="80%" />
            <Skeleton variant="text" height={20} width="70%" />
            <Skeleton variant="text" height={20} width="75%" />
          </Box>
        )}

        {/* Error state */}
        {error && (
          <Alert severity="error" sx={{ my: 4 }}>
            {intl.get("products.detailError")}
          </Alert>
        )}

        {/* Product detail */}
        {product && !loading && !error && (
          <>
            <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "transparent",
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 3,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                      }}
                    />
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <Typography
                    variant="overline"
                    color="primary"
                    fontWeight="bold"
                  >
                    {product.shortDescription}
                  </Typography>

                  <Typography
                    variant="h3"
                    component="h1"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mt: 1 }}
                  >
                    {product.name}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 4 }}>
                    {product.longDescription}
                  </Typography>

                  <Divider sx={{ mb: 4 }} />

                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      component={Link}
                      to="/contact?demo=true"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ fontWeight: "bold", py: 1.5 }}
                    >
                      {intl.get("products.requestDemo")}
                    </Button>

                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      color="primary"
                      size="large"
                      sx={{ fontWeight: "bold", py: 1.5 }}
                    >
                      {intl.get("products.contactSales")}
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            {/* Tabs navigation */}
            <Box sx={{ width: "100%", mb: 6 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="product tabs"
                  variant={isMobile ? "scrollable" : "fullWidth"}
                  scrollButtons={isMobile ? "auto" : undefined}
                  allowScrollButtonsMobile
                  centered={!isMobile}
                  sx={{
                    "& .MuiTab-root": {
                      fontWeight: 600,
                      fontSize: "1rem",
                    },
                  }}
                >
                  <Tab
                    label={intl.get("products.tabs.features")}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={intl.get("products.tabs.specifications")}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={intl.get("products.tabs.faq")}
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>

              <TabPanel value={tabValue} index={0}>
                <ProductFeatures
                  features={product.features}
                  benefits={product.benefits}
                />
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <ProductSpecs specs={product.specs} />
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <ProductFaq faqs={product.faqs} />
              </TabPanel>
            </Box>
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default ProductDetailPage;
