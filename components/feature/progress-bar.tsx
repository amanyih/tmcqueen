import { Progress } from "../ui/progress";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return <Progress value={value} />;
}
