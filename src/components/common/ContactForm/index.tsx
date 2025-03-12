import React, { useState } from "react";
import { Grid, Button, CircularProgress, Alert, Snackbar } from "@mui/material";
import Form from "../Form/Form";
import TextField from "../Form/TextField";
import Select from "../Form/Select";
import Checkbox from "../Form/Checkbox";
import { submitContactForm } from "@/api/apiClient";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  subscription: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  subscription: false,
};

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value, checked } = e.target as HTMLInputElement;
    if (name === "subscription") {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name as string]: value });
    }
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      newErrors.email = "Invalid email address";
    }

    // Phone validation (optional)
    if (values.phone && !/^\+?[0-9\s-()]+$/.test(values.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Subject validation
    if (!values.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message is too short (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await submitContactForm(values);
      if (response.data.success) {
        setSuccess(true);
        setValues(initialValues);
      } else {
        setErrorMessage(
          response.data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setErrorMessage("");
  };

  const subjectOptions = [
    { value: "", label: "Select a subject" },
    { value: "general", label: "General Inquiry" },
    { value: "products", label: "Products Information" },
    { value: "services", label: "Services Information" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership Opportunities" },
  ];

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        title="Get in Touch"
        subtitle="Fill out the form below and we'll get back to you as soon as possible."
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Full Name"
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email Address"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone Number"
              value={values.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="company"
              label="Company"
              value={values.company}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              name="subject"
              label="Subject"
              options={subjectOptions}
              value={values.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              multiline
              rows={6}
              value={values.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox
              name="subscription"
              label="Subscribe to our newsletter"
              checked={values.subscription}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : "Send Message"}
            </Button>
          </Grid>
        </Grid>
      </Form>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your message has been sent successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
