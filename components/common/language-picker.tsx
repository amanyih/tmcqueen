"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandItem,
  CommandGroup,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Language = { value: string; label: string };

const languages: Language[] = [
  { value: "english_10k.json", label: "English" },
  { value: "amharic.json", label: "Amharic" },
];

type LanguagePickerProps = {
  value: string;
  setValue: (language: string) => void;
};

export function LanguagePicker({
  value,
  setValue,
}: LanguagePickerProps): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-[200px] justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
        >
          {languages.find((lang) => lang.value === value)?.label ||
            "Select Language"}
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  onSelect={() => {
                    setValue(lang.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "h-4 w-4 mr-2",
                      value === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {lang.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
