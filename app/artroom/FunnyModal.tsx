"use client";

import { X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { BeardReactionSprite } from "./BeardReactionSprite";
import styles from "./artroom.module.css";

type FunnyModalProps = { onClose: () => void };

export const FunnyModal = forwardRef<HTMLDivElement, FunnyModalProps>(function FunnyModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.funnyPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="funny-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88, rotate: -2 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: [0, -1.2, 1.1, 0] }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close shoe joke"><X aria-hidden="true" /></button>
      <BeardReactionSprite reaction="dizzy" label="Dizzy and disgusted beard reaction" className={styles.funnyReaction} />
      <p className={styles.handNote}>the shoe corner</p>
      <h2 id="funny-title">Eww… these shoes haven&apos;t been washed in a week 😂</h2>
      <p>Maybe don&apos;t get too close.</p>
    </motion.div>
  );
});
