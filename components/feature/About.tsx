import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: "2.7K+",
      description: "Active Racers",
    },
    {
      quantity: "1.8K+",
      description: "Typing Challenges Completed",
    },
    {
      quantity: "500K+",
      description: "Words Typed",
    },
    {
      quantity: "120+",
      description: "Global Leaderboard Top Scorers",
    },
  ];

  return (
    <section id="statistics" className="mt-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <Card
            key={description}
            className="shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="text-center py-6 space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                {quantity}
              </h2>
              <p className="text-lg text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <Card className="bg-muted/50 border rounded-lg shadow-lg overflow-hidden">
        <CardContent className="px-6 py-12 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={"/images/95.png"}
              width={300}
              height={300}
              alt="Typing McQueen"
              className="w-[280px] sm:w-[300px] object-contain rounded-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Typing McQueen is the ultimate typing platform for speed and
                accuracy enthusiasts. Whether you're looking to **practice**,
                challenge friends in **real-time races**, or top the **global
                leaderboard**, Typing McQueen helps you achieve your typing
                goals while having fun. 🚀
              </p>
            </div>

            {/* Statistics Section */}
            <Statistics />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
