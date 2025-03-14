// src/components/products/ProductCard/index.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import intl from "react-intl-universal";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme();

  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.name}
          sx={{
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Chip
          label={product.shortDescription}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            fontWeight: "medium",
            fontSize: "0.875rem",
          }}
        />
      </Box>

      <CardContent
        sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          {product.name}
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 3, flexGrow: 1 }}>
          {product.description}
        </Typography>

        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
          sx={{ mt: 2 }}
        >
          {intl.get("products.keyFeatures")}:
        </Typography>

        <List dense disablePadding sx={{ mb: 3 }}>
          {product.features.slice(0, 4).map((feature, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}
        >
          <Button
            component={Link}
            to={`/products/${product.slug}`}
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: "medium" }}
          >
            {intl.get("products.viewDetails")}
          </Button>

          <Button
            component={Link}
            to="/contact?demo=true"
            variant="outlined"
            color="primary"
            sx={{ fontWeight: "medium" }}
          >
            {intl.get("products.requestDemo")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
