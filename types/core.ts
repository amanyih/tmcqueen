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

export type LetterType = {
  char: string;
  status: "correct" | "incorrect" | "pending";
};

export type WordType = {
  letters: LetterType[];
  completed: boolean;
  startTimestamp?: number;
  endTimestamp?: number;
  duration?: number;
  correct?: boolean;
};

export enum MODE {
  WORDS = "WORDS",
  TIME = "TIME",
}

export enum SUBMODE {
  TWENTY_FIVE = 25,
  FIFTY = 50,
  HUNDRED = 100,

  FIFTEEN_SECONDS = 15,
  THIRTY_SECONDS = 30,
  SIXTY_SECONDS = 60,
  ONE_TWENTY = 120,
}

export enum BADGETYPE {
  WPM = "WPM",
  ACCURACY = "ACCURACY",
  TESTS = "TESTS",
  TIME = "TIME",
}

export enum THEME {
  SYSTEM = "SYSTEM",
  LIGHT = "LIGHT",
  DARK = "DARK",
}
