import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Keyboard, Globe, Users } from "lucide-react";

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
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                About Typing McQueen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Typing McQueen is the premier platform for improving typing
                speed and accuracy. With real-time challenges, engaging typing
                races, and a vibrant community, you can hone your skills while
                climbing the global leaderboard.
              </p>

              {/* Icon Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <Keyboard className="w-8 h-8 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Practice Typing
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-8 h-8 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Global Leaderboard
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Community Races
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
