import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Keyboard, Users, Scale, Trophy, BarChart } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Keyboard className="w-12 h-12 text-primary" />,
    title: "Practice Typing",
    description:
      "Start by practicing your typing skills. Improve your speed and accuracy at your own pace.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Join a Race",
    description:
      "Compete with other online typists in real-time races to climb the global leaderboard.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Track Your Progress",
    description:
      "Monitor your WPM, accuracy, and improvement over time with our detailed analytics.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-primary" />,
    title: "Achieve Milestones",
    description:
      "Unlock achievements, complete challenges, and compete for top positions on the leaderboard.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        How{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Typing McQueen{" "}
        </span>
        Works
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-muted-foreground">
        Boost your typing speed, compete with others, and track your progress in
        just a few simple steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-foreground">
                {icon}
                <span className="text-xl font-semibold">{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
