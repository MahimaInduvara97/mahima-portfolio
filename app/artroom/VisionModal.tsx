"use client";

import { Lightbulb, Sprout, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { visionPillars } from "./aspirationData";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type VisionModalProps = { onClose: () => void };

export const VisionModal = forwardRef<HTMLDivElement, VisionModalProps>(function VisionModal({ onClose }, ref) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div ref={ref} className={`${styles.projectPaper} ${styles.visionPaper}`} role="dialog" aria-modal="true" aria-labelledby="vision-title" onMouseDown={(event) => event.stopPropagation()} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close vision"><X aria-hidden="true" /></button>
      <ModalMascot variant="sheep" label="Thoughtful vision sheep" helper="look ahead" size={88} />
      <header className={styles.aspirationHeader}><p className={styles.handNote}>the bigger picture</p><h2 id="vision-title">Vision</h2></header>
      <motion.blockquote className={styles.visionStatement} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        “Build a life where technology, creativity, and business come together.”
      </motion.blockquote>
      <div className={styles.visionPillars}>
        {visionPillars.map((pillar, index) => (
          <motion.article key={pillar.id} initial={reduceMotion ? false : { opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.12, duration: 0.3 }}>
            {index === 1 ? <Sprout aria-hidden="true" /> : <Lightbulb aria-hidden="true" />}
            <h3>{pillar.title}</h3><p>{pillar.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
});
