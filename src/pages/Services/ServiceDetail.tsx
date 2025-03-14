import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";
import SEO from "@/components/common/SEO";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCaseStudies from "@/components/services/ServiceCaseStudies";
import FAQAccordion from "@/components/services/FAQAccordion";
import RelatedServices from "@/components/services/RelatedServices";
// import ContactForm from "@/components/common/ContactForm";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@redux/store";
// import { fetchServiceById } from "@redux/slices/servicesSlice";
import intl from "react-intl-universal";
import ContactForm from "@/components/contact/ContactForm";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // const { services, loading, error } = useSelector(
  //   (state: RootState) => state.services,
  // );

  const { services, loading, error } = {
    services: [],
    loading: false,
    error: null,
  };
  const [service, setService] = useState<any>(null);

  // useEffect(() => {
  //   if (id) {
  //     // @ts-ignore
  //     dispatch(fetchServiceById(id));
  //   }
  // }, [id, dispatch]);

  // Mock data for development (representing all services offered)

  const mockServices = [
    {
      id: "industrial-automation",
      title: "Industrial Automation",
      description:
        "Inclue designs and engineers customized automated solutions and products that add substantial value to your business.",
      longDescription:
        "Industrial automation is an integral part of Industry 4.0 and is closely associated with control engineering. Industrial automation ensures the use of control devices, including PC / PLCs / PACs to monitor industrial processes, equipment, and technology by reducing labor intervention wherever possible.",
      benefits: [
        {
          title: "High Productivity",
          description:
            "Industrial automation guarantees that a plant runs throughout the year, without any breaks or compromises on quality and accuracy.",
        },
        {
          title: "Superior Product Quality",
          description:
            "Automation ensures uniformity in all processes, guarantying standardization, and quality.",
        },
        {
          title: "Reduced Production Cost",
          description:
            "Due to advances in sensors, smart devices, software, and machine learning technologies, automation can streamline production lines and reduce costs, while maintaining quality.",
        },
        {
          title: "High Safety",
          description:
            "Automation allows human workers to move into supervising positions and deploy robots to manage dangerous situations.",
        },
        {
          title: "Increased Data Security and Accuracy",
          description:
            "Automation permits data collection in a secured manner, allowing companies to make informed decisions.",
        },
      ],
      solutions: [
        {
          title: "PLCs",
          description:
            "Inclue designs exceptional PLCs that can be utilized in industrial plants and factories for controlling a series of machinery, including motors, pumps, circuit breakers, lights, and fans.",
        },
        {
          title: "Industrial Automation Sensors",
          description:
            "They support making production systematized, automated, and intelligent, allowing supervisors to easily monitor any changes occurring on the site in real-time.",
        },
        {
          title: "Human-Machine Interfaces (HMIs)",
          description:
            "Interfaces that connect a human to a machine, device, or system. They help in initiating and ending cycles, modifying set points, and performing other functions.",
        },
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description:
            "We discuss your business goals, challenges, and requirements to understand how automation can benefit your specific operations.",
        },
        {
          step: 2,
          title: "System Design",
          description:
            "Our team creates a customized automation solution designed specifically for your facility and requirements.",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "We handle the integration of hardware and software components, ensuring minimal disruption to your operations.",
        },
        {
          step: 4,
          title: "Testing and Validation",
          description:
            "Comprehensive testing ensures all systems work as expected before final deployment.",
        },
        {
          step: 5,
          title: "Training and Handover",
          description:
            "We provide thorough training to your team and ensure a smooth transition to the new automated systems.",
        },
        {
          step: 6,
          title: "Ongoing Support",
          description:
            "Our commitment doesn't end at deployment - we offer continued technical support and maintenance services.",
        },
      ],
      caseStudies: [
        {
          id: "case-study-1",
          title: "Manufacturing Efficiency Improvement",
          industry: "Automotive",
          challenge:
            "A leading automotive parts manufacturer was experiencing significant downtime and quality control issues in their production line.",
          solution:
            "Inclue implemented a comprehensive automation system with real-time monitoring and predictive maintenance capabilities.",
          results:
            "Production efficiency increased by 37%, defect rates decreased by 42%, and annual maintenance costs reduced by 28%.",
          image: "/assets/images/case-studies/automotive-case-study.jpg",
        },
        {
          id: "case-study-2",
          title: "Smart Factory Transformation",
          industry: "Consumer Electronics",
          challenge:
            "A consumer electronics manufacturer needed to modernize their facility to meet increasing demand and maintain competitive advantage.",
          solution:
            "Inclue designed and implemented a complete smart factory solution featuring integrated PLCs, HMIs, and IoT sensors.",
          results:
            "Achieved 45% faster production cycles, 99.8% uptime, and 23% reduction in energy consumption.",
          image: "/assets/images/case-studies/electronics-case-study.jpg",
        },
      ],
      faqs: [
        {
          question:
            "How long does industrial automation implementation typically take?",
          answer:
            "Implementation timelines vary depending on the scope and complexity of the project. Small to medium-sized implementations typically take 2-4 months, while larger enterprise-wide systems may take 6-12 months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
        },
        {
          question: "What ROI can I expect from industrial automation?",
          answer:
            "While ROI varies by industry and specific implementation, our clients typically see ROI within 12-24 months. Cost savings come from reduced labor costs, decreased downtime, improved quality control (fewer defects), increased production capacity, and lower energy consumption.",
        },
        {
          question: "Will I need to completely replace my existing equipment?",
          answer:
            "Not necessarily. We specialize in integrating with existing systems whenever possible. Our solutions can often upgrade and enhance your current equipment with modern control systems, sensors, and monitoring capabilities. During the assessment phase, we'll identify which components can be retained and which would benefit from replacement.",
        },
        {
          question:
            "How do you ensure minimal disruption during implementation?",
          answer:
            "We understand that downtime is costly. Our implementation strategy typically includes phased rollouts, off-hours installation, and careful planning to minimize disruption. When possible, we build and test systems off-site before installation, and we often implement changes during planned maintenance periods.",
        },
      ],
      relatedServices: ["custom-iot", "plc-solutions", "web-development"],
      image: "/assets/images/services/industrial-automation.jpg",
      icon: "automation",
    },
    {
      id: "custom-iot",
      title: "Custom IoT",
      description:
        "Inclue offers tailored IoT solutions to connect and optimize your business operations.",
      longDescription:
        "Our Custom IoT Services provide end-to-end solutions for connecting devices, collecting data, and deriving actionable insights. We help businesses leverage IoT technology to improve efficiency, reduce costs, and create new revenue streams.",
      benefits: [
        {
          title: "Enhanced Connectivity",
          description:
            "Seamlessly connect devices and systems to streamline operations and improve communication.",
        },
        {
          title: "Data-Driven Insights",
          description:
            "Collect and analyze data to make informed decisions and optimize processes.",
        },
        {
          title: "Cost Reduction",
          description:
            "Automate tasks and improve resource management to reduce operational costs.",
        },
        {
          title: "Improved Efficiency",
          description:
            "Optimize workflows and increase productivity with real-time monitoring and control.",
        },
        {
          title: "Scalability",
          description:
            "Easily scale your IoT solutions to accommodate growing business needs.",
        },
      ],
      solutions: [
        {
          title: "IoT Device Integration",
          description:
            "Integrate a wide range of IoT devices to create a cohesive and efficient system.",
        },
        {
          title: "Data Analytics",
          description:
            "Utilize advanced analytics to gain insights from collected data and drive business growth.",
        },
        {
          title: "Remote Monitoring",
          description:
            "Monitor and control your operations remotely to ensure optimal performance.",
        },
      ],
      process: [
        {
          step: 1,
          title: "Consultation",
          description:
            "Understand your business needs and identify opportunities for IoT integration.",
        },
        {
          step: 2,
          title: "Solution Design",
          description:
            "Develop a customized IoT solution tailored to your specific requirements.",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "Deploy the IoT solution and integrate it with your existing systems.",
        },
        {
          step: 4,
          title: "Testing",
          description:
            "Conduct thorough testing to ensure the solution meets your expectations.",
        },
        {
          step: 5,
          title: "Deployment",
          description:
            "Roll out the IoT solution and provide training to your team.",
        },
        {
          step: 6,
          title: "Support",
          description:
            "Offer ongoing support and maintenance to ensure continuous operation.",
        },
      ],
      caseStudies: [
        {
          id: "case-study-3",
          title: "Smart Agriculture",
          industry: "Agriculture",
          challenge:
            "A farm needed to optimize water usage and monitor soil conditions in real-time.",
          solution:
            "Inclue implemented an IoT solution with soil moisture sensors and automated irrigation systems.",
          results:
            "Water usage reduced by 30%, crop yield increased by 20%, and labor costs decreased by 15%.",
          image: "/assets/images/case-studies/agriculture-case-study.jpg",
        },
      ],
      faqs: [
        {
          question: "What is IoT?",
          answer:
            "IoT stands for Internet of Things, which refers to the network of physical devices connected to the internet, collecting and sharing data.",
        },
        {
          question: "How can IoT benefit my business?",
          answer:
            "IoT can improve efficiency, reduce costs, and provide valuable insights through data collection and analysis.",
        },
      ],
      relatedServices: [
        "plc-solutions",
        "scada-integration",
        "web-development",
      ],
      image: "/assets/images/services/custom-iot-services.jpg",
      icon: "iot",
    },
    {
      id: "plc-solutions",
      title: "PLC Solutions",
      description:
        "Inclue provides advanced PLC solutions for automating industrial processes.",
      longDescription:
        "Our PLC Solutions offer reliable and scalable automation for various industrial applications. We design and implement PLC systems to enhance productivity, ensure safety, and improve operational efficiency.",
      benefits: [
        {
          title: "Reliable Automation",
          description:
            "Ensure consistent and accurate control of industrial processes.",
        },
        {
          title: "Scalability",
          description:
            "Easily expand and adapt PLC systems to meet changing business needs.",
        },
        {
          title: "Cost Efficiency",
          description:
            "Reduce operational costs through efficient automation and control.",
        },
        {
          title: "Enhanced Safety",
          description:
            "Implement safety protocols and reduce human intervention in hazardous environments.",
        },
        {
          title: "Real-Time Monitoring",
          description:
            "Monitor and control processes in real-time for improved decision-making.",
        },
      ],
      solutions: [
        {
          title: "Custom PLC Programming",
          description:
            "Develop custom PLC programs tailored to your specific requirements.",
        },
        {
          title: "System Integration",
          description:
            "Integrate PLC systems with existing equipment and processes.",
        },
        {
          title: "Maintenance and Support",
          description:
            "Provide ongoing maintenance and support to ensure optimal performance.",
        },
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          description:
            "Evaluate your current systems and identify opportunities for PLC integration.",
        },
        {
          step: 2,
          title: "Design",
          description:
            "Create a detailed design for the PLC solution, including hardware and software components.",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "Install and configure the PLC system, ensuring seamless integration with existing processes.",
        },
        {
          step: 4,
          title: "Testing",
          description:
            "Conduct thorough testing to ensure the system operates as expected.",
        },
        {
          step: 5,
          title: "Deployment",
          description:
            "Deploy the PLC solution and provide training to your team.",
        },
        {
          step: 6,
          title: "Support",
          description:
            "Offer ongoing support and maintenance to ensure continuous operation.",
        },
      ],
      caseStudies: [
        {
          id: "case-study-4",
          title: "Automated Manufacturing Line",
          industry: "Manufacturing",
          challenge:
            "A manufacturing plant needed to automate their production line to increase efficiency.",
          solution:
            "Inclue implemented a PLC system to control and monitor the entire production process.",
          results:
            "Production efficiency increased by 25%, downtime reduced by 40%, and product quality improved.",
          image: "/assets/images/case-studies/manufacturing-case-study.jpg",
        },
      ],
      faqs: [
        {
          question: "What is a PLC?",
          answer:
            "A PLC (Programmable Logic Controller) is an industrial computer used to control and automate machinery and processes.",
        },
        {
          question: "How can PLC solutions benefit my business?",
          answer:
            "PLC solutions can improve efficiency, reduce costs, enhance safety, and provide real-time monitoring and control.",
        },
      ],
      relatedServices: [
        "custom-iot-services",
        "scada-integration",
        "web-development",
      ],
      image: "/assets/images/services/plc-solutions.jpg",
      icon: "plc",
    },
    {
      id: "scada-integration",
      title: "SCADA Integration",
      description:
        "Inclue offers comprehensive SCADA integration services for real-time monitoring and control.",
      longDescription:
        "Our SCADA Integration services provide a centralized platform for monitoring and controlling industrial processes. We design and implement SCADA systems to enhance visibility, improve efficiency, and ensure safety.",
      benefits: [
        {
          title: "Centralized Control",
          description:
            "Monitor and control all processes from a single, centralized platform.",
        },
        {
          title: "Real-Time Data",
          description:
            "Access real-time data to make informed decisions and optimize operations.",
        },
        {
          title: "Improved Efficiency",
          description:
            "Streamline processes and reduce downtime through automated control.",
        },
        {
          title: "Enhanced Safety",
          description:
            "Implement safety protocols and reduce human intervention in hazardous environments.",
        },
        {
          title: "Scalability",
          description:
            "Easily expand and adapt SCADA systems to meet changing business needs.",
        },
      ],
      solutions: [
        {
          title: "Custom SCADA Development",
          description:
            "Develop custom SCADA systems tailored to your specific requirements.",
        },
        {
          title: "System Integration",
          description:
            "Integrate SCADA systems with existing equipment and processes.",
        },
        {
          title: "Maintenance and Support",
          description:
            "Provide ongoing maintenance and support to ensure optimal performance.",
        },
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          description:
            "Evaluate your current systems and identify opportunities for SCADA integration.",
        },
        {
          step: 2,
          title: "Design",
          description:
            "Create a detailed design for the SCADA solution, including hardware and software components.",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "Install and configure the SCADA system, ensuring seamless integration with existing processes.",
        },
        {
          step: 4,
          title: "Testing",
          description:
            "Conduct thorough testing to ensure the system operates as expected.",
        },
        {
          step: 5,
          title: "Deployment",
          description:
            "Deploy the SCADA solution and provide training to your team.",
        },
        {
          step: 6,
          title: "Support",
          description:
            "Offer ongoing support and maintenance to ensure continuous operation.",
        },
      ],
      caseStudies: [
        {
          id: "case-study-5",
          title: "Water Treatment Plant",
          industry: "Utilities",
          challenge:
            "A water treatment plant needed to improve monitoring and control of their processes.",
          solution:
            "Inclue implemented a SCADA system to provide real-time monitoring and control of the entire treatment process.",
          results:
            "Operational efficiency improved by 30%, downtime reduced by 20%, and compliance with regulations ensured.",
          image: "/assets/images/case-studies/utilities-case-study.jpg",
        },
      ],
      faqs: [
        {
          question: "What is SCADA?",
          answer:
            "SCADA (Supervisory Control and Data Acquisition) is a system used for monitoring and controlling industrial processes.",
        },
        {
          question: "How can SCADA integration benefit my business?",
          answer:
            "SCADA integration can improve efficiency, reduce costs, enhance safety, and provide real-time monitoring and control.",
        },
      ],
      relatedServices: [
        "custom-iot-services",
        "plc-solutions",
        "web-development",
      ],
      image: "/assets/images/services/scada-integration.jpg",
      icon: "scada",
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Inclue offers professional web development services to create high-quality websites and web applications.",
      longDescription:
        "Our Web Development services provide end-to-end solutions for creating responsive, user-friendly, and high-performance websites and web applications. We help businesses establish a strong online presence and achieve their digital goals.",
      benefits: [
        {
          title: "Responsive Design",
          description:
            "Create websites that look great and function well on all devices.",
        },
        {
          title: "User-Friendly Interface",
          description:
            "Design intuitive and easy-to-navigate interfaces for a seamless user experience.",
        },
        {
          title: "High Performance",
          description:
            "Ensure fast loading times and smooth performance for optimal user satisfaction.",
        },
        {
          title: "SEO Optimization",
          description:
            "Optimize websites for search engines to improve visibility and attract more visitors.",
        },
        {
          title: "Custom Solutions",
          description:
            "Develop custom web solutions tailored to your specific business needs.",
        },
      ],
      solutions: [
        {
          title: "Website Development",
          description:
            "Create professional and responsive websites to establish your online presence.",
        },
        {
          title: "Web Application Development",
          description:
            "Develop custom web applications to meet your unique business requirements.",
        },
        {
          title: "E-Commerce Solutions",
          description:
            "Build robust e-commerce platforms to sell products and services online.",
        },
      ],
      process: [
        {
          step: 1,
          title: "Consultation",
          description:
            "Understand your business goals and requirements for the web development project.",
        },
        {
          step: 2,
          title: "Design",
          description:
            "Create a detailed design for the website or web application, including wireframes and mockups.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Develop the website or web application using the latest technologies and best practices.",
        },
        {
          step: 4,
          title: "Testing",
          description:
            "Conduct thorough testing to ensure the website or web application functions as expected.",
        },
        {
          step: 5,
          title: "Deployment",
          description:
            "Deploy the website or web application and provide training to your team.",
        },
        {
          step: 6,
          title: "Support",
          description:
            "Offer ongoing support and maintenance to ensure continuous operation.",
        },
      ],
      caseStudies: [
        {
          id: "case-study-6",
          title: "E-Commerce Platform",
          industry: "Retail",
          challenge:
            "A retail business needed to create an online store to reach more customers.",
          solution:
            "Inclue developed a custom e-commerce platform with a user-friendly interface and secure payment gateway.",
          results:
            "Online sales increased by 50%, customer satisfaction improved, and operational costs reduced.",
          image: "/assets/images/case-studies/retail-case-study.jpg",
        },
      ],
      faqs: [
        {
          question: "What is web development?",
          answer:
            "Web development involves creating websites and web applications using various technologies and programming languages.",
        },
        {
          question: "How can web development benefit my business?",
          answer:
            "Web development can help establish an online presence, attract more customers, and achieve your digital goals.",
        },
      ],
      relatedServices: [
        "custom-iot-services",
        "plc-solutions",
        "scada-integration",
      ],
      image: "/assets/images/services/web-development.jpg",
      icon: "web",
    },
  ];

  useEffect(() => {
    if (services) {
      // TODO
      // const currentService = services.find((s: any) => s.id === id);
      const currentService = mockServices.find((s: any) => s.id === id);
      setService(currentService);
    }
  }, [services, id]);

  // Use mock data while waiting for API integration
  const serviceData = service || mockServices[0];

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom color="error">
          {intl.get("error.failedToLoadService")}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/services")}
          sx={{ mt: 2 }}
        >
          {intl.get("common.backToServices")}
        </Button>
      </Box>
    );
  }

  if (!serviceData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          {intl.get("error.serviceNotFound")}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/services")}
          sx={{ mt: 2 }}
        >
          {intl.get("common.backToServices")}
        </Button>
      </Box>
    );
  }

  return (
    <ErrorBoundary>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <SEO
          title={`${serviceData.title} | Inclue Technologies`}
          description={serviceData.description}
        />

        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            py: { xs: 6, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Typography
                  variant={isMobile ? "h3" : "h2"}
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                >
                  {serviceData.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ mb: 4, maxWidth: "90%" }}
                >
                  {serviceData.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    bgcolor: theme.palette.secondary.main,
                    "&:hover": {
                      bgcolor: theme.palette.secondary.dark,
                    },
                  }}
                  onClick={() => {
                    const contactFormElement =
                      document.getElementById("contact-form");
                    if (contactFormElement) {
                      contactFormElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {intl.get("common.getStarted")}
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {/* Replace with actual image component */}
                <Box
                  sx={{
                    height: "300px",
                    width: "100%",
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {intl.get("common.serviceImage")}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Overview Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            {intl.get("services.overview")}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "1.1rem", maxWidth: "90%" }}
          >
            {serviceData.longDescription}
          </Typography>
        </Container>

        {/* Benefits Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
              sx={{ mb: 5 }}
            >
              {intl.get("services.benefits")}
            </Typography>
            <Grid container spacing={4}>
              {serviceData.benefits.map((benefit: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={1}
                    sx={{
                      height: "100%",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        color="primary.main"
                        fontWeight="medium"
                      >
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2">
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Process Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            fontWeight="bold"
            sx={{ mb: 5 }}
          >
            {intl.get("services.ourProcess")}
          </Typography>
          <ServiceProcess process={serviceData.process} />
        </Container>

        {/* Case Studies Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
              sx={{ mb: 5 }}
            >
              {intl.get("services.caseStudies")}
            </Typography>
            <ServiceCaseStudies caseStudies={serviceData.caseStudies} />
          </Container>
        </Box>

        {/* FAQ Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            fontWeight="bold"
            sx={{ mb: 5 }}
          >
            {intl.get("services.frequentlyAskedQuestions")}
          </Typography>
          <FAQAccordion faqs={serviceData.faqs} />
        </Container>

        {/* Related Services Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
              sx={{ mb: 5 }}
            >
              {intl.get("services.relatedServices")}
            </Typography>
            <RelatedServices
              currentServiceId={serviceData.id}
              relatedServiceIds={serviceData.relatedServices}
            />
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Container
          id="contact-form"
          maxWidth="md"
          sx={{ py: { xs: 6, md: 10 } }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              fontWeight="bold"
            >
              {intl.get("services.getInTouch")}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto" }}>
              {intl.get("services.contactDescription")}
            </Typography>
          </Box>
          <ContactForm />
        </Container>
      </motion.div>
    </ErrorBoundary>
  );
};

export default ServiceDetail;
