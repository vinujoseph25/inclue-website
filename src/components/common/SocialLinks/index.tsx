import React from "react";
import { Box, IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface SocialLinkProps extends IconButtonProps {
  variant?: "header" | "footer";
}

// Styled components
const SocialIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant?: "header" | "footer" }>(({ theme, variant }) => ({
  color:
    variant === "footer"
      ? theme.palette.common.white
      : theme.palette.primary.main,
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor:
      variant === "footer"
        ? "rgba(255, 255, 255, 0.1)"
        : theme.palette.primary.light + "20",
  },
  "&:last-child": {
    marginRight: 0,
  },
}));

interface SocialLinksProps {
  variant?: "header" | "footer";
  className?: string;
}

const socialLinks = [
  {
    icon: <FacebookIcon />,
    url: "https://facebook.com/",
    ariaLabel: "Facebook",
  },
  { icon: <TwitterIcon />, url: "https://twitter.com/", ariaLabel: "Twitter" },
  {
    icon: <LinkedInIcon />,
    url: "https://linkedin.com/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <InstagramIcon />,
    url: "https://instagram.com/",
    ariaLabel: "Instagram",
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "header",
  className,
}) => {
  return (
    <Box className={className} display="flex" alignItems="center">
      {socialLinks.map((link, index) => (
        <SocialIconButton
          key={index}
          aria-label={link.ariaLabel}
          size="small"
          variant={variant}
          //TODO: Uncomment the following lines to make the social links clickable
          //   component="a"
          //   href={link.url}
          //   target="_blank"
          //   rel="noopener noreferrer"
        >
          {link.icon}
        </SocialIconButton>
      ))}
    </Box>
  );
};

export default SocialLinks;
