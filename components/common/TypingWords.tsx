import { WordType } from "@/types";
import React from "react";

type TypingWordProps = {
  word: WordType;
  wordIndex: number;
  currentWordIndex: number;
  currentLetterIndex: number;
};

export const TypingWord: React.FC<TypingWordProps> = ({
  word,
  wordIndex,
  currentWordIndex,
  currentLetterIndex,
}) => {
  return (
    <span className="inline-block mr-3">
      {word.letters.map((letter, letterIndex) => {
        const isCaretPosition =
          wordIndex === currentWordIndex && letterIndex === currentLetterIndex;

        const getLetterClass = (): string => {
          switch (letter.status) {
            case "correct":
              return "text-success"; // Theme-aware success color
            case "incorrect":
              return "text-destructive"; // Theme-aware destructive color
            default:
              return "text-muted-foreground/50"; // Muted foreground for neutral text
          }
        };

        return (
          <span key={letterIndex} className={`${getLetterClass()} relative`}>
            {isCaretPosition && (
              <span
                className="absolute top-0 left-0 w-[2px] h-full bg-primary animate-blink"
                aria-hidden="true"
              />
            )}
            {letter.char}
          </span>
        );
      })}
    </span>
  );
};
