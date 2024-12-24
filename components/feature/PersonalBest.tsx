import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LucideParkingMeter, Percent, Medal } from "lucide-react";

// Mock Data
const personalBests = {
  overall: {
    bestWPM: 95,
    bestAccuracy: 99,
    topRank: 1,
  },
  modes: [
    { mode: "Time | 60s", bestWPM: 92, bestAccuracy: 98, rank: 2 },
    { mode: "Word | 50 Words", bestWPM: 88, bestAccuracy: 95, rank: 3 },
    { mode: "Time | 30s", bestWPM: 85, bestAccuracy: 94, rank: 1 },
  ],
};

const PersonalBests = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Bests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">🏆 Overall</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <LucideParkingMeter size={20} className="text-primary" />
                <div>
                  <div className="font-semibold text-lg">
                    {personalBests.overall.bestWPM}
                  </div>
                  <div className="text-sm text-muted-foreground">Best WPM</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Percent size={20} className="text-green-500" />
                <div>
                  <div className="font-semibold text-lg">
                    {personalBests.overall.bestAccuracy}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Best Accuracy
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Medal size={20} className="text-yellow-500" />
                <div>
                  <div className="font-semibold text-lg">
                    Rank #{personalBests.overall.topRank}
                  </div>
                  <div className="text-sm text-muted-foreground">Top Rank</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <ScrollArea className="h-[250px]">
              <ul className="space-y-4">
                {personalBests.modes.map((mode, index) => (
                  <li
                    key={index}
                    className="p-4 border rounded-lg bg-muted/10 grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-sm font-medium">
                        {mode.mode}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                      <LucideParkingMeter size={18} className="text-primary" />
                      <div>
                        <div className="font-semibold">{mode.bestWPM} WPM</div>
                        <div className="text-sm text-muted-foreground">
                          Best WPM
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <Percent size={18} className="text-green-500" />
                        <div>
                          <div className="font-semibold">
                            {mode.bestAccuracy}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Accuracy
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Medal size={18} className="text-yellow-500" />
                        <div>
                          <div className="font-semibold">Rank #{mode.rank}</div>
                          <div className="text-sm text-muted-foreground">
                            Top Rank
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalBests;
