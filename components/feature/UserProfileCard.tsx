import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Calendar, Medal, Star, Share2 } from "lucide-react";

// Mock user data
const user = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/300?img=5",
  rank: 3,
  rating: 950,
  badges: ["Fast Typer", "Accuracy Master", "Top Racer"],
  email: "john.doe@example.com",
  joinDate: "January 1, 2023",
};

export function UserProfileCard() {
  return (
    <Card className="border border-border shadow-md rounded-lg">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col justify-center space-y-2">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold text-primary">{user.name}</h1>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-semibold flex items-center gap-2 text-secondary">
                  <Medal className="w-6 h-6" />
                  Rank #{user.rank}
                </div>
                <div className="text-2xl font-semibold flex items-center gap-2 text-yellow-500">
                  <Star className="w-6 h-6" />
                  Rating: {user.rating}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="text-sm font-semibold text-secondary mb-2">
            Achievements
          </h2>
          <div className="flex gap-2 flex-wrap">
            {user.badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm px-4 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            Joined on {user.joinDate}
          </div>
          <div className="flex gap-3">
            <Button
              size="default"
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {user.email}
            </Button>
            <Button
              size="default"
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
