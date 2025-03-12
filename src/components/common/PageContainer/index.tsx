import React from "react";
import { Box, BoxProps } from "@mui/material";
import { motion } from "framer-motion";

interface PageContainerProps extends BoxProps {
  animate?: boolean;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  animate = true,
  ...props
}) => {
  const MotionBox = motion(Box);

  if (!animate) {
    return (
      <Box
        component="main"
        sx={{
          pt: { xs: 8, sm: 10 }, // Space for fixed header
          minHeight: "100vh",
          width: "100%",
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }

  return (
    <MotionBox
      component="main"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      sx={{
        pt: { xs: 8, sm: 10 }, // Space for fixed header
        minHeight: "100vh",
        width: "100%",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default PageContainer;
