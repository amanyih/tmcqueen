import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Dot } from "lucide-react";
import Gauge from "./Gauge";
import { LeaderboardCard } from "./LeaderBoardCard";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
            <span className="text-primary font-semibold text-lg">🌐</span>
          </div>

          <div>
            <CardTitle className="text-lg font-bold text-foreground">
              800 Online Users
            </CardTitle>
            <CardDescription className="text-md mt-2 text-muted-foreground">
              Join active races and compete with online typists in real time!
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center ">
          <div className="absolute grayscale-[0%] -top-[150px] rounded-full w-24 h-24 aspect-square object-cover">
            <Gauge />
          </div>
          <CardTitle className="mt-24 pb-2 text-center">
            Fuel Your Typing Speed
          </CardTitle>
          <CardDescription className="font-normal text-muted-foreground">
            Compete, improve, and lead the race!
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Track your speed, challenge others, and climb to the top of the
            leaderboard.
          </p>
        </CardContent>
      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Typing Race
            <Badge variant="default" className="text-sm ">
              Compete
            </Badge>
          </CardTitle>

          <CardDescription>
            <>
              {["Speed", "Accuracy", "Progress"].map(
                (feature: string, index) => {
                  return (
                    <span key={feature} className="text-muted-foreground mr-2">
                      {feature}
                      {/* if it's the last this should not be shown */}
                      {index !== 2 && (
                        <Dot className="text-green-500 inline-block" />
                      )}
                    </span>
                  );
                }
              )}
            </>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full text-lg font-semibold" variant="default">
            Join the Race Now
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Compete with Online Typists",
              "Real-Time WPM & Accuracy Tracking",
              "Global Leaderboards Available",
            ].map((feature: string) => (
              <span key={feature} className="flex">
                <h3 className="ml-2 text-muted-foreground">{feature}</h3>
                <Check className="text-green-500" />{" "}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      <LeaderboardCard />
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span
              className="inline bg-gradient-to-r text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(
          to right,
          hsl(var(--secondary)),
          hsl(var(--primary)),
          hsl(var(--accent))
        )`,
              }}
            >
              Speed Up
            </span>{" "}
            your typing
          </h1>{" "}
          and{" "}
          <h2 className="inline">
            <span
              className="inline bg-gradient-to-r text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(
          to right,
          hsl(var(--secondary)),
          hsl(var(--primary)),
          hsl(var(--accent))
        )`,
              }}
            >
              race to the top!
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Join the ultimate typing race. Boost your skills, compete with others,
          and claim your spot on the leaderboard!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Start Typing Now</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Contribute
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="animated-glow"></div>
    </section>
  );
};
