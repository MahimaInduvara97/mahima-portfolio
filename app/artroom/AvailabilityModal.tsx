"use client";

import { ArrowRight, Clock3, Code2, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { availabilityItems } from "./aspirationData";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type AvailabilityModalProps = { onClose: () => void; onContact: () => void };

export const AvailabilityModal = forwardRef<HTMLDivElement, AvailabilityModalProps>(function AvailabilityModal(
  { onClose, onContact }, ref,
) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.availabilityPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="availability-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, rotate: -0.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close availability"><X aria-hidden="true" /></button>
      <ModalMascot variant="bear" label="Friendly availability bear" helper="let's build" size={88} />
      <header className={styles.aspirationHeader}>
        <p className={styles.handNote}>work status</p>
        <h2 id="availability-title">Availability</h2>
      </header>
      <div className={styles.availabilityStatus}><span aria-hidden="true" /><strong>Available for selected projects</strong></div>
      <p className={styles.availabilityIntro}>I&apos;m open to interesting frontend, web, and creative digital projects.</p>
      <div className={styles.availabilityBadges}>{availabilityItems.map((item) => <span key={item}>{item}</span>)}</div>
      <div className={styles.availabilityDetails}>
        <div><Code2 aria-hidden="true" /><span><small>Preferred work</small><strong>Frontend / Web Development</strong></span></div>
        <div><Clock3 aria-hidden="true" /><span><small>Response time</small><strong>Usually within 24–48 hours</strong></span></div>
      </div>
      <button type="button" className={styles.contactCta} onClick={onContact}>Contact Me <ArrowRight aria-hidden="true" /></button>
    </motion.div>
  );
});
