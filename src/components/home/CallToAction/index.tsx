import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import intl from "react-intl-universal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useInView } from "react-intersection-observer";
import ctaGraphic from "@assets/images/home/cta-graphic.svg";

// Styled components
const CTAWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(8, 0),
  color: theme.palette.common.white,
  position: "relative",
  overflow: "hidden",
  backgroundImage: "linear-gradient(135deg, #0460E9 0%, #0099FF 100%)",
  boxShadow: "0px 10px 30px rgba(4, 96, 233, 0.2)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0),
  },
}));

const ShapeDivider = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  "& svg": {
    position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "120px",
  },
});

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  borderRadius: "30px",
  padding: theme.spacing(1, 4),
  fontWeight: 600,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.common.white,
    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-2px)",
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  borderRadius: "30px",
  padding: theme.spacing(1, 4),
  fontWeight: 600,
  marginLeft: theme.spacing(2),
  "&:hover": {
    borderColor: theme.palette.common.white,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginTop: theme.spacing(2),
  },
}));

const MotionBox = styled(motion.div)({
  width: "100%",
});

interface CallToActionProps {
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Animation when element comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <CTAWrapper className={className} ref={ref}>
      <Container maxWidth="lg">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                  }}
                >
                  {intl.get(
                    "home.cta.title",
                    "Transform Your Business With Smart Technology",
                  )}
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    opacity: 0.9,
                  }}
                >
                  {intl.get(
                    "home.cta.subtitle",
                    "Experience seamless integration of IoT technologies that enhance efficiency and productivity.",
                  )}
                </Typography>
              </motion.div>
              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                }}
              >
                <ActionButton
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  //TODO: Uncomment and replace with correct link
                  //   component={RouterLink}
                  //   to="/contact"
                  fullWidth={isMobile}
                >
                  {intl.get("home.cta.primary_button", "Get Started")}
                </ActionButton>
                <SecondaryButton
                  variant="outlined"
                  size="large"
                  //TODO: Uncomment and replace with correct link
                  //   component={RouterLink}
                  //   to="/products"
                  fullWidth={isMobile}
                >
                  {intl.get("home.cta.secondary_button", "Explore Products")}
                </SecondaryButton>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <motion.div
                variants={itemVariants}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* The image or graphic component would go here */}
                <Box
                  component="img"
                  src={ctaGraphic}
                  alt="Smart Technology Integration"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </CTAWrapper>
  );
};

export default CallToAction;
