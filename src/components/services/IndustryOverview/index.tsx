// src/components/services/IndustryOverview/index.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../../../animations/pageTransitions";

import manufactureringIndustryImage from "@assets/images/industries/manufacturing.jpg";
import healthCareIndustryImage from "@assets/images/industries/healthcare.jpg";

const industries = [
  {
    id: "manufacturing",
    title: "services.industries.manufacturing.title",
    description: "services.industries.manufacturing.description",
    image: manufactureringIndustryImage,
    features: [
      "services.industries.manufacturing.feature1",
      "services.industries.manufacturing.feature2",
      "services.industries.manufacturing.feature3",
      "services.industries.manufacturing.feature4",
    ],
  },
  {
    id: "healthcare",
    title: "services.industries.healthcare.title",
    description: "services.industries.healthcare.description",
    image: healthCareIndustryImage,
    features: [
      "services.industries.healthcare.feature1",
      "services.industries.healthcare.feature2",
      "services.industries.healthcare.feature3",
      "services.industries.healthcare.feature4",
    ],
  },
];

const IndustryOverview: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle
        title={intl.get("services.industries.title")}
        subtitle={intl.get("services.industries.subtitle")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={6} sx={{ mt: 4 }}>
          {industries.map((industry, index) => (
            <Grid item xs={12} key={industry.id}>
              <Card
                sx={{
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ order: { xs: 1, md: index % 2 === 0 ? 1 : 2 } }}
                  >
                    <motion.div
                      variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                      viewport={{ once: true }}
                    >
                      <CardMedia
                        component="img"
                        image={industry.image}
                        alt={intl.get(industry.title)}
                        sx={{
                          height: "100%",
                          minHeight: { xs: "200px", md: "400px" },
                          objectFit: "cover",
                        }}
                      />
                    </motion.div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ order: { xs: 2, md: index % 2 === 0 ? 2 : 1 } }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <motion.div
                        variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                      >
                        <Typography
                          variant="h4"
                          component="h3"
                          fontWeight="bold"
                          gutterBottom
                          color="primary"
                        >
                          {intl.get(industry.title)}
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                          {intl.get(industry.description)}
                        </Typography>

                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {intl.get("services.industries.keyCapabilities")}:
                        </Typography>

                        <Box
                          component="ul"
                          sx={{
                            pl: 2,
                            "& li": {
                              mb: 1,
                            },
                          }}
                        >
                          {industry.features.map((feature, fIndex) => (
                            <motion.li
                              key={fIndex}
                              variants={fadeInUp}
                              custom={fIndex}
                            >
                              <Typography variant="body2">
                                {intl.get(feature)}
                              </Typography>
                            </motion.li>
                          ))}
                        </Box>

                        <Box
                          sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Button
                            component={Link}
                            to={`/industries/${industry.id}`}
                            variant="outlined"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                          >
                            {intl.get("services.industries.learnMore")}
                          </Button>
                        </Box>
                      </motion.div>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default IndustryOverview;
