"use client";
import { useEffect, useState } from "react";
import { Result } from "./result";
import { usePracticeStore, useUIStore } from "@/store";

export function TimeCountDown() {
  const [isTimeUp, setIsTimeUp] = useState(false);

  const { countdown, isTyping, decrementCountdown, restart } =
    usePracticeStore();

  const toggleDialog = () => {
    setIsTimeUp(!isTimeUp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (countdown === 0) {
          setIsTimeUp(true);
          restart();
        } else {
          decrementCountdown();
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTyping, decrementCountdown, countdown, restart]);

  return (
    <>
      <div className="inline-flex text-center p-4 self-end text-3xl">
        <span>{countdown}</span>
      </div>
    </>
  );
}
