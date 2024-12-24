import { Progress } from "../ui/progress";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return <Progress className="h-2 w-5/6" value={value} />;
}
