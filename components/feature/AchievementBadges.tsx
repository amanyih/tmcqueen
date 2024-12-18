import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const badges = ["Fast Typer", "Accuracy Master", "Top Racer"];

const AchievementsBadges = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements & Badges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 flex-wrap">
          {badges.map((badge, index) => (
            <Badge key={index} className="text-lg">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsBadges;
