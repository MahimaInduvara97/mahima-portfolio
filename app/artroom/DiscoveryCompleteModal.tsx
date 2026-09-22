"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { forwardRef } from "react";
import { BeardReactionSprite } from "./BeardReactionSprite";
import styles from "./artroom.module.css";

type DiscoveryCompleteModalProps = { onClose: () => void };

export const DiscoveryCompleteModal = forwardRef<HTMLDivElement, DiscoveryCompleteModalProps>(
  function DiscoveryCompleteModal({ onClose }, ref) {
    const reduceMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        className={`${styles.projectPaper} ${styles.discoveryCompletePaper}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="discovery-complete-title"
        onMouseDown={(event) => event.stopPropagation()}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.82, y: 24 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.34, ease: "easeOut" }}
      >
        <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close discovery celebration">
          <X aria-hidden="true" />
        </button>
        <Sparkles className={styles.discoverySparkle} aria-hidden="true" />
        <BeardReactionSprite
          reaction="last"
          label="Laughing beard mascot celebrating"
          className={styles.discoveryCompleteMascot}
        />
        <p className={styles.handNote}>room explorer</p>
        <h2 id="discovery-complete-title">You found everything! 🎉</h2>
        <p>Okay, now you&apos;ve officially explored the whole room 😂</p>
        <small>Thanks for being curious.</small>
      </motion.div>
    );
  },
);
