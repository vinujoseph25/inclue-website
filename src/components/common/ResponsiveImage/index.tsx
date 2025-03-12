import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ResponsiveImageProps extends BoxProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  backgroundSize?: string;
  height?: string | number;
  backgroundPosition?: string;
}

const ImageContainer = styled(Box)<{ ratio?: number }>(({ ratio }) => ({
  position: "relative",
  width: "100%",
  ...(ratio && {
    paddingTop: `${(1 / ratio) * 100}%`,
  }),
  overflow: "hidden",
}));

const Image = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "transform 0.3s ease",
});

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio,
  objectFit = "cover",
  height,
  backgroundSize,
  backgroundPosition = "center",
  ...props
}) => {
  // If an aspect ratio is provided, render an image with that ratio
  if (aspectRatio) {
    return (
      <ImageContainer ratio={aspectRatio} {...props}>
        <Image src={src} alt={alt} style={{ objectFit }} />
      </ImageContainer>
    );
  }

  // If height is provided, render a fixed height image
  if (height) {
    return (
      <Box
        sx={{
          height,
          width: "100%",
          overflow: "hidden",
          ...props.sx,
        }}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit,
          }}
        />
      </Box>
    );
  }

  // Otherwise, render as a background image
  return (
    <Box
      sx={{
        backgroundImage: `url(${src})`,
        backgroundSize: backgroundSize || "cover",
        backgroundPosition,
        backgroundRepeat: "no-repeat",
        width: "100%",
        ...props.sx,
      }}
      role="img"
      aria-label={alt}
      {...props}
    />
  );
};

export default ResponsiveImage;
