// src/components/services/ServiceProcess/index.tsx
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

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  process: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <SectionTitle
        title={intl.get("services.detail.processTitle")}
        subtitle={intl.get("services.detail.processSubtitle")}
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
            orientation="vertical"
            nonLinear
            sx={{
              "& .MuiStepConnector-line": {
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
              },
            }}
          >
            {process.map((step, index) => (
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
                  <Typography variant="h6" fontWeight="bold">
                    {step.title}
                  </Typography>
                </StepLabel>

                <StepContent>
                  <motion.div variants={fadeInUp}>
                    <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                      {step.description}
                    </Typography>
                  </motion.div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ServiceProcess;
