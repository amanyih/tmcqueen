import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Timer,
  ParkingMeter,
  Percent,
  Languages,
  Brackets,
  Hash,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Mock data for testing
const testResults = [
  {
    mode: "Time",
    submode: 60,
    wpm: 92,
    rawWpm: 100,
    accuracy: 98,
    charactersTotal: 450,
    punctuation: true,
    numbers: false,
    testLanguage: "English",
    duration: 60,
    createdAt: "2024-06-05",
  },
  {
    mode: "Word",
    submode: 50,
    wpm: 87,
    rawWpm: 95,
    accuracy: 96,
    charactersTotal: 320,
    punctuation: false,
    numbers: true,
    testLanguage: "Spanish",
    duration: 45,
    createdAt: "2024-06-04",
  },
  {
    mode: "Time",
    submode: 30,
    wpm: 78,
    rawWpm: 85,
    accuracy: 92,
    charactersTotal: 280,
    punctuation: true,
    numbers: true,
    testLanguage: "French",
    duration: 30,
    createdAt: "2024-06-03",
  },
];

const RecentResults = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Results</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px]">
          <ul className="space-y-4">
            {testResults.map((result, index) => (
              <li
                key={index}
                className="p-4 rounded-lg border bg-muted/10 grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                {/* Test Mode & Submode */}
                <div>
                  <div className="flex items-center gap-2">
                    <Brackets size={18} className="text-primary" />
                    <span className="font-medium">
                      {result.mode} | {result.submode}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Calendar size={16} className="inline" /> {result.createdAt}
                  </div>
                </div>

                {/* WPM & Raw WPM */}
                <div>
                  <div className="flex items-center gap-2">
                    <ParkingMeter size={18} className="text-primary" />
                    <span className="font-semibold text-lg">
                      {result.wpm} WPM
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Raw: {result.rawWpm} WPM
                  </span>
                </div>

                {/* Accuracy & Duration */}
                <div>
                  <div className="flex items-center gap-2">
                    <Percent size={18} className="text-green-500" />
                    <span className="font-semibold text-lg">
                      {result.accuracy}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Timer size={16} /> Duration: {result.duration}s
                  </div>
                </div>

                {/* Additional Settings */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Languages size={16} /> {result.testLanguage}
                  </div>
                  <div className="flex items-center gap-2">
                    <Hash size={16} />
                    Numbers:{" "}
                    {result.numbers ? (
                      <CheckCircle className="text-green-500" size={16} />
                    ) : (
                      <XCircle className="text-red-500" size={16} />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Brackets size={16} />
                    Punctuation:{" "}
                    {result.punctuation ? (
                      <CheckCircle className="text-green-500" size={16} />
                    ) : (
                      <XCircle className="text-red-500" size={16} />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentResults;
