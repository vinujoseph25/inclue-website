// src/components/resources/FaqList/index.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Chip,
  useTheme,
  Skeleton,
  Alert,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import intl from "react-intl-universal";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../animations/pageTransitions";

// Mock data for FAQs
// In a real implementation, this would come from your API
const mockFaqs = [
  {
    id: 1,
    question: "What is Babble and how can it help my business?",
    answer:
      "Babble is a next-generation intelligent end-to-end IIoT platform focused on Industry 4.0. It's designed to monitor the smallest details of the production process in real-time, increasing productivity and efficiency. Babble helps eliminate unnecessary downtime as production and service issues are identified before they become major problems. It connects all your devices for 24/7 monitoring with powerful data visualization and intelligent alarms.",
    category: "products",
  },
  {
    id: 2,
    question: "How does Inclue Technologies implement industrial automation?",
    answer:
      "Inclue Technologies implements industrial automation through a comprehensive approach that includes PLCs, Industrial Automation Sensors, and HMIs. Our solutions integrate SCADA systems, industrial drives, and factory automation tools to create intelligent, connected systems. We follow a detailed process from initial consultation and needs assessment through implementation, testing, training, and ongoing support to ensure optimal results for your specific environment.",
    category: "services",
  },
  {
    id: 3,
    question: "What industries does Inclue Technologies serve?",
    answer:
      "Inclue Technologies primarily serves the manufacturing and healthcare industries. In manufacturing, we provide smart factory management capabilities, real-time production monitoring, condition-based maintenance, and energy/utilities management solutions. For healthcare, we offer modern medicine and IoT integration, HL7® FHIR® integration for healthcare interoperability, real-time patient monitoring, EHR/EMR integration, and wearable device connectivity solutions.",
    category: "general",
  },
  {
    id: 4,
    question: "How does Inclue ensure data security in IoT deployments?",
    answer:
      "Inclue Technologies implements a multi-layered security approach for IoT deployments. This includes encryption for data in transit and at rest, secure authentication and authorization protocols, regular security audits and vulnerability assessments, and continuous monitoring for unusual patterns or activities. We follow industry best practices and compliance standards to ensure that all IoT implementations are protected from potential security threats while maintaining optimal performance.",
    category: "services",
  },
  {
    id: 5,
    question:
      "What is FHIR and how does it enhance healthcare data management?",
    answer:
      "FHIR (Fast Healthcare Interoperability Resources) is a standard for healthcare data exchange that allows different healthcare systems to share information securely and efficiently. Inclue leverages FHIR in our healthcare solutions to enable seamless integration between different EHR/EMR systems, wearable devices, and other healthcare applications. This improves real-time data access, enhances patient care through comprehensive information availability, and reduces administrative burden by eliminating manual data entry and reconciliation.",
    category: "healthcare",
  },
  {
    id: 6,
    question: "What support and maintenance services does Inclue provide?",
    answer:
      "Inclue Technologies offers comprehensive support and maintenance services including 24/7 technical support, regular software updates and patches, preventive maintenance schedules, remote monitoring and diagnostics, on-site support when necessary, and detailed documentation and knowledge bases. We provide different support tiers based on client needs and offer customizable service level agreements (SLAs) to ensure our support aligns with your operational requirements.",
    category: "services",
  },
  {
    id: 7,
    question: "How can I request a demonstration of Inclue's products?",
    answer:
      "You can request a demonstration of any Inclue product by filling out the demo request form on our website, contacting our sales team directly at sales@incluetech.com, or calling us at +91 94006 55235. Our team will reach out to schedule a personalized demonstration tailored to your specific needs and interests, either virtually or at your facility if location permits.",
    category: "general",
  },
  {
    id: 8,
    question:
      "What is the typical implementation timeline for Inclue's solutions?",
    answer:
      "Implementation timelines vary based on the complexity and scale of the solution, but typically range from 4-12 weeks for standard deployments. The process begins with requirements gathering and planning (1-2 weeks), followed by solution configuration and customization (2-4 weeks), testing and validation (1-2 weeks), and finally deployment and training (1-4 weeks). For enterprise-scale implementations or highly customized solutions, the timeline may extend to 4-6 months.",
    category: "services",
  },
];

// FAQ categories
const categories = [
  { value: "all", label: "resources.faqs.categories.all" },
  { value: "general", label: "resources.faqs.categories.general" },
  { value: "products", label: "resources.faqs.categories.products" },
  { value: "services", label: "resources.faqs.categories.services" },
  { value: "healthcare", label: "resources.faqs.categories.healthcare" },
];

const FaqList: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [faqs, setFaqs] = useState<typeof mockFaqs>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<typeof mockFaqs>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | false>(false);

  // Simulate API fetch
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // In a real app, you would fetch from API
        // const response = await fetch('/api/faqs');
        // const data = await response.json();

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setFaqs(mockFaqs);
        setFilteredFaqs(mockFaqs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Filter FAQs based on search and category
  useEffect(() => {
    let results = faqs;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term),
      );
    }

    // Filter by category
    if (activeCategory && activeCategory !== "all") {
      results = results.filter((faq) => faq.category === activeCategory);
    }

    setFilteredFaqs(results);
  }, [searchTerm, activeCategory, faqs]);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Handle accordion expansion
  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Render loading state
  if (loading) {
    return (
      <Box sx={{ py: 4 }}>
        {[...Array(4)].map((_, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Skeleton
              variant="rectangular"
              height={60}
              sx={{ borderRadius: 1, mb: 1 }}
            />
            {expanded === `panel${index}` && (
              <Skeleton
                variant="rectangular"
                height={100}
                sx={{ borderRadius: 1 }}
              />
            )}
          </Box>
        ))}
      </Box>
    );
  }

  // Render error state
  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 4 }}>
        {intl.get("resources.faqs.errorLoading")}
      </Alert>
    );
  }

  return (
    <Box>
      {/* Search and filter section */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder={intl.get("resources.faqs.searchPlaceholder")}
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        <Grid container spacing={1}>
          {categories.map((category) => (
            <Grid item key={category.value}>
              <Chip
                label={intl.get(category.label)}
                onClick={() => handleCategoryChange(category.value)}
                color={
                  activeCategory === category.value ? "primary" : "default"
                }
                sx={{
                  fontWeight:
                    activeCategory === category.value ? "bold" : "normal",
                  "&:hover": {
                    backgroundColor:
                      activeCategory === category.value
                        ? theme.palette.primary.main
                        : theme.palette.action.hover,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Results message */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {intl.get("resources.faqs.resultsFound", {
          count: filteredFaqs.length,
        })}
      </Typography>

      {/* FAQ accordions */}
      {filteredFaqs.length > 0 ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {filteredFaqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === `panel${faq.id}`}
              onChange={handleAccordionChange(`panel${faq.id}`)}
              sx={{
                mb: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: "8px !important",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: `0 0 16px 0`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${faq.id}-content`}
                id={`panel${faq.id}-header`}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <QuestionAnswerIcon color="primary" sx={{ mt: 0.3 }} />
                  <Typography variant="subtitle1" fontWeight="medium">
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <Divider />
              <AccordionDetails sx={{ pt: 3 }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ pl: 4 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>
      ) : (
        <Box sx={{ py: 6, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            {intl.get("resources.faqs.noResults")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FaqList;
