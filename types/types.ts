export type ControlPanelOptionType = {
  label: string;
  value: string;
  icon?: React.ReactNode; // Make icon optional
};

export interface User {
  id: string;
  email: string;
  passwordHash?: string;
  googleId?: string;
  displayName?: string;
  avatar?: string;
  provider?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  Result?: Result[];
  UserData?: UserData;
  Config?: Config;
  badges: string[];
  isPremium: boolean;
  RaceResult?: RaceResult[];
}

export interface Result {
  id: string;
  wpm: number;
  rawWpm: number;
  accuracy: number;
  charactersTotal: number;
  mode: string;
  submode: number;
  punctuation: boolean;
  numbers: boolean;
  testLanguage: string;
  keySpacing: number[];
  keyDuration: number[];
  duration: number;
  userId: string;
  createdAt: Date;
  User: User;
}

export interface UserData {
  id: string;
  personalBest: number;
  completedTests: number;
  timeSpent: number;
  xp: number;
  bio?: string;
  userId: string;
  User: User;
}

export interface Config {
  id: string;
  theme: Theme;
  words: number;
  time: number;
  mode: Mode;
  userId: string;
  User: User;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  xp: number;
  type: BadgeType;
}

export interface Race {
  id: string;
  name: string;
  description?: string;
  subMode: number;
  startTime: Date;
  language: string;
  hasNumbers: boolean;
  hasPunctuation: boolean;
  isPublic: boolean;
  participants: string[];
  invitedUsers: string[];
  chatMessages: Message[];
  createdAt: Date;
  startedAt?: Date;
  isFinished: boolean;
  RaceResult?: RaceResult[];
}

export interface RaceResult {
  id: string;
  raceId: string;
  userId: string;
  wordsTyped: number;
  completionTime?: number;
  accuracy: number;
  rank: number;
  isWinner: boolean;
  race: Race;
  participant: User;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  raceId: string;
  createdAt: Date;
  race: Race;
}

export enum BadgeType {
  WPM = "WPM",
  ACCURACY = "ACCURACY",
  TESTS = "TESTS",
  TIME = "TIME",
}

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SYSTEM = "SYSTEM",
}

export enum Mode {
  WORDS = "WORDS",
  TIME = "TIME",
}
