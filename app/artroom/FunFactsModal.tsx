"use client";

import { Play, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { BeardReactionSprite } from "./BeardReactionSprite";
import styles from "./artroom.module.css";

type FunFactsModalProps = { onClose: () => void };

export const FunFactsModal = forwardRef<HTMLDivElement, FunFactsModalProps>(function FunFactsModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const messageTimerRef = useRef<number | null>(null);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const beginMessageTimer = useCallback(() => {
    if (messageTimerRef.current !== null) window.clearTimeout(messageTimerRef.current);
    messageTimerRef.current = window.setTimeout(() => setShowMessage(true), 3000);
  }, []);

  const startVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setNeedsPlay(false);
      beginMessageTimer();
    } catch {
      setNeedsPlay(true);
    }
  }, [beginMessageTimer]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    const frame = window.requestAnimationFrame(() => void startVideo());
    return () => {
      window.cancelAnimationFrame(frame);
      if (messageTimerRef.current !== null) window.clearTimeout(messageTimerRef.current);
      video.pause();
      video.currentTime = 0;
    };
  }, [startVideo]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.funFactsPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="fun-facts-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, rotate: -0.15 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close fun fact"><X aria-hidden="true" /></button>
      <header className={styles.funFactsHeader}>
        <div><p className={styles.handNote}>caught in the act</p><h2 id="fun-facts-title">Fun Fact</h2></div>
        <BeardReactionSprite reaction="alternating" label="Laughing beard reaction" />
      </header>
      <div className={styles.funVideoFrame}>
        <video ref={videoRef} src="/fun.mp4" controls playsInline preload="auto">Your browser does not support this video.</video>
        {needsPlay ? <button type="button" className={styles.videoPlayFallback} onClick={startVideo}><Play aria-hidden="true" /> Tap to play</button> : null}
      </div>
      <AnimatePresence>
        {showMessage ? (
          <motion.p className={styles.reelMessage} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }}>
            Heyy, I&apos;m watching a reel 😂
          </motion.p>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
});
