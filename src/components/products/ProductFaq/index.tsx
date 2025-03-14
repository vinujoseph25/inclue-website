// src/components/products/ProductFaq/index.tsx
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

import {
  fadeInUp,
  staggerContainer,
} from "../../../animations/pageTransitions";

interface Faq {
  question: string;
  answer: string;
}

interface ProductFaqProps {
  faqs: Faq[];
}

const ProductFaq: React.FC<ProductFaqProps> = ({ faqs }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Handle accordion expansion
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        {intl.get("products.faq.title")}
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        {intl.get("products.faq.description")}
      </Typography>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
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
      </motion.div>
    </Box>
  );
};

export default ProductFaq;
