import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Button from "./index";

// Example icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";

/**
 * This component is for demonstration purposes to show the different
 * variants and configurations of the custom Button component.
 */
const ButtonExamples: React.FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Button Component Examples
      </Typography>
      <Typography paragraph>
        The custom Button component extends Material UI's Button with
        brand-specific styling and additional functionality like direct
        integration with React Router.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Color Variants */}
      <Typography variant="h5" gutterBottom>
        Color Variants
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button color="primary">Primary</Button>
        </Grid>
        <Grid item>
          <Button color="secondary">Secondary</Button>
        </Grid>
        <Grid item>
          <Button color="white" sx={{ backgroundColor: "primary.main" }}>
            White
          </Button>
        </Grid>
        <Grid item>
          <Button color="black">Black</Button>
        </Grid>
      </Grid>

      {/* Style Variants */}
      <Typography variant="h5" gutterBottom>
        Style Variants
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button variant="contained">Contained</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Outlined</Button>
        </Grid>
        <Grid item>
          <Button variant="text">Text</Button>
        </Grid>
      </Grid>

      {/* Sizes */}
      <Typography variant="h5" gutterBottom>
        Sizes
      </Typography>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Grid item>
          <Button size="small">Small</Button>
        </Grid>
        <Grid item>
          <Button size="medium">Medium</Button>
        </Grid>
        <Grid item>
          <Button size="large">Large</Button>
        </Grid>
      </Grid>

      {/* Rounded Corners */}
      <Typography variant="h5" gutterBottom>
        Rounded & Square
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button rounded>Rounded Button</Button>
        </Grid>
        <Grid item>
          <Button rounded={false}>Square Button</Button>
        </Grid>
      </Grid>

      {/* With Icons */}
      <Typography variant="h5" gutterBottom>
        With Icons
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button startIcon={<DownloadIcon />}>Download</Button>
        </Grid>
        <Grid item>
          <Button endIcon={<ArrowForwardIcon />}>Next</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" endIcon={<SendIcon />}>
            Send Message
          </Button>
        </Grid>
      </Grid>

      {/* With Router Links */}
      <Typography variant="h5" gutterBottom>
        Navigation Buttons
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button to="/products">Internal Link</Button>
        </Grid>
        <Grid item>
          <Button to="https://example.com" external variant="outlined">
            External Link
          </Button>
        </Grid>
      </Grid>

      {/* Elevation */}
      <Typography variant="h5" gutterBottom>
        Elevation Levels
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button elevation={0}>No Shadow</Button>
        </Grid>
        <Grid item>
          <Button elevation={1}>Low Shadow</Button>
        </Grid>
        <Grid item>
          <Button elevation={4}>Medium Shadow</Button>
        </Grid>
        <Grid item>
          <Button elevation={8}>High Shadow</Button>
        </Grid>
      </Grid>

      {/* Disabled */}
      <Typography variant="h5" gutterBottom>
        Disabled State
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Button disabled>Disabled Contained</Button>
        </Grid>
        <Grid item>
          <Button disabled variant="outlined">
            Disabled Outlined
          </Button>
        </Grid>
        <Grid item>
          <Button disabled variant="text">
            Disabled Text
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ButtonExamples;
