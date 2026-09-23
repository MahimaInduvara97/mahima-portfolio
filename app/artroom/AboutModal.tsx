"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type AboutModalProps = {
  onClose: () => void;
};

const strengths = ["Frontend systems", "Product thinking", "Responsive UI", "Thoughtful motion"];

export const AboutModal = forwardRef<HTMLDivElement, AboutModalProps>(function AboutModal(
  { onClose },
  ref,
) {
  const reduceMotion = useReducedMotion();
  const [showShyCue, setShowShyCue] = useState(false);
  const [cueKey, setCueKey] = useState(0);
  const shyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (shyTimerRef.current) window.clearTimeout(shyTimerRef.current);
    };
  }, []);

  const showShyReaction = () => {
    if (shyTimerRef.current) window.clearTimeout(shyTimerRef.current);
    setCueKey((current) => current + 1);
    setShowShyCue(true);
    shyTimerRef.current = window.setTimeout(() => setShowShyCue(false), 1600);
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.aboutPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-dialog-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <span className={styles.tape} aria-hidden="true" />
      <span className={styles.paperClip} aria-hidden="true" />

      <ModalMascot
        variant="hamster"
        label="About modal hamster mascot"
        helper="about me"
        size={92}
        cue={showShyCue ? "eek... that's me!" : null}
        cueKey={cueKey}
      />

      <button
        type="button"
        className={styles.sketchClose}
        onClick={onClose}
        aria-label="Close about me"
      >
        <span aria-hidden="true">×</span>
      </button>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutCopy}>
          <header className={styles.aboutHeader}>
            <p className={styles.handNote}>coffee mug / about</p>
            <h2 id="about-dialog-title">About Me</h2>
            <span className={styles.aboutUnderline} aria-hidden="true" />
          </header>

          <p className={styles.aboutIntro}>
            I&apos;m Mahima, a senior frontend developer who enjoys turning useful ideas into
            thoughtful, polished web experiences.
          </p>

          <div className={styles.aboutSections}>
            <section>
              <h3>What I do</h3>
              <p>
                I build responsive products with React, Next.js, Astro, and WordPress, then refine
                the layout, interaction, and small details until the experience feels right.
              </p>
            </section>

            <section>
              <h3>How I think</h3>
              <p>
                Understand the problem, make the path clear, and give the interface enough
                personality to be remembered.
              </p>
            </section>
          </div>

          <ul className={styles.aboutTags} aria-label="Specialties">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>

          <div className={styles.aboutActions}>
            <a href="mailto:induvara.amarasekara@gmail.com" className={styles.paperLink}>
              Say hello <span aria-hidden="true">↗</span>
            </a>
            <span className={styles.aboutFootnote}>4+ years · 20+ projects</span>
          </div>
        </div>

        <motion.button
          type="button"
          className={styles.portraitButton}
          onClick={showShyReaction}
          aria-label="Show shy reaction"
          whileHover={reduceMotion ? undefined : { y: -4, rotate: -0.3 }}
          whileTap={reduceMotion ? undefined : { scale: 0.975, rotate: 0.8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <span className={styles.portraitTapeLeft} aria-hidden="true" />
          <span className={styles.portraitTapeRight} aria-hidden="true" />
          <span className={styles.portraitImage}>
            <Image
              src="/my-port.webp"
              alt="Portrait of Mahima Induvara"
              fill
              sizes="(max-width: 720px) 82vw, 34vw"
            />
          </span>
          <span className={styles.portraitCaption}>that&apos;s me — be gentle!</span>
          {showShyCue ? <span className={styles.blushDoodle} aria-hidden="true">{"///"}</span> : null}
        </motion.button>
      </div>
    </motion.div>
  );
});
