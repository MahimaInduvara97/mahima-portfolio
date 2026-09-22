"use client";

import styles from "./artroom.module.css";

export type BeardReaction =
  | "first"
  | "last"
  | "dizzy"
  | "happy"
  | "surprised"
  | "sparkles"
  | "blushing"
  | "alternating"
  | "mobile-alternating";

const framePositions: Record<Exclude<BeardReaction, "alternating" | "mobile-alternating">, string> = {
  first: "0% 0%",
  last: "100% 100%",
  dizzy: "50% 100%",
  happy: "50% 50%",
  surprised: "0% 50%",
  sparkles: "100% 0%",
  blushing: "100% 50%",
};

type BeardReactionSpriteProps = {
  reaction: BeardReaction;
  label?: string;
  className?: string;
};

export function BeardReactionSprite({ reaction, label, className = "" }: BeardReactionSpriteProps) {
  return (
    <span
      className={`${styles.beardReactionSprite} ${reaction === "alternating" ? styles.beardReactionAlternating : ""} ${reaction === "mobile-alternating" ? styles.mobileBeardAlternating : ""} ${className}`}
      style={reaction === "alternating" || reaction === "mobile-alternating" ? undefined : { backgroundPosition: framePositions[reaction] }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
