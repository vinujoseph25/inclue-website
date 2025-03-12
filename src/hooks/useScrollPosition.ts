import { useState, useEffect } from "react";

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
  direction: "up" | "down" | "none";
  isScrolled: boolean;
  isScrolledUp: boolean;
  isScrolledDown: boolean;
  scrollPercentage: number;
  scrollThreshold: boolean;
}

export default function useScrollPosition(threshold = 50) {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
    direction: "none",
    isScrolled: false,
    isScrolledUp: false,
    isScrolledDown: false,
    scrollPercentage: 0,
    scrollThreshold: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const direction =
        scrollY > lastScrollY ? "down" : scrollY < lastScrollY ? "up" : "none";
      const isScrolled = scrollY > 0;
      const isScrolledUp = direction === "up";
      const isScrolledDown = direction === "down";

      // Calculate scroll percentage
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );
      const windowHeight = window.innerHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = (scrollY / scrollableHeight) * 100;

      // Update last scroll position
      lastScrollY = scrollY;

      setScrollPosition({
        scrollY,
        scrollX,
        direction,
        isScrolled,
        isScrolledUp,
        isScrolledDown,
        scrollPercentage,
        scrollThreshold: scrollY > threshold,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call once to initialize
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrollPosition;
}
