"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./artroom.module.css";

export type CueType =
  | "corners"
  | "steam-ring"
  | "book-brackets"
  | "calendar-ring"
  | "breeze"
  | "shelf-ring"
  | "music-note";

type DiscoveryCueProps = {
  type: CueType;
  label: string;
  hint: string;
  reveal: boolean;
  delay: number;
};

export function DiscoveryCue({ type, label, hint, reveal, delay }: DiscoveryCueProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`${styles.discoveryCue} ${styles[type]}`}
      aria-hidden="true"
      initial={false}
      animate={{ opacity: reveal ? 0.72 : 0.22, scale: reveal && !reduceMotion ? [0.92, 1.035, 1] : 1 }}
      transition={{ delay: reveal && !reduceMotion ? delay : 0, duration: reduceMotion ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.cueArtwork}>
        <i /><i /><i /><i />
        {type === "steam-ring" ? <b className={styles.steam}>〰</b> : null}
        {type === "book-brackets" ? <b className={styles.cueBook} /> : null}
        {type === "calendar-ring" ? <b className={styles.pageCorner} /> : null}
        {type === "breeze" ? <b className={styles.breezeLines}>〰 〰</b> : null}
        {type === "music-note" ? <b className={styles.musicNote}>♪</b> : null}
      </span>
      <span className={styles.discoveryLabel}>
        <strong>{label}</strong>
        <small>{hint}</small>
      </span>
    </motion.span>
  );
}
