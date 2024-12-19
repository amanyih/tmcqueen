"use client";
import { RotateCcw } from "lucide-react";
import { ProgressBar } from "../feature";
import { TimeCountDown } from "./time-count-down";
import { usePracticeStore } from "@/store";
import { WordType } from "@/types";

type TypingAreaProps = {
  words: WordType[];
  currentWordIndex: number;
  currentLetterIndex: number;
};

export default function TypingArea({
  words,
  currentWordIndex,
  currentLetterIndex,
}: TypingAreaProps): JSX.Element {
  const { subMode, countdown, restart } = usePracticeStore();

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6">
      {/* Timer and Progress */}
      <div className="w-full max-w-4xl flex justify-between items-center">
        <TimeCountDown />
        <ProgressBar value={((subMode - countdown) / subMode) * 100} />
      </div>

      {/* Typing Text */}
      <div className="relative w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <p
          className="font-mono text-4xl leading-relaxed tracking-wide text-gray-800 dark:text-gray-200 text-center select-none"
          style={{ wordSpacing: "0.3em" }}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4">
              {word.letters.map((letter, letterIndex) => {
                const isCaretPosition =
                  wordIndex === currentWordIndex &&
                  letterIndex === currentLetterIndex;

                return (
                  <span
                    key={letterIndex}
                    className={`${
                      letter.status === "correct"
                        ? "text-green-500"
                        : letter.status === "incorrect"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {isCaretPosition ? (
                      <span className="inline-block bg-orange-500 w-[2px] h-8 animate-blink"></span>
                    ) : (
                      letter.char
                    )}
                  </span>
                );
              })}
            </span>
          ))}
        </p>

        {/* Refresh Button */}
        <button
          className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-md"
          onClick={restart}
        >
          <RotateCcw
            size={24}
            strokeWidth={2}
            className="text-gray-800 dark:text-gray-200"
          />
        </button>
      </div>

      {/* Spacer for Footer */}
      <div className="h-32"></div>
    </div>
  );
}
