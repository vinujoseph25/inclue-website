import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import intl from "react-intl-universal";

interface NewsletterFormProps {
  variant?: "light" | "dark";
  className?: string;
}

// Styled components
const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ customVariant?: "light" | "dark" }>(({ theme, customVariant }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor:
        customVariant === "dark"
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(0, 0, 0, 0.23)",
    },
    "&:hover fieldset": {
      borderColor:
        customVariant === "dark"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(0, 0, 0, 0.87)",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input": {
    color:
      customVariant === "dark"
        ? theme.palette.common.white
        : theme.palette.text.primary,
  },
  "& .MuiInputLabel-root": {
    color:
      customVariant === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : theme.palette.text.secondary,
  },
  "&:hover .MuiInputLabel-root": {
    color:
      customVariant === "dark"
        ? "rgba(255, 255, 255, 0.9)"
        : theme.palette.text.primary,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
    color:
      customVariant === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : theme.palette.text.secondary,
  },
}));

const SubscribeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ customVariant?: "light" | "dark" }>(({ theme, customVariant }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  marginTop: theme.spacing(1),
}));

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  variant = "light",
  className,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setSubmitStatus("error");
      setErrorMessage(intl.get("newsletter.emailRequired"));
      return;
    }

    setIsSubmitting(true);

    try {
      // Here would be the API call to your newsletter service
      // const response = await axios.post('/api/newsletter', { email });

      // Simulate API call
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
      //TODO localization for error message
      setErrorMessage(intl.get("newsletter.submitError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  return (
    <Box className={className} component="form" onSubmit={handleSubmit}>
      <Snackbar
        open={submitStatus === "success"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          {intl.get("newsletter.successMessage")}
        </Alert>
      </Snackbar>

      <Snackbar
        open={submitStatus === "error"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          {intl.get("newsletter.errorMessage")}
        </Alert>
      </Snackbar>

      <StyledTextField
        label={intl.get("footer.email")}
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        customVariant={variant}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />

      <SubscribeButton
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        customVariant={variant}
      >
        {isSubmitting
          ? intl.get("common.sending")
          : intl.get("footer.subscribe")}
      </SubscribeButton>
    </Box>
  );
};

export default NewsletterForm;
