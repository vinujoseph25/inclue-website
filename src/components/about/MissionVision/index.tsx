import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

// Import icons from MUI
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarsIcon from "@mui/icons-material/Stars";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: 60,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const ValueItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const MissionVision: React.FC = () => {
  const theme = useTheme();

  // Company values
  const values = [
    {
      title: intl.get("about.values.innovation.title"),
      description: intl.get("about.values.innovation.description"),
    },
    // {
    //   title: intl.get("about.values.integrity.title"),
    //   description: intl.get("about.values.integrity.description"),
    // },
    {
      title: intl.get("about.values.excellence.title"),
      description: intl.get("about.values.excellence.description"),
    },
    // {
    //   title: intl.get("about.values.collaboration.title"),
    //   description: intl.get("about.values.collaboration.description"),
    // },
  ];

  return (
    <Box component="section" sx={{ py: 8, bgcolor: "secondary.light" }}>
      <Container>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom color="primary">
            {intl.get("about.mission_vision.title")}
          </Typography>
          <Typography variant="h6" paragraph color="text.secondary">
            {intl.get("about.mission_vision.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Mission Card */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StyledCard elevation={4}>
                <Box
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <IconWrapper>
                    <FlagIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    align="center"
                  >
                    {intl.get("about.mission.title")}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" paragraph align="center">
                    {intl.get("about.mission.description")}
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>

          {/* Values Card */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <StyledCard elevation={4}>
                <Box
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <IconWrapper>
                    <VisibilityIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    align="center"
                  >
                    {intl.get("about.values.title")}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  {values.map((value, index) => (
                    <Typography
                      variant="body1"
                      paragraph
                      align="center"
                      key={index}
                    >
                      <strong>{value.title}:</strong> {value.description}
                    </Typography>
                  ))}
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>

          {/* Vision Card */}
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <StyledCard elevation={4}>
                <Box
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <IconWrapper>
                    <VisibilityIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    align="center"
                  >
                    {intl.get("about.vision.title")}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" paragraph align="center">
                    {intl.get("about.vision.description")}
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
