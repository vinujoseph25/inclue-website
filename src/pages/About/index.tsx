import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

import SEO from "../../components/common/SEO";
import PageContainer from "../../components/common/PageContainer";
import CompanyHistory from "../../components/about/CompanyHistory";
import MissionVision from "../../components/about/MissionVision";
import TeamSection from "../../components/about/TeamSection";

const AboutPage: React.FC = () => {
  // Animation variants for page elements
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageContainer>
      <SEO
        title={intl.get("about.seo.title")}
        description={intl.get("about.seo.description")}
      />

      <motion.div initial="initial" animate="animate" variants={pageVariants}>
        {/* Hero Section */}
        <Box
          py={10}
          bgcolor="primary.main"
          color="common.white"
          textAlign="center"
          mb={6}
        >
          <Container maxWidth="md">
            <motion.div variants={childVariants}>
              <Typography variant="h2" component="h1" gutterBottom>
                {intl.get("about.hero.title")}
              </Typography>
              <Typography variant="h5" paragraph>
                {intl.get("about.hero.subtitle")}
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Company History Section */}
        <motion.div variants={childVariants}>
          <CompanyHistory />
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div variants={childVariants}>
          <MissionVision />
        </motion.div>

        {/* Team Section (if applicable) */}
        <motion.div variants={childVariants}>
          <TeamSection />
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default AboutPage;
