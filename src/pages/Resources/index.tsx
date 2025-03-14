// src/pages/Resources/index.tsx
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";

import PageContainer from "../../components/common/PageContainer";
import SectionTitle from "../../components/common/SectionTitle";
import ResourcesHero from "../../components/resources/ResourcesHero";
import BlogList from "../../components/resources/BlogList";
import CaseStudyList from "../../components/resources/CaseStudyList";
import WhitepaperList from "../../components/resources/WhitepaperList";
import FaqList from "../../components/resources/FaqList";
import { fadeInUp, staggerContainer } from "../../animations/pageTransitions";
import SEO from "@/components/common/SEO";

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
      id={`resources-tabpanel-${index}`}
      aria-labelledby={`resources-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 4 }}>{children}</Box>}
    </div>
  );
};

// A11y props for tabs
function a11yProps(index: number) {
  return {
    id: `resources-tab-${index}`,
    "aria-controls": `resources-tabpanel-${index}`,
  };
}

const ResourcesPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  // Get tab from URL or default to 0
  const getInitialTab = () => {
    const hash = location.hash.replace("#", "");
    switch (hash) {
      case "blog":
        return 0;
      case "case-studies":
        return 1;
      case "whitepapers":
        return 2;
      case "faqs":
        return 3;
      default:
        return 3;
      //TODO
      // return 0;
    }
  };

  const [tabValue, setTabValue] = React.useState(getInitialTab);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);

    // Update URL hash
    const hash = ["blog", "case-studies", "whitepapers", "faqs"][newValue];
    navigate(`#${hash}`, { replace: true });
  };

  return (
    <PageContainer>
      <SEO
        title={intl.get("resources.seo.title")}
        description={intl.get("resources.seo.description")}
      />
      <ResourcesHero />

      <Container maxWidth="lg">
        <Box my={8}>
          <SectionTitle
            title={intl.get("resources.title")}
            subtitle={intl.get("resources.subtitle")}
          />

          <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 6 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="resources tabs"
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
              {/* 
              //TODO
              <Tab label={intl.get("resources.tabs.blog")} {...a11yProps(0)} />
              <Tab
                label={intl.get("resources.tabs.caseStudies")}
                {...a11yProps(1)}
              />
              <Tab
                label={intl.get("resources.tabs.whitepapers")}
                {...a11yProps(2)}
              /> */}
              <Tab label={intl.get("resources.tabs.faqs")} {...a11yProps(3)} />
            </Tabs>
          </Box>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <TabPanel value={tabValue} index={0}>
              <motion.div variants={fadeInUp}>
                <BlogList />
              </motion.div>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <motion.div variants={fadeInUp}>
                <CaseStudyList />
              </motion.div>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <motion.div variants={fadeInUp}>
                <WhitepaperList />
              </motion.div>
            </TabPanel>

            <TabPanel value={tabValue} index={3}>
              <motion.div variants={fadeInUp}>
                <FaqList />
              </motion.div>
            </TabPanel>
          </motion.div>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default ResourcesPage;
