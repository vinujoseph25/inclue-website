import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Divider,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

// Import icons
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import bmmLogo from "@/assets/images/clients/bmm.jpg";
import cfaoLogo from "@/assets/images/clients/cfao.jpg";
import torkwellLogo from "@/assets/images/clients/torkwell.jpg";
import cumiLogo from "@/assets/images/clients/cumi.jpg";

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginBottom: theme.spacing(1),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

const ClientLogo = styled("img")(({ theme }) => ({
  height: 60,
  maxWidth: 150,
  objectFit: "contain",
  filter: "grayscale(100%)",
  opacity: 0.7,
  transition: "filter 0.3s ease-in-out, opacity 0.3s ease-in-out",
  "&:hover": {
    filter: "grayscale(0%)",
    opacity: 1,
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  overflow: "hidden",
  borderRadius: theme.spacing(1),
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[6],
  },
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  fontSize: 60,
  color: theme.palette.grey[200],
  position: "absolute",
  top: 10,
  right: 10,
  transform: "rotate(180deg)",
  opacity: 0.6,
}));

const ClientAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  border: `3px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[2],
}));

const ClientsSection: React.FC = () => {
  const theme = useTheme();

  // Client logos (replace with actual client logos)
  const clientLogos = [cumiLogo, torkwellLogo, cfaoLogo, bmmLogo];

  // Testimonials (replace with actual testimonials)
  const testimonials = [
    {
      name: "John Smith",
      position: intl.get("home.clients.testimonial1.position"),
      company: intl.get("home.clients.testimonial1.company"),
      quote: intl.get("home.clients.testimonial1.quote"),
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Lisa Johnson",
      position: intl.get("home.clients.testimonial2.position"),
      company: intl.get("home.clients.testimonial2.company"),
      quote: intl.get("home.clients.testimonial2.quote"),
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <motion.div variants={itemVariants}>
              <SectionTitle
                variant="h6"
                color="primary"
                gutterBottom
                align="center"
              >
                {intl.get("home.clients.subtitle")}
              </SectionTitle>
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {intl.get("home.clients.title")}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                align="center"
                sx={{ mb: 3, maxWidth: "800px", mx: "auto" }}
              >
                {intl.get("home.clients.description")}
              </Typography>
            </motion.div>
          </Box>

          {/* Client Logos */}
          <Box mb={8}>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              {clientLogos.map((logo, index) => (
                <Grid item key={index}>
                  <motion.div custom={index} variants={logoVariants}>
                    <ClientLogo src={logo} alt={`Client ${index + 1}`} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Testimonials */}
          <Typography
            variant="h4"
            component="h3"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            {intl.get("home.clients.testimonials_title")}
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard elevation={3}>
                    <CardContent sx={{ p: 4, position: "relative" }}>
                      <QuoteIcon />
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ mb: 3, fontStyle: "italic" }}
                      >
                        "{testimonial.quote}"
                      </Typography>

                      <Rating
                        value={testimonial.rating}
                        readOnly
                        precision={0.5}
                        size="small"
                        sx={{ mb: 2 }}
                      />

                      <Divider sx={{ my: 2 }} />

                      <Box display="flex" alignItems="center">
                        <ClientAvatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <Box ml={2}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.position}, {testimonial.company}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </TestimonialCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ClientsSection;
