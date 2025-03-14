// src/components/services/ProcessTimeline/index.tsx
import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";
import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

// Process steps
const processSteps = [
  {
    title: "services.process.discover.title",
    description: "services.process.discover.description",
  },
  {
    title: "services.process.plan.title",
    description: "services.process.plan.description",
  },
  {
    title: "services.process.implement.title",
    description: "services.process.implement.description",
  },
  {
    title: "services.process.test.title",
    description: "services.process.test.description",
  },
  {
    title: "services.process.deploy.title",
    description: "services.process.deploy.description",
  },
  {
    title: "services.process.support.title",
    description: "services.process.support.description",
  },
];

const ProcessTimeline: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <SectionTitle
        title={intl.get("services.process.title")}
        subtitle={intl.get("services.process.subtitle")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            mt: 5,
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Stepper
            orientation={isMobile ? "vertical" : "horizontal"}
            alternativeLabel={!isMobile}
            nonLinear
            sx={{
              "& .MuiStepConnector-line": {
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
              },
            }}
          >
            {processSteps.map((step, index) => (
              <Step key={index} completed>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      color: theme.palette.primary.main,
                      "&.Mui-completed": {
                        color: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mb: 1 }}
                  >
                    {intl.get(step.title)}
                  </Typography>
                </StepLabel>

                {isMobile && (
                  <StepContent>
                    <Typography variant="body2">
                      {intl.get(step.description)}
                    </Typography>
                  </StepContent>
                )}

                {!isMobile && (
                  <Box sx={{ px: 2, mt: 2 }}>
                    <motion.div variants={fadeInUp}>
                      <Typography variant="body2" textAlign="center">
                        {intl.get(step.description)}
                      </Typography>
                    </motion.div>
                  </Box>
                )}
              </Step>
            ))}
          </Stepper>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ProcessTimeline;
