export type LetterType = {
  char: string;
  status: "correct" | "incorrect" | "pending";
};

export type WordType = {
  letters: LetterType[];
  completed: boolean;
  startTimestamp?: number;
  endTimestamp?: number;
  duration?: number;
};
