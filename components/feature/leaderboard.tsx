import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Crown } from "lucide-react";

const LeaderBoard = () => {
  const leaderboardData = [
    {
      name: "Amanuel Yihune",
      image: "https://github.com/shadcn.png",
      position: 1,
    },
    {
      name: "Jonathan Doe",
      image: "https://github.com/shadcn.png",
      position: 2,
    },
    {
      name: "Emily Smith",
      image: "https://github.com/shadcn.png",
      position: 3,
    },
  ];

  return (
    <Card className="border-none shadow-md bg-card rounded-lg overflow-hidden">
      <CardContent className="p-0">
        <ul className="divide-y divide-border">
          {leaderboardData.map((leader) => (
            <li
              key={leader.name}
              className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-muted transition-colors"
            >
              {/* Left Section */}
              <div className="flex items-center gap-3 relative">
                <div className="relative">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback>
                      {leader.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {/* Crown on Top Player */}
                  {leader.position === 1 && (
                    <Crown
                      className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 rotate-45"
                      strokeWidth={2}
                    />
                  )}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {leader.name}
                </div>
              </div>

              {/* Right Section */}
              <span
                className={`text-sm font-semibold ${
                  leader.position === 1
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                #{leader.position}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;
