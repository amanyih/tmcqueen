import { Language, ModeType, SubModeType } from "@/types";
import { create } from "zustand";

type PracticeState = {
  mode: ModeType;
  subMode: SubModeType;
  punctuation: boolean;
  numbers: boolean;
  isTyping: boolean;
  currentWordIndex: number;
  countdown: number;
  language: string;
  reset?: () => void;
};

type PracticeActions = {
  setMode: (mode: ModeType) => void;
  setSubMode: (subMode: SubModeType) => void;
  setPunctuation: (punctuation: boolean) => void;
  setNumbers: (numbers: boolean) => void;
  startTyping: () => void;
  setCurrentWordIndex: (countdown: number) => void;
  restart: () => void;
  setReset: (reset: () => void) => void;
  decrementCountdown: () => void;
  setCountdown: (countdown: number) => void;
  setLanguage: (language: string) => void;
};

export const usePracticeStore = create<PracticeState & PracticeActions>(
  (set) => ({
    mode: "time",
    subMode: 30,
    punctuation: false,
    numbers: false,
    isTyping: false,
    currentWordIndex: 0,
    language: "english_10k.json",
    countdown: 30,
    setMode: (mode: ModeType) => set((state) => ({ mode })),
    setSubMode: (subMode: SubModeType) =>
      set((state) => ({ subMode, countdown: subMode })),
    setPunctuation: (punctuation: boolean) => set((state) => ({ punctuation })),
    setNumbers: (numbers: boolean) => set((state) => ({ numbers })),
    startTyping: () => set((state) => ({ isTyping: true })),
    restart: () => {
      set((state) => {
        state.reset && state.reset();
        return {
          mode: state.mode,
          subMode: state.subMode,
          countdown: state.subMode,
          isTyping: false,
          currentWordIndex: 0,
        };
      });
    },
    setCurrentWordIndex: (currentWordIndex: number) => {
      set((state) => ({ currentWordIndex }));
    },
    setReset: (reset: () => void) => set((state) => ({ reset })),
    decrementCountdown: () => {
      set((state) => {
        if (state.countdown === 0) {
          return { isTyping: false, countdown: state.subMode };
        }
        return { countdown: state.countdown - 1 };
      });
    },
    setCountdown: (countdown: number) => set((state) => ({ countdown })),
    setLanguage: (language: string) => set((state) => ({ language })),
  })
);
