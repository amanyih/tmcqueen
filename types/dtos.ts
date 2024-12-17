import { BADGETYPE, MODE, SUBMODE, THEME } from "./core";

export type JwtToken = {
  access_token: string;
  expires_in: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type SignupDto = {
  email: string;
  password: string;
};

export type CreateBadgeDto = {
  name: string;
  description: string;
  icon: string;
  xp: string;
  type: BADGETYPE;
};

export type CreateConfigurationDto = {
  theme: THEME;
  words: SUBMODE;
  time: SUBMODE;
  mode: MODE;
  userId: string;
};

export type CreateRaceDto = {
  name: string;
  description?: string;
  subMode: SUBMODE;
  startTime: Date;
  language: string;
  hasNumbers: boolean;
  hasPunctuation: boolean;
  isPublic: boolean;
  invitedUsers: string[];
};

export type CreateRaceResultDto = {
  raceId: string;
  userId: string;
  wordsTyped: number;
  completionTime: number;
  accuracy: number;
  rank: number;
  isWinner: boolean;
};

export type CreateResultDto = {
  wpm: number;
  rawWpm: number;
  accuracy: number;
  charactersTotal: number;
  mode: MODE;
  submode: SUBMODE;
  punctuation: boolean;
  numbers: boolean;
  testLanguage: string;
  keySpacing: number[];
  keyDuration: number[];
  duration: number;
  userId: string;
};

export type CreateUserDataDto = {
  personalBest: number;
  completedTests: number;
  timeSpent: number;
  xp: number;
  bio: string;
  userId: string;
  isPremium: boolean;
};
