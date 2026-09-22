"use client";

import { ArrowUpRight, BriefcaseBusiness, Camera, Music2, Users, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import { FACEBOOK_PAGES, SOCIAL_LINKS } from "./roomLinks";
import styles from "./artroom.module.css";

type SocialModalProps = { onClose: () => void };

const socialIcons = {
  linkedin: BriefcaseBusiness,
  facebook: Users,
  instagram: Camera,
  tiktok: Music2,
};

const pageIcons = { Facebook: Users, Instagram: Camera };

export const SocialModal = forwardRef<HTMLDivElement, SocialModalProps>(function SocialModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.socialPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="social-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, rotate: 0.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close social links">
        <X aria-hidden="true" />
      </button>
      <header className={styles.fileModalHeader}>
        <p className={styles.handNote}>around the internet</p>
        <h2 id="social-title">Social</h2>
        <p>Find me and the pages I look after.</p>
      </header>

      <section aria-labelledby="personal-social-title">
        <h3 id="personal-social-title" className={styles.socialSectionTitle}>My social links</h3>
        <div className={styles.socialGrid}>
          {SOCIAL_LINKS.map((item, index) => {
            const Icon = socialIcons[item.id];
            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
                aria-label={`${item.label} (opens in a new tab)`}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <Icon aria-hidden="true" /><strong>{item.label}</strong><ArrowUpRight aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="facebook-pages-title">
        <h3 id="facebook-pages-title" className={styles.socialSectionTitle}>My pages</h3>
        <div className={styles.pageGrid}>
          {FACEBOOK_PAGES.map((page) => {
            const PageIcon = pageIcons[page.platform];
            return (
            <a key={page.id} href={page.url} target="_blank" rel="noopener noreferrer" className={styles.pageCard}>
              <PageIcon aria-hidden="true" />
              <span><strong>{page.name}</strong><small>{page.platform} Page</small></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          );
          })}
        </div>
      </section>
    </motion.div>
  );
});
