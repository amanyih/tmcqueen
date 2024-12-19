"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";

import { Button } from "../ui/button";

export const ThemeSwitcher = () => {
  const [colorScheme, setColorScheme] = useState<string>("lightning-mcqueen");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "lightning-mcqueen";
    setColorScheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
    setMounted(true);
  }, []);

  const colorSchemes = [
    {
      name: "lightning-mcqueen",
      colors: {
        primary: "hsl(12, 90%, 55%)", // Red
        secondary: "hsl(40, 100%, 50%)", // Yellow
        accent: "hsl(28, 90%, 60%)", // Orange
      },
    },
    {
      name: "chick-hicks",
      colors: {
        primary: "hsl(150, 90%, 40%)", // Phthalo Green
        secondary: "hsl(150, 70%, 50%)", // Lighter Green
        accent: "hsl(110, 90%, 55%)", // Vibrant Green
      },
    },
    {
      name: "strip-weathers",
      colors: {
        primary: "hsl(220, 85%, 55%)", // Blue
        secondary: "hsl(200, 70%, 45%)", // Light Blue
        accent: "hsl(240, 80%, 60%)", // Sky Blue
      },
    },
  ];

  const handleColorSchemeChange = (scheme: string) => {
    setColorScheme(scheme);
    document.documentElement.dataset.theme = scheme;
    localStorage.setItem("theme", scheme);
  };

  if (!mounted) return null;

  return (
    <div className="relative w-10 h-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Change theme"
            size={"sm"}
            className="flex items-center space-x-2 text-sm"
          >
            <Palette size={16} />
            <span>{colorScheme.replace("-", " ").toUpperCase()}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          {colorSchemes.map((scheme) => (
            <DropdownMenuItem
              key={scheme.name}
              onClick={() => handleColorSchemeChange(scheme.name)}
              className={`flex items-center cursor-pointer space-x-2  justify-between ${
                colorScheme === scheme.name ? "font-bold text-primary" : ""
              }`}
            >
              <span>{scheme.name.replace("-", " ").toUpperCase()}</span>
              <div className="flex space-x-1">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: scheme.colors.primary }}
                  title="Primary Color"
                ></div>
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: scheme.colors.secondary }}
                  title="Secondary Color"
                ></div>
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: scheme.colors.accent }}
                  title="Accent Color"
                ></div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
