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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface Benefit {
  title: string;
  description: string;
}

interface IndustryBenefitsProps {
  benefits: Benefit[];
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

const IndustryBenefits: React.FC<IndustryBenefitsProps> = ({ benefits }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!benefits || benefits.length === 0) {
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
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div variants={itemVariants}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(135deg, rgba(4, 96, 233, 0.05) 0%, rgba(255, 255, 255, 1) 100%)",
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CheckCircleOutlineIcon
                      color="primary"
                      sx={{
                        mr: 1.5,
                        fontSize: 28,
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      color="primary.main"
                      fontWeight="bold"
                      sx={{ mb: 0 }}
                    >
                      {benefit.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ pl: 5 }}>
                    {benefit.description}
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

export default IndustryBenefits;
