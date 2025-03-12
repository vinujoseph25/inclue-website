import { Service } from "@/types/service.types";

const services: Service[] = [
  {
    id: "industrial-automation",
    name: "Industrial Automation",
    description:
      "Inclue Technologies offers comprehensive industrial automation solutions that help eliminate waste, reduce operating costs, improve production quality, and gain better insights into your manufacturing supply chain.",
    features: [
      "PLC Control Systems",
      "Industrial Automation Sensors",
      "Human-Machine Interfaces (HMIs)",
      "Process Control Systems",
      "Factory Automation",
    ],
    benefits: [
      "Higher Productivity",
      "Superior Product Quality",
      "Reduced Production Costs",
      "Enhanced Safety",
      "Improved Data Security and Accuracy",
    ],
    process: [
      "Initial Consultation",
      "Needs Assessment",
      "Solution Design",
      "Implementation",
      "Testing and Validation",
      "Training and Handover",
      "Ongoing Support",
    ],
    imageUrl: "/assets/images/industrial-automation.jpg",
  },
  {
    id: "custom-iot-services",
    name: "Custom IoT Services",
    description:
      "We propel value-driven IoT solutions and set up a multi-tiered secured data pipeline from edge computing devices to cloud computing. Our services are customized to meet the specific needs of your business across various industries.",
    features: [
      "Custom IoT Application Development",
      "Sensor Integration",
      "IoT Platform Development",
      "Edge Computing Solutions",
      "Real-time Data Analytics",
    ],
    benefits: [
      "Enhanced Operational Efficiency",
      "Data-Driven Decision Making",
      "Remote Monitoring Capabilities",
      "Predictive Maintenance",
      "Resource Optimization",
    ],
    process: [
      "Discovery Workshop",
      "Technical Assessment",
      "Solution Architecture",
      "Agile Development",
      "Integration Testing",
      "Deployment",
      "Maintenance and Support",
    ],
    imageUrl: "/assets/images/custom-iot.jpg",
  },
  {
    id: "plc-solutions",
    name: "PLC Solutions",
    description:
      "Inclue Technologies provides specialized PLC systems designed to help our clients gain greater control of their machines and processes. Our team combines years of experience working with industry-leading PLC platforms.",
    features: [
      "PLC Programming",
      "PLC Control Panel Manufacturing",
      "PLC Migration and Upgrades",
      "PLC Integration with SCADA Systems",
      "Custom PLC Applications",
    ],
    benefits: [
      "Enhanced Control Systems",
      "Improved Process Efficiency",
      "Real-time Monitoring",
      "Data Collection and Analysis",
      "Scalable Automation Solutions",
    ],
    process: [
      "Requirements Analysis",
      "System Design",
      "PLC Programming",
      "Panel Building",
      "System Integration",
      "Testing and Commissioning",
      "Training and Support",
    ],
    imageUrl: "/assets/images/plc-solutions.jpg",
  },
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Our web development services create modern, responsive, and user-friendly websites and web applications tailored to your business needs. We focus on creating intuitive experiences with clean, efficient code.",
    features: [
      "Responsive Web Design",
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Web Hosting and Maintenance",
    ],
    benefits: [
      "Professional Online Presence",
      "Improved User Experience",
      "Mobile-Friendly Design",
      "SEO Optimization",
      "Secure and Reliable Platforms",
    ],
    process: [
      "Initial Consultation",
      "Information Architecture",
      "Wireframing and Design",
      "Development",
      "Testing and Quality Assurance",
      "Deployment and Launch",
      "Ongoing Support",
    ],
    imageUrl: "/assets/images/web-development.jpg",
  },
];

export default services;
