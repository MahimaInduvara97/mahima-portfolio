"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { BeardReactionSprite, type BeardReaction } from "./BeardReactionSprite";
import { testimonials } from "./easterEggData";
import styles from "./artroom.module.css";

type TestimonialsModalProps = { onClose: () => void };
const testimonialReactions: BeardReaction[] = ["first", "happy", "last"];

export const TestimonialsModal = forwardRef<HTMLDivElement, TestimonialsModalProps>(function TestimonialsModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeTestimonial = useCallback((step: -1 | 1) => {
    setDirection(step);
    setCurrentIndex((current) => (current + step + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") changeTestimonial(-1);
      if (event.key === "ArrowRight") changeTestimonial(1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [changeTestimonial]);

  const testimonial = testimonials[currentIndex];
  return (
    <motion.div ref={ref} className={`${styles.projectPaper} ${styles.testimonialsPaper}`} role="dialog" aria-modal="true" aria-labelledby="testimonials-title" onMouseDown={(event) => event.stopPropagation()} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close testimonials"><X aria-hidden="true" /></button>
      <header className={styles.testimonialHeader}><p className={styles.handNote}>a few kind words</p><h2 id="testimonials-title">Testimonials</h2></header>
      <div className={styles.testimonialStage}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.figure key={testimonial.name} custom={direction} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 18 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -14 }} transition={{ duration: reduceMotion ? 0.12 : 0.26 }}>
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption><strong>{testimonial.name}</strong><span>{testimonial.company}</span></figcaption>
          </motion.figure>
        </AnimatePresence>
        <BeardReactionSprite reaction={testimonialReactions[currentIndex]} label="Proud and grateful beard reaction" className={styles.testimonialMascot} />
      </div>
      <div className={styles.testimonialControls}>
        <button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial"><ChevronLeft aria-hidden="true" /></button>
        <div>{testimonials.map((item, index) => <button key={item.name} type="button" className={index === currentIndex ? styles.testimonialDotActive : ""} onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }} aria-label={`Show testimonial from ${item.name}`} aria-current={index === currentIndex ? "true" : undefined} />)}</div>
        <button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial"><ChevronRight aria-hidden="true" /></button>
      </div>
    </motion.div>
  );
});
