"use client";
import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import {useEffect, useRef} from "react";

export default function CountAnimation({targetValue}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animation = animate(count, targetValue, {
            duration: 3,
            ease: "linear",
            onUpdate: (latest) => count.set(latest),
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const styles = {
    background:
      "linear-gradient(80deg, #6CC6EF 6.67%, #72CFFA 28.13%, #74D3FF 64.87%, #6CC6EF 95.66%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div ref={ref} className="flex h-fit">
      <motion.p
        className="font-medium text-[2rem] md:text-[4rem]"
        style={styles}
      >
        {rounded}
      </motion.p>
      <p
        className="font-medium text-[2rem] md:text-[4rem]"
        style={styles}
      >
        +
      </p>
    </div>
  );
}
