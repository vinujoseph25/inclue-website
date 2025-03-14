// src/components/contact/LocationMap/index.tsx
import React from "react";
import { Box, Paper, useTheme } from "@mui/material";

// In a real implementation, you might use a library like Google Maps or Leaflet
// For this example, we'll use a placeholder with styling

const LocationMap: React.FC = () => {
  const theme = useTheme();

  // Google Maps embed would typically look like this:
  // <iframe
  //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.085550404469!2d76.30938631479346!3d10.026438575926747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d5e8fc2e5%3A0x4a9ef6f98d9ef3d6!2sDotspace%20Business%20Center%2C%20Total%20Tower!5e0!3m2!1sen!2sin!4v1647345688921!5m2!1sen!2sin"
  //   width="100%"
  //   height="100%"
  //   style={{ border: 0 }}
  //   allowFullScreen=""
  //   loading="lazy"
  //   referrerPolicy="no-referrer-when-downgrade"
  // ></iframe>

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(255, 255, 255, 0.2)",
          zIndex: 2,
        },
      }}
    >
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.085550404469!2d76.30938631479346!3d10.026438575926747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d5e8fc2e5%3A0x4a9ef6f98d9ef3d6!2sDotspace%20Business%20Center%2C%20Total%20Tower!5e0!3m2!1sen!2sin!4v1647345688921!5m2!1sen!2sin"
        width="100%"
        height="100%"
        sx={{
          border: "none",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Paper>
  );
};

export default LocationMap;
