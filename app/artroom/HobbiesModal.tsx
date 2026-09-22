"use client";

import { Camera, ChefHat, Gamepad2, Guitar, Plane, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { ModalMascot } from "./ModalMascot";
import { hobbies, roomFeatureMascots } from "./roomMedia";
import styles from "./artroom.module.css";

type HobbiesModalProps = { onClose: () => void };
const hobbyIcons = { guitar: Guitar, games: Gamepad2, cooking: ChefHat, travelling: Plane, photography: Camera };

export const HobbiesModal = forwardRef<HTMLDivElement, HobbiesModalProps>(function HobbiesModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.hobbiesPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hobbies-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, rotate: 0.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close hobbies"><X aria-hidden="true" /></button>
      <ModalMascot variant={roomFeatureMascots.hobbies} label="Hobbies tiger mascot" helper="off the clock" size={90} />
      <header className={styles.compactModalHeader}>
        <p className={styles.handNote}>away from the keyboard</p>
        <h2 id="hobbies-title">Hobbies</h2>
        <p>Things I enjoy outside work.</p>
      </header>
      <div className={styles.hobbyGrid}>
        {hobbies.map((hobby, index) => {
          const Icon = hobbyIcons[hobby.id];
          return (
            <motion.article
              key={hobby.id}
              className={styles.hobbyCard}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.045 }}
            >
              <span className={styles.hobbyIcon}><Icon aria-hidden="true" /></span>
              <div><h3>{hobby.title}</h3><p>{hobby.description}</p></div>
              {"badges" in hobby ? <div className={styles.hobbyBadges}>{hobby.badges.map((badge) => <span key={badge}>{badge}</span>)}</div> : null}
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
});
