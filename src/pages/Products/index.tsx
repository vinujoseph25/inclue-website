// src/pages/Products/index.tsx
import React from "react";
import { Container, Typography, Grid, Box, useTheme } from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import PageContainer from "../../components/common/PageContainer";
import SectionTitle from "../../components/common/SectionTitle";
import ProductsHero from "../../components/products/ProductsHero";
import ProductCard from "../../components/products/ProductCard";
import ProductBenefits from "../../components/products/ProductsBenefits";
import { fadeInUp, staggerContainer } from "../../animations/pageTransitions";
import SEO from "@/components/common/SEO";

import babbleImage from "@assets/images/products/babble-product.jpg";
import babbleLiteImage from "@assets/images/products/babble-lite-product.jpg";

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
    image: babbleImage,
    features: [
      "Continuous Monitoring",
      "User-Friendly Reports",
      "Smart Data Visualizations",
      "Integrates Multiple Data Sources",
      "Intelligent Alarm Service",
      "Optimize Workflow",
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
  },
  {
    id: "babble-lite",
    name: "Babble Lite",
    slug: "babble-lite",
    shortDescription: "Streamlined IoT Platform for Small to Medium Businesses",
    description:
      "A simplified version of our flagship Babble platform, designed specifically for small to medium-sized operations that need essential monitoring and data management capabilities.",
    image: babbleLiteImage,
    features: [
      "Essential Monitoring Tools",
      "Basic Reporting",
      "Custom Dashboards",
      "Standard Protocol Support",
      "Alert Notifications",
      "Cloud Storage",
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
  },
];

const ProductsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <SEO title={intl.get("products.title")} />
      <ProductsHero />

      <Container maxWidth="lg">
        <Box my={8}>
          <SectionTitle
            title={intl.get("products.title")}
            subtitle={intl.get("products.subtitle")}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid container spacing={4} mt={4}>
              {products.map((product) => (
                <Grid item xs={12} md={6} key={product.id}>
                  <motion.div variants={fadeInUp}>
                    <ProductCard product={product} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        <Box my={10}>
          <ProductBenefits />
        </Box>
      </Container>
    </PageContainer>
  );
};

export default ProductsPage;
