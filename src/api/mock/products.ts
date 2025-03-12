import { Product } from "@/types/product.types";

const products: Product[] = [
  {
    id: "babble",
    name: "Babble",
    subtitle: "Smart Factory Management System",
    description:
      "Babble is a next-generation intelligent end-to-end IIOT platform focused on Industry 4.0. Designed to monitor the smallest details of the production process in real-time around the clock, increasing productivity and efficiency.",
    features: [
      {
        title: "Continuous Monitoring",
        description:
          "Connect all devices to Babble and monitor them 24/7. Real-time and historical visualization of device status and data.",
      },
      {
        title: "Intelligent Alarm Service",
        description:
          "Intelligent and custom alarms to detect and notify anomalies. Combined techniques are provided to filter critical alerts.",
      },
      {
        title: "User-Friendly Reports",
        description:
          "Aggregate data into presentable reports for analysis and decision-making.",
      },
      {
        title: "Integrates Multiple Data Sources",
        description:
          "Babble supports several industry protocols and other popular data sources. Supports scheduled data collection and data extraction, transformation, and loading methods.",
      },
      {
        title: "Smart Data Visualizations",
        description:
          "Powerful data visualization techniques enable effective system understanding using modern charts with custom dashboards.",
      },
      {
        title: "Optimize Workflow",
        description:
          "Benchmarks operational performance against others yields specific data that determines whether the needed ROI was achieved and identifies the methods to enhance the performance.",
      },
    ],
    benefits: [
      {
        title: "Overall Process Monitoring and Control",
        description:
          "Monitor the entire plant process in a single window and initiate control sequences as needed for efficient workflow management",
      },
      {
        title: "Accurate and Timely Alarm",
        description:
          "Analyze and monitor production processes to effectively detect abnormalities and notify them on time.",
      },
      {
        title: "Process Benchmarking",
        description:
          "Calculate equipment efficiency, usage, and time to optimally allocate resources, set priorities, and gain a critical competitive advantage.",
      },
      {
        title: "Efficient Raw Material Management",
        description:
          "Efficiently manage raw materials to streamline production and avoid unnecessary waste. As a result, the return on investment can be increased.",
      },
    ],
    imageUrl: "/assets/images/babble-product.jpg",
  },
  {
    id: "babble-lite",
    name: "Babble Lite",
    subtitle: "Streamlined Management Solution",
    description:
      "A streamlined version of our flagship Babble platform, designed for smaller operations and specific use cases. Offers core functionality with a simplified interface.",
    features: [
      {
        title: "Essential Monitoring",
        description:
          "Monitor key devices and processes with real-time data visualization.",
      },
      {
        title: "Basic Alarm System",
        description: "Configure alerts for critical process deviations.",
      },
      {
        title: "Standard Reports",
        description: "Access predefined reports for common analysis needs.",
      },
      {
        title: "Core Data Integration",
        description: "Connect with standard data sources and protocols.",
      },
    ],
    benefits: [
      {
        title: "Process Visibility",
        description: "Maintain oversight of critical production elements.",
      },
      {
        title: "Simplified Management",
        description:
          "Easily control essential operations with minimal training.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Access core functionality at a more accessible price point.",
      },
    ],
    imageUrl: "/assets/images/babble-lite-product.jpg",
  },
];

export default products;
