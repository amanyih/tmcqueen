"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Language } from "@/types";
import { useState } from "react";
import { usePracticeStore } from "@/store";

const languages: Language[] = [
  {
    value: "english_10k.json",
    label: "English",
  },
  {
    value: "amharic.json",
    label: "Amharic",
  },
];

type LanguagePickerProps = {
  value: string;
  setValue: (language: string) => void;
};

export function LanguagePicker({ value, setValue }: LanguagePickerProps) {
  const [open, setOpen] = useState(false);
  const { isTyping } = usePracticeStore();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {!isTyping && (
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {languages.find((language) => language.value === value)?.label}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
      )}
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
