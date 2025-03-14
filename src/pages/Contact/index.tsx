// src/pages/Contact/index.tsx
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import ContactForm from "../../components/contact/ContactForm";
import LocationMap from "../../components/contact/LocationMap";
import ContactInfo from "../../components/contact/ContactInfo";
import PageContainer from "../../components/common/PageContainer";
import SectionTitle from "../../components/common/SectionTitle";
import { fadeInUp, staggerContainer } from "../../animations/pageTransitions";
import SEO from "@/components/common/SEO";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageContainer>
      <SEO
        title={intl.get("contact.seo.title")}
        description={intl.get("contact.seo.description")}
      />
      <Container maxWidth="lg">
        <Box my={8}>
          <SectionTitle
            title={intl.get("contact.title")}
            subtitle={intl.get("contact.subtitle")}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid container spacing={4} mt={6}>
              <Grid item xs={12} md={5}>
                <motion.div variants={fadeInUp}>
                  <ContactInfo />
                </motion.div>
              </Grid>

              <Grid item xs={12} md={7}>
                <motion.div variants={fadeInUp}>
                  <ContactForm />
                </motion.div>
              </Grid>

              <Grid item xs={12} sx={{ mt: 6 }}>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h5"
                    component="h3"
                    fontWeight="bold"
                    mb={3}
                    color="primary"
                  >
                    {intl.get("contact.locationTitle")}
                  </Typography>
                  <Box
                    sx={{
                      height: isMobile ? "300px" : "450px",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <LocationMap />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default ContactPage;
