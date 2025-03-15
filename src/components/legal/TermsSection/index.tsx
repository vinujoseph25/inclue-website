import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TermsSectionProps {
  id: string;
  title: string;
  content: string;
  isLast?: boolean;
}

const TermsSection: React.FC<TermsSectionProps> = ({
  id,
  title,
  content,
  isLast = false,
}) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionAnimation}
    >
      <Box component="section" id={id} sx={{ mb: 4, scrollMarginTop: "100px" }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            color: theme.palette.text.primary,
            lineHeight: 1.7,
            "& p": { mb: 2 },
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {!isLast && <Divider sx={{ mt: 4 }} />}
      </Box>
    </motion.div>
  );
};

export default TermsSection;
