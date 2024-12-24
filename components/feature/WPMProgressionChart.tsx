"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { LineChart, CartesianGrid, XAxis, Tooltip, Line } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = Array.from({ length: 30 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() - (365 - index));

  return {
    date: date.toISOString().split("T")[0],
    wpm: Math.floor(Math.random() * 100),
    accuracy: Math.floor(Math.random() * 100),
  };
});

const chartConfig = {
  wpm: {
    label: "WPM",
    color: "hsl(var(--chart-1))",
  },
  accuracy: {
    label: "Accuracy (%)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const WPMProgressionChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>WPM & Accuracy Progression</CardTitle>
        <CardDescription>Performance over the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line
              type="monotone"
              dataKey="wpm"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={true}
            />

            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5% this week <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Monitoring WPM and Accuracy progression
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WPMProgressionChart;
