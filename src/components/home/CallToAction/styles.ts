import { Theme } from "@mui/material/styles";

export const callToActionStyles = (theme: Theme) => ({
  ctaWrapper: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 0),
    color: theme.palette.common.white,
    position: "relative",
    overflow: "hidden",
    backgroundImage: "linear-gradient(135deg, #0460E9 0%, #0099FF 100%)",
    boxShadow: "0px 10px 30px rgba(4, 96, 233, 0.2)",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
  shapeDivider: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    "& svg": {
      position: "relative",
      display: "block",
      width: "calc(100% + 1.3px)",
      height: "120px",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3rem",
    },
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
    fontWeight: 400,
    opacity: 0.9,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    alignItems: {
      xs: "flex-start",
      sm: "center",
    },
  },
  primaryButton: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    borderRadius: "30px",
    padding: theme.spacing(1, 4),
    fontWeight: 600,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
      transform: "translateY(-2px)",
    },
    width: {
      xs: "100%",
      sm: "auto",
    },
  },
  secondaryButton: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    borderRadius: "30px",
    padding: theme.spacing(1, 4),
    fontWeight: 600,
    marginLeft: {
      xs: 0,
      sm: theme.spacing(2),
    },
    marginTop: {
      xs: theme.spacing(2),
      sm: 0,
    },
    "&:hover": {
      borderColor: theme.palette.common.white,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    width: {
      xs: "100%",
      sm: "auto",
    },
  },
  graphicContainer: {
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  graphic: {
    maxWidth: "100%",
    height: "auto",
    filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))",
  },
});

export default callToActionStyles;
