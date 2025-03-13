import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import intl from "react-intl-universal";

import babbleImage from "@assets/images/products/babble-product.jpg";
import babbleLiteImage from "@assets/images/products/babble-lite-product.jpg";

// Import icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginBottom: theme.spacing(1),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  overflow: "hidden",
  borderRadius: theme.spacing(1),
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const ProductMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: "56.25%", // 16:9 aspect ratio
  position: "relative",
}));

const ProductChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  fontWeight: 600,
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const ProductActions = styled(CardActions)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const FeaturedProducts: React.FC = () => {
  // Product data (replace with actual data from API or state)
  const products = [
    {
      id: "babble",
      title: "Babble",
      subtitle: intl.get("products.babble.subtitle"),
      description: intl.get("products.babble.short_description"),
      image: babbleImage,
      featured: true,
    },
    {
      id: "babble-lite",
      title: "Babble Lite",
      subtitle: intl.get("products.babble_lite.subtitle"),
      description: intl.get("products.babble_lite.short_description"),
      image: babbleLiteImage,
      featured: false,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <motion.div variants={itemVariants}>
              <SectionTitle variant="h6" color="primary" gutterBottom>
                {intl.get("home.products.subtitle")}
              </SectionTitle>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {intl.get("home.products.title")}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mb: 3, maxWidth: "800px", mx: "auto" }}
              >
                {intl.get("home.products.description")}
              </Typography>
            </motion.div>
          </Box>

          {/* Products Grid */}
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} md={6} key={product.id}>
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard elevation={3}>
                    <ProductMedia image={product.image} title={product.title}>
                      {product.featured && (
                        <ProductChip
                          label={intl.get("common.featured")}
                          color="primary"
                        />
                      )}
                    </ProductMedia>
                    <ProductContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {product.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="primary"
                        gutterBottom
                      >
                        {product.subtitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {product.description}
                      </Typography>
                    </ProductContent>
                    <ProductActions>
                      <Button
                        component={RouterLink}
                        to={`/products/${product.id}`}
                        variant="text"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                      >
                        {intl.get("common.learn_more")}
                      </Button>
                      <Button
                        component={RouterLink}
                        to="/contact?demo=true"
                        variant="contained"
                        color="primary"
                        sx={{ ml: "auto" }}
                      >
                        {intl.get("common.request_demo")}
                      </Button>
                    </ProductActions>
                  </ProductCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* View All Products Link */}
          <Box textAlign="center" mt={6}>
            <motion.div variants={itemVariants}>
              <Button
                component={RouterLink}
                to="/products"
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {intl.get("home.products.view_all")}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
