import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Users,
  BarChart,
  LayoutGrid,
  Clock,
  Trophy,
  FileText,
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "Real-Time Typing Races",
    description:
      "Compete with others in real time. Race to type the text as quickly and accurately as possible and climb the leaderboards.",
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    title: "Accurate Speed & Accuracy Tracking",
    description:
      "Track your Words Per Minute (WPM) and typing accuracy after every test to monitor your progress.",
    icon: <BarChart className="w-10 h-10 text-primary" />,
  },
  {
    title: "Create Custom Races",
    description:
      "Host your own typing races by creating custom lobbies and inviting friends to join the challenge.",
    icon: <LayoutGrid className="w-10 h-10 text-primary" />,
  },
];

const featureList: string[] = [
  "Real-Time Races",
  "Custom Race Creation",
  "Leaderboard Rankings",
  "Dark/Light Theme",
  "Typing Statistics",
  "Accurate WPM & Accuracy",
  "Daily Challenges",
  "Responsive Design",
  "Minimalist UI",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="default" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card
            key={title}
            className="hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">{icon}</div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>

            <CardFooter className="text-center"></CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
