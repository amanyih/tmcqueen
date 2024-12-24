"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Flag, Clock, CheckCircle, List } from "lucide-react";

export function RacingResult({
  resultData,
}: {
  resultData: {
    rank: number;
    totalParticipants: number;
    raceTitle: string;
    language: string;
    publicRace: boolean;
    includesNumbers: boolean;
    includesPunctuation: boolean;
    timeTaken: string;
    accuracy: number;
    wpm: number;
    isWinner: boolean;
  };
}) {
  const {
    rank,
    totalParticipants,
    raceTitle,
    language,
    publicRace,
    includesNumbers,
    includesPunctuation,
    timeTaken,
    accuracy,
    wpm,
    isWinner,
  } = resultData;

  return (
    <Card className="p-6 bg-muted/20 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center space-x-2">
          <Trophy className="w-6 h-6 text-primary" />
          <span>{raceTitle}</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">Language: {language}</p>
        {isWinner && (
          <div className="mt-2">
            <Badge className="text-md bg-yellow-500/10 text-yellow-500 px-4 py-2">
              🏆 Congratulations! You are the Winner! 🏆
            </Badge>
          </div>
        )}
      </CardHeader>

      <Separator className="my-4" />

      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <Flag className="w-6 h-6 text-blue-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Your Rank
          </span>
          <Badge className="text-lg bg-blue-500/10 text-blue-500">
            {rank}/{totalParticipants}
          </Badge>
        </div>

        <div className="flex flex-col items-center">
          <Clock className="w-6 h-6 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            Time Taken
          </span>
          <Badge className="text-lg bg-muted/10 text-muted-foreground">
            {timeTaken}
          </Badge>
        </div>

        <div className="flex flex-col items-center">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Accuracy
          </span>
          <Badge className="text-lg bg-green-500/10 text-green-500">
            {Math.round(accuracy * 100)}%
          </Badge>
        </div>

        <div className="flex flex-col items-center">
          <List className="w-6 h-6 text-secondary" />
          <span className="text-sm font-medium text-muted-foreground">WPM</span>
          <Badge className="text-lg bg-primary/10 text-primary">{wpm}</Badge>
        </div>
      </CardContent>

      <Separator className="my-4" />

      <CardContent className="grid grid-cols-2 gap-4">
        {/* Public Race */}
        <div className="flex flex-col items-center">
          <List className="w-6 h-6 text-green-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Public Race
          </span>
          <Badge
            className={`text-lg ${
              publicRace
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {publicRace ? "Yes" : "No"}
          </Badge>
        </div>

        <div className="flex flex-col items-center">
          <CheckCircle className="w-6 h-6 text-yellow-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Includes Numbers
          </span>
          <Badge
            className={`text-lg ${
              includesNumbers
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {includesNumbers ? "Yes" : "No"}
          </Badge>
        </div>

        <div className="flex flex-col items-center">
          <CheckCircle className="w-6 h-6 text-yellow-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Includes Punctuation
          </span>
          <Badge
            className={`text-lg ${
              includesPunctuation
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {includesPunctuation ? "Yes" : "No"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
