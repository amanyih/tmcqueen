"use client";

import { AnalysisType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Gauge,
  CheckCircle,
  Target,
  Clock,
  LucideParkingMeter,
} from "lucide-react";

export function Result({ analysisResult }: { analysisResult: AnalysisType }) {
  const { wpm, accuracy, consistency, rawWpm, testType } = analysisResult;

  return (
    <Card className="p-6 bg-muted/20 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center space-x-2">
          <LucideParkingMeter className="w-6 h-6 text-primary" />
          <span>Typing Results</span>
        </CardTitle>
      </CardHeader>

      <Separator className="my-4" />

      <CardContent className="grid grid-cols-2 gap-4">
        {/* WPM */}
        <div className="flex flex-col items-center">
          <Gauge className="w-6 h-6 text-secondary" />
          <span className="text-sm font-medium text-muted-foreground">WPM</span>
          <Badge className="text-lg bg-primary/10 text-primary">{wpm}</Badge>
        </div>

        {/* Accuracy */}
        <div className="flex flex-col items-center">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Accuracy
          </span>
          <Badge className="text-lg bg-green-500/10 text-green-500">
            {Math.round(accuracy * 100)}%
          </Badge>
        </div>

        {/* Time Taken */}
        <div className="flex flex-col items-center">
          <Clock className="w-6 h-6 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            Time Taken
          </span>
          <Badge className="text-lg bg-muted/10 text-muted-foreground">
            15s
          </Badge>
        </div>

        {/* Test Type */}
        <div className="flex flex-col items-center">
          <Target className="w-6 h-6 text-blue-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Test Type
          </span>
          <Badge className="text-lg bg-blue-500/10 text-blue-500">
            {testType}
          </Badge>
        </div>

        {/* Consistency */}
        <div className="flex flex-col items-center">
          <Gauge className="w-6 h-6 text-orange-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Consistency
          </span>
          <Badge className="text-lg bg-orange-500/10 text-orange-500">
            {consistency}%
          </Badge>
        </div>

        {/* Raw Speed */}
        <div className="flex flex-col items-center">
          <LucideParkingMeter className="w-6 h-6 text-purple-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Raw Speed
          </span>
          <Badge className="text-lg bg-purple-500/10 text-purple-500">
            {rawWpm}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
