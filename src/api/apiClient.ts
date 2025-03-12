import axios from "axios";
import productsMock from "./mock/products";
import servicesMock from "./mock/services";

// Create axios instance
const apiClient = axios.create({
  baseURL: "http://www.incluetech.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API functions
export const fetchProducts = async () => {
  // Uncomment this when real API is available
  // return apiClient.get('/products');

  // Using mock data for now
  return {
    data: productsMock,
  };
};

export const fetchServices = async () => {
  // Uncomment this when real API is available
  // return apiClient.get('/services');

  // Using mock data for now
  return {
    data: servicesMock,
  };
};

export const submitContactForm = async (formData: any) => {
  // Uncomment this when real API is available
  // return apiClient.post('/contact', formData);

  // Mock successful response
  return {
    data: {
      success: true,
      message: "Thank you for your message. We will contact you shortly!",
    },
  };
};

export default apiClient;
