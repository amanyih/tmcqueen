import { ControlPanelOptionType, ModeType, SubModeType } from "@/types";
import { Bold } from "lucide-react";
import { ControlPanelOption } from "./control-panel-option";
import { Separator } from "../ui/separator";
import { usePracticeStore } from "@/store";

export default function ControlPanel() {
  const {
    setMode,
    setNumbers,
    setPunctuation,
    setSubMode,
    subMode,
    mode,
    punctuation,
    numbers,
  } = usePracticeStore();
  const extraCharacters: Array<ControlPanelOptionType> = [
    {
      label: "Punctuation",
      value: "punctuation",
      icon: <Bold />,
    },
    {
      label: "Numbers",
      value: "numbers",
      icon: <Bold />,
    },
  ];

  const modes: Array<ControlPanelOptionType> = [
    {
      label: "Time",
      value: "time",
      icon: <Bold />,
    },
    {
      label: "Text",
      value: "text",
      icon: <Bold />,
    },
  ];

  const timeOptions: Array<ControlPanelOptionType> = [
    {
      label: "15",
      value: "15",
      icon: "",
    },
    {
      label: "30",
      value: "30",
      icon: "",
    },
    {
      label: "60",
      value: "60",
      icon: "",
    },
  ];

  const textOptions: Array<ControlPanelOptionType> = [
    {
      label: "25",
      value: "25",
      icon: "",
    },
    {
      label: "50",
      value: "50",
      icon: "",
    },
    {
      label: "100",
      value: "100",
      icon: "",
    },
  ];

  return (
    <div
      className="inline-flex h-14 items-center space-x-4 text-sm px-4 py-2 border-2 border-black dark:border-white
    bg-white dark:bg-black rounded-full shadow-lg dark:shadow-none mx-auto"
    >
      <ControlPanelOption
        type="multiple"
        items={extraCharacters}
        onSelect={(values: string[]) => {
          console.log("values", values);
          if (values.includes("numbers")) {
            setNumbers(true);
          } else {
            setNumbers(false);
          }
          if (values.includes("punctuation")) {
            setPunctuation(true);
          } else {
            setPunctuation(false);
          }
        }}
        value={[
          punctuation ? "punctuation" : "",
          numbers ? "numbers" : "",
        ].filter((value) => value !== "")}
      />
      <Separator className=" bg-black dark:bg-white" orientation="vertical" />
      <ControlPanelOption
        type="single"
        items={modes}
        onSelect={(value: string) => {
          console.log("value", value);
          setMode(value as ModeType);
          if (value === "time") {
            setSubMode(30);
          }

          if (value === "text") {
            setSubMode(25);
          }
        }}
        value={mode}
      />
      <Separator className=" bg-black dark:bg-white" orientation="vertical" />
      <ControlPanelOption
        type="single"
        items={mode === "time" ? timeOptions : textOptions}
        onSelect={(value: string) => {
          console.log("value -- p --", parseInt(value) as SubModeType);
          setSubMode(parseInt(value) as SubModeType);
          console.log("value subMode, and type", subMode, typeof subMode);
        }}
        value={subMode}
      />
    </div>
  );
}
