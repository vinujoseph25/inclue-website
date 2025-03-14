// src/components/resources/WhitepaperCard/index.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

interface Whitepaper {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  datePublished: string;
  pageCount: number;
  fileSize: string;
  author: string;
}

interface WhitepaperCardProps {
  whitepaper: Whitepaper;
}

const WhitepaperCard: React.FC<WhitepaperCardProps> = ({ whitepaper }) => {
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

  // Handle download
  const handleDownload = () => {
    // In a real app, this would trigger a download
    // window.open(`/api/download/whitepaper/${whitepaper.id}`, '_blank');

    // For demo purposes, show alert
    alert(
      intl.get("resources.whitepapers.downloadStarted", {
        title: whitepaper.title,
      }),
    );
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={whitepaper.thumbnail}
        alt={whitepaper.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent
        sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h6"
          component="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {whitepaper.title}
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
          {whitepaper.description}
        </Typography>

        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ fontStyle: "italic", mb: 2 }}
        >
          {intl.get("resources.whitepapers.by", { author: whitepaper.author })}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarTodayIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {formatDate(whitepaper.datePublished)}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <MenuBookIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {intl.get("resources.whitepapers.pages", {
                count: whitepaper.pageCount,
              })}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <InsertDriveFileIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {whitepaper.fileSize}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          fullWidth
          onClick={handleDownload}
          sx={{ mt: "auto" }}
        >
          {intl.get("resources.whitepapers.download")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default WhitepaperCard;
