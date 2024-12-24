"use client";

import { RotateCcw } from "lucide-react";
import { ProgressBar } from "../feature";
import { TimeCountDown } from "./time-count-down";
import { usePracticeStore } from "@/store";
import { WordType } from "@/types";
import { Button } from "../ui";
import { TypingWord } from "./TypingWords";

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
    <div className="flex flex-col items-center justify-center gap-6 p-6 h-full my-auto">
      <div className="w-full max-w-4xl flex justify-between items-center ">
        <TimeCountDown />
        <ProgressBar value={((subMode - countdown) / subMode) * 100} />
      </div>

      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center ">
        <p
          className="font-mono text-lg md:text-3xl leading-snug md:leading-normal tracking-wide text-foreground text-center select-none"
          style={{
            wordSpacing: "0.25em",
            lineHeight: "1.6",
          }}
        >
          {words.map((word, wordIndex) => (
            <TypingWord
              key={wordIndex}
              word={word}
              wordIndex={wordIndex}
              currentWordIndex={currentWordIndex}
              currentLetterIndex={currentLetterIndex}
            />
          ))}
        </p>

        <div className="mt-6">
          <Button variant="ghost" size="icon" onClick={restart}>
            <RotateCcw className="w-6 h-6 text-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
}
