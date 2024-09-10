import { ModeType, SubModeType } from "@/types";
import { create } from "zustand";

type PracticeState = {
  mode: ModeType;
  subMode: SubModeType;
  punctuation: boolean;
  numbers: boolean;
  isTyping: boolean;
  countdown: number;
};

type PracticeActions = {
  setMode: (mode: ModeType) => void;
  setSubMode: (subMode: SubModeType) => void;
  setPunctuation: (punctuation: boolean) => void;
  setNumbers: (numbers: boolean) => void;
  startTyping: () => void;
  decrementCountdown: () => void;
  restart: () => void;
};

export const usePracticeStore = create<PracticeState & PracticeActions>(
  (set) => ({
    mode: "time",
    subMode: 30,
    punctuation: false,
    numbers: false,
    isTyping: false,
    countdown: 30,
    setMode: (mode: ModeType) => set((state) => ({ mode })),
    setSubMode: (subMode: SubModeType) =>
      set((state) => ({ subMode, countdown: subMode })),
    setPunctuation: (punctuation: boolean) => set((state) => ({ punctuation })),
    setNumbers: (numbers: boolean) => set((state) => ({ numbers })),
    startTyping: () => set((state) => ({ isTyping: true })),
    decrementCountdown: () =>
      set((state) => ({ countdown: state.countdown - 1 })),
    restart: () =>
      set((state) => ({
        mode: state.mode,
        subMode: state.subMode,
        countdown: state.subMode,
        isTyping: false,
      })),
  })
);
