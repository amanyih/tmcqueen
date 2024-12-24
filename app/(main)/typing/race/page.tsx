"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateRace, RaceCard, LeaderBoard } from "@/components/feature";

const RacePage = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-7 gap-8 py-8 px-4 lg:px-8">
      {/* Left Section: Main Content */}
      <div className="col-span-5 space-y-8">
        {/* Header Section */}
        <header className="flex justify-between items-center bg-background p-4 rounded-lg ">
          <h1 className="text-4xl font-bold text-primary tracking-tight"></h1>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="hover:bg-primary/10 transition-colors 
              text-white
              "
            >
              Practice
            </Button>
            <CreateRace />
          </div>
        </header>

        {/* Private Invited Races */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-primary tracking-wide">
            Private Races
          </h2>
          <div className="flex justify-center items-center h-32 bg-muted rounded-lg">
            <p className="text-muted-foreground text-lg">
              You don’t have any private races yet.
            </p>
          </div>
        </section>

        {/* Public Races */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-primary tracking-wide">
            Public Races
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <RaceCard key={index} />
            ))}
          </div>
        </section>
      </div>

      {/* Right Section: Leaderboard */}
      <aside className="col-span-2 space-y-8">
        <>
          <h2 className="text-2xl font-bold text-primary text-center">
            Leaderboard
          </h2>
          <div className="bg-card rounded-lg shadow-md p-4">
            <LeaderBoard />
          </div>
          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              className="w-full hover:bg-primary/10 transition-colors"
            >
              View Full Leaderboard
            </Button>
          </div>
        </>
        {/* Previous Races */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-primary tracking-wide">
            Previous Races
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-card hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-secondary">
                  Piston Cup
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completed on June 1, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Raced by 8 participants | 1 min | Medium Difficulty</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-secondary">
                  Lightning Match
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completed on May 28, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Raced by 12 participants | 2 min | Hard Difficulty</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default RacePage;
