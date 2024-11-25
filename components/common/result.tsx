"use client";

import { AnalysisType } from "@/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function Result({ analysisResult }: { analysisResult: AnalysisType }) {
  const { wpm, accuracy, consistency, rawWpm, testType } = analysisResult;
  console.log("analysisResult in Result ", analysisResult);
  return (
    <div>
      <Label>WPM:</Label>
      <Input type="number" value={wpm} readOnly />

      <Label>Accuracy:</Label>
      <Input type="number" value={accuracy * 100} readOnly />

      <Label>Time taken:</Label>
      <Input type="number" value={15} readOnly />

      <Label>Test type:</Label>
      <Input type="text" value={"Time"} readOnly />

      {/* <Label>Consistency:</Label>
      <Input type="number" value={consistency} readOnly /> */}

      <Label>Raw speed:</Label>
      <Input type="number" value={rawWpm} readOnly />
    </div>
  );
}
