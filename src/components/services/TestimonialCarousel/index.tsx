// src/components/services/TestimonialCarousel/index.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import intl from "react-intl-universal";
import { motion, AnimatePresence } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    quote: "services.testimonials.quote1",
    author: "John Smith",
    position: "Production Manager",
    company: "Automotive Components Ltd.",
    avatar: "/assets/images/services/testimonial-1.jpg",
  },
  {
    id: 2,
    quote: "services.testimonials.quote2",
    author: "Sarah Johnson",
    position: "CTO",
    company: "MedTech Innovations",
    avatar: "/assets/images/services/testimonial-2.jpg",
  },
  {
    id: 3,
    quote: "services.testimonials.quote3",
    author: "Michael Chen",
    position: "Operations Director",
    company: "Global Manufacturing Inc.",
    avatar: "/assets/images/services/testimonial-3.jpg",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const TestimonialCarousel: React.FC = () => {
  const theme = useTheme();
  const [[page, direction], setPage] = useState([0, 0]);

  // Get current testimonial
  const currentTestimonial = testimonials[page % testimonials.length];

  // Navigate to previous slide
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Box>
      <SectionTitle
        title={intl.get("services.testimonials.title")}
        subtitle={intl.get("services.testimonials.subtitle")}
      />

      <Paper
        elevation={0}
        sx={{
          mt: 6,
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <FormatQuoteIcon
          color="disabled"
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            fontSize: 80,
            opacity: 0.2,
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            minHeight: { xs: "300px", md: "250px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <Box sx={{ textAlign: "center", px: { xs: 2, md: 10 } }}>
                <Typography
                  variant="h6"
                  component="blockquote"
                  color="text.secondary"
                  fontStyle="italic"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  "{intl.get(currentTestimonial.quote)}"
                </Typography>

                <Avatar
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    border: `3px solid ${theme.palette.primary.main}`,
                  }}
                />

                <Typography variant="subtitle1" component="p" fontWeight="bold">
                  {currentTestimonial.author}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 2 }}>
          <Button
            onClick={() => paginate(-1)}
            variant="outlined"
            color="primary"
            size="small"
            sx={{ minWidth: "40px", p: 1 }}
          >
            <NavigateBeforeIcon />
          </Button>

          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setPage([index, page > index ? -1 : 1])}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor:
                  page % testimonials.length === index
                    ? theme.palette.primary.main
                    : theme.palette.divider,
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            />
          ))}

          <Button
            onClick={() => paginate(1)}
            variant="outlined"
            color="primary"
            size="small"
            sx={{ minWidth: "40px", p: 1 }}
          >
            <NavigateNextIcon />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TestimonialCarousel;
