"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import { experienceYears } from "./experienceData";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

type ExperienceModalProps = {
  onClose: () => void;
};

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 72 : -72,
    rotateY: direction > 0 ? -7 : 7,
    opacity: 0,
  }),
  center: { x: 0, rotateY: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -58 : 58,
    rotateY: direction > 0 ? 6 : -6,
    opacity: 0,
  }),
};

export const ExperienceModal = forwardRef<HTMLDivElement, ExperienceModalProps>(
  function ExperienceModal({ onClose }, ref) {
    const reduceMotion = useReducedMotion();
    const [page, setPage] = useState({ index: experienceYears.length - 1, direction: 0 });
    const activeYear = experienceYears[page.index];

    const goToYear = (nextIndex: number) => {
      if (nextIndex < 0 || nextIndex >= experienceYears.length || nextIndex === page.index) return;
      setPage({ index: nextIndex, direction: nextIndex > page.index ? 1 : -1 });
    };

    useEffect(() => {
      const handleArrowKeys = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setPage((current) => ({
            index: Math.max(0, current.index - 1),
            direction: current.index > 0 ? -1 : current.direction,
          }));
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setPage((current) => ({
            index: Math.min(experienceYears.length - 1, current.index + 1),
            direction: current.index < experienceYears.length - 1 ? 1 : current.direction,
          }));
        }
      };

      document.addEventListener("keydown", handleArrowKeys);
      return () => document.removeEventListener("keydown", handleArrowKeys);
    }, []);

    return (
      <motion.div
        ref={ref}
        className={`${styles.projectPaper} ${styles.experiencePaper}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
        initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className={styles.tape} aria-hidden="true" />
        <ModalMascot
          variant="redpanda"
          label="Experience modal red panda mascot"
          helper="page keeper"
          size={92}
          cue={activeYear.current ? "you are here →" : null}
          cueKey={activeYear.year}
        />

        <button
          type="button"
          className={styles.sketchClose}
          onClick={onClose}
          aria-label="Close experience"
        >
          <span aria-hidden="true">×</span>
        </button>

        <header className={styles.experienceHeader}>
          <p className={styles.handNote}>a few pages from my journey</p>
          <h2 id="experience-dialog-title">Experience</h2>
          <span className={styles.experienceUnderline} aria-hidden="true" />
        </header>

        <nav className={styles.yearNavigation} aria-label="Experience years">
          {experienceYears.map((item, index) => (
            <button
              key={item.year}
              type="button"
              aria-current={index === page.index ? "page" : undefined}
              onClick={() => goToYear(index)}
            >
              {item.year}
              {item.current ? <span>now</span> : null}
            </button>
          ))}
        </nav>

        <div className={styles.calendarFrame}>
          <div className={styles.calendarBinding} aria-hidden="true">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className={styles.calendarPageViewport}>
            <AnimatePresence mode="wait" initial={false} custom={page.direction}>
              <motion.article
                key={activeYear.year}
                className={styles.calendarPage}
                custom={page.direction}
                variants={reduceMotion ? undefined : pageVariants}
                initial={reduceMotion ? { opacity: 0 } : "enter"}
                animate={reduceMotion ? { opacity: 1 } : "center"}
                exit={reduceMotion ? { opacity: 0 } : "exit"}
                transition={{ duration: reduceMotion ? 0.15 : 0.4, ease: [0.2, 0.75, 0.2, 1] }}
              >
                <span className={styles.pageMark} aria-hidden="true">{activeYear.mark}</span>
                {activeYear.current ? <span className={styles.currentMarker}>you are here →</span> : null}

                <div className={styles.yearContent}>
                  <div className={styles.yearStory}>
                    <p className={styles.yearEyebrow}>{activeYear.eyebrow}</p>
                    <p className={styles.yearNumber}>{activeYear.year}</p>
                    <h3>{activeYear.title}</h3>
                    <span className={styles.yearDivider} aria-hidden="true" />
                    <p className={styles.yearDescription}>{activeYear.description}</p>
                    <h4>Key things</h4>
                    <ul>
                      {activeYear.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className={styles.yearNote}>{activeYear.note}</p>
                  </div>

                  {activeYear.image ? (
                    <motion.figure
                      className={styles.graduationPhoto}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 14, rotate: 1 }}
                      animate={{ opacity: 1, x: 0, rotate: -1.2 }}
                      transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.28 }}
                    >
                      <span className={styles.photoTapeLeft} aria-hidden="true" />
                      <span className={styles.photoTapeRight} aria-hidden="true" />
                      <span className={styles.graduationImage}>
                        <Image
                          src={activeYear.image}
                          alt={activeYear.imageAlt ?? "Career milestone"}
                          fill
                          sizes="(max-width: 720px) 76vw, 28vw"
                        />
                      </span>
                      <figcaption>{activeYear.imageCaption}</figcaption>
                    </motion.figure>
                  ) : (
                    <div className={styles.yearDoodle} aria-hidden="true">
                      <span>{activeYear.mark}</span>
                      <small>{activeYear.eyebrow}</small>
                    </div>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className={styles.calendarControls}>
            <button
              type="button"
              disabled={page.index === 0}
              onClick={() => goToYear(page.index - 1)}
              aria-label="Previous experience year"
            >
              <span aria-hidden="true">←</span> previous
            </button>
            <span>{page.index + 1} / {experienceYears.length}</span>
            <button
              type="button"
              disabled={page.index === experienceYears.length - 1}
              onClick={() => goToYear(page.index + 1)}
              aria-label="Next experience year"
            >
              next <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  },
);
