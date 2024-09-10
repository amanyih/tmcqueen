"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ControlPanelOptionType, ModeType, SubModeType } from "@/types";
import { useState } from "react";

type ControlPanelOptionProps =
  | {
      type: "single";
      items: Array<ControlPanelOptionType>;
      onSelect: (value: string) => void;
      value: ModeType | SubModeType;
    }
  | {
      type: "multiple";
      items: Array<ControlPanelOptionType>;
      onSelect: (value: string[]) => void;
      value: string[];
    };

export function ControlPanelOption({
  type,
  items,
  onSelect,
  value,
}: ControlPanelOptionProps) {
  if (type === "single") {
    return (
      <ToggleGroup
        type={type}
        value={value.toString()}
        onValueChange={onSelect}
      >
        {items.map((item) => (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            aria-label={item.label}
            className="p-2 flex gap-2 items-center"
          >
            {item.icon} {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    );
  }
  return (
    <ToggleGroup type={type} value={value} onValueChange={onSelect}>
      {items.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          aria-label={item.label}
          className="p-2 flex gap-2 items-center"
        >
          {item.icon} {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
