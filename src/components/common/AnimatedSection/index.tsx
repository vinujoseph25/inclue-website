import React, { useEffect } from "react";
import { Box, BoxProps } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps extends BoxProps {
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animationVariants = {
  fadeIn: {
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0 },
  },
  slideUp: {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 50 },
  },
  slideDown: {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: -50 },
  },
  slideLeft: {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: 50 },
  },
  slideRight: {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: -50 },
  },
  scale: {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0.8 },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const MotionBox = motion(Box);

  // Customize animation based on provided duration and delay
  const selectedAnimation = { ...animationVariants[animation] };
  if (duration && selectedAnimation.visible.transition) {
    selectedAnimation.visible.transition.duration = duration;
  }
  if (delay) {
    selectedAnimation.visible.transition = {
      ...selectedAnimation.visible.transition,
      delay,
    };
  }

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedSection;
