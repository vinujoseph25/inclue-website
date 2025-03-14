// src/components/contact/ContactForm/index.tsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import intl from "react-intl-universal";
import SendIcon from "@mui/icons-material/Send";

// You would normally import this
// import { submitContactForm } from '../../../api/contact';

const contactOptions = [
  { value: "general", label: "contact.form.options.general" },
  { value: "sales", label: "contact.form.options.sales" },
  { value: "support", label: "contact.form.options.support" },
  { value: "partnership", label: "contact.form.options.partnership" },
];

interface ContactFormProps {
  type?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ type }) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  console.log("Type:", type);

  const validationSchema = Yup.object({
    name: Yup.string().required(
      intl.get("contact.form.validation.nameRequired"),
    ),
    email: Yup.string()
      .email(intl.get("contact.form.validation.emailInvalid"))
      .required(intl.get("contact.form.validation.emailRequired")),
    phone: Yup.string().matches(
      /^[0-9+\-\s()]+$/,
      intl.get("contact.form.validation.phoneInvalid"),
    ),
    company: Yup.string(),
    inquiryType: Yup.string().required(
      intl.get("contact.form.validation.inquiryTypeRequired"),
    ),
    message: Yup.string()
      .required(intl.get("contact.form.validation.messageRequired"))
      .min(10, intl.get("contact.form.validation.messageMinLength")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values: unknown) => {
      setSubmitting(true);
      try {
        // In a real application, you would call an API
        // await submitContactForm(values);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSuccess(true);
        formik.resetForm();
      } catch (err) {
        setError(true);
        console.error("Error submitting form:", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Typography
        variant="h5"
        component="h3"
        fontWeight="bold"
        gutterBottom
        color="primary"
      >
        {intl.get("contact.form.title")}
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        {intl.get("contact.form.description")}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label={intl.get("contact.form.name")}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={
              formik.touched.name && typeof formik.errors.name === "string"
                ? formik.errors.name
                : undefined
            }
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label={intl.get("contact.form.email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && typeof formik.errors.email === "string"
                ? formik.errors.email
                : undefined
            }
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            id="phone"
            name="phone"
            label={intl.get("contact.form.phone")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={
              formik.touched.phone && typeof formik.errors.phone === "string"
                ? formik.errors.phone
                : undefined
            }
            variant="outlined"
          />

          <TextField
            fullWidth
            id="company"
            name="company"
            label={intl.get("contact.form.company")}
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={
              formik.touched.company &&
              typeof formik.errors.company === "string"
                ? formik.errors.company
                : undefined
            }
            variant="outlined"
          />

          <FormControl
            fullWidth
            error={
              formik.touched.inquiryType && Boolean(formik.errors.inquiryType)
            }
            required
          >
            <InputLabel id="inquiryType-label">
              {intl.get("contact.form.inquiryType")}
            </InputLabel>
            <Select
              labelId="inquiryType-label"
              id="inquiryType"
              name="inquiryType"
              value={formik.values.inquiryType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label={intl.get("contact.form.inquiryType")}
            >
              {contactOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {intl.get(option.label)}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.inquiryType && formik.errors.inquiryType && (
              <FormHelperText>
                {typeof formik.errors.inquiryType === "string"
                  ? formik.errors.inquiryType
                  : ""}
              </FormHelperText>
            )}
          </FormControl>

          <TextField
            fullWidth
            id="message"
            name="message"
            label={intl.get("contact.form.message")}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={
              formik.touched.message &&
              typeof formik.errors.message === "string"
                ? formik.errors.message
                : undefined
            }
            multiline
            rows={4}
            variant="outlined"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={submitting}
            endIcon={
              submitting ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            {submitting
              ? intl.get("contact.form.submitting")
              : intl.get("contact.form.submit")}
          </Button>
        </Box>
      </form>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          {intl.get("contact.form.successMessage")}
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          {intl.get("contact.form.errorMessage")}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm;
