import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Keyboard, Users, BarChart, Trophy } from "lucide-react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const featureList: FeatureProps[] = [
  {
    title: "Real-Time Typing Races",
    description:
      "Compete against typists worldwide in real-time races and climb to the top of the leaderboard.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor your speed (WPM), accuracy, and improvement over time with detailed analytics.",
    icon: <BarChart className="w-8 h-8 text-primary" />,
  },
  {
    title: "Practice & Challenges",
    description:
      "Improve your typing skills with tailored practice sessions and exciting daily challenges.",
    icon: <Keyboard className="w-8 h-8 text-primary" />,
  },
  {
    title: "Unlock Achievements",
    description:
      "Complete milestones, earn badges, and showcase your typing prowess to the community.",
    icon: <Trophy className="w-8 h-8 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Discover Our{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Core Features
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4 mx-auto md:w-3/4">
          Everything you need to boost your typing speed, improve accuracy, and
          compete globally – all in one place.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        <div className="flex flex-col gap-8">
          {featureList.map(({ icon, title, description }: FeatureProps) => (
            <Card
              key={title}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="space-y-1 flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-xl">{icon}</div>
                <div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Image
          src={"/images/95.png"}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain drop-shadow-lg"
          alt="Core Features"
        />
      </div>
    </section>
  );
};
