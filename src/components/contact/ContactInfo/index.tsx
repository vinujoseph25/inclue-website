// src/components/contact/ContactInfo/index.tsx
import React from "react";
import { Box, Typography, Paper, Divider, Link, useTheme } from "@mui/material";
import intl from "react-intl-universal";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ContactInfo: React.FC = () => {
  const theme = useTheme();

  const contactItems = [
    {
      icon: <LocationOnIcon color="primary" fontSize="large" />,
      title: "contact.info.address",
      content: (
        <>
          <Typography variant="body1">
            Inclue Technologies Pvt. Ltd.,
          </Typography>
          <Typography variant="body1">
            Dotspace Business Center, Total Tower,
          </Typography>
          <Typography variant="body1">Edappally, Kochi – 682024,</Typography>
          <Typography variant="body1">Kerala, India</Typography>
        </>
      ),
    },
    {
      icon: <PhoneIcon color="primary" fontSize="large" />,
      title: "contact.info.phone",
      content: (
        <Link
          href="tel:+919400655235"
          color="inherit"
          underline="hover"
          sx={{
            display: "block",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          +91 94006 55235
        </Link>
      ),
    },
    {
      icon: <EmailIcon color="primary" fontSize="large" />,
      title: "contact.info.email",
      content: (
        <Link
          href="mailto:info@incluetech.com"
          color="inherit"
          underline="hover"
          sx={{
            display: "block",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          info@incluetech.com
        </Link>
      ),
    },
    {
      icon: <AccessTimeIcon color="primary" fontSize="large" />,
      title: "contact.info.hours",
      content: (
        <>
          <Typography variant="body1">
            {intl.get("contact.info.weekdays")}
          </Typography>
          <Typography variant="body1">
            {intl.get("contact.info.weekend")}
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Paper elevation={3} sx={{ p: 4, height: "100%", borderRadius: 2 }}>
      <Typography
        variant="h5"
        component="h3"
        fontWeight="bold"
        gutterBottom
        color="primary"
      >
        {intl.get("contact.info.title")}
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        {intl.get("contact.info.description")}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {contactItems.map((item, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Box sx={{ pt: 0.5 }}>{item.icon}</Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {intl.get(item.title)}
                </Typography>
                {item.content}
              </Box>
            </Box>

            {index < contactItems.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default ContactInfo;
