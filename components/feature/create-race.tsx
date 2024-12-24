"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Invite from "./invite"; // Invite component
import { SUBMODE } from "@/types/core";

const subModeOptions = Object.entries(SUBMODE).filter(([key]) =>
  isNaN(Number(key))
);

const CreateRace = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    subMode: SUBMODE.TWENTY_FIVE,
    startTime: null as Date | null,
    language: "",
    hasNumbers: false,
    hasPunctuation: false,
    isPublic: true,
    invitedUsers: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (field: keyof typeof formData) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = () => {
    console.log("Form Payload:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 transition"
        >
          Create New Race
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Create A New Race
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-1">
            Fill out the following to create a new race.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="E.g., Piston Cup"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Race description"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Sub Mode</Label>
            <select
              name="subMode"
              value={formData.subMode}
              onChange={handleChange}
              className="border border-border p-2 rounded-md focus:ring-primary"
            >
              {subModeOptions.map(([label, value]) => (
                <option key={value} value={value}>
                  {label.replace(/_/g, " ")} ({value})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Language</Label>
            <Input
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="E.g., English"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasNumbers"
                checked={formData.hasNumbers}
                onCheckedChange={() => handleCheckboxChange("hasNumbers")}
              />
              <Label htmlFor="hasNumbers">Include Numbers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasPunctuation"
                checked={formData.hasPunctuation}
                onCheckedChange={() => handleCheckboxChange("hasPunctuation")}
              />
              <Label htmlFor="hasPunctuation">Include Punctuation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isPublic"
                checked={formData.isPublic}
                onCheckedChange={() => handleCheckboxChange("isPublic")}
              />
              <Label htmlFor="isPublic">Public Race</Label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Invite Friends</Label>
            <Invite />
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button type="button" onClick={handleSubmit} className="bg-primary">
            Create Race
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRace;
