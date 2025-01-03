"use client";
import { useEffect, useState } from "react";
import { usePracticeStore, useUIStore } from "@/store";

export function TimeCountDown({}: {}) {
  const { openModal } = useUIStore();

  const {
    subMode,
    isTyping,
    mode,
    currentWordIndex,
    decrementCountdown,
    setCountdown,
    countdown: countdownState,
  } = usePracticeStore();

  const [countdown, setCountdownState] = useState<number>(subMode);

  useEffect(() => {
    setCountdownState(subMode);
    if (!isTyping) {
      setCountdownState(subMode);
    }
  }, [subMode, isTyping]);

  useEffect(() => {
    if (isTyping && mode === "time") {
      const interval = setInterval(() => {
        setCountdownState((prev) => {
          if (prev === 0) {
            clearInterval(interval);
            return subMode;
          }
          return prev - 1;
        });
        decrementCountdown();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTyping, openModal, mode, subMode, decrementCountdown]);

  useEffect(() => {
    if (isTyping && mode === "text") {
      const index = currentWordIndex - Math.floor(currentWordIndex / 2);
      setCountdownState((prev) => {
        if (index === subMode) {
          return subMode;
        }
        return subMode - index;
      });
      setCountdown(subMode - index);
    }
  }, [isTyping, mode, currentWordIndex, subMode, setCountdown]);

  return (
    <>
      <div className="flex items-center justify-center  rounded-lg  p-4 w-32 h-16">
        <span className="text-3xl font-bold text-foreground">
          {countdownState}
        </span>
      </div>
    </>
  );
}
