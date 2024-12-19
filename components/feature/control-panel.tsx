"use client";
import { Bold } from "lucide-react";
import { ControlPanelOption } from "./control-panel-option";
import { Separator } from "../ui/separator";
import { usePracticeStore } from "@/store";
import { ControlPanelOptionType, ModeType, SubModeType } from "@/types";
import { LanguagePicker } from "../common";

export default function ControlPanel(): JSX.Element {
  const {
    setMode,
    setNumbers,
    setPunctuation,
    setSubMode,
    subMode,
    mode,
    punctuation,
    numbers,
    language,
    setLanguage,
  } = usePracticeStore();

  const extraCharacters: ControlPanelOptionType[] = [
    { label: "Punctuation", value: "punctuation", icon: <Bold size={18} /> },
    { label: "Numbers", value: "numbers", icon: <Bold size={18} /> },
  ];

  const modes: ControlPanelOptionType[] = [
    { label: "Time", value: "time", icon: <Bold size={18} /> },
    { label: "Text", value: "text", icon: <Bold size={18} /> },
  ];

  const timeOptions: ControlPanelOptionType[] = [
    { label: "15", value: "15" },
    { label: "30", value: "30" },
    { label: "60", value: "60" },
  ];

  const textOptions: ControlPanelOptionType[] = [
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 p-3 rounded-full bg-white dark:bg-gray-900 shadow-md border border-gray-300 dark:border-gray-700 scale-[0.8]">
      {/* Extra Characters */}
      <ControlPanelOption
        type="multiple"
        items={extraCharacters}
        onSelect={(value: string | string[]) => {
          const values = Array.isArray(value) ? value : [value];
          setNumbers(values.includes("numbers"));
          setPunctuation(values.includes("punctuation"));
        }}
        value={[
          ...(punctuation ? ["punctuation"] : []),
          ...(numbers ? ["numbers"] : []),
        ]}
      />

      <Separator
        orientation="vertical"
        className="bg-gray-300 dark:bg-gray-700 h-6"
      />

      {/* Mode Selection */}
      <ControlPanelOption
        type="single"
        items={modes}
        onSelect={(value: string | string[]) => {
          const selectedValue = Array.isArray(value) ? value[0] : value;
          setMode(selectedValue as ModeType);
          setSubMode(selectedValue === "time" ? 30 : 25);
        }}
        value={mode}
      />

      <Separator
        orientation="vertical"
        className="bg-gray-300 dark:bg-gray-700 h-6"
      />

      {/* SubMode Selection */}
      <ControlPanelOption
        type="single"
        items={mode === "time" ? timeOptions : textOptions}
        onSelect={(value: string | string[]) => {
          const selectedValue = Array.isArray(value) ? value[0] : value;
          setSubMode(parseInt(selectedValue, 10) as SubModeType);
        }}
        value={subMode.toString()}
      />

      {/* Language Picker */}
      <LanguagePicker value={language} setValue={setLanguage} />
    </div>
  );
}
