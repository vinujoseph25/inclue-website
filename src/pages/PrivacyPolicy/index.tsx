import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Divider,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ErrorBoundary from "@components/common/ErrorBoundary/ErrorBoundary";
import SEO from "@components/common/SEO";
import { PolicySection } from "@components/legal/PolicySection";
import { UpdatedDate } from "@components/legal/UpdatedDate";
import { ContactLegal } from "@components/legal/ContactLegal";
import intl from "react-intl-universal";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const PrivacyPolicy: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Last updated date - would typically come from CMS or configuration
  const lastUpdated = new Date("2025-03-01");

  return (
    <ErrorBoundary>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <SEO
          title={
            intl.get("privacy.metaTitle") ||
            "Privacy Policy | Inclue Technologies"
          }
          description={
            intl.get("privacy.metaDescription") ||
            "Learn about how Inclue Technologies collects, uses, and protects your personal information."
          }
          //   schema={{
          //     "@type": "WebPage",
          //     name: intl.get("privacy.metaTitle") || "Privacy Policy",
          //     description:
          //       intl.get("privacy.metaDescription") ||
          //       "Learn about how Inclue Technologies collects, uses, and protects your personal information.",
          //     isPartOf: {
          //       "@type": "WebSite",
          //       name: "Inclue Technologies",
          //       url: "https://www.incluetech.com",
          //     },
          //   }}
        />

        {/* <Box sx={{ bgcolor: "background.paper", py: 2 }}>
          <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
              <Link component={RouterLink} to="/" color="inherit">
                {intl.get("common.home") || "Home"}
              </Link>
              <Typography color="text.primary">
                {intl.get("privacy.title") || "Privacy Policy"}
              </Typography>
            </Breadcrumbs>
          </Container>
        </Box> */}

        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            {intl.get("privacy.title") || "Privacy Policy"}
          </Typography>

          <UpdatedDate date={lastUpdated} />

          <Box sx={{ my: 4 }}>
            <Typography variant="body1" paragraph>
              {intl.get("privacy.introduction") ||
                'At Inclue Technologies Private Limited ("Inclue Technologies," "we," "us," or "our"), we are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our products or services, or interact with us in any way.'}
            </Typography>
            <Typography variant="body1" paragraph>
              {intl.get("privacy.pleaseRead") ||
                "Please read this Privacy Policy carefully. By accessing or using our website, products, or services, you acknowledge that you have read, understood, and agree to be bound by the terms described in this policy."}
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <PolicySection
            title={
              intl.get("privacy.sections.informationCollect.title") ||
              "Information We Collect"
            }
            content={[
              intl.get("privacy.sections.informationCollect.personalInfo") ||
                "Personal Information: When you request information, purchase products or services, register for events, or otherwise interact with us, we may collect personal information such as your name, job title, company name, email address, phone number, and mailing address.",
              intl.get("privacy.sections.informationCollect.technical") ||
                "Technical Information: We automatically collect certain information when you visit our website, including your IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data.",
              intl.get("privacy.sections.informationCollect.usage") ||
                "Usage Information: We collect information about how you interact with our website, products, and services, including the pages you visit, the features you use, and the actions you take.",
              intl.get("privacy.sections.informationCollect.cookies") ||
                "Cookies and Similar Technologies: We use cookies, web beacons, and similar technologies to collect information about your browsing behavior and preferences.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.useInfo.title") ||
              "How We Use Your Information"
            }
            content={[
              intl.get("privacy.sections.useInfo.provideServices") ||
                "To provide and maintain our products and services;",
              intl.get("privacy.sections.useInfo.process") ||
                "To process transactions and send related information, including confirmations and invoices;",
              intl.get("privacy.sections.useInfo.support") ||
                "To provide customer support and respond to your inquiries;",
              intl.get("privacy.sections.useInfo.personalize") ||
                "To personalize your experience and deliver content and product offerings relevant to your interests;",
              intl.get("privacy.sections.useInfo.improve") ||
                "To improve our website, products, and services;",
              intl.get("privacy.sections.useInfo.communicate") ||
                "To communicate with you about products, services, and events that might be of interest to you;",
              intl.get("privacy.sections.useInfo.research") ||
                "To conduct research and analysis to better understand how users access and use our products and services;",
              intl.get("privacy.sections.useInfo.comply") ||
                "To comply with legal obligations and resolve any disputes.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.shareInfo.title") ||
              "How We Share Your Information"
            }
            content={[
              intl.get("privacy.sections.shareInfo.serviceProviders") ||
                "Service Providers: We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.",
              intl.get("privacy.sections.shareInfo.business") ||
                "Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.",
              intl.get("privacy.sections.shareInfo.legal") ||
                "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
              intl.get("privacy.sections.shareInfo.protection") ||
                "Protection: We may disclose your information to protect the rights, property, or safety of Inclue Technologies, our customers, or others.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.dataProtection.title") ||
              "Data Protection and Security"
            }
            content={[
              intl.get("privacy.sections.dataProtection.measures") ||
                "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
              intl.get("privacy.sections.dataProtection.transmission") ||
                "However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.retention.title") || "Data Retention"
            }
            content={[
              intl.get("privacy.sections.retention.period") ||
                "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
            ]}
          />

          <PolicySection
            title={intl.get("privacy.sections.rights.title") || "Your Rights"}
            content={[
              intl.get("privacy.sections.rights.access") ||
                "Access: You have the right to request access to the personal information we have collected about you.",
              intl.get("privacy.sections.rights.correction") ||
                "Correction: You have the right to request that we correct any inaccurate personal information we maintain about you.",
              intl.get("privacy.sections.rights.deletion") ||
                "Deletion: You have the right to request that we delete your personal information in certain circumstances.",
              intl.get("privacy.sections.rights.portability") ||
                "Data Portability: You have the right to receive your personal information in a structured, commonly used, and machine-readable format.",
              intl.get("privacy.sections.rights.objection") ||
                "Objection: You have the right to object to our processing of your personal information in certain circumstances.",
              intl.get("privacy.sections.rights.withdraw") ||
                "Withdrawal of Consent: You have the right to withdraw your consent at any time where we rely on consent to process your personal information.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.international.title") ||
              "International Data Transfers"
            }
            content={[
              intl.get("privacy.sections.international.transfer") ||
                "Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.",
              intl.get("privacy.sections.international.consent") ||
                "If you are located outside India and choose to provide information to us, please note that we transfer the information, including personal information, to India and process it there.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.children.title") ||
              "Children's Privacy"
            }
            content={[
              intl.get("privacy.sections.children.notDirected") ||
                "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.",
            ]}
          />

          <PolicySection
            title={
              intl.get("privacy.sections.changes.title") ||
              "Changes to This Privacy Policy"
            }
            content={[
              intl.get("privacy.sections.changes.update") ||
                'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.',
              intl.get("privacy.sections.changes.review") ||
                "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
            ]}
          />

          <ContactLegal
            title={intl.get("privacy.contact.title") || "Contact Us"}
            description={
              intl.get("privacy.contact.description") ||
              "If you have any questions about this Privacy Policy, please contact us at:"
            }
            email="privacy@incluetech.com"
            address="Inclue Technologies Pvt. Ltd., Dotspace Business Center, Total Tower, Edappally, Kochi – 682024, Kerala, India"
          />
        </Container>
      </motion.div>
    </ErrorBoundary>
  );
};

export default PrivacyPolicy;
