import { LetterType, WordType } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseText(text: string): WordType[] {
  let words: WordType[] = [];

  text.split(" ").forEach((word) => {
    word = word.trim();
    let letters: LetterType[] = word.split("").map((char) => ({
      char,
      status: "pending",
    }));

    words.push({ letters, completed: false });
    words.push({
      letters: [{ char: " ", status: "pending" }],
      completed: false,
    });
  });

  if (words.length > 0) {
    words.pop();
  }

  return words;
}
