//mode: this type should only be either text or time

export type ModeType = "text" | "time";

export type SubModeType = 15 | 30 | 60 | 25 | 50 | 100;

export type AnalysisType = {
  testType?: string;
  timeTaken?: number;
  wpm: number;
  rawWpm: number;
  accuracy: number;
  consistency: number;
  correctCharacters: number;
  incorrectCharacters: number;
  correctWords: number;
  incorrectWords: number;
  totalWords: number;
  totalCharacters: number;
};

export type Language = {
  value: string;
  label: string;
};

export type WordsRequest = {
  punctuation: boolean;
  numbers: boolean;
  language: string;
  count: number;
};
