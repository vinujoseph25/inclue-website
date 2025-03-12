import { useEffect } from "react";
import { useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  delay?: number;
}

export default function useAnimatedElement(
  options: AnimationOptions = {},
): [(node?: Element | null) => void, AnimationControls] {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
    delay = 0,
  } = options;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible", { delay });
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, delay, triggerOnce]);

  return [ref, controls];
}
