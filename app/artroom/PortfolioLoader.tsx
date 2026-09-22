"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./artroom.module.css";

type PortfolioLoaderProps = { onComplete: () => void };

export function PortfolioLoader({ onComplete }: PortfolioLoaderProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3000);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.portfolioLoader}
      role="status"
      aria-live="polite"
      aria-label="Opening the interactive portfolio room"
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.025, filter: "brightness(1.1)" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={`${styles.loaderCloud} ${styles.loaderCloudOne}`} aria-hidden="true" />
      <span className={`${styles.loaderCloud} ${styles.loaderCloudTwo}`} aria-hidden="true" />
      <span className={styles.paperPlane} aria-hidden="true">⌁</span>
      <motion.div
        className={styles.loaderContent}
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={styles.loaderMascot} aria-hidden="true" />
        <p>opening the room...</p>
        <span className={styles.loaderAccent}>almost there</span>
        <span className={styles.loaderPencilLine} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}
