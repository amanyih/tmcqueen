import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Medal, Crown } from "lucide-react";
import Image from "next/image";

interface LeaderboardItem {
  name: string;
  level: number;
  points: number;
  position: number;
  avatar: string;
}

const leaderboardData: LeaderboardItem[] = [
  { name: "Vatani", level: 3, points: 1932, position: 2, avatar: "" },
  { name: "Iman", level: 32, points: 2019, position: 1, avatar: "" },
  { name: "Jonathan", level: 84, points: 1431, position: 3, avatar: "" },
];

export const LeaderboardCard = () => {
  return (
    <Card className="absolute w-[350px] -right-[10px] -bottom-[170px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="pb-4">
        <h2 className="text-lg font-bold text-center text-foreground">
          Leaderboard
        </h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center items-end gap-6">
          {leaderboardData.map((user) => (
            <div
              key={user.position}
              className={`relative flex flex-col items-center ${
                user.position === 1 ? "z-10 scale-125" : "scale-100"
              }`}
            >
              {user.position === 1 && (
                <Crown className="absolute top-9 text-yellow-400 w-10 h-10" />
              )}

              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${
                  user.position === 1
                    ? "bg-primary text-primary-foreground"
                    : user.position === 2
                    ? "bg-muted text-muted-foreground"
                    : "bg-accent text-accent-foreground"
                } text-lg font-bold`}
              >
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                ) : (
                  <span>{user.name.charAt(0)}</span>
                )}
              </div>

              <span className="mt-2 font-semibold text-sm text-center text-foreground">
                {user.name}
              </span>
              <span className="text-xs text-muted-foreground">
                Level {user.level}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div
              key={user.position}
              className={`flex items-center justify-between p-3 rounded-lg ${
                user.position === 1
                  ? "bg-primary text-primary-foreground"
                  : user.position === 2
                  ? "bg-muted text-muted-foreground"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg">{user.position}</span>
                <span className="font-medium">{user.name}</span>
              </div>
              <span className="font-semibold">{user.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
