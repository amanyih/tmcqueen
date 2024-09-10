"use client";
import { TypingArea } from "@/components/common";
import { ControlPanel } from "@/components/feature";
import { parseText } from "@/lib/utils";
import { WordType } from "@/types";
import { ProgressBar } from "@/components/feature";
import { useRef, useState } from "react";
import { usePracticeStore, useUIStore } from "@/store";

export default function Practice() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec erat ultricies suscipit. Nulla facilisi. Nullam eget felis nec justo ultrices ultricies. Nullam in odio nec nunc ultricies ultricies. Nullam nec eros nec eros ultricies ultricies. Nulla facilisi. Nullam eget felis nec justo ultricies ultricies. Nullam in odio nec nunc ultricies ultricies. Nullam nec eros nec eros ultricies ultricies. Nulla facilisi. Nullam eget felis`;
  const [words, setWords] = useState<WordType[]>(parseText(text));
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);

  const { restart, startTyping, isTyping } = usePracticeStore();
  const { modal } = useUIStore();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;

    if (
      key == "Shift" ||
      key == "Control" ||
      key == "CapsLock" ||
      key == "Alt"
    ) {
      return;
    }

    if (modal.isOpen) {
      return;
    }

    const wordsCopy = [...words];
    const currentWord = wordsCopy[currentWordIndex];
    const currentLetter = currentWord.letters[currentLetterIndex];

    if (key == "Backspace") {
      currentLetter.status = "pending";
      if (currentLetterIndex == 0) {
        console.log("backspace currentLetterIndex == 0");
        if (currentWordIndex == 0) {
          setWords(wordsCopy);
          return;
        }
        let previousLetter =
          words[currentWordIndex - 1].letters[
            words[currentWordIndex - 1].letters.length - 1
          ];
        previousLetter.status = "pending";
        setCurrentWordIndex(currentWordIndex - 1);
        setCurrentLetterIndex(words[currentWordIndex - 1].letters.length - 1);
      } else {
        console.log("backspace currentLetterIndex != 0");
        let previousLetter =
          words[currentWordIndex].letters[currentLetterIndex - 1];
        previousLetter.status = "pending";
        setCurrentLetterIndex(currentLetterIndex - 1);
      }
      setWords(wordsCopy);
      return;
    }

    if (!isTyping) {
      startTyping();
    }

    if (currentLetter.char === key) {
      currentLetter.status = "correct";
      if (currentLetterIndex + 1 == currentWord.letters.length) {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentLetterIndex(0);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    } else {
      currentLetter.status = "incorrect";
      if (currentLetterIndex + 1 == currentWord.letters.length) {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentLetterIndex(0);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    }
    setWords(wordsCopy);
  };

  const handleRestart = () => {
    setCurrentWordIndex(0);
    setCurrentLetterIndex(0);
    setWords(parseText(text));
    restart();
  };
  return (
    <main
      className="px-8 flex flex-col gap-[15%] py-8 flex-grow focus:outline-none"
      onKeyDown={handleKeyPress}
      tabIndex={0}
      ref={divRef}
    >
      <ControlPanel />
      <TypingArea
        words={words}
        currentWordIndex={currentWordIndex}
        handleRestart={handleRestart}
      />
    </main>
  );
}
