// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { BrowserRouter } from "react-router-dom";
// import CallToAction from "../../../components/home/CallToAction";
// import { ThemeProvider } from "../../../context/ThemeContext";
// import { LanguageProvider } from "../../../context/LanguageContext";
// import intl from "react-intl-universal";

// // Mock the intl.get function
// jest.mock("react-intl-universal", () => ({
//   get: jest.fn((key, defaultValue) => defaultValue || key),
// }));

// // Mock the intersection observer
// const mockIntersectionObserver = jest.fn();
// mockIntersectionObserver.mockReturnValue({
//   observe: () => null,
//   unobserve: () => null,
//   disconnect: () => null,
// });
// window.IntersectionObserver = mockIntersectionObserver;

// describe("CallToAction Component", () => {
//   beforeEach(() => {
//     // Setup component with necessary providers
//     render(
//       <LanguageProvider>
//         <ThemeProvider>
//           <BrowserRouter>
//             <CallToAction />
//           </BrowserRouter>
//         </ThemeProvider>
//       </LanguageProvider>,
//     );
//   });

//   it("renders the title correctly", () => {
//     expect(
//       screen.getByText("Transform Your Business With Smart Technology"),
//     ).toBeInTheDocument();
//   });

//   it("renders the subtitle correctly", () => {
//     expect(
//       screen.getByText(
//         "Experience seamless integration of IoT technologies that enhance efficiency and productivity.",
//       ),
//     ).toBeInTheDocument();
//   });

//   it("renders the primary call-to-action button", () => {
//     const getStartedButton = screen.getByText("Get Started");
//     expect(getStartedButton).toBeInTheDocument();
//     expect(getStartedButton.closest("a")).toHaveAttribute("href", "/contact");
//   });

//   it("renders the secondary button", () => {
//     const exploreButton = screen.getByText("Explore Products");
//     expect(exploreButton).toBeInTheDocument();
//     expect(exploreButton.closest("a")).toHaveAttribute("href", "/products");
//   });
// });
