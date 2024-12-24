"use client";
import { TypingArea, LanguagePicker } from "@/components/common";
import { Result } from "@/components/common/result";
import { ControlPanel } from "@/components/feature";
import { useKeyPress } from "@/hooks";
import { analyzer } from "@/lib/analyzer";
import { usePracticeStore, useUIStore } from "@/store";
import { WordsRequest } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function Practice() {
  const {
    setCurrentWordIndex,
    setReset,
    countdown,
    subMode,
    restart,
    language,
    setLanguage,
    numbers,
    punctuation,
    reset,
  } = usePracticeStore();

  const [wordRequest, setWordRequest] = useState<WordsRequest>({
    count: subMode as number,
    language: language,
    numbers: numbers,
    punctuation,
  });

  const {
    handleKeyPress,
    handleRestart,
    words,
    currentWordIndex,
    currentLetterIndex,
  } = useKeyPress({
    setWordIndex: setCurrentWordIndex,
    wordRequest,
  });

  const { openModal } = useUIStore();

  const finish = useCallback(() => {
    const analysisResult = analyzer(words.slice(0, currentWordIndex), subMode);
    openModal("Result", <Result analysisResult={analysisResult} />);
    restart();
  }, [openModal, subMode, restart, words, currentWordIndex]);

  useEffect(() => {
    setReset(handleRestart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      finish();
    }
  }, [countdown, finish]);

  useEffect(() => {
    setWordRequest({
      count: subMode as number,
      language: language,
      numbers: numbers,
      punctuation,
    });
  }, [subMode, language, numbers, punctuation]);

  return (
    <main
      className="px-8 flex flex-col gap-4 py-8 flex-grow focus:outline-none items-center"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <ControlPanel />
      <TypingArea
        words={words}
        currentWordIndex={currentWordIndex}
        currentLetterIndex={currentLetterIndex}
      />
    </main>
  );
}
