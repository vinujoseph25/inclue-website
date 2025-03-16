import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

const TimelineItem = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const TimelineConnector = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: "50%",
  height: theme.spacing(4),
  width: 2,
  backgroundColor: theme.palette.primary.main,
  transform: "translateX(-50%)",
  [theme.breakpoints.down("sm")]: {
    left: 24,
  },
}));

const TimelineYear = styled("span")(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
}));

const CompanyHistory: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Timeline events
  const timelineEvents = [
    {
      year: "2020",
      title: intl.get("about.history.foundation.title"),
      description: intl.get("about.history.foundation.description"),
    },
    {
      year: "2022",
      title: intl.get("about.history.product.title"),
      description: intl.get("about.history.product.description"),
    },
    {
      year: "2024",
      title: intl.get("about.history.future.title"),
      description: intl.get("about.history.future.description"),
    },
    {
      year: "2025",
      title: intl.get("about.history.rebranding.title"),
      description: intl.get("about.history.rebranding.description"),
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded as Torkwell Automation",
      description:
        "Our journey began with a focus on industrial hardware solutions. As Torkwell Automation, we specialized in developing and implementing reliable automation hardware for manufacturing facilities, helping businesses improve operational efficiency with custom hardware integrations.",
    },
    {
      year: "2021",
      title: "Expansion into Software",
      description:
        "As our hardware implementations grew in complexity, clients began requesting integrated software solutions to manage and optimize their systems. This pivotal shift led us to build a dedicated software development team, creating custom applications that complemented our hardware solutions and provided clients with unified control interfaces.",
    },
    {
      year: "2022",
      title: "Launch of Babble Lite",
      description:
        "After months of development and close collaboration with industry partners, we launched our first flagship product, Babble Lite. This smart factory management system was successfully deployed across CUMI's manufacturing facilities, delivering real-time monitoring capabilities, predictive maintenance, and significant operational improvements that validated our software-driven approach.",
    },
    {
      year: "2024",
      title: "Growing Demand for Custom Solutions",
      description:
        "The success of our integrated hardware-software solutions led to a surge in demand for customized applications across manufacturing and healthcare sectors. Recognizing the tremendous potential for innovation in these areas, we made the strategic decision to create a dedicated entity focused purely on advanced software solutions and IoT integration services.",
    },
    {
      year: "2025",
      title: "Inclue Technologies Founded",
      description:
        "Inclue Technologies was formally established as a specialized software company, bringing together our experienced team of engineers, developers, and industry experts under a unified vision. With the incorporation of Inclue Technologies Pvt. Ltd., we positioned ourselves at the forefront of industrial IoT and smart automation, dedicated to creating innovative solutions that transform operations for our clients across manufacturing and healthcare sectors.",
    },
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          color="primary"
        >
          {intl.get("about.history.title")}
        </Typography>

        <Typography
          variant="h6"
          align="center"
          paragraph
          color="text.secondary"
        >
          {intl.get("about.history.subtitle")}
        </Typography>

        <Box mt={6}>
          {milestones.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <TimelineItem
                elevation={3}
                sx={{
                  marginBottom: index === milestones.length - 1 ? 0 : undefined,
                }}
              >
                <Grid container spacing={isMobile ? 2 : 4}>
                  <Grid item xs={12} sm={2}>
                    <TimelineYear>{event.year}</TimelineYear>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {event.description}
                    </Typography>
                  </Grid>
                </Grid>
                {index < milestones.length - 1 && <TimelineConnector />}
              </TimelineItem>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyHistory;
