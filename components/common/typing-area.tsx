import { RotateCcw } from "lucide-react";
import { Button } from "../ui";
import { WordType } from "@/types";
import { ProgressBar } from "../feature";
import { TimeCountDown } from "./time-count-down";

type TypingAreaProps = {
  words: WordType[];
  currentWordIndex: number;
  handleRestart: () => void;
};

export default function TypingArea({
  words,
  currentWordIndex,
  handleRestart,
}: TypingAreaProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <TimeCountDown />
      <ProgressBar value={(currentWordIndex / words.length) * 100} />
      <div className=" p-4 h-64">
        <p className="font-mono text-gray-800 dark:text-gray-200 overflow-y-auto h-full w-full text-3xl leading-10 tracking-tight text-center flex flex-wrap justify-center items-center">
          {words.map((word, index) => (
            <span key={index} className={`inline-block `}>
              {word.letters.map((letter, index) => {
                return (
                  <span
                    key={index}
                    className={`whitespace-pre ${
                      letter.status == "correct"
                        ? "text-green-500"
                        : letter.status == "incorrect"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
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
