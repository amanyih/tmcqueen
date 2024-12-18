"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import RaceLobby from "@/components/feature/RaceLobby";

const RacePage = () => {
  const [raceStarted, setRaceStarted] = useState(false);
  const [participants] = useState([
    "Amanuel Yihune",
    "Shad Mirza",
    "John Doe",
    "Jane Doe",
  ]);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-7 gap-8 py-8 px-4 lg:px-8">
      {/* Left Section: Main Content */}
      <div className="col-span-5 space-y-8">
        {!raceStarted ? (
          // Lobby View
          <RaceLobby />
        ) : (
          // Racing View
          <section className="space-y-6">
            <h1 className="text-4xl font-bold text-primary tracking-tight">
              Race In Progress
            </h1>
            <p className="text-muted-foreground">Race content goes here...</p>
          </section>
        )}
      </div>

      {/* Right Section: Live Chat */}
      <aside className="col-span-2">
        <h2 className="text-2xl font-bold text-primary mb-4">Live Chat</h2>
        <div className="bg-card rounded-lg shadow p-4 flex flex-col gap-2 h-[400px]">
          <ScrollArea className="flex-1 border p-2 rounded-md">
            {/* Example Chat Messages */}
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Shad Mirza:</span> Ready to
                race!
              </p>
              <p className="text-sm">
                <span className="font-semibold">John Doe:</span> Let’s go 🚀
              </p>
            </div>
          </ScrollArea>
          <div className="flex gap-2">
            <Input placeholder="Type a message..." />
            <Button>Send</Button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RacePage;
