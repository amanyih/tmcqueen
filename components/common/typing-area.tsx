"use client";
import { RotateCcw } from "lucide-react";
import { Button } from "../ui";
import { WordType } from "@/types";
import { ProgressBar } from "../feature";
import { TimeCountDown } from "./time-count-down";
import { usePracticeStore } from "@/store";

type TypingAreaProps = {
  words: WordType[];
  currentWordIndex: number;
  currentLetterIndex: number;
};

export default function TypingArea({
  words,
  currentWordIndex,
  currentLetterIndex,
}: TypingAreaProps) {
  const { subMode, countdown, restart } = usePracticeStore();

  const handleRestart = () => {
    restart();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <TimeCountDown />
      <ProgressBar value={((subMode - countdown) / subMode) * 100} />
      <div className=" p-4 h-64">
        <p className="font-mono text-gray-800 dark:text-gray-200 overflow-y-auto h-full w-full text-3xl leading-10 tracking-tight text-center flex flex-wrap justify-center items-center">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className={`inline-block `}>
              {word.letters.map((letter, letterIndex) => {
                const isCaretPosition =
                  wordIndex === currentWordIndex &&
                  letterIndex === currentLetterIndex;
                return (
                  <span
                    key={letterIndex}
                    className={`whitespace-pre ${
                      letter.status == "correct"
                        ? "text-green-500"
                        : letter.status == "incorrect"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {isCaretPosition && (
                      <span className="caret bg-black dark:bg-white w-[2px]  h-6 inline-block animate-blink"></span>
                    )}
                    {letter.char}
                  </span>
                );
              })}
            </span>
          ))}
        </p>
      </div>
      <div
        className="rounded-full w-14 h-14 hover:cursor-pointer"
        onClick={handleRestart}
      >
        <RotateCcw size={28} strokeWidth={1.75} />
      </div>
    </div>
  );
}
