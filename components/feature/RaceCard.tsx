import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

const RaceCard = () => {
  return (
    <Link href="/typing/race/raceId" className="block">
      <Card className="group hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 border border-border bg-card/90">
        <CardHeader className="pb-2">
          {/* Race Title and Timer */}
          <CardTitle className="flex justify-between items-center text-lg font-semibold text-primary">
            Piston Cup
            <div className="text-sm bg-secondary/20 text-secondary px-2 py-1 rounded-full">
              1 min
            </div>
          </CardTitle>

          {/* Host Information */}
          <CardDescription className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
            <Avatar className="rounded-full h-7 w-7 border border-border">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Host Avatar"
              />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">Amanuel Yihune</span>
          </CardDescription>
        </CardHeader>

        {/* Race Details */}
        <CardContent className="pt-2">
          <div className="grid grid-cols-2 text-sm text-muted-foreground gap-y-2">
            <div>
              <span className="font-medium text-foreground">People</span>
              <p>8 participants</p>
            </div>
            <div>
              <span className="font-medium text-foreground">Date</span>
              <p>June 15, 2024</p>
            </div>
            <div>
              <span className="font-medium text-foreground">Time</span>
              <p>7:00 PM</p>
            </div>
            <div>
              <span className="font-medium text-foreground">Difficulty</span>
              <p>Medium</p>
            </div>
          </div>
        </CardContent>

        {/* Footer with Join Button */}
        <CardFooter>
          <Button
            variant="default"
            className="w-full group-hover:bg-primary/90 transition-colors"
          >
            Join Race
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RaceCard;
