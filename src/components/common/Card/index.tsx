import React from "react";
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface CardProps extends MuiCardProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHeight?: number | string;
  elevation?: number;
  hoverEffect?: boolean;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => !["hoverEffect"].includes(prop as string),
})<{ hoverEffect?: boolean }>(({ theme, hoverEffect }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  ...(hoverEffect && {
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: theme.shadows[8],
    },
  }),
}));

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  imageHeight = 200,
  elevation = 2,
  hoverEffect = true,
  children,
  ...props
}) => {
  return (
    <StyledCard elevation={elevation} hoverEffect={hoverEffect} {...props}>
      {imageUrl && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={imageUrl}
          alt={imageAlt || title || "Card image"}
        />
      )}
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {title && (
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        <Box sx={{ mt: 1 }}>{children}</Box>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
