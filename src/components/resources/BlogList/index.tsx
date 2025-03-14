// src/components/resources/BlogList/index.tsx
import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Pagination,
  Skeleton,
  Alert,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import BlogCard from "../BlogCard";
import { fadeInUp } from "../../../animations/pageTransitions";

// Mock data for blogs
// In a real implementation, this would come from your API
const mockBlogs = [
  {
    id: 1,
    title: "Industrial Automation in the Age of Industry 4.0",
    excerpt:
      "Explore how modern industrial automation is transforming manufacturing processes and creating smart factories.",
    image: "/assets/images/resources/blog-1.jpg",
    category: "industrial-automation",
    date: "2024-12-15",
    author: "Dr. Rajesh Kumar",
  },
  {
    id: 2,
    title: "The Impact of IoT on Healthcare Management",
    excerpt:
      "Learn how Internet of Things technologies are revolutionizing patient care and hospital operations.",
    image: "/assets/images/resources/blog-2.jpg",
    category: "healthcare",
    date: "2024-12-01",
    author: "Dr. Meera Shah",
  },
  {
    id: 3,
    title: "Optimizing Factory Performance with Real-time Monitoring",
    excerpt:
      "Discover strategies for improving manufacturing efficiency through continuous process monitoring.",
    image: "/assets/images/resources/blog-3.jpg",
    category: "industrial-automation",
    date: "2024-11-20",
    author: "Ankit Patel",
  },
  {
    id: 4,
    title: "Interoperability in Modern Healthcare Systems",
    excerpt:
      "Examining the challenges and solutions for seamless data exchange between healthcare applications.",
    image: "/assets/images/resources/blog-4.jpg",
    category: "healthcare",
    date: "2024-11-10",
    author: "Sanjay Menon",
  },
  {
    id: 5,
    title: "The Future of PLC Programming",
    excerpt:
      "Exploring next-generation techniques and tools for programming and managing PLCs in industrial environments.",
    image: "/assets/images/resources/blog-5.jpg",
    category: "industrial-automation",
    date: "2024-10-28",
    author: "Vijay Sharma",
  },
  {
    id: 6,
    title: "Securing IoT Devices in Critical Infrastructure",
    excerpt:
      "Best practices for implementing robust security measures for industrial IoT deployments.",
    image: "/assets/images/resources/blog-6.jpg",
    category: "iot",
    date: "2024-10-15",
    author: "Neha Gupta",
  },
];

// Blog categories
const categories = [
  { value: "all", label: "resources.blog.categories.all" },
  {
    value: "industrial-automation",
    label: "resources.blog.categories.industrialAutomation",
  },
  { value: "healthcare", label: "resources.blog.categories.healthcare" },
  { value: "iot", label: "resources.blog.categories.iot" },
  { value: "plc", label: "resources.blog.categories.plc" },
];

const BlogList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blogs, setBlogs] = useState<typeof mockBlogs>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<typeof mockBlogs>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;

  // Simulate API fetch
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // In a real app, you would fetch from API
        // const response = await fetch('/api/blogs');
        // const data = await response.json();

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setBlogs(mockBlogs);
        setFilteredBlogs(mockBlogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search and category
  useEffect(() => {
    let results = blogs;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (blog) =>
          blog.title.toLowerCase().includes(term) ||
          blog.excerpt.toLowerCase().includes(term) ||
          blog.author.toLowerCase().includes(term),
      );
    }

    // Filter by category
    if (category && category !== "all") {
      results = results.filter((blog) => blog.category === category);
    }

    setFilteredBlogs(results);
    setPage(1); // Reset to first page when filters change
  }, [searchTerm, category, blogs]);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle category selection change
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  // Handle pagination change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  // Calculate pagination values
  const indexOfLastBlog = page * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Render loading state
  if (loading) {
    return (
      <Box sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {[...Array(3)].map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 2, mb: 2 }}
              />
              <Skeleton variant="text" height={30} width="80%" />
              <Skeleton variant="text" height={20} width="50%" />
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
        {intl.get("resources.blog.errorLoading")}
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
          placeholder={intl.get("resources.blog.searchPlaceholder")}
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
          <InputLabel id="category-select-label">
            {intl.get("resources.blog.categoryLabel")}
          </InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label={intl.get("resources.blog.categoryLabel")}
            onChange={handleCategoryChange}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {intl.get(cat.label)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Results message */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {intl.get("resources.blog.resultsFound", {
          count: filteredBlogs.length,
        })}
      </Typography>

      {/* Blog grid */}
      {currentBlogs.length > 0 ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {currentBlogs.map((blog) => (
              <Grid item xs={12} md={6} lg={4} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      ) : (
        <Box sx={{ py: 6, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            {intl.get("resources.blog.noResults")}
          </Typography>
        </Box>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </Box>
  );
};

export default BlogList;
