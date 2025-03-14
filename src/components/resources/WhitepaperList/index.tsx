// src/components/resources/WhitepaperList/index.tsx
import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Skeleton,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import WhitepaperCard from "../WhitepaperCard";
import { fadeInUp } from "../../../animations/pageTransitions";

// Mock data for whitepapers
// In a real implementation, this would come from your API
const mockWhitepapers = [
  {
    id: 1,
    title: "The Future of Industrial Automation: Trends and Innovations",
    description:
      "An in-depth analysis of emerging technologies and methodologies in industrial automation and their impact on manufacturing processes.",
    thumbnail: "/assets/images/resources/whitepaper-1.jpg",
    datePublished: "2024-12-10",
    pageCount: 28,
    fileSize: "3.2 MB",
    author: "Dr. Anand Sharma, CTO, Inclue Technologies",
  },
  {
    id: 2,
    title:
      "Implementing FHIR for Healthcare Interoperability: A Technical Guide",
    description:
      "Technical insights and implementation strategies for healthcare providers looking to leverage FHIR standards for improved data exchange.",
    thumbnail: "/assets/images/resources/whitepaper-2.jpg",
    datePublished: "2024-11-15",
    pageCount: 42,
    fileSize: "5.7 MB",
    author: "Sanjay Menon, Healthcare Solutions Architect",
  },
  {
    id: 3,
    title: "Smart Factory ROI: Measuring the Business Value of Industry 4.0",
    description:
      "A comprehensive framework for calculating and maximizing the return on investment from smart factory implementations.",
    thumbnail: "/assets/images/resources/whitepaper-3.jpg",
    datePublished: "2024-10-22",
    pageCount: 36,
    fileSize: "4.5 MB",
    author: "Priya Nair, Business Analyst",
  },
  {
    id: 4,
    title: "Securing Industrial IoT: Best Practices and Frameworks",
    description:
      "Essential security strategies, protocols, and implementation guidelines for protecting Industrial IoT deployments from cyber threats.",
    thumbnail: "/assets/images/resources/whitepaper-4.jpg",
    datePublished: "2024-09-08",
    pageCount: 31,
    fileSize: "3.8 MB",
    author: "Rajesh Kumar, Security Solutions Architect",
  },
];

const WhitepaperList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [whitepapers, setWhitepapers] = useState<typeof mockWhitepapers>([]);
  const [filteredWhitepapers, setFilteredWhitepapers] = useState<
    typeof mockWhitepapers
  >([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate API fetch
  useEffect(() => {
    const fetchWhitepapers = async () => {
      try {
        // In a real app, you would fetch from API
        // const response = await fetch('/api/whitepapers');
        // const data = await response.json();

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setWhitepapers(mockWhitepapers);
        setFilteredWhitepapers(mockWhitepapers);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching whitepapers:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchWhitepapers();
  }, []);

  // Filter whitepapers based on search
  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const results = whitepapers.filter(
        (paper) =>
          paper.title.toLowerCase().includes(term) ||
          paper.description.toLowerCase().includes(term) ||
          paper.author.toLowerCase().includes(term),
      );
      setFilteredWhitepapers(results);
    } else {
      setFilteredWhitepapers(whitepapers);
    }
  }, [searchTerm, whitepapers]);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Render loading state
  if (loading) {
    return (
      <Box sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {[...Array(2)].map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 2, mb: 2 }}
              />
              <Skeleton variant="text" height={30} width="80%" />
              <Skeleton variant="text" height={20} width="60%" />
              <Skeleton variant="text" height={80} />
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
        {intl.get("resources.whitepapers.errorLoading")}
      </Alert>
    );
  }

  return (
    <Box>
      {/* Search section */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder={intl.get("resources.whitepapers.searchPlaceholder")}
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Results message */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {intl.get("resources.whitepapers.resultsFound", {
          count: filteredWhitepapers.length,
        })}
      </Typography>

      {/* Whitepapers grid */}
      {filteredWhitepapers.length > 0 ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {filteredWhitepapers.map((whitepaper) => (
              <Grid item xs={12} md={6} key={whitepaper.id}>
                <WhitepaperCard whitepaper={whitepaper} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      ) : (
        <Box sx={{ py: 6, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            {intl.get("resources.whitepapers.noResults")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default WhitepaperList;
