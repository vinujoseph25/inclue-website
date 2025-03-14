// src/components/resources/CaseStudyList/index.tsx
import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Skeleton,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import CaseStudyCard from "../CaseStudyCard";
import { fadeInUp } from "../../../animations/pageTransitions";

// Mock data for case studies
// In a real implementation, this would come from your API
const mockCaseStudies = [
  {
    id: 1,
    title:
      "Optimizing Production Line Efficiency for Leading Automotive Manufacturer",
    excerpt:
      "How Inclue Technologies helped increase production efficiency by 35% using Babble platform.",
    image: "/assets/images/resources/case-study-1.jpg",
    industry: "manufacturing",
    results: [
      "35% increase in production efficiency",
      "40% reduction in downtime",
      "15% energy cost savings",
    ],
    logo: "/assets/images/clients/client-logo-1.png",
  },
  {
    id: 2,
    title: "Streamlining Patient Data Management for Multi-specialty Hospital",
    excerpt:
      "Implementing FHIR-based interoperability solution to enhance patient care and data accessibility.",
    image: "/assets/images/resources/case-study-2.jpg",
    industry: "healthcare",
    results: [
      "67% faster data retrieval",
      "99.9% system uptime",
      "45% reduction in administrative tasks",
    ],
    logo: "/assets/images/clients/client-logo-2.png",
  },
  {
    id: 3,
    title: "Smart Factory Implementation for Electronics Manufacturer",
    excerpt:
      "Complete digital transformation of manufacturing facilities with IoT sensors and real-time monitoring.",
    image: "/assets/images/resources/case-study-3.jpg",
    industry: "manufacturing",
    results: [
      "28% productivity improvement",
      "50% reduction in quality issues",
      "22% decrease in operational costs",
    ],
    logo: "/assets/images/clients/client-logo-3.png",
  },
  {
    id: 4,
    title: "Remote Patient Monitoring System for Rural Healthcare Provider",
    excerpt:
      "Developing and deploying wearable-integrated healthcare monitoring in remote areas with limited connectivity.",
    image: "/assets/images/resources/case-study-4.jpg",
    industry: "healthcare",
    results: [
      "82% increase in patient coverage",
      "60% reduction in hospital visits",
      "3.2x ROI in first year",
    ],
    logo: "/assets/images/clients/client-logo-4.png",
  },
  {
    id: 5,
    title: "Custom PLC Solution for Water Treatment Facility",
    excerpt:
      "Implementing an automated control system to optimize water treatment processes and reduce manual operations.",
    image: "/assets/images/resources/case-study-5.jpg",
    industry: "utilities",
    results: [
      "75% reduction in manual interventions",
      "30% improvement in water quality metrics",
      "25% operational cost reduction",
    ],
    logo: "/assets/images/clients/client-logo-5.png",
  },
];

// Industry options
const industries = [
  { value: "all", label: "resources.caseStudies.industries.all" },
  {
    value: "manufacturing",
    label: "resources.caseStudies.industries.manufacturing",
  },
  { value: "healthcare", label: "resources.caseStudies.industries.healthcare" },
  { value: "utilities", label: "resources.caseStudies.industries.utilities" },
];

const CaseStudyList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [caseStudies, setCaseStudies] = useState<typeof mockCaseStudies>([]);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<
    typeof mockCaseStudies
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [industry, setIndustry] = useState("all");

  // Simulate API fetch
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        // In a real app, you would fetch from API
        // const response = await fetch('/api/case-studies');
        // const data = await response.json();

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setCaseStudies(mockCaseStudies);
        setFilteredCaseStudies(mockCaseStudies);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching case studies:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // Filter case studies based on search and industry
  useEffect(() => {
    let results = caseStudies;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (study) =>
          study.title.toLowerCase().includes(term) ||
          study.excerpt.toLowerCase().includes(term) ||
          study.results.some((result) => result.toLowerCase().includes(term)),
      );
    }

    // Filter by industry
    if (industry && industry !== "all") {
      results = results.filter((study) => study.industry === industry);
    }

    setFilteredCaseStudies(results);
  }, [searchTerm, industry, caseStudies]);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle industry selection change
  const handleIndustryChange = (event: SelectChangeEvent) => {
    setIndustry(event.target.value);
  };

  // Render loading state
  if (loading) {
    return (
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {[...Array(2)].map((_, index) => (
            <Grid item xs={12} key={index}>
              <Skeleton
                variant="rectangular"
                height={300}
                sx={{ borderRadius: 2, mb: 2 }}
              />
              <Skeleton variant="text" height={30} width="60%" />
              <Skeleton variant="text" height={20} width="40%" />
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={30}
                  sx={{ borderRadius: 1 }}
                />
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={30}
                  sx={{ borderRadius: 1 }}
                />
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={30}
                  sx={{ borderRadius: 1 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  // Render error state
  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 4 }}>
        {intl.get("resources.caseStudies.errorLoading")}
      </Alert>
    );
  }

  return (
    <Box>
      {/* Filters section */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          placeholder={intl.get("resources.caseStudies.searchPlaceholder")}
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1, maxWidth: { sm: "60%" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="industry-select-label">
            {intl.get("resources.caseStudies.industryLabel")}
          </InputLabel>
          <Select
            labelId="industry-select-label"
            id="industry-select"
            value={industry}
            label={intl.get("resources.caseStudies.industryLabel")}
            onChange={handleIndustryChange}
          >
            {industries.map((ind) => (
              <MenuItem key={ind.value} value={ind.value}>
                {intl.get(ind.label)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Results message */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {intl.get("resources.caseStudies.resultsFound", {
          count: filteredCaseStudies.length,
        })}
      </Typography>

      {/* Case Studies list */}
      {filteredCaseStudies.length > 0 ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {filteredCaseStudies.map((caseStudy) => (
              <Grid item xs={12} key={caseStudy.id}>
                <CaseStudyCard caseStudy={caseStudy} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      ) : (
        <Box sx={{ py: 6, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            {intl.get("resources.caseStudies.noResults")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CaseStudyList;
