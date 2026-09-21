"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mascot } from "page-mascot";
import styles from "./artroom.module.css";

type ModalMascotProps = {
  variant: "dino" | "hamster" | "raccoon" | "redpanda" | "cat";
  label: string;
  helper: string;
  size?: number;
  cue?: string | null;
  cueKey?: number;
};

export function ModalMascot({
  variant,
  label,
  helper,
  size = 92,
  cue,
  cueKey = 0,
}: ModalMascotProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      className={styles.modalMascot}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      aria-label={`${helper} mascot area`}
    >
      <span className={styles.mascotPaperPad} aria-hidden="true" />
      <Mascot
        directions={`/mascots/${variant}-directions.webp`}
        reactions={`/mascots/${variant}-reactions.webp`}
        size={size}
        label={label}
        className={styles.modalMascotButton}
      />
      <span className={styles.modalMascotLabel}>{helper}</span>

      <AnimatePresence mode="popLayout">
        {cue ? (
          <motion.span
            key={`${cue}-${cueKey}`}
            className={styles.mascotCue}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 5, scale: 0.88, rotate: -4 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -5, scale: 0.94 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-live="polite"
          >
            {cue}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.aside>
  );
}
