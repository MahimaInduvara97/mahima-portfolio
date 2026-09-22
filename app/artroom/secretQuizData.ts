export type SecretQuestionId = "experience" | "preferred-side" | "preferred-framework";

export type SecretQuestion = {
  id: SecretQuestionId;
  question: string;
  options: readonly string[];
};

export const secretQuestions: readonly SecretQuestion[] = [
  { id: "experience", question: "How much working experience do I have?", options: ["2+", "3+", "5+"] },
  { id: "preferred-side", question: "Which side of development do I like most?", options: ["Frontend", "Backend", "Both"] },
  { id: "preferred-framework", question: "Which one do I prefer most for building websites?", options: ["WordPress", "Next.js", "Astro"] },
];

export const SECRET_QUIZ_ANSWERS: Record<SecretQuestionId, string> = {
  experience: "3+",
  "preferred-side": "Frontend",
  "preferred-framework": "Astro",
};
