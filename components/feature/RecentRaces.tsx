import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Clock, CheckCircle, XCircle } from "lucide-react";

// Mock data
const raceData = [
  {
    title: "Speed Test Challenge",
    date: "2024-06-05",
    rank: 2,
    wordsTyped: 350,
    completionTime: 60,
    accuracy: 97,
    isWinner: false,
    properties: {
      punctuation: true,
      numbers: false,
      wordLimit: 25,
      visibility: "Public",
    },
  },
  {
    title: "Daily Typing Race",
    date: "2024-06-04",
    rank: 1,
    wordsTyped: 400,
    completionTime: 55,
    accuracy: 99,
    isWinner: true,
    properties: {
      punctuation: true,
      numbers: true,
      wordLimit: 50,
      visibility: "Private",
    },
  },
  {
    title: "Evening Race",
    date: "2024-06-03",
    rank: 3,
    wordsTyped: 300,
    completionTime: 65,
    accuracy: 95,
    isWinner: false,
    properties: {
      punctuation: false,
      numbers: true,
      wordLimit: 100,
      visibility: "Public",
    },
  },
];

const RecentRaces = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Races</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px]">
          <ul className="space-y-4">
            {raceData.map((race, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg border flex flex-col gap-4 ${
                  race.isWinner
                    ? "bg-yellow-100/10 border-yellow-500"
                    : "bg-muted/10"
                }`}
              >
                {/* Race Title */}
                <div className="text-lg font-semibold text-primary">
                  {race.title}
                </div>

                {/* Top Section: Date and Properties */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {race.date}
                  </span>
                  <Badge variant="outline">
                    {race.properties.punctuation
                      ? "Punctuation"
                      : "No Punctuation"}
                  </Badge>
                  <Badge variant="outline">
                    {race.properties.numbers ? "Numbers" : "No Numbers"}
                  </Badge>
                  <Badge variant="outline">
                    {race.properties.wordLimit} Words
                  </Badge>
                  <Badge variant="outline">{race.properties.visibility}</Badge>
                </div>

                {/* Main Content: Rank, Words Typed, Accuracy */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  {/* Rank */}
                  <div className="flex flex-col items-center">
                    <Badge
                      className={`text-md ${
                        race.rank === 1
                          ? "bg-yellow-500 text-white"
                          : "bg-muted-foreground/10"
                      }`}
                    >
                      {race.rank === 1 ? "🏆 Winner" : `Rank #${race.rank}`}
                    </Badge>
                  </div>

                  {/* Words Typed */}
                  <div className="text-center">
                    <span className="text-lg font-semibold">
                      {race.wordsTyped}
                    </span>
                    <div className="text-sm text-muted-foreground">
                      Words Typed
                    </div>
                  </div>

                  {/* Accuracy */}
                  <div className="text-center">
                    <span
                      className={`text-lg font-semibold ${
                        race.accuracy >= 97
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {race.accuracy}%
                    </span>
                    <div className="text-sm text-muted-foreground">
                      Accuracy
                    </div>
                  </div>

                  {/* Winner/Status Icon */}
                  <div className="flex items-center gap-1">
                    {race.isWinner ? (
                      <CheckCircle size={20} className="text-green-500" />
                    ) : (
                      <XCircle size={20} className="text-red-500" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {race.isWinner ? "Victory" : "Try Again"}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentRaces;
