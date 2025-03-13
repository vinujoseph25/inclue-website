import { Theme } from "@mui/material/styles";

export const footerStyles = (theme: Theme) => ({
  footer: {
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.primary.dark : "#001B2E",
    color: theme.palette.common.white,
    padding: theme.spacing(6, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 0),
    },
  },
  footerHeading: {
    color: theme.palette.common.white,
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  footerLink: {
    color: theme.palette.common.white,
    textDecoration: "none",
    display: "block",
    marginBottom: theme.spacing(1),
    "&:hover": {
      color: theme.palette.secondary.light,
      textDecoration: "none",
    },
  },
  socialIcons: {
    marginTop: theme.spacing(2),
  },
  socialIcon: {
    color: theme.palette.common.white,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
  },
  contactIcon: {
    marginRight: theme.spacing(1),
    marginTop: "4px",
  },
  newsletterForm: {
    marginTop: theme.spacing(2),
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.3)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
    "& .MuiInputBase-input": {
      color: theme.palette.common.white,
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "&:hover .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.9)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  subscribeButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    marginTop: theme.spacing(1),
  },
  copyright: {
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(3),
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  legalLinks: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  legalLink: {
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: 0,
    },
  },
});

export default footerStyles;
