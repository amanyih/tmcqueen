"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Trophy, Users, Keyboard, Info, User } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import Notification from "./notification";
import { Logo } from "../common";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Auth State
const isAuthenticated = true;
const user = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/40?img=5",
};

export function Navbar() {
  return (
    <nav className="bg-background border-b border-border ">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Logo />

        <NavigationMenu>
          <NavigationMenuList className="flex gap-x-6 text-lg font-medium">
            <NavigationMenuItem>
              <Link href="/typing/practice" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Keyboard className="inline-block mr-2 h-5 w-5" />
                  Practice
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/typing/race" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Users className="inline-block mr-2 h-5 w-5" />
                  Race
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/leaderboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Trophy className="inline-block mr-2 h-5 w-5" />
                  Leaderboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Info className="inline-block mr-2 h-5 w-5" />
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Notification />
          {isAuthenticated ? (
            <Link href="/profile" className="cursor-pointer">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  <User className="h-5 w-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href="/get-started">
              <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
