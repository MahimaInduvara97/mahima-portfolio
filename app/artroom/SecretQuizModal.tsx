"use client";

import { RotateCcw, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useState } from "react";
import { BeardReactionSprite } from "./BeardReactionSprite";
import { ModalMascot } from "./ModalMascot";
import { SECRET_QUIZ_ANSWERS, secretQuestions, type SecretQuestionId } from "./secretQuizData";
import styles from "./artroom.module.css";

type SecretQuizModalProps = { onClose: () => void };
type QuizResult = "idle" | "success" | "retry";
type QuizAnswers = Record<SecretQuestionId, string | null>;

const emptyAnswers: QuizAnswers = {
  experience: null,
  "preferred-side": null,
  "preferred-framework": null,
};

export const SecretQuizModal = forwardRef<HTMLDivElement, SecretQuizModalProps>(function SecretQuizModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(emptyAnswers);
  const [result, setResult] = useState<QuizResult>("idle");
  const question = secretQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];

  const advance = () => {
    if (!selectedAnswer) return;
    if (currentQuestion < secretQuestions.length - 1) {
      setCurrentQuestion((current) => current + 1);
      return;
    }
    const allCorrect = secretQuestions.every(({ id }) => answers[id] === SECRET_QUIZ_ANSWERS[id]);
    setResult(allCorrect ? "success" : "retry");
  };

  const resetQuiz = () => {
    setAnswers(emptyAnswers);
    setCurrentQuestion(0);
    setResult("idle");
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.secretPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="secret-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 13, rotate: 0.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close secret quiz"><X aria-hidden="true" /></button>
      {result === "idle" ? <ModalMascot variant="beard" label="Helpful beard mascot" helper="no peeking" size={88} /> : null}
      <header className={styles.secretHeader}>
        <p className={styles.handNote}>a tiny room secret</p>
        <h2 id="secret-title">How well do you know me?</h2>
      </header>

      <AnimatePresence mode="wait">
        {result === "idle" ? (
          <motion.div key={question.id} className={styles.quizPanel} initial={reduceMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
            <div className={styles.quizProgress}><span>Question {currentQuestion + 1} of {secretQuestions.length}</span><span>{currentQuestion + 1} / {secretQuestions.length}</span></div>
            <h3>{question.question}</h3>
            <div className={styles.quizOptions} role="radiogroup" aria-label={question.question}>
              {question.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={selectedAnswer === option}
                  className={selectedAnswer === option ? styles.quizOptionSelected : ""}
                  onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                >
                  <span />{option}
                </button>
              ))}
            </div>
            <button type="button" className={styles.quizNext} disabled={!selectedAnswer} onClick={advance}>
              {currentQuestion === secretQuestions.length - 1 ? "Check my score" : "Next question"}
            </button>
          </motion.div>
        ) : result === "success" ? (
          <motion.div key="success" className={styles.quizResult} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
            <BeardReactionSprite reaction="happy" label="Star-eyed happy beard reaction" />
            <Sparkles aria-hidden="true" />
            <h3>You got all 3! 🎉</h3>
            <p>You unlocked a 10% discount.</p>
            <strong>10% DISCOUNT</strong>
            <small>Portfolio easter egg — mention this secret when you contact me.</small>
          </motion.div>
        ) : (
          <motion.div key="retry" className={styles.quizResult} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
            <BeardReactionSprite reaction="dizzy" label="Dizzy beard reaction" />
            <h3>Almost! 😂</h3>
            <p>Try again and see if you can unlock the secret.</p>
            <button type="button" className={styles.quizNext} onClick={resetQuiz}><RotateCcw aria-hidden="true" /> Try Again</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
