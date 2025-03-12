import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

// Lazy-loaded pages
const Home = lazy(() => import('@pages/Home'));
const Products = lazy(() => import('@pages/Products'));
const ProductDetail = lazy(() => import('@pages/Products/ProductDetail'));
const Services = lazy(() => import('@pages/Services'));
const ServiceDetail = lazy(() => import('@pages/Services/ServiceDetail'));
const Industries = lazy(() => import('@pages/Industries'));
const IndustryDetail = lazy(() => import('@pages/Industries/IndustryDetail'));
const About = lazy(() => import('@pages/About'));
const Contact = lazy(() => import('@pages/Contact'));
const Resources = lazy(() => import('@pages/Resources'));
const NotFound = lazy(() => import('@pages/NotFound'));

// Loading component
const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:id" element={<IndustryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;