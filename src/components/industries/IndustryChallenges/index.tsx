import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface Challenge {
  title: string;
  description: string;
}

interface IndustryChallengesProps {
  challenges: Challenge[];
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

const IndustryChallenges: React.FC<IndustryChallengesProps> = ({
  challenges,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!challenges || challenges.length === 0) {
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
        {challenges.map((challenge, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div variants={itemVariants}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <ErrorOutlineIcon
                      color="primary"
                      sx={{
                        mr: 1.5,
                        fontSize: 28,
                        mt: 0.5,
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      color="primary.main"
                      fontWeight="bold"
                    >
                      {challenge.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ pl: 5 }}>
                    {challenge.description}
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

export default IndustryChallenges;
