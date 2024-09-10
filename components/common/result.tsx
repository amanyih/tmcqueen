"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function Result({}: {}) {
  return (
    <div>
      <Label>WPM:</Label>
      <Input type="number" value={0} readOnly />

      <Label>Accuracy:</Label>
      <Input type="number" value={0} readOnly />

      <Label>Time taken:</Label>
      <Input type="number" value={0} readOnly />

      <Label>Test type:</Label>
      <Input type="text" value={"Typing Practice"} readOnly />

      <Label>Consistency:</Label>
      <Input type="number" value={0} readOnly />

      <Label>Raw speed:</Label>
      <Input type="number" value={0} readOnly />
    </div>
  );
}
