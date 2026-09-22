"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useState } from "react";
import { ModalMascot } from "./ModalMascot";
import { shelfLabels, skillBooks, type SkillBookData, type SkillCategory } from "./skillsData";
import styles from "./artroom.module.css";

type SkillsEducationModalProps = {
  onClose: () => void;
};

const shelfOrder: SkillCategory[] = ["frontend", "ai", "education"];

export const SkillsEducationModal = forwardRef<HTMLDivElement, SkillsEducationModalProps>(
  function SkillsEducationModal({ onClose }, ref) {
    const reduceMotion = useReducedMotion();
    const [selectedBook, setSelectedBook] = useState<SkillBookData>(skillBooks[0]);

    return (
      <motion.div
        ref={ref}
        className={`${styles.projectPaper} ${styles.skillsPaper}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="skills-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
        initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className={styles.tape} aria-hidden="true" />
        <ModalMascot
          variant="raccoon"
          label="Skills and education raccoon mascot"
          helper="shelf keeper"
          size={92}
          cue={selectedBook.id === "ai" ? "always learning ✦" : null}
          cueKey={selectedBook.id === "ai" ? 1 : 0}
        />

        <button
          type="button"
          className={styles.sketchClose}
          onClick={onClose}
          aria-label="Close skills and education"
        >
          <span aria-hidden="true">×</span>
        </button>

        <header className={styles.skillsHeader}>
          <p className={styles.handNote}>pick a book</p>
          <h2 id="skills-dialog-title">Skills &amp; Education</h2>
          <p>My little knowledge shelf</p>
          <span className={styles.skillsUnderline} aria-hidden="true" />
        </header>

        <div className={styles.skillsWorkspace}>
          <div className={styles.bookshelfFrame} aria-label="Knowledge bookshelf">
            <span className={styles.woodTop} aria-hidden="true" />
            {shelfOrder.map((category, rowIndex) => (
              <section className={styles.shelfRow} key={category} aria-label={shelfLabels[category]}>
                <span className={styles.shelfLabel}>{shelfLabels[category]}</span>
                <div className={styles.bookLine}>
                  {skillBooks
                    .filter((book) => book.category === category)
                    .map((book, bookIndex) => {
                      const selected = selectedBook.id === book.id;
                      return (
                        <motion.button
                          key={book.id}
                          type="button"
                          className={styles.skillBook}
                          data-tone={book.tone}
                          data-kind={book.kind}
                          aria-label={`Open ${book.title} details`}
                          aria-pressed={selected}
                          onClick={() => setSelectedBook(book)}
                          style={
                            {
                              "--book-height": `${book.height}px`,
                              "--book-tilt": `${(bookIndex + rowIndex) % 3 === 0 ? -1.4 : (bookIndex + rowIndex) % 3 === 1 ? 0.7 : -0.3}deg`,
                            } as React.CSSProperties
                          }
                          animate={reduceMotion ? undefined : { y: selected ? -8 : 0, rotate: selected ? 0 : undefined }}
                          whileHover={reduceMotion ? undefined : { y: -6, rotate: 0 }}
                          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                          <span className={styles.bookBand} aria-hidden="true" />
                          <span className={styles.bookTitle}>{book.shortLabel}</span>
                          {book.id === "ai" ? <span className={styles.aiSpark} aria-hidden="true">✦</span> : null}
                          {selected ? <span className={styles.bookmark} aria-hidden="true" /> : null}
                        </motion.button>
                      );
                    })}
                  {category === "ai" ? <span className={styles.learningNote}>keep learning</span> : null}
                </div>
                <span className={styles.shelfPlank} aria-hidden="true" />
              </section>
            ))}
            <span className={styles.woodBase} aria-hidden="true" />
          </div>

          <div className={styles.bookDetailSlot} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={selectedBook.id}
                className={styles.bookDetail}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18, rotate: 0.5 }}
                animate={{ opacity: 1, x: 0, rotate: -0.25 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <span className={styles.detailTape} aria-hidden="true" />
                <p className={styles.detailEyebrow}>{selectedBook.level}</p>
                <h3>{selectedBook.title}</h3>
                <span className={styles.detailPencilLine} aria-hidden="true" />
                <p className={styles.detailSummary}>{selectedBook.summary}</p>
                <h4>{selectedBook.kind === "education" ? "Highlights" : "Experience"}</h4>
                <ul className={styles.experienceList}>
                  {selectedBook.experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.bookTags} aria-label="Related topics">
                  {selectedBook.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  },
);
