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
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

// Custom styled components
const StepLabelStyled = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  "& .MuiStepLabel-iconContainer": {
    paddingRight: theme.spacing(2),
  },
}));

const StepContentStyled = styled(StepContent)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.light}`,
  marginLeft: theme.spacing(1),
  paddingLeft: theme.spacing(2.5),
}));

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

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // For horizontal stepper on desktop
  const renderHorizontalStepper = () => (
    <Stepper
      activeStep={-1}
      alternativeLabel
      sx={{
        "& .MuiStepConnector-line": {
          borderTopWidth: 3,
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      {steps.map((step, index) => (
        <Step key={step.step} completed={true}>
          <motion.div
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StepLabelStyled>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                fontWeight="bold"
              >
                {step.title}
              </Typography>
            </StepLabelStyled>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mt: 2,
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 4,
                },
              }}
            >
              <Typography>{step.description}</Typography>
            </Paper>
          </motion.div>
        </Step>
      ))}
    </Stepper>
  );

  // For vertical stepper on mobile and tablet
  const renderVerticalStepper = () => (
    <Stepper
      activeStep={-1}
      orientation="vertical"
      sx={{
        "& .MuiStepConnector-line": {
          minHeight: 40,
          borderLeftWidth: 3,
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      {steps.map((step, index) => (
        <Step key={step.step} completed={true}>
          <motion.div
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StepLabelStyled>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                fontWeight="medium"
              >
                {step.title}
              </Typography>
            </StepLabelStyled>
            <StepContentStyled>
              <Box sx={{ ml: 2, mb: 4 }}>
                <Typography>{step.description}</Typography>
              </Box>
            </StepContentStyled>
          </motion.div>
        </Step>
      ))}
    </Stepper>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Box sx={{ mt: 2 }}>
        {isTablet ? renderVerticalStepper() : renderHorizontalStepper()}
      </Box>
    </motion.div>
  );
};
