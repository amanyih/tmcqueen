"use client";

import { useState } from "react";
import { ProgressBar } from "@/components/feature";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypingWord } from "./TypingWords";
import { WordType } from "@/types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

type Racer = {
  name: string;
  progress: number;
  avatar: string;
  rank: number;
};

const RaceTypingComponent = ({
  raceTitle,
  userRank,
  totalParticipants,
  words,
  currentWordIndex,
  currentLetterIndex,
}: {
  raceTitle: string;
  userRank: number;
  totalParticipants: number;
  words: WordType[];
  currentWordIndex: number;
  currentLetterIndex: number;
}) => {
  const [racers] = useState<Racer[]>([
    {
      name: "Amanuel Yihune",
      progress: 90,
      avatar: "/avatars/amanuel.png",
      rank: 1,
    },
    {
      name: "Shad Mirza",
      progress: 80,
      avatar: "/avatars/shad.png",
      rank: 2,
    },
    {
      name: "John Doe",
      progress: 70,
      avatar: "/avatars/john.png",
      rank: 3,
    },
    {
      name: "Jane Doe",
      progress: 65,
      avatar: "/avatars/jane.png",
      rank: 4,
    },
    {
      name: "Alex Smith",
      progress: 50,
      avatar: "/avatars/alex.png",
      rank: 5,
    },
  ]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full ">
      {/* Race Title */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight">
          {raceTitle}
        </h1>
      </div>

      {/* Rank Display */}
      <div className="absolute top-4 right-8 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-lg text-xl font-extrabold z-10">
        {userRank}/{totalParticipants}
      </div>

      {/* Typing Area */}
      <div className="w-full max-w-6xl bg-muted/10 p-6 rounded-lg shadow-md">
        <div className="mb-6 h-[250px] overflow-hidden">
          <p
            className="font-mono text-xl md:text-2xl leading-relaxed tracking-wide text-foreground text-center select-none"
            style={{
              wordSpacing: "0.25em",
              lineHeight: "1.8",
            }}
          >
            {words.map((word, wordIndex) => (
              <TypingWord
                key={wordIndex}
                word={word}
                wordIndex={wordIndex}
                currentWordIndex={currentWordIndex}
                currentLetterIndex={currentLetterIndex}
              />
            ))}
          </p>
        </div>
      </div>

      {/* Leaderboard */}
      <section className="mt-8 w-full max-w-4xl bg-muted/10 p-4 rounded-lg shadow-md">
        <h2 className="text-md font-semibold text-primary mb-4 text-center">
          Top 5 Racers
        </h2>
        <div className="space-y-2">
          {racers.map((racer) => (
            <div
              key={racer.name}
              className="flex items-center gap-3 p-2 bg-muted/20 rounded-md"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={racer.avatar} alt={racer.name} />
                <AvatarFallback>
                  <User className="h-5 w-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-foreground">
                    #{racer.rank}. {racer.name}
                  </span>
                  <span className="text-muted-foreground">
                    {racer.progress}%
                  </span>
                </div>
                <ProgressBar value={racer.progress} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RaceTypingComponent;
