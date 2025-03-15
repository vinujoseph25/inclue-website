import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import intl from "react-intl-universal";
import { Container, Typography, Box, Divider, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageContainer from "@components/common/PageContainer";
import TermsSection from "@components/legal/TermsSection";
import SectionTitle from "@components/common/SectionTitle";
import { pageTransitionVariants } from "@/animations/pageTransitions";

const TermsOfService: React.FC = () => {
  const theme = useTheme();

  // Sections for Terms of Service
  const sections = [
    {
      id: "acceptance",
      title: intl.get("terms.sections.acceptance.title"),
      content: intl.get("terms.sections.acceptance.content"),
    },
    {
      id: "services",
      title: intl.get("terms.sections.services.title"),
      content: intl.get("terms.sections.services.content"),
    },
    {
      id: "intellectual-property",
      title: intl.get("terms.sections.intellectualProperty.title"),
      content: intl.get("terms.sections.intellectualProperty.content"),
    },
    {
      id: "user-accounts",
      title: intl.get("terms.sections.userAccounts.title"),
      content: intl.get("terms.sections.userAccounts.content"),
    },
    {
      id: "prohibited-uses",
      title: intl.get("terms.sections.prohibitedUses.title"),
      content: intl.get("terms.sections.prohibitedUses.content"),
    },
    {
      id: "limitation-liability",
      title: intl.get("terms.sections.limitationLiability.title"),
      content: intl.get("terms.sections.limitationLiability.content"),
    },
    {
      id: "termination",
      title: intl.get("terms.sections.termination.title"),
      content: intl.get("terms.sections.termination.content"),
    },
    {
      id: "governing-law",
      title: intl.get("terms.sections.governingLaw.title"),
      content: intl.get("terms.sections.governingLaw.content"),
    },
    {
      id: "changes",
      title: intl.get("terms.sections.changes.title"),
      content: intl.get("terms.sections.changes.content"),
    },
    {
      id: "contact",
      title: intl.get("terms.sections.contact.title"),
      content: intl.get("terms.sections.contact.content"),
    },
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>{intl.get("terms.metaTitle")} | Inclue Technologies</title>
        <meta name="description" content={intl.get("terms.metaDescription")} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
      >
        <Container maxWidth="lg">
          <Box my={6}>
            <SectionTitle
              title={intl.get("terms.title")}
              subtitle={intl.get("terms.subtitle")}
            />

            <Paper
              elevation={0}
              sx={{
                p: 4,
                mt: 4,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.02)",
                borderRadius: 2,
              }}
            >
              <Typography variant="body2" color="text.secondary" paragraph>
                {intl.get("terms.lastUpdated", { date: "March 15, 2025" })}
              </Typography>

              <Box mb={4}>
                <Typography variant="body1" paragraph>
                  {intl.get("terms.introduction")}
                </Typography>
              </Box>

              <Divider sx={{ mb: 4 }} />

              {/* Table of Contents */}
              <Box mb={6}>
                <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                  {intl.get("terms.tableOfContents")}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {sections.map((section) => (
                    <Typography component="li" key={section.id} sx={{ mb: 1 }}>
                      <Box
                        component="a"
                        href={`#${section.id}`}
                        sx={{
                          color: theme.palette.primary.main,
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {section.title}
                      </Box>
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Terms Sections */}
              {sections.map((section, index) => (
                <TermsSection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  content={section.content}
                  isLast={index === sections.length - 1}
                />
              ))}
            </Paper>
          </Box>
        </Container>
      </motion.div>
    </PageContainer>
  );
};

export default TermsOfService;
