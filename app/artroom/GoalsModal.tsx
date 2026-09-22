"use client";

import { X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { goals } from "./aspirationData";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type GoalsModalProps = { onClose: () => void };

export const GoalsModal = forwardRef<HTMLDivElement, GoalsModalProps>(function GoalsModal({ onClose }, ref) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div ref={ref} className={`${styles.projectPaper} ${styles.goalsPaper}`} role="dialog" aria-modal="true" aria-labelledby="goals-title" onMouseDown={(event) => event.stopPropagation()} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close goals"><X aria-hidden="true" /></button>
      <ModalMascot variant="frog" label="Goals roadmap frog" helper="this way" size={90} />
      <header className={styles.aspirationHeader}><p className={styles.handNote}>what I&apos;m working toward</p><h2 id="goals-title">My Goals</h2></header>
      <div className={styles.goalRoadmap}>
        {goals.map((goal, index) => (
          <motion.article key={goal.id} className={styles.goalCard} initial={reduceMotion ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.07, duration: 0.3 }}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h3>{goal.title}</h3><p>{goal.description}</p></div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
});
