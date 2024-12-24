"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, BarChart, Keyboard } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="container mx-auto py-12 px-4 lg:px-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Welcome to Typing McQueen
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Typing McQueen is the ultimate platform to race, practice, and improve
          your typing speed. Compete against friends, climb the leaderboard, and
          become the fastest typist!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="shadow-md border border-border hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardHeader className="flex items-center gap-2">
            <Rocket className="text-primary h-8 w-8" />
            <CardTitle className="text-lg font-semibold text-primary">
              Real-Time Races
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Compete in real-time typing races with friends and global players.
              Set race parameters like time, difficulty, and text type.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-border hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardHeader className="flex items-center gap-2">
            <Keyboard className="text-primary h-8 w-8" />
            <CardTitle className="text-lg font-semibold text-primary">
              Practice Mode
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Hone your typing skills with customizable practice sessions. Focus
              on speed, accuracy, or specific text challenges.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-border hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardHeader className="flex items-center gap-2">
            <BarChart className="text-primary h-8 w-8" />
            <CardTitle className="text-lg font-semibold text-primary">
              Track Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Analyze your typing performance with detailed metrics on speed,
              accuracy, and progress over time.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-border hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardHeader className="flex items-center gap-2">
            <Users className="text-primary h-8 w-8" />
            <CardTitle className="text-lg font-semibold text-primary">
              Compete with Friends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Invite friends or join public races. See how you rank on global
              leaderboards and climb to the top.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold text-secondary">
          Start Your Typing Journey Today!
        </h2>
        <p className="text-muted-foreground text-lg">
          Whether you&apos;re here to practice or compete, Typing McQueen will
          help you type faster, better, and smarter.
        </p>
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Button>
      </section>
    </main>
  );
};

export default AboutPage;
