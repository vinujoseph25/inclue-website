// src/pages/Services/index.tsx
import React from "react";
import { Container, Box, Grid } from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import SEO from "@/components/common/SEO";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import IndustryOverview from "@/components/services/IndustryOverview";
import TestimonialCarousel from "@/components/services/TestimonialCarousel";
import CallToAction from "@/components/home/CallToAction";
import { fadeInUp, staggerContainer } from "../../animations/pageTransitions";

import industrialAutomationImage from "@assets/svgs/services/industrial-automation.svg";
import customIotImage from "@assets/svgs/services/custom-iot.svg";
import plcSolutionImage from "@assets/svgs/services/plc-solutions.svg";
import scadaIntegrationImage from "@assets/svgs/services/scada-integration.svg";
import webDevelopmentImage from "@assets/svgs/services/web-development.svg";

// Mock services data - in a real app, this would come from an API or Redux store
const services = [
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    description:
      "Comprehensive automation solutions for manufacturing facilities, including PLCs, Sensors, and HMIs to enhance productivity and efficiency.",
    icon: "factory",
    image: industrialAutomationImage,
    features: [
      "PLC Design & Programming",
      "Industrial Automation Sensors",
      "Human-Machine Interfaces (HMI)",
      "SCADA System Integration",
      "Industrial Drives",
      "Factory Automation",
    ],
  },
  {
    id: "custom-iot",
    title: "Custom IoT",
    description:
      "Tailored IoT implementation to connect your devices and equipment, providing real-time monitoring, data collection, and actionable insights.",
    icon: "devices",
    image: customIotImage,
    features: [
      "IoT System Architecture",
      "Sensor & Device Integration",
      "IoT Data Analytics",
      "Custom IoT Dashboard",
      "Edge Computing Solutions",
      "Secure IoT Networks",
    ],
  },
  {
    id: "plc-solutions",
    title: "PLC Solutions",
    description:
      "Expert design and implementation of Programmable Logic Controllers for industrial facilities to control machines and processes with precision.",
    icon: "memory",
    image: plcSolutionImage,
    features: [
      "Custom PLC Programming",
      "PLC Hardware Selection",
      "Control System Design",
      "PLC Retrofitting",
      "Remote Monitoring Systems",
      "PLC Troubleshooting",
    ],
  },
  {
    id: "scada-integration",
    title: "SCADA Integration",
    description:
      "Seamless integration of SCADA systems to monitor and control industrial processes, ensuring optimal performance and reliability.",
    icon: "settings_input_component",
    image: scadaIntegrationImage,
    features: [
      "SCADA System Design",
      "Real-time Data Acquisition",
      "Remote Monitoring & Control",
      "Alarm Management",
      "Historical Data Analysis",
      "SCADA System Maintenance",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive web applications tailored to your business needs, with seamless API integration and secure hosting solutions.",
    icon: "code",
    image: webDevelopmentImage,
    features: [
      "Custom Web Applications",
      "API Development & Integration",
      "React & TypeScript Development",
      "Responsive UI/UX Design",
      "Database Design",
      "Deployment & Hosting",
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <PageContainer>
      <SEO
        title={`${intl.get("services.pageTitle")} | Inclue Technologies`}
        description={intl.get("services.metaDescription")}
        keywords={intl.get("services.metaKeywords")}
      />

      <ServicesHero />

      <Container maxWidth="lg">
        <Box my={8}>
          <SectionTitle
            title={intl.get("services.title")}
            subtitle={intl.get("services.subtitle")}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid container spacing={4} mt={4} justifyContent={"center"}>
              {services.map((service) => (
                <Grid item xs={12} md={6} key={service.id}>
                  <motion.div variants={fadeInUp}>
                    <ServiceCard service={service} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        <Box my={10}>
          <ProcessTimeline />
        </Box>

        <Box my={10}>
          <IndustryOverview />
        </Box>

        {/* TODO */}
        {/* <Box my={10}>
          <TestimonialCarousel />
        </Box> */}
      </Container>
      <Box>
        <CallToAction />
      </Box>
    </PageContainer>
  );
};

export default ServicesPage;
