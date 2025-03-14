// src/components/services/ServiceCaseStudies/index.tsx
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
import intl from "react-intl-universal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SectionTitle from "../../common/SectionTitle";
import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
}

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudy[];
}

const ServiceCaseStudies: React.FC<ServiceCaseStudiesProps> = ({
  caseStudies,
}) => {
  const theme = useTheme();

  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  return (
    <Box>
      <SectionTitle
        title={intl.get("services.detail.caseStudiesTitle")}
        subtitle={intl.get("services.detail.caseStudiesSubtitle")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {caseStudies.map((caseStudy, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={caseStudy.image}
                    alt={caseStudy.title}
                    sx={{ objectFit: "cover" }}
                  />

                  <CardContent
                    sx={{
                      p: 3,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {caseStudy.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, flexGrow: 1 }}
                    >
                      {caseStudy.description}
                    </Typography>

                    <Button
                      component={Link}
                      to="/resources/case-studies"
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ alignSelf: "flex-start", mt: "auto" }}
                    >
                      {intl.get("services.detail.viewCaseStudy")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ServiceCaseStudies;
