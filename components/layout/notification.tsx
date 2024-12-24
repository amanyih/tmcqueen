"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Bell, CheckCircle, XCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Race Invitation",
    description: "You have been invited to join the 'Piston Cup' race.",
    type: "info",
  },
  {
    id: 2,
    title: "Race Completed",
    description: "Your race result has been recorded. View your stats now.",
    type: "success",
  },
  {
    id: 3,
    title: "Leaderboard Update",
    description: "The leaderboard has been updated! Check your new rank.",
    type: "alert",
  },
];

const Notification = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell
            className="cursor-pointer text-primary hover:text-primary/80 transition duration-200 ease-in-out"
            size={24}
          />

          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-xs font-bold text-white">
            {notifications.length}
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[450px]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-primary">
            Notifications
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Stay updated with your latest race activities and stats.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                {notification.type === "info" && (
                  <Bell className="text-blue-500 h-6 w-6" />
                )}
                {notification.type === "success" && (
                  <CheckCircle className="text-green-500 h-6 w-6" />
                )}
                {notification.type === "alert" && (
                  <XCircle className="text-red-500 h-6 w-6" />
                )}

                <div>
                  <p className="font-semibold text-foreground">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {notifications.length === 0 && (
            <p className="text-muted-foreground text-center text-sm">
              No new notifications
            </p>
          )}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-end">
          <Button
            variant="secondary"
            className="hover:bg-primary hover:text-white transition"
          >
            Mark all as read
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Notification;
