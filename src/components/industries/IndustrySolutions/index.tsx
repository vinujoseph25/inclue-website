import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import SensorsIcon from "@mui/icons-material/Sensors";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StorageIcon from "@mui/icons-material/Storage";

interface Solution {
  title: string;
  description: string;
  icon?: string;
}

interface IndustrySolutionsProps {
  solutions: Solution[];
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ solutions }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Map for different icons based on the solution type
  const iconMap: Record<string, React.ReactNode> = {
    settings: <SettingsIcon color="primary" sx={{ fontSize: 40 }} />,
    sensors: <SensorsIcon color="primary" sx={{ fontSize: 40 }} />,
    touch: <TouchAppIcon color="primary" sx={{ fontSize: 40 }} />,
    code: <CodeIcon color="primary" sx={{ fontSize: 40 }} />,
    data: <DataObjectIcon color="primary" sx={{ fontSize: 40 }} />,
    server: <StorageIcon color="primary" sx={{ fontSize: 40 }} />,
  };

  const renderIcon = (iconName: string = "settings") => {
    return iconMap[iconName] || iconMap.settings;
  };

  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Grid container spacing={isMobile ? 3 : 4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div variants={itemVariants}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "50%",
                        bgcolor: "rgba(4, 96, 233, 0.1)",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {renderIcon(solution.icon)}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      textAlign="center"
                      gutterBottom
                      color="primary.main"
                      fontWeight="bold"
                    >
                      {solution.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" textAlign="center">
                    {solution.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default IndustrySolutions;
