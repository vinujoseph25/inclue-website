import { ReportHandler } from "web-vitals";

/**
 * Report web vitals metrics for performance monitoring
 *
 * This function collects Core Web Vitals metrics (LCP, FID, CLS)
 * as well as additional metrics (TTFB, FCP) and reports them
 * to the analytics endpoint or console.
 *
 * @param onPerfEntry Optional callback function to report metrics
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift
      getCLS(onPerfEntry);
      // First Input Delay
      getFID(onPerfEntry);
      // First Contentful Paint
      getFCP(onPerfEntry);
      // Largest Contentful Paint
      getLCP(onPerfEntry);
      // Time to First Byte
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
