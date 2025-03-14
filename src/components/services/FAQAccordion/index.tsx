// src/components/services/FAQAccordion/index.tsx
import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";
import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Handle accordion expansion
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <SectionTitle
        title={intl.get("services.detail.faqTitle")}
        subtitle={intl.get("services.detail.faqSubtitle")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Box sx={{ mt: 5 }}>
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  boxShadow: "none",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "8px !important",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    margin: `0 0 16px 0`,
                    borderColor: theme.palette.primary.main,
                  },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  sx={{
                    backgroundColor:
                      expanded === `panel${index}`
                        ? `${theme.palette.primary.main}10`
                        : "transparent",
                    transition: "background-color 0.3s",
                    "& .MuiAccordionSummary-content": {
                      alignItems: "center",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <QuestionAnswerIcon color="primary" fontSize="small" />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{
                        color:
                          expanded === `panel${index}`
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ p: 3 }}>
                  <Typography variant="body2" sx={{ ml: 4 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default FAQAccordion;
