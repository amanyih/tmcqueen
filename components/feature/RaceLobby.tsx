"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Invite from "./invite"; // Shadcn-based Invite component
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Race Details and Sample Participants Data
const raceDetails = {
  name: "Piston Cup",
  description:
    "A thrilling race to test your typing skills with challenges including numbers and punctuation.",
  settings: {
    subMode: "25",
    language: "English",
    hasNumbers: true,
    hasPunctuation: true,
    isPublic: true,
  },
};

const participants = [
  { name: "Amanuel Yihune", rating: 750 },
  { name: "Shad Mirza", rating: 890 },
  { name: "John Doe", rating: 670 },
  { name: "Jane Doe", rating: 920 },
  { name: "Alex Smith", rating: 710 },
];

const RaceLobby = () => {
  const [raceStarted, setRaceStarted] = useState(false);

  return (
    <section className="space-y-8">
      {/* Title and Description */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-primary tracking-tight">
            {raceDetails.name}
          </h1>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          onClick={() => setRaceStarted(true)}
        >
          Start Race
        </Button>
      </div>

      {/* Race Settings */}

      <div
        className="
        flex 
        gap-2
      "
      >
        <Badge variant="outline">{raceDetails.settings.subMode} words</Badge>
        <Badge variant="outline">{raceDetails.settings.language}</Badge>
        {raceDetails.settings.hasNumbers && (
          <Badge variant="outline">Numbers</Badge>
        )}
        {raceDetails.settings.hasPunctuation && (
          <Badge variant="outline">Punctuation</Badge>
        )}
        {raceDetails.settings.isPublic && (
          <Badge variant="outline">Public Race</Badge>
        )}
      </div>

      {/* Participants Lobby */}
      <Card className="border border-border shadow-lg">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-2xl text-secondary font-semibold">
            Lobby
          </CardTitle>
          <p className="text-muted-foreground text-sm mt-1">
            {participants.length} people in the lobby
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px]">
            <ul className="divide-y divide-border">
              {participants
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((participant, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between px-4 py-3 hover:bg-muted/60 transition-colors"
                  >
                    {/* Left: Avatar and Name */}
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={`https://i.pravatar.cc/40?img=${index + 1}`}
                          alt={participant.name}
                        />
                        <AvatarFallback>
                          {participant.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {participant.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Rating: {participant.rating} pts
                        </p>
                      </div>
                    </div>

                    {/* Right: Player Rank */}
                    <span className="text-xs text-muted-foreground">
                      Player {index + 1}
                    </span>
                  </li>
                ))}
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Invite Users Section */}
      <Card className="border border-border shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary font-semibold">
            Invite Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Invite />
        </CardContent>
      </Card>
    </section>
  );
};

export default RaceLobby;
