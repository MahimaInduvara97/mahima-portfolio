"use client";

import { Droplets, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useState } from "react";
import { BeardReactionSprite } from "./BeardReactionSprite";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type PlantsModalProps = { onClose: () => void };

export const PlantsModal = forwardRef<HTMLDivElement, PlantsModalProps>(function PlantsModal({ onClose }, ref) {
  const reduceMotion = useReducedMotion();
  const [watered, setWatered] = useState(false);
  return (
    <motion.div ref={ref} className={`${styles.projectPaper} ${styles.plantsPaper}`} role="dialog" aria-modal="true" aria-labelledby="plants-title" onMouseDown={(event) => event.stopPropagation()} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 9 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close plants"><X aria-hidden="true" /></button>
      <AnimatePresence mode="wait">
        {!watered ? (
          <motion.div key="thirsty" className={styles.plantState} exit={{ opacity: 0, y: -5 }}>
            <ModalMascot variant="beard" label="Beard mascot pointing to the water button" helper="they look thirsty" size={86} />
            <span className={styles.plantDoodle} aria-hidden="true">🌱</span>
            <h2 id="plants-title">Thanks for remembering my plants!</h2>
            <p>They were starting to wonder if anyone was going to give them some water.</p>
            <button type="button" className={styles.waterButton} onClick={() => setWatered(true)}><Droplets aria-hidden="true" /> Water the plants 💧</button>
          </motion.div>
        ) : (
          <motion.div key="watered" className={styles.plantState} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}>
            <BeardReactionSprite reaction="happy" label="Happy relieved beard reaction" />
            <span className={`${styles.plantDoodle} ${styles.plantWatered}`} aria-hidden="true">🌿</span>
            <Sparkles className={styles.plantSparkle} aria-hidden="true" />
            <h2 id="plants-title">Much better!</h2>
            <p>You just saved today&apos;s plant situation.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
