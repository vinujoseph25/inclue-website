import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

interface PolicySectionProps {
  title: string;
  content: string[];
}

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  content,
}) => {
  const theme = useTheme();

  // Determine if content items should be rendered as a list or paragraphs
  const renderAsList = content.some(
    (item) => item.trim().endsWith(";") || item.trim().startsWith("-"),
  );

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          component="h2"
          color="primary.main"
          fontWeight="medium"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>

        {renderAsList ? (
          <List sx={{ pl: 2 }}>
            {content.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  pl: 0,
                  py: 0.5,
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" color="text.primary">
                      {item.replace(/;$/, "")}{" "}
                      {/* Remove trailing semicolon if present */}
                    </Typography>
                  }
                  disableTypography
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Box>
            {content.map((paragraph, index) => (
              <Typography key={index} variant="body1" paragraph>
                {paragraph}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </motion.div>
  );
};
