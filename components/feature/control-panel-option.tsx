"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ControlPanelOptionType, ModeType, SubModeType } from "@/types";

type ControlPanelOptionProps = {
  type: "single" | "multiple";
  items: ControlPanelOptionType[];
  onSelect: (value: string | string[]) => void;
  value: string | string[];
};

export function ControlPanelOption({
  type,
  items,
  onSelect,
  value,
}: ControlPanelOptionProps): JSX.Element {
  const handleChange = (selectedValue: string | string[]) => {
    if (type === "single") {
      onSelect(selectedValue as string);
    } else {
      onSelect(selectedValue as string[]);
    }
  };

  return (
    <>
      {type === "single" ? (
        <ToggleGroup
          type="single"
          value={value as string}
          onValueChange={(selected: string) => handleChange(selected)}
          className="flex gap-2"
        >
          {items.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              aria-label={item.label}
              className="p-2 flex gap-2 items-center rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {item.icon} <span>{item.label}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      ) : (
        <ToggleGroup
          type="multiple"
          value={value as string[]}
          onValueChange={(selected: string[]) => handleChange(selected)}
          className="flex gap-2"
        >
          {items.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              aria-label={item.label}
              className="p-2 flex gap-2 items-center rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {item.icon} <span>{item.label}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )}
    </>
  );
}
