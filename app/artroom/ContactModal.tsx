"use client";

import { forwardRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ModalMascot } from "./ModalMascot";
import { contactItems } from "./contactData";
import styles from "./artroom.module.css";

type ContactModalProps = { onClose: () => void };

export const ContactModal = forwardRef<HTMLDivElement, ContactModalProps>(function ContactModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.contactPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, rotate: -0.3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close contact window">
        <X aria-hidden="true" />
      </button>
      <ModalMascot variant="cat" label="Contact cat mascot" helper="say hi" size={92} />

      <header className={styles.contactHeader}>
        <p className={styles.handNote}>a note by the window</p>
        <h2 id="contact-title">Contact</h2>
        <p>Let&apos;s make something interesting.</p>
        <span className={styles.contactUnderline} aria-hidden="true" />
      </header>

      <div className={styles.contactLayout}>
        <section className={styles.contactIntro} aria-label="Contact introduction">
          <span className={styles.sunDoodle} aria-hidden="true">☼</span>
          <p>Have an idea, project, opportunity, or just want to say hello?</p>
          <p>Pick whichever way feels easiest.</p>
          <aside className={styles.availabilityNote}>
            <strong>Open to</strong>
            <span>Software projects · Product ideas · Collaborations</span>
          </aside>
          <p className={styles.contactScribble}>I usually reply when I&apos;m not fighting bugs :)</p>
        </section>

        <div className={styles.contactGrid}>
          {contactItems.map(({ id, label, value, href, icon: Icon, external }, index) => (
            <motion.a
              key={id}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className={styles.contactCard}
              aria-label={`${label}: ${value}${external ? " (opens in a new tab)" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.05 + index * 0.035 }}
            >
              <span className={styles.contactIcon}><Icon aria-hidden="true" /></span>
              <span className={styles.contactCardCopy}>
                <small>{label}</small>
                <strong>{value}</strong>
              </span>
              <ArrowUpRight className={styles.contactArrow} aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
});
