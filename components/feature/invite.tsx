"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Invite = () => {
  const users = [
    { label: "Amanuel Yihune", value: "amnlyih" },
    { label: "Shad Mirza", value: "shadcn" },
    { label: "John Doe", value: "johndoe" },
    { label: "Jane Doe", value: "janedoe" },
  ];
  const [open, setOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleSelect = (currentValue: string) => {
    setSelectedUsers((prev) =>
      prev.includes(currentValue)
        ? prev.filter((user) => user !== currentValue)
        : [...prev, currentValue]
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {selectedUsers.length > 0
            ? `${selectedUsers.length} user(s) selected`
            : "Invite Friends"}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." className="h-9" />
          <CommandEmpty>No users found.</CommandEmpty>
          <CommandGroup>
            {
              <CommandList>
                {users.map((user) => (
                  <CommandItem
                    key={user.value}
                    onClick={() => handleSelect(user.value)}
                    className={cn(
                      "flex items-center justify-between",
                      selectedUsers.includes(user.value) && "bg-primary/10"
                    )}
                  >
                    <span>{user.label}</span>
                    {selectedUsers.includes(user.value) ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandList>
            }
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Invite;
