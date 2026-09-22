"use client";

import { Download, ExternalLink, FileText, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { RESUME_CONFIG } from "./roomLinks";
import styles from "./artroom.module.css";

type ResumeModalProps = { onClose: () => void };

export const ResumeModal = forwardRef<HTMLDivElement, ResumeModalProps>(function ResumeModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.resumePaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, rotate: -0.25 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close resume">
        <X aria-hidden="true" />
      </button>
      <header className={styles.fileModalHeader}>
        <p className={styles.handNote}>from the document drawer</p>
        <h2 id="resume-title">Resume</h2>
        <p>A quick look at my professional journey.</p>
      </header>

      <div className={styles.resumeLayout}>
        <div className={styles.resumeDocument} aria-hidden="true">
          <FileText />
          <strong>CV</strong>
          <span>PDF</span>
        </div>
        <div className={styles.resumeCopy}>
          <p className={styles.pencilLabel}>Software Engineer</p>
          <h3>Frontend · Product · Research</h3>
          <p>
            A concise overview of my experience building thoughtful interfaces, practical software,
            and research-led products.
          </p>
          {RESUME_CONFIG.available ? (
            <div className={styles.resumeActions}>
              <a href={RESUME_CONFIG.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" /> Preview CV
              </a>
              <a href={RESUME_CONFIG.url} download>
                <Download aria-hidden="true" /> Download CV
              </a>
            </div>
          ) : (
            <p className={styles.fileUnavailable} role="status">
              CV file is being prepared. Add it to <code>public/resume.pdf</code> to enable preview and download.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
});
