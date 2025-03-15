import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import MainLayout from "@/layout/MainLayout";

// Lazy loading for page components
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
const ProductDetail = React.lazy(
  () => import("../pages/Products/ProductDetail"),
);
const Services = React.lazy(() => import("../pages/Services"));
const ServiceDetail = React.lazy(
  () => import("../pages/Services/ServiceDetail"),
);
const Industries = React.lazy(() => import("../pages/Industries"));
const IndustryDetail = React.lazy(
  () => import("../pages/Industries/IndustryDetail"),
);
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Resources = React.lazy(() => import("../pages/Resources"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("../pages/TermsOfService"));
const NotFound = React.lazy(() => import("../pages/NotFound/index"));

// Loading component for suspense fallback
const Loading = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
    }}
  >
    <CircularProgress />
  </Box>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:id" element={<IndustryDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
