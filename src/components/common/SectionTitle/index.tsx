import React from "react";
import { Typography, Box, Divider, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  withDivider?: boolean;
  className?: string;
}

const TitleBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "align",
})<{ align?: "left" | "center" | "right" }>(({ align }) => ({
  marginBottom: "40px",
  textAlign: align,
}));

const AccentDivider = styled(Divider)(({ theme }) => ({
  width: "60px",
  height: "4px",
  backgroundColor: theme.palette.primary.main,
  margin: "24px auto",
}));

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  withDivider = true,
  className,
}) => {
  const theme = useTheme();

  return (
    <TitleBox align={align} className={className}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 700,
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}
      </Typography>

      {withDivider && (
        <AccentDivider
          sx={{
            margin:
              align === "center"
                ? "24px auto"
                : align === "right"
                  ? "24px 0 24px auto"
                  : "24px 0",
          }}
        />
      )}

      {subtitle && (
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ mt: 2, maxWidth: "800px", mx: align === "center" ? "auto" : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </TitleBox>
  );
};

export default SectionTitle;
