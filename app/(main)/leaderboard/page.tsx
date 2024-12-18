"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample Data
const practiceTimeLeaderboard = [
  { name: "Amanuel Yihune", wpm: 120, accuracy: "97%", rank: 1 },
  { name: "Shad Mirza", wpm: 115, accuracy: "95%", rank: 2 },
  { name: "John Doe", wpm: 110, accuracy: "94%", rank: 3 },
];

const practiceWordsLeaderboard = [
  { name: "Jane Doe", wpm: 130, accuracy: "96%", rank: 1 },
  { name: "Alex Smith", wpm: 125, accuracy: "92%", rank: 2 },
  { name: "Emily Johnson", wpm: 118, accuracy: "95%", rank: 3 },
];

const racingLeaderboard = [
  { name: "Amanuel Yihune", rating: 950, rank: 1 },
  { name: "Shad Mirza", rating: 890, rank: 2 },
  { name: "Jane Doe", rating: 870, rank: 3 },
];

// Mock User's Ranks
const userRanks = {
  practiceRank: { rank: 2, wpm: 115, accuracy: "95%" },
  raceRank: { rank: 4, rating: 860 },
};

const LeaderboardPage = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <main className="container mx-auto py-12 px-4 lg:px-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Leaderboard
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {/* User's Practice Rank */}
          <Card className="w-72 border border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-secondary text-center">
                Your Practice Rank
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <Badge className="text-lg bg-primary text-white px-4 py-1">
                #{userRanks.practiceRank.rank}
              </Badge>
              <p className="text-sm text-muted-foreground">
                WPM: {userRanks.practiceRank.wpm} | Accuracy:{" "}
                {userRanks.practiceRank.accuracy}
              </p>
            </CardContent>
          </Card>

          {/* User's Racing Rank */}
          <Card className="w-72 border border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-secondary text-center">
                Your Racing Rank
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <Badge className="text-lg bg-primary text-white px-4 py-1">
                #{userRanks.raceRank.rank}
              </Badge>
              <p className="text-sm text-muted-foreground">
                Rating: {userRanks.raceRank.rating}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="text-center">
        <p className="text-lg text-muted-foreground">
          Next Leaderboard Update In:
        </p>
        <p className="text-3xl font-bold text-secondary mt-2">
          {formatTime(timeLeft)}
        </p>
      </section>

      {/* Tabs Section */}
      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="flex justify-center space-x-4 bg-card rounded-lg p-2">
          <TabsTrigger
            value="practice"
            className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition"
          >
            Practice
          </TabsTrigger>
          <TabsTrigger
            value="racing"
            className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition"
          >
            Racing
          </TabsTrigger>
        </TabsList>

        {/* Practice Leaderboard */}
        <TabsContent value="practice" className="mt-6">
          <Tabs defaultValue="time">
            <TabsList className="flex justify-center space-x-4 mb-4">
              <TabsTrigger value="time">Time Mode</TabsTrigger>
              <TabsTrigger value="words">Words Mode</TabsTrigger>
            </TabsList>

            {/* Time Mode */}
            <TabsContent value="time">
              <Card className="border border-border shadow-lg">
                <CardContent>
                  {practiceTimeLeaderboard.map((user, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src={`https://i.pravatar.cc/40?img=${index + 1}`}
                              alt={user.name}
                            />
                            <AvatarFallback>
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">
                              WPM: {user.wpm} | Accuracy: {user.accuracy}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Rank {user.rank}
                        </Badge>
                      </div>
                      {index < practiceTimeLeaderboard.length - 1 && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Words Mode */}
            <TabsContent value="words">
              <Card className="border border-border shadow-lg">
                <CardContent>
                  {practiceWordsLeaderboard.map((user, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src={`https://i.pravatar.cc/40?img=${index + 5}`}
                              alt={user.name}
                            />
                            <AvatarFallback>
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">
                              WPM: {user.wpm} | Accuracy: {user.accuracy}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Rank {user.rank}
                        </Badge>
                      </div>
                      {index < practiceWordsLeaderboard.length - 1 && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Racing Leaderboard */}
        <TabsContent value="racing" className="space-y-4 mt-6">
          <Card className="border border-border shadow-lg">
            <CardContent>
              {racingLeaderboard.map((user, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={`https://i.pravatar.cc/40?img=${index + 1}`}
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Rating: {user.rating}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Rank {user.rank}
                    </Badge>
                  </div>
                  {index < racingLeaderboard.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default LeaderboardPage;
