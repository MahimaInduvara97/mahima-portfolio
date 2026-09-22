"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { ModalMascot } from "./ModalMascot";
import { galleryImages, roomFeatureMascots } from "./roomMedia";
import styles from "./artroom.module.css";

type GalleryModalProps = { onClose: () => void };

export const GalleryModal = forwardRef<HTMLDivElement, GalleryModalProps>(function GalleryModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();
  const pointerStartRef = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeSlide = useCallback((step: -1 | 1) => {
    setDirection(step);
    setCurrentIndex((current) => (current + step + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") changeSlide(-1);
      if (event.key === "ArrowRight") changeSlide(1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [changeSlide]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.galleryPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close gallery"><X aria-hidden="true" /></button>
      <ModalMascot variant={roomFeatureMascots.gallery} label="Gallery toaster mascot" helper="photo guide" size={82} cue="nice shot!" cueKey={currentIndex} />
      <header className={styles.compactModalHeader}>
        <p className={styles.handNote}>through my phone camera</p>
        <h2 id="gallery-title">Gallery</h2>
        <p>Photos I took.</p>
      </header>

      <div
        className={styles.galleryStage}
        onPointerDown={(event) => { pointerStartRef.current = event.clientX; }}
        onPointerUp={(event) => {
          if (pointerStartRef.current === null) return;
          const distance = event.clientX - pointerStartRef.current;
          pointerStartRef.current = null;
          if (Math.abs(distance) > 45) changeSlide(distance > 0 ? -1 : 1);
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={galleryImages[currentIndex]}
            className={styles.galleryImage}
            custom={direction}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 22, scale: 0.99 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -18, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: "easeOut" }}
          >
            <Image src={galleryImages[currentIndex]} alt={`Gallery photo ${currentIndex + 1}`} fill sizes="(max-width: 700px) 95vw, 850px" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.galleryControls}>
        <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous photo"><ChevronLeft aria-hidden="true" /></button>
        <span>{String(currentIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => changeSlide(1)} aria-label="Next photo"><ChevronRight aria-hidden="true" /></button>
      </div>

      <div className={styles.thumbnailStrip} aria-label="Choose a gallery photo">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            type="button"
            className={index === currentIndex ? styles.thumbnailActive : ""}
            onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
            aria-label={`Show gallery photo ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          >
            <Image src={image} alt="" fill sizes="64px" />
          </button>
        ))}
      </div>
    </motion.div>
  );
});
