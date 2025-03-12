import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";

interface FormProps extends BoxProps {
  onSubmit: (e: React.FormEvent) => void;
  title?: string;
  subtitle?: string;
}

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  title,
  subtitle,
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ width: "100%" }}
      {...props}
    >
      {title && (
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="body1" color="text.secondary" paragraph>
          {subtitle}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default Form;
