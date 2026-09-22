"use client";

import Image from "next/image";
import { LockKeyhole, MessageCircle, UnlockKeyhole, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, forwardRef, useState } from "react";
import { BeardReactionSprite } from "./BeardReactionSprite";
import { LOCKER_CONFIG, LOCKER_WHATSAPP_URL } from "./easterEggData";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type LockerModalProps = { onClose: () => void };

export const LockerModal = forwardRef<HTMLDivElement, LockerModalProps>(function LockerModal({ onClose }, ref) {
  const reduceMotion = useReducedMotion();
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"locked" | "wrong" | "unlocked">("locked");

  const submitCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(code.trim().toUpperCase() === LOCKER_CONFIG.code ? "unlocked" : "wrong");
  };

  return (
    <motion.div ref={ref} className={`${styles.projectPaper} ${styles.lockerPaper}`} role="dialog" aria-modal="true" aria-labelledby="locker-title" onMouseDown={(event) => event.stopPropagation()} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close secret locker"><X aria-hidden="true" /></button>
      <AnimatePresence mode="wait">
        {status === "unlocked" ? (
          <motion.div key="unlocked" className={styles.unlockedLocker} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className={styles.lockerTitleRow}><UnlockKeyhole aria-hidden="true" /><h2 id="locker-title">Locker unlocked 🔓</h2><BeardReactionSprite reaction="last" label="Happy laughing beard reaction" /></div>
            <div className={styles.lockerReward}><Image src={LOCKER_CONFIG.image} alt="Secret locker reward image" fill sizes="(max-width: 700px) 90vw, 500px" /></div>
          </motion.div>
        ) : (
          <motion.div key="locked" className={status === "wrong" ? styles.lockerWrong : ""}>
            <ModalMascot variant="beard" label="Beard mascot pointing toward the locker code" helper="know the code?" size={86} />
            <header className={styles.lockerHeader}><p className={styles.handNote}>a harmless little easter egg</p><h2 id="locker-title">Secret Locker</h2><p>Think you know the code?</p></header>
            <form onSubmit={submitCode} className={styles.lockerForm}>
              <label htmlFor="locker-code">Locker code</label>
              <div><LockKeyhole aria-hidden="true" /><input id="locker-code" value={code} onChange={(event) => { setCode(event.target.value); if (status === "wrong") setStatus("locked"); }} placeholder="Enter locker code..." autoComplete="off" aria-describedby={status === "wrong" ? "locker-error" : undefined} /><button type="submit">Unlock</button></div>
              {status === "wrong" ? <p id="locker-error" role="alert"><BeardReactionSprite reaction="dizzy" /> Nice try 😂 That is not the locker code.</p> : null}
            </form>
            <div className={styles.lockerHelp}><p><strong>Don&apos;t have the code yet?</strong><br />Chat with me on WhatsApp, I&apos;ll give it to you when we become friends 😄</p><a href={LOCKER_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Chat with me on WhatsApp</a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
