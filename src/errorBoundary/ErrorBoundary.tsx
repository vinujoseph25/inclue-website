import React, { useState, useEffect, ErrorInfo } from "react";
import { Button, Typography, Box, Container, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ErrorBoundaryWrapper } from "./ErrorBoundaryWrapper";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
  fallback,
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    setError(error);
    setErrorInfo(errorInfo);

    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  };

  const resetErrorBoundary = () => {
    setError(null);
    setErrorInfo(null);
  };

  if (error) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 8,
            textAlign: "center",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1a2027" : "#fff",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {error.message || "An unexpected error occurred"}
          </Typography>
          {process.env.NODE_ENV === "development" && errorInfo && (
            <Box
              sx={{
                my: 2,
                textAlign: "left",
                overflow: "auto",
                maxHeight: "200px",
              }}
            >
              <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                {errorInfo.componentStack}
              </Typography>
            </Box>
          )}
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={resetErrorBoundary}
            >
              Try again
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
    <ErrorBoundaryWrapper onError={handleError}>
      {children}
    </ErrorBoundaryWrapper>
  );
};

export default ErrorBoundary;
