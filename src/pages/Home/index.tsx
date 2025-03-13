import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

import SEO from "../../components/common/SEO";
import PageContainer from "../../components/common/PageContainer";
import HeroSection from "../../components/home/HeroSection";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import ServicesSection from "../../components/home/ServicesSection";
import IndustriesSection from "../../components/home/IndustriesSection";
import BenefitsSection from "../../components/home/BenefitsSection";
import ClientsSection from "../../components/home/ClientsSection";
import CallToAction from "@/components/home/CallToAction";

const HomePage: React.FC = () => {
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

  return (
    <PageContainer>
      <SEO
        title={intl.get("home.seo.title")}
        description={intl.get("home.seo.description")}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        {/* Featured Products Section */}
        <motion.div variants={itemVariants}>
          <FeaturedProducts />
        </motion.div>

        {/* Services Section */}
        <motion.div variants={itemVariants}>
          <ServicesSection />
        </motion.div>

        {/* Industries Section */}
        <motion.div variants={itemVariants}>
          <IndustriesSection />
        </motion.div>

        {/* Benefits Section */}
        <motion.div variants={itemVariants}>
          <BenefitsSection />
        </motion.div>

        {/* Clients Section */}
        <motion.div variants={itemVariants}>
          <ClientsSection />
        </motion.div>

        {/* Call to Action Section */}
        <motion.div variants={itemVariants}>
          <CallToAction />
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default HomePage;
