import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

// Import icons from MUI
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import CEOImage from "@assets/images/about/team/CEO.jpg";
import CTOImage from "@assets/images/about/team/CTO.jpg";
import HoEImage from "@assets/images/about/team/HOE.jpg";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[6],
  },
}));

const MediaWrapper = styled(CardMedia)(({ theme }) => ({
  height: 280,
  backgroundSize: "cover",
  backgroundPosition: "center center",
}));

const SocialIconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.primary.main,
}));

const PositionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const TeamSection: React.FC = () => {
  // Team members data (placeholder)
  // You can replace this with actual team data
  const teamMembers = [
    {
      name: "Midhun C",
      position: intl.get("about.team.designation_1"),
      bio: intl.get("about.team.bio1"),
      image: CEOImage,
      linkedin: "#",
      email: "midhun.cheruparambil@incluetech.com",
    },
    {
      name: "Vinu Joseph",
      position: intl.get("about.team.designation_2"),
      bio: intl.get("about.team.bio2"),
      image: CTOImage,
      linkedin: "#",
      email: "vinu.joseph@incluetech.com",
    },
    {
      name: "Sreejith R",
      position: intl.get("about.team.designation_3"),
      bio: intl.get("about.team.bio3"),
      image: HoEImage,
      linkedin: "#",
      email: "sreejith.r@incluetech.com",
    },
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom color="primary">
            {intl.get("about.team.title")}
          </Typography>
          <Typography variant="h6" paragraph color="text.secondary">
            {intl.get("about.team.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <StyledCard elevation={3}>
                  <MediaWrapper image={member.image} title={member.name} />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      align="center"
                    >
                      {member.name}
                    </Typography>
                    <PositionText variant="subtitle1" align="center">
                      {member.position}
                    </PositionText>
                    <StyledDivider />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {member.bio}
                    </Typography>
                    <SocialIconsWrapper>
                      {/* TODO */}
                      {/* <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StyledIconButton aria-label="LinkedIn">
                          <LinkedInIcon />
                        </StyledIconButton>
                      </a> */}
                      <a href={`mailto:${member.email}`}>
                        <StyledIconButton aria-label="Email">
                          <EmailIcon />
                        </StyledIconButton>
                      </a>
                    </SocialIconsWrapper>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
