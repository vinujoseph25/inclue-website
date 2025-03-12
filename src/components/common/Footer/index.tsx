import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme as useMuiTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { intl } from "@/utils/i18n";
import logo from "@/assets/images/logo.png"; // Replace with actual logo path

const Footer: React.FC = () => {
  const muiTheme = useMuiTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "grey.100" : "#051726",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <img
                src={logo}
                alt="Inclue Technologies"
                height="50"
                style={{ marginBottom: 16 }}
              />
              <Typography variant="body2" color="text.secondary" align="left">
                Inclue Technologies Private Limited is a tech startup with
                innovative products and services in manufacturing and
                healthcare. We utilize the potential of technology to create a
                smart and connected world.
              </Typography>
              <Box sx={{ mt: 2, display: "flex" }}>
                <IconButton color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Products
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText>
                  <Link
                    to="/products/babble"
                    style={{ color: muiTheme.palette.text.secondary }}
                  >
                    Babble
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link
                    to="/products/babble-lite"
                    style={{ color: muiTheme.palette.text.secondary }}
                  >
                    Babble Lite
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Services
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText>
                  <Link
                    to="/services/industrial-automation"
                    style={{ color: muiTheme.palette.text.secondary }}
                  >
                    Industrial Automation
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link
                    to="/services/custom-iot-services"
                    style={{ color: muiTheme.palette.text.secondary }}
                  >
                    Custom IoT Services
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link
                    to="/services/plc-solutions"
                    style={{ color: muiTheme.palette.text.secondary }}
                  >
                    PLC Solutions
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link
                    to="/services/web-development"
                    style={{ color: muiTheme.palette.text.secondary }}
                  >
                    Web Development
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Father Mulawarickal Road, Thevara,
              <br />
              Kerala, 682013
              <br />
              India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Phone:</strong> +91-94006-55235
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Email:</strong> info@incluetech.com
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 2 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {intl.get("footer.copyright")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
