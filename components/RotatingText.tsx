"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: any;
  rotationInterval?: number;
}

const RotatingText = ({
  texts,
  mainClassName = "",
  staggerFrom = "first",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-100%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const characters = currentText.split("");

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        {!isAnimating && (
          <motion.div
            key={currentIndex}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="flex"
          >
            {characters.map((char, index) => (
              <motion.span
                key={`${currentIndex}-${index}`}
                initial={{ y: staggerFrom === "first" ? 100 : -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * staggerDuration,
                  ...transition,
                }}
                className={splitLevelClassName}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotatingText; 