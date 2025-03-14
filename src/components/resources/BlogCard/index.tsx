// src/components/resources/BlogCard/index.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  CardActionArea,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const theme = useTheme();

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  // Get category label
  const getCategoryLabel = (categorySlug: string) => {
    switch (categorySlug) {
      case "industrial-automation":
        return intl.get("resources.blog.categories.industrialAutomation");
      case "healthcare":
        return intl.get("resources.blog.categories.healthcare");
      case "iot":
        return intl.get("resources.blog.categories.iot");
      case "plc":
        return intl.get("resources.blog.categories.plc");
      default:
        return categorySlug;
    }
  };

  // Get category color
  const getCategoryColor = (categorySlug: string) => {
    switch (categorySlug) {
      case "industrial-automation":
        return theme.palette.primary.main;
      case "healthcare":
        return theme.palette.secondary.main;
      case "iot":
        return "#9c27b0"; // Purple
      case "plc":
        return "#ff9800"; // Orange
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <CardActionArea
        component={Link}
        to={`/resources/blog/${blog.id}`}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={blog.image}
            alt={blog.title}
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Chip
            label={getCategoryLabel(blog.category)}
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              backgroundColor: getCategoryColor(blog.category),
              color: "white",
              fontWeight: "medium",
            }}
          />
        </Box>

        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            fontWeight="bold"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              flexGrow: 1,
            }}
          >
            {blog.excerpt}
          </Typography>

          <Box
            sx={{
              mt: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {formatDate(blog.date)}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <PersonIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {blog.author}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
