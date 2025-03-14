// src/components/resources/CaseStudyCard/index.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  useTheme,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

interface CaseStudy {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  industry: string;
  results: string[];
  logo: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const theme = useTheme();

  // Get industry label
  const getIndustryLabel = (industrySlug: string) => {
    switch (industrySlug) {
      case "manufacturing":
        return intl.get("resources.caseStudies.industries.manufacturing");
      case "healthcare":
        return intl.get("resources.caseStudies.industries.healthcare");
      case "utilities":
        return intl.get("resources.caseStudies.industries.utilities");
      default:
        return industrySlug;
    }
  };

  // Get industry color
  const getIndustryColor = (industrySlug: string) => {
    switch (industrySlug) {
      case "manufacturing":
        return theme.palette.primary.main;
      case "healthcare":
        return theme.palette.secondary.main;
      case "utilities":
        return "#4caf50"; // Green
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
      sx={{
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: { xs: "200px", md: "auto" },
            }}
          >
            <CardMedia
              component="img"
              image={caseStudy.image}
              alt={caseStudy.title}
              sx={{
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))",
              }}
            />
            <Chip
              label={getIndustryLabel(caseStudy.industry)}
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                backgroundColor: getIndustryColor(caseStudy.industry),
                color: "white",
                fontWeight: "medium",
              }}
            />
            <Avatar
              src={caseStudy.logo}
              alt="Client logo"
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                width: 60,
                height: 60,
                backgroundColor: "white",
                padding: 1,
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              gutterBottom
            >
              {caseStudy.title}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              {caseStudy.excerpt}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1.5 }}>
              {intl.get("resources.caseStudies.keyResults")}:
            </Typography>

            <Box sx={{ mb: 3 }}>
              {caseStudy.results.map((result, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 1,
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: theme.palette.success.main,
                      mr: 1,
                      mt: 0.3,
                    }}
                  />
                  <Typography variant="body2">{result}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              component={Link}
              to={`/resources/case-studies/${caseStudy.id}`}
              color="primary"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              {intl.get("resources.caseStudies.readMore")}
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CaseStudyCard;
